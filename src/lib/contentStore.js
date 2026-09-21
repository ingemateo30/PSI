// Persistencia del contenido editable (solo se importa desde código de servidor).
//
// Mismo criterio que sistema-hyh: backend dual con detección automática.
//  - Si existen KV_REST_API_URL y KV_REST_API_TOKEN (o UPSTASH_REDIS_REST_*), como en Vercel: el contenido
//    (un documento JSON) vive en Vercel KV / Upstash Redis. Vercel tiene el disco de solo lectura, por eso
//    ahí no se puede guardar en archivos.
//  - Si no, en local o en un servidor con disco: un archivo JSON en CONTENT_DATA_DIR (por defecto ./data).
// En ambos casos, antes de cada cambio se conserva una copia de la versión anterior.

import { promises as fs } from "node:fs";
import path from "node:path";
import { cache } from "react";
import { defaultContent } from "./defaultContent";
import { normalizeContent } from "./content";

// ---------- Backend: Vercel KV / Upstash Redis (API REST, sin dependencias) ----------

const kvUrl = () => process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const kvToken = () => process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const KV_KEY = "psi:site-content";
const KV_BACKUP_KEY = "psi:site-content:backup";

export const usaKV = () => Boolean(kvUrl() && kvToken());

async function kv(...comando) {
  const res = await fetch(kvUrl(), {
    method: "POST",
    headers: { Authorization: `Bearer ${kvToken()}`, "Content-Type": "application/json" },
    body: JSON.stringify(comando),
    cache: "no-store",
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.error) throw new Error(`Vercel KV: ${data.error || `HTTP ${res.status}`}`);
  return data.result;
}

// ---------- Backend: archivo JSON ----------

const dataDir = () => process.env.CONTENT_DATA_DIR || path.join(process.cwd(), "data");
const contentFile = () => path.join(dataDir(), "site-content.json");
const backupFile = () => path.join(dataDir(), "site-content.backup.json");

const ignorarSiNoExiste = (err) => {
  if (err.code !== "ENOENT") throw err;
  return null;
};

// ---------- Operaciones sobre el documento (texto JSON) ----------

async function leerRaw() {
  if (usaKV()) return kv("GET", KV_KEY);
  return fs.readFile(contentFile(), "utf8").catch(ignorarSiNoExiste);
}

async function guardarRaw(texto) {
  if (usaKV()) {
    const anterior = await kv("GET", KV_KEY);
    if (anterior) await kv("SET", KV_BACKUP_KEY, anterior);
    await kv("SET", KV_KEY, texto);
    return;
  }
  await fs.mkdir(dataDir(), { recursive: true });
  await fs.copyFile(contentFile(), backupFile()).catch(ignorarSiNoExiste);
  // Se escribe a un temporal y se renombra para que un corte a mitad de escritura no deje el archivo roto.
  const tmp = `${contentFile()}.${process.pid}.tmp`;
  await fs.writeFile(tmp, texto, "utf8");
  await fs.rename(tmp, contentFile());
}

async function borrarRaw() {
  if (usaKV()) {
    const anterior = await kv("GET", KV_KEY);
    if (anterior) await kv("SET", KV_BACKUP_KEY, anterior);
    await kv("DEL", KV_KEY);
    return;
  }
  await fs.copyFile(contentFile(), backupFile()).catch(ignorarSiNoExiste);
  await fs.rm(contentFile(), { force: true });
}

// ---------- API pública ----------

const porDefecto = () => normalizeContent(defaultContent).content;

// `cache` evita releer el contenido varias veces dentro de una misma petición (layout + página).
export const readContent = cache(async () => {
  let raw;
  try {
    raw = await leerRaw();
  } catch (err) {
    // Preferible mostrar el sitio con los valores originales que dejarlo caído si el almacén falla.
    console.error("No se pudo leer el contenido guardado, se usan los valores por defecto:", err);
    return porDefecto();
  }
  if (!raw) return porDefecto();

  let guardado;
  try {
    guardado = typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch (err) {
    console.error("El contenido guardado no es JSON válido, se usan los valores por defecto:", err);
    return porDefecto();
  }
  const { content, errors } = normalizeContent(guardado);
  if (errors.length) {
    console.error("El contenido guardado es inválido, se usan los valores por defecto:", errors);
    return porDefecto();
  }
  return content;
});

export const writeContent = (content) => guardarRaw(JSON.stringify(content, null, 2));

export const resetContent = borrarRaw;

// Mensaje para el administrador cuando guardar falla.
export function explicarErrorDeGuardado(err) {
  if (!usaKV() && ["EROFS", "EACCES", "EPERM"].includes(err.code)) {
    return "Este servidor no permite escribir archivos (por ejemplo, Vercel). Conecta un almacén Vercel KV / Upstash Redis al proyecto (variables KV_REST_API_URL y KV_REST_API_TOKEN) y vuelve a desplegar.";
  }
  return `No se pudo guardar en el servidor (${err.code || err.message}).`;
}
