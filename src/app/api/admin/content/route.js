import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/adminAuth";
import { normalizeContent } from "@/lib/content";
import { explicarErrorDeGuardado, resetContent, writeContent } from "@/lib/contentStore";

const noAutorizado = () => NextResponse.json({ error: "Sesión expirada. Vuelve a iniciar sesión." }, { status: 401 });

const errorDeAlmacen = (err) => {
  console.error("No se pudo guardar el contenido:", err);
  return NextResponse.json({ error: explicarErrorDeGuardado(err) }, { status: 500 });
};

// Guarda el contenido completo del sitio.
export async function PUT(request) {
  if (!(await isAdmin())) return noAutorizado();

  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });

  const { content, errors } = normalizeContent(body);
  if (errors.length) return NextResponse.json({ error: "Revisa los datos.", detalles: errors }, { status: 400 });

  try {
    await writeContent(content);
  } catch (err) {
    return errorDeAlmacen(err);
  }
  return NextResponse.json({ ok: true, content });
}

// Vuelve a los valores originales del sitio (la versión anterior queda en el archivo de respaldo).
export async function DELETE() {
  if (!(await isAdmin())) return noAutorizado();
  try {
    await resetContent();
  } catch (err) {
    return errorDeAlmacen(err);
  }
  return NextResponse.json({ ok: true });
}
