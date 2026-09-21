"use client";

import { createContext, useContext, useMemo } from "react";
import { GRUPO_PRINCIPAL, sedesConPlanes, sedesEnAlcance } from "@/lib/content";

const ContentContext = createContext(null);

export default function ContentProvider({ content, children }) {
  const value = useMemo(() => ({ content, sedes: sedesConPlanes(content) }), [content]);
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

function useValue() {
  const value = useContext(ContentContext);
  if (!value) throw new Error("useContent debe usarse dentro de <ContentProvider>.");
  return value;
}

// Todo el contenido editable (planes, sedes, textos de inicio).
export const useContent = () => useValue().content;

// Todas las sedes, cada una con los planes y el precio de TV de su grupo.
export const useSedes = () => useValue().sedes;

// Sedes que se ofrecen en un contexto: sin `scope` las del sitio principal; con `scope`, una sede (id) o un grupo.
export function useSedesVisibles(scope) {
  const sedes = useSedes();
  return useMemo(() => sedesEnAlcance(sedes, scope), [sedes, scope]);
}

// Las sedes visibles con el formato que usan los botones y ventanas de "contratar".
export function useSedesContacto(scope) {
  const sedes = useSedesVisibles(scope);
  return useMemo(
    () =>
      sedes.map((s) => ({
        id: s.id,
        nombre: s.ciudad,
        direccion: s.direccion,
        telefono: s.whatsapp,
        mensaje: `Hola, quiero más información sobre su servicio en ${s.ciudad}`,
      })),
    [sedes]
  );
}

// Planes que muestran las páginas generales (inicio, /fibra, /television).
export function usePlanesPrincipales() {
  const content = useContent();
  return content.grupos[GRUPO_PRINCIPAL];
}
