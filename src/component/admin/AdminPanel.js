"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Check,
  ExternalLink,
  Loader2,
  LogOut,
  Plus,
  RotateCcw,
  Save,
  Trash2,
} from "lucide-react";
import { formatCOP, formatWhatsapp } from "@/lib/content";

const TABS = [
  { id: "planes", label: "Planes y precios" },
  { id: "sedes", label: "Sedes" },
  { id: "inicio", label: "Página de inicio" },
];

const SEDE_NUEVA = {
  id: "",
  ciudad: "",
  grupo: "",
  direccion: "",
  whatsapp: "",
  horario: "",
  principal: false,
  descripcion: "",
  imagen: "/logo.png",
  lat: null,
  lng: null,
};

const PLAN_NUEVO = { megas: "", price: "", destacado: false, beneficios: [], descarga: "", subida: "" };

// El WhatsApp se edita con el formato legible (318 455 0936); el servidor lo normaliza al guardar.
const paraEditar = (content) => ({
  ...content,
  sedes: content.sedes.map((s) => ({ ...s, whatsapp: formatWhatsapp(s.whatsapp) })),
});

const inputCls =
  "w-full rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0e6493]";

function Campo({ label, hint, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium text-gray-700">{label}</span>
      {children}
      {hint && <span className="block text-xs text-gray-500 mt-1">{hint}</span>}
    </label>
  );
}

function Texto({ label, hint, value, onChange, className, ...rest }) {
  return (
    <Campo label={label} hint={hint} className={className}>
      <input type="text" value={value ?? ""} onChange={(e) => onChange(e.target.value)} className={`${inputCls} mt-1`} {...rest} />
    </Campo>
  );
}

function Lineas({ label, hint, value, onChange, rows = 4 }) {
  return (
    <Campo label={label} hint={hint}>
      <textarea
        rows={rows}
        value={value.join("\n")}
        onChange={(e) => onChange(e.target.value.split("\n"))}
        className={`${inputCls} mt-1`}
      />
    </Campo>
  );
}

function Precio({ label, value, onChange }) {
  const valido = value !== "" && Number.isFinite(Number(value));
  return (
    <Campo label={label} hint={valido ? `Se mostrará como ${formatCOP(Number(value))}` : "Solo números, sin puntos ni símbolo"}>
      <input
        type="number"
        min="0"
        step="100"
        inputMode="numeric"
        value={value}
        onChange={(e) => onChange(e.target.value === "" ? "" : Number(e.target.value))}
        className={`${inputCls} mt-1`}
      />
    </Campo>
  );
}

function Tarjeta({ titulo, acciones, children }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h3 className="font-bold text-[#0e6493]">{titulo}</h3>
        <div className="flex items-center gap-1">{acciones}</div>
      </div>
      {children}
    </div>
  );
}

