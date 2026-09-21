// Utilidades del contenido editable: formato, validación y derivados.
// Se usa tanto en el servidor (guardar/leer) como en el navegador (mostrar), así que no toca fs ni cookies.

import { defaultContent } from "./defaultContent";

// Grupo de planes que muestran las páginas generales (inicio, /fibra, /television).
export const GRUPO_PRINCIPAL = "santander";

// Ids que ya usa una ruta fija: /sedes/santander es la página del grupo.
const IDS_RESERVADOS = ["santander"];

const clone = (v) => JSON.parse(JSON.stringify(v));
const isObj = (v) => v !== null && typeof v === "object" && !Array.isArray(v);

// ---------- Formato ----------

// Manual (no toLocaleString) para que servidor y navegador generen exactamente el mismo texto.
export const formatCOP = (n) => "$" + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export const planTitle = (plan) => (/^\d+$/.test(plan.megas) ? `${plan.megas} Megas` : plan.megas);

export function formatWhatsapp(num) {
  const local = num.startsWith("57") ? num.slice(2) : num;
  return local.length === 10 ? `${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}` : num;
}

// ["San Gil", "Socorro", "Piedecuesta"] -> "San Gil, Socorro y Piedecuesta"
export function listaY(items) {
  return items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} y ${items[items.length - 1]}`;
}

export function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ---------- Derivados ----------

// Cada sede con los planes y el precio de TV de su grupo, y el WhatsApp legible.
export function sedesConPlanes(content) {
  return content.sedes.map((s) => {
    const g = content.grupos[s.grupo];
    return { ...s, whatsappDisplay: formatWhatsapp(s.whatsapp), plans: g.plans, tvPrice: g.tvPrice };
  });
}

// Sin `scope`: las sedes del sitio principal. Con `scope`: una sede (por id) o todas las de un grupo.
export function sedesEnAlcance(sedes, scope) {
  const enAlcance = scope ? sedes.filter((s) => s.id === scope || s.grupo === scope) : [];
  return enAlcance.length ? enAlcance : sedes.filter((s) => s.principal);
}

export const precioDesde = (plans) => Math.min(...plans.map((p) => p.price));

// ---------- Validación ----------

function readStr(v, { path, max, required = false, fallback = "" }, errors) {
  if (v === undefined || v === null) return fallback;
  if (typeof v !== "string") {
    errors.push(`${path}: debe ser texto.`);
    return fallback;
  }
  const s = v.trim();
  if (required && !s) {
    errors.push(`${path}: es obligatorio.`);
    return fallback;
  }
  if (s.length > max) {
    errors.push(`${path}: máximo ${max} caracteres.`);
    return fallback;
  }
  return s;
}

function readInt(v, { path, min, max, fallback }, errors) {
  if (v === undefined || v === null) return fallback;
  const n = typeof v === "number" ? v : /^\d+$/.test(String(v).trim()) ? Number(v) : NaN;
  if (!Number.isInteger(n) || n < min || n > max) {
    errors.push(`${path}: debe ser un número entero entre ${min} y ${max}.`);
    return fallback;
  }
  return n;
}

function readList(v, { path, maxItems, maxLen, fallback }, errors) {
  if (v === undefined || v === null) return clone(fallback);
  if (!Array.isArray(v)) {
    errors.push(`${path}: debe ser una lista.`);
    return clone(fallback);
  }
  const items = v.map((x) => (typeof x === "string" ? x.trim() : "")).filter(Boolean);
  if (items.length > maxItems) {
    errors.push(`${path}: máximo ${maxItems} elementos.`);
    return clone(fallback);
  }
  if (items.some((x) => x.length > maxLen)) {
    errors.push(`${path}: cada elemento admite máximo ${maxLen} caracteres.`);
    return clone(fallback);
  }
  return items;
}

function readWhatsapp(v, path, errors) {
  const digits = String(v ?? "").replace(/\D/g, "");
  if (/^3\d{9}$/.test(digits)) return `57${digits}`;
  if (/^573\d{9}$/.test(digits)) return digits;
  errors.push(digits ? `${path}: WhatsApp inválido, use 10 dígitos (ej. 318 455 0936).` : `${path}: es obligatorio.`);
  return "";
}

function normPlan(p, label, errors) {
  const o = isObj(p) ? p : {};
  return {
    megas: readStr(o.megas, { path: `${label} · nombre`, max: 30, required: true }, errors),
    price: readInt(o.price, { path: `${label} · precio`, min: 1, max: 9_999_999, fallback: 0 }, errors),
    destacado: o.destacado === true,
    beneficios: readList(o.beneficios, { path: `${label} · beneficios`, maxItems: 8, maxLen: 80, fallback: [] }, errors),
    descarga: readStr(o.descarga, { path: `${label} · descarga`, max: 10 }, errors),
    subida: readStr(o.subida, { path: `${label} · subida`, max: 10 }, errors),
  };
}

function normGrupo(v, def, key, errors) {
  const o = isObj(v) ? v : {};
  const label = `Planes ${key}`;
  let plans = clone(def.plans);
  if (o.plans !== undefined) {
    if (!Array.isArray(o.plans) || o.plans.length < 1 || o.plans.length > 8) {
      errors.push(`${label}: debe tener entre 1 y 8 planes.`);
    } else {
      plans = o.plans.map((p, i) => normPlan(p, `${label} · plan ${i + 1}`, errors));
    }
  }
  return {
    nombre: readStr(o.nombre, { path: `${label} · nombre`, max: 80, required: true, fallback: def.nombre }, errors),
    tvPrice: readInt(o.tvPrice, { path: `${label} · precio de televisión`, min: 0, max: 9_999_999, fallback: def.tvPrice }, errors),
    plans,
  };
}

function normSede(v, grupos, errors) {
  const o = isObj(v) ? v : {};
  const ciudad = readStr(o.ciudad, { path: "Sede · ciudad", max: 50, required: true }, errors);
  const label = `Sede ${ciudad || "(sin nombre)"}`;
  const idPropio = typeof o.id === "string" && /^[a-z0-9-]{2,40}$/.test(o.id) ? o.id : "";
  let grupo = o.grupo;
  if (!Object.hasOwn(grupos, grupo)) {
    errors.push(`${label}: elija un grupo de planes.`);
    grupo = Object.keys(grupos)[0];
  }
  const lat = typeof o.lat === "number" && Math.abs(o.lat) <= 90 ? o.lat : null;
  const lng = typeof o.lng === "number" && Math.abs(o.lng) <= 180 ? o.lng : null;
  return {
    id: idPropio || slugify(ciudad),
    ciudad,
    grupo,
    direccion: readStr(o.direccion, { path: `${label} · dirección`, max: 120, required: true }, errors),
    whatsapp: readWhatsapp(o.whatsapp, `${label} · WhatsApp`, errors),
    horario: readStr(o.horario, { path: `${label} · horario`, max: 160 }, errors),
    principal: o.principal === true,
    descripcion: readStr(o.descripcion, { path: `${label} · descripción`, max: 160, fallback: `Fibra óptica y televisión en ${ciudad}.` }, errors),
    imagen: typeof o.imagen === "string" && /^\/[\w./-]{1,100}$/.test(o.imagen) ? o.imagen : "/logo.png",
    lat,
    lng: lat === null ? null : lng,
  };
}

function normSedes(v, grupos, errors) {
  if (v === undefined) return clone(defaultContent.sedes);
  if (!Array.isArray(v) || v.length < 1 || v.length > 12) {
    errors.push("Sedes: debe haber entre 1 y 12 sedes.");
    return clone(defaultContent.sedes);
  }
  const sedes = v.map((s) => normSede(s, grupos, errors));
  const ids = new Set();
  const nombres = new Set();
  for (const s of sedes) {
    const nombre = s.ciudad.toLowerCase();
    if (IDS_RESERVADOS.includes(s.id)) errors.push(`Sede ${s.ciudad}: ese nombre está reservado, use otro.`);
    if (ids.has(s.id) || nombres.has(nombre)) errors.push(`Sede ${s.ciudad}: ya existe otra sede con el mismo nombre.`);
    ids.add(s.id);
    nombres.add(nombre);
  }
  if (!sedes.some((s) => s.principal)) errors.push("Sedes: al menos una debe mostrarse en el sitio principal.");
  return sedes;
}

function normInicio(v, errors) {
  const o = isObj(v) ? v : {};
  const d = defaultContent.inicio;
  return {
    heroTitulo: readStr(o.heroTitulo, { path: "Inicio · título", max: 120, required: true, fallback: d.heroTitulo }, errors),
    heroResaltado: readStr(o.heroResaltado, { path: "Inicio · texto resaltado", max: 60, fallback: d.heroResaltado }, errors),
    heroTexto: readStr(o.heroTexto, { path: "Inicio · descripción", max: 300, fallback: d.heroTexto }, errors),
    ofertaTitulo: readStr(o.ofertaTitulo, { path: "Inicio · título de la oferta", max: 60, required: true, fallback: d.ofertaTitulo }, errors),
    ofertaIncluye: readList(o.ofertaIncluye, { path: "Inicio · la oferta incluye", maxItems: 6, maxLen: 80, fallback: d.ofertaIncluye }, errors),
  };
}

// Convierte cualquier entrada en un contenido completo y válido. Solo conserva las claves conocidas.
// Lo que falta se toma de los valores por defecto; lo que viene mal se reporta en `errors`.
export function normalizeContent(raw) {
  const errors = [];
  const src = isObj(raw) ? raw : {};
  const grupos = {};
  for (const key of Object.keys(defaultContent.grupos)) {
    grupos[key] = normGrupo(src.grupos?.[key], defaultContent.grupos[key], key, errors);
  }
  const content = {
    grupos,
    recargoEmpresa: readInt(src.recargoEmpresa, { path: "Recargo para empresas", min: 0, max: 1_000_000, fallback: defaultContent.recargoEmpresa }, errors),
    sedes: normSedes(src.sedes, grupos, errors),
    inicio: normInicio(src.inicio, errors),
  };
  return { content, errors };
}
