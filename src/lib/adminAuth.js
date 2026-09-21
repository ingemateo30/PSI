// Autenticación del administrador: un usuario y contraseña definidos por variables de entorno
// y una cookie de sesión firmada (HMAC). Solo se importa desde código de servidor.
//
//   ADMIN_PASSWORD        (obligatoria) contraseña del administrador; sin ella el acceso queda deshabilitado
//   ADMIN_USER            (opcional)    usuario, por defecto "admin"
//   ADMIN_SESSION_SECRET  (opcional)    clave para firmar la sesión; por defecto se deriva de la contraseña

import crypto from "node:crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "psi_admin";
const SESSION_SECONDS = 60 * 60 * 8;

export const adminConfigured = () => Boolean(process.env.ADMIN_PASSWORD);

const sign = (payload) =>
  crypto
    .createHmac("sha256", process.env.ADMIN_SESSION_SECRET || `psi-session:${process.env.ADMIN_PASSWORD}`)
    .update(payload)
    .digest("hex");

// Compara hashes (largo fijo) en tiempo constante, para no filtrar información por el tiempo de respuesta.
const sha = (s) => crypto.createHash("sha256").update(String(s)).digest();
const safeEqual = (a, b) => crypto.timingSafeEqual(sha(a), sha(b));

export function checkCredentials(user, password) {
  if (!adminConfigured()) return false;
  const userOk = safeEqual(user, process.env.ADMIN_USER || "admin");
  const passOk = safeEqual(password, process.env.ADMIN_PASSWORD);
  return userOk && passOk;
}

export function createSession() {
  const expires = Date.now() + SESSION_SECONDS * 1000;
  return { value: `${expires}.${sign(`admin.${expires}`)}`, maxAge: SESSION_SECONDS };
}

function verifySession(value) {
  if (!adminConfigured() || typeof value !== "string") return false;
  const [expires, signature] = value.split(".");
  if (!/^\d+$/.test(expires ?? "") || Number(expires) < Date.now() || !signature) return false;
  return safeEqual(signature, sign(`admin.${expires}`));
}

export async function isAdmin() {
  const jar = await cookies();
  return verifySession(jar.get(SESSION_COOKIE)?.value);
}

export const sessionCookieOptions = (maxAge) => ({
  httpOnly: true,
  sameSite: "strict",
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge,
});

// ---------- Límite de intentos fallidos de inicio de sesión (en memoria) ----------
// Por IP, y además un tope global: la IP sale de x-forwarded-for, que un atacante puede
// falsear si no hay un proxy de confianza delante, y así no podría evadir el límite rotándola.

const MAX_FALLOS_IP = 5;
const MAX_FALLOS_GLOBAL = 50;
const VENTANA_MS = 15 * 60 * 1000;
const GLOBAL = "*global*";
const fallos = new Map();

function cuenta(clave) {
  const f = fallos.get(clave);
  if (!f) return 0;
  if (Date.now() - f.desde > VENTANA_MS) {
    fallos.delete(clave);
    return 0;
  }
  return f.cuenta;
}

function sumar(clave) {
  const f = fallos.get(clave);
  if (!f || Date.now() - f.desde > VENTANA_MS) fallos.set(clave, { cuenta: 1, desde: Date.now() });
  else f.cuenta += 1;
}

export const loginBloqueado = (ip) => cuenta(ip) >= MAX_FALLOS_IP || cuenta(GLOBAL) >= MAX_FALLOS_GLOBAL;

export function registrarFallo(ip) {
  sumar(ip);
  sumar(GLOBAL);
}

export const limpiarFallos = (ip) => fallos.delete(ip);