function BotonIcono({ onClick, label, disabled, peligro, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={`p-2 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
        peligro ? "text-red-600 hover:bg-red-50" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}

export default function AdminPanel({ content }) {
  const router = useRouter();
  const [draft, setDraft] = useState(() => paraEditar(content));
  const [base, setBase] = useState(() => JSON.stringify(paraEditar(content)));
  const [tab, setTab] = useState("planes");
  const [guardando, setGuardando] = useState(false);
  const [aviso, setAviso] = useState(null); // { tipo: "ok" | "error", texto, detalles }

  const dirty = JSON.stringify(draft) !== base;
  const precios = draft.grupos.santander.plans.map((p) => Number(p.price)).filter((n) => n > 0);

  useEffect(() => {
    if (!dirty) return;
    const avisar = (e) => e.preventDefault();
    window.addEventListener("beforeunload", avisar);
    return () => window.removeEventListener("beforeunload", avisar);
  }, [dirty]);

  // Aplica un cambio sobre una copia del borrador.
  const editar = (fn) =>
    setDraft((d) => {
      const c = structuredClone(d);
      fn(c);
      return c;
    });

  async function llamar(metodo, body) {
    const res = await fetch("/api/admin/content", {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json().catch(() => ({}));
    if (res.status === 401) router.refresh(); // sesión vencida: vuelve a mostrar el login
    return { ok: res.ok, data };
  }

  async function guardar() {
    setGuardando(true);
    setAviso(null);
    try {
      const { ok, data } = await llamar("PUT", draft);
      if (!ok) {
        setAviso({ tipo: "error", texto: data.error || "No se pudo guardar.", detalles: data.detalles });
        return;
      }
      const guardado = paraEditar(data.content);
      setDraft(guardado);
      setBase(JSON.stringify(guardado));
      setAviso({ tipo: "ok", texto: "Cambios guardados. Ya se ven en el sitio web." });
      router.refresh();
    } catch {
      setAviso({ tipo: "error", texto: "No se pudo conectar con el servidor." });
    } finally {
      setGuardando(false);
    }
  }

  async function restaurar() {
    if (!window.confirm("¿Volver a los valores originales del sitio? Se perderán los cambios guardados (queda una copia de respaldo en el servidor).")) return;
    setGuardando(true);
    setAviso(null);
    try {
      const { ok, data } = await llamar("DELETE");
      if (!ok) {
        setAviso({ tipo: "error", texto: data.error || "No se pudo restaurar." });
        return;
      }
      window.location.reload();
    } catch {
      setAviso({ tipo: "error", texto: "No se pudo conectar con el servidor." });
    } finally {
      setGuardando(false);
    }
  }

  async function salir() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  const mover = (lista, i, delta) => {
    const j = i + delta;
    if (j < 0 || j >= lista.length) return;
    [lista[i], lista[j]] = [lista[j], lista[i]];
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-28">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="PSI" className="h-10 w-auto" />
            <div>
              <h1 className="font-bold text-[#0e6493] leading-tight">Administración del sitio</h1>
              <p className="text-xs text-gray-500">Los cambios se publican al guardar.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg px-3 py-2"
            >
              <ExternalLink size={16} /> Ver sitio
            </a>
            <button
              type="button"
              onClick={salir}
              className="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg px-3 py-2"
            >
              <LogOut size={16} /> Salir
            </button>
          </div>
        </div>
        <nav className="max-w-5xl mx-auto px-4 flex gap-1 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`px-4 py-2.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                tab === t.id ? "border-[#e31e25] text-[#0e6493]" : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {aviso && (
          <div
            role="status"
            className={`rounded-lg border p-4 text-sm ${
              aviso.tipo === "ok" ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"
            }`}
          >
            <p className="font-semibold flex items-center gap-2">
              {aviso.tipo === "ok" ? <Check size={16} /> : <AlertTriangle size={16} />}
              {aviso.texto}
            </p>
            {aviso.detalles?.length > 0 && (
              <ul className="list-disc pl-6 mt-2 space-y-0.5">
                {aviso.detalles.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {tab === "planes" && (
          <>
            {Object.entries(draft.grupos).map(([clave, grupo]) => (
              <section key={clave} className="space-y-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{grupo.nombre}</h2>
                  <p className="text-sm text-gray-500">
                    {clave === "santander"
                      ? "Esta lista también se muestra en la página de inicio, en Fibra Óptica y en Televisión."
                      : "Se muestra en la página de las sedes de este grupo."}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                  <Texto label="Nombre del grupo" value={grupo.nombre} onChange={(v) => editar((c) => (c.grupos[clave].nombre = v))} />
                  <Precio label="Televisión sola (precio mensual)" value={grupo.tvPrice} onChange={(v) => editar((c) => (c.grupos[clave].tvPrice = v))} />
                </div>

                {grupo.plans.map((plan, i) => (
                  <Tarjeta
                    key={i}
                    titulo={`Plan ${i + 1}${plan.megas ? ` · ${plan.megas}` : ""}`}
                    acciones={
                      <>
                        <BotonIcono label="Subir" disabled={i === 0} onClick={() => editar((c) => mover(c.grupos[clave].plans, i, -1))}>
                          <ArrowUp size={16} />
                        </BotonIcono>
                        <BotonIcono label="Bajar" disabled={i === grupo.plans.length - 1} onClick={() => editar((c) => mover(c.grupos[clave].plans, i, 1))}>
                          <ArrowDown size={16} />
                        </BotonIcono>
                        <BotonIcono
                          label="Eliminar plan"
                          peligro
                          disabled={grupo.plans.length <= 1}
                          onClick={() => editar((c) => c.grupos[clave].plans.splice(i, 1))}
                        >
                          <Trash2 size={16} />
                        </BotonIcono>
                      </>
                    }
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Texto
                        label="Velocidad o nombre"
                        hint='Un número (50, 100…) se muestra como "50 Megas"; un texto (Super Giga) se muestra tal cual.'
                        value={plan.megas}
                        onChange={(v) => editar((c) => (c.grupos[clave].plans[i].megas = v))}
                      />
                      <Precio label="Precio mensual (IVA incluido)" value={plan.price} onChange={(v) => editar((c) => (c.grupos[clave].plans[i].price = v))} />
                      <Lineas
                        label="Beneficios (uno por línea)"
                        hint="Se muestran en la página Fibra Óptica."
                        value={plan.beneficios}
                        onChange={(v) => editar((c) => (c.grupos[clave].plans[i].beneficios = v))}
                      />
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <Texto label="Descarga (MB)" hint="Opcional" value={plan.descarga} onChange={(v) => editar((c) => (c.grupos[clave].plans[i].descarga = v))} />
                          <Texto label="Subida (MB)" hint="Opcional" value={plan.subida} onChange={(v) => editar((c) => (c.grupos[clave].plans[i].subida = v))} />
                        </div>
                        <label className="flex items-center gap-2 text-sm text-gray-700">
                          <input
                            type="checkbox"
                            checked={plan.destacado}
                            onChange={(e) => editar((c) => (c.grupos[clave].plans[i].destacado = e.target.checked))}
                            className="h-4 w-4 accent-[#0e6493]"
                          />
                          Plan destacado (tarjeta azul con estrella)
                        </label>
                      </div>
                    </div>
                  </Tarjeta>
                ))}

                <button
                  type="button"
                  disabled={grupo.plans.length >= 8}
                  onClick={() => editar((c) => c.grupos[clave].plans.push({ ...PLAN_NUEVO }))}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0e6493] border border-dashed border-[#0e6493]/50 hover:bg-blue-50 disabled:opacity-40 rounded-lg px-4 py-2.5"
                >
                  <Plus size={16} /> Agregar plan
                </button>
              </section>
            ))}

            <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 max-w-md">
              <Precio label="Adicional para empresas" value={draft.recargoEmpresa} onChange={(v) => editar((c) => (c.recargoEmpresa = v))} />
              <p className="text-xs text-gray-500 mt-2">
                Se suma al precio en la pestaña «Internet Fibra Comercial» y se avisa en la página de inicio. Con 0 se oculta
                la pestaña y el aviso.
              </p>
            </section>
          </>
        )}

        {tab === "sedes" && (
          <>
            <p className="text-sm text-gray-600">
              Cada sede tiene su propia página (<code className="font-mono">/sedes/nombre</code>) y su propio código QR (
              <code className="font-mono">/descubre/nombre</code>). El enlace de una sede no cambia aunque se edite su nombre.
            </p>
            {draft.sedes.map((sede, i) => (
              <Tarjeta
                key={i}
                titulo={sede.ciudad || "Sede nueva"}
                acciones={
                  <BotonIcono
                    label="Eliminar sede"
                    peligro
                    disabled={draft.sedes.length <= 1}
                    onClick={() => {
                      if (window.confirm(`¿Eliminar la sede ${sede.ciudad || "nueva"}? Su página y su QR dejarán de funcionar.`)) {
                        editar((c) => c.sedes.splice(i, 1));
                      }
                    }}
                  >
                    <Trash2 size={16} />
                  </BotonIcono>
                }
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Texto label="Ciudad" value={sede.ciudad} onChange={(v) => editar((c) => (c.sedes[i].ciudad = v))} />
                  <Texto label="Dirección" value={sede.direccion} onChange={(v) => editar((c) => (c.sedes[i].direccion = v))} />
                  <Texto
                    label="WhatsApp"
                    hint="10 dígitos, ej. 318 455 0936"
                    value={sede.whatsapp}
                    onChange={(v) => editar((c) => (c.sedes[i].whatsapp = v))}
                  />
                  <Texto label="Horario de atención" hint="Opcional" value={sede.horario} onChange={(v) => editar((c) => (c.sedes[i].horario = v))} />
                  <Campo label="Lista de precios">
                    <select
                      value={sede.grupo}
                      onChange={(e) => editar((c) => (c.sedes[i].grupo = e.target.value))}
                      className={`${inputCls} mt-1`}
                    >
                      <option value="" disabled>
                        Elegir…
                      </option>
                      {Object.entries(draft.grupos).map(([clave, g]) => (
                        <option key={clave} value={clave}>
                          {g.nombre}
                        </option>
                      ))}
                    </select>
                  </Campo>
                  <Texto
                    label="Descripción corta"
                    hint="Se muestra en la sección de cobertura."
                    value={sede.descripcion}
                    onChange={(v) => editar((c) => (c.sedes[i].descripcion = v))}
                  />
                </div>
                <label className="flex items-center gap-2 text-sm text-gray-700 mt-4">
                  <input
                    type="checkbox"
                    checked={sede.principal}
                    onChange={(e) => editar((c) => (c.sedes[i].principal = e.target.checked))}
                    className="h-4 w-4 accent-[#0e6493]"
                  />
                  Mostrar en el sitio principal (menú, botones de contratar, mapa y cobertura)
                </label>
              </Tarjeta>
            ))}

            <button
              type="button"
              disabled={draft.sedes.length >= 12}
              onClick={() => editar((c) => c.sedes.push({ ...SEDE_NUEVA, grupo: Object.keys(c.grupos)[0] }))}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0e6493] border border-dashed border-[#0e6493]/50 hover:bg-blue-50 disabled:opacity-40 rounded-lg px-4 py-2.5"
            >
              <Plus size={16} /> Agregar sede
            </button>
          </>
        )}

        {tab === "inicio" && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Texto label="Título principal" value={draft.inicio.heroTitulo} onChange={(v) => editar((c) => (c.inicio.heroTitulo = v))} />
              <Texto
                label="Parte subrayada del título"
                hint="Opcional. Se muestra en la misma línea, subrayada en rojo."
                value={draft.inicio.heroResaltado}
                onChange={(v) => editar((c) => (c.inicio.heroResaltado = v))}
              />
            </div>
            <Campo label="Descripción">
              <textarea
                rows={3}
                value={draft.inicio.heroTexto}
                onChange={(e) => editar((c) => (c.inicio.heroTexto = e.target.value))}
                className={`${inputCls} mt-1`}
              />
            </Campo>
            <div className="grid sm:grid-cols-2 gap-4">
              <Texto label="Título de la oferta" value={draft.inicio.ofertaTitulo} onChange={(v) => editar((c) => (c.inicio.ofertaTitulo = v))} />
              <Lineas
                label="La oferta incluye (uno por línea)"
                value={draft.inicio.ofertaIncluye}
                onChange={(v) => editar((c) => (c.inicio.ofertaIncluye = v))}
              />
            </div>
            <p className="text-xs text-gray-500">
              El precio «desde» de la oferta se toma automáticamente del plan más económico de Santander
              {precios.length > 0 && <> (hoy {formatCOP(Math.min(...precios))})</>}.
            </p>
          </div>
        )}

        <div className="pt-4">
          <button
            type="button"
            onClick={restaurar}
            disabled={guardando}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-700 disabled:opacity-40"
          >
            <RotateCcw size={14} /> Restaurar los valores originales del sitio
          </button>
        </div>
      </main>

      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] z-20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <p className={`text-sm ${dirty ? "text-amber-700 font-medium" : "text-gray-500"}`}>
            {dirty ? "Tienes cambios sin guardar." : "Todo guardado."}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={!dirty || guardando}
              onClick={() => {
                setDraft(JSON.parse(base));
                setAviso(null);
              }}
              className="text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-40 rounded-lg px-4 py-2.5"
            >
              Descartar
            </button>
            <button
              type="button"
              disabled={!dirty || guardando}
              onClick={guardar}
              className="inline-flex items-center gap-2 bg-[#e31e25] hover:bg-red-700 disabled:opacity-40 text-white font-semibold rounded-lg px-5 py-2.5 transition-colors"
            >
              {guardando ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
