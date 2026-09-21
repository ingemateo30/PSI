import { NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  adminConfigured,
  checkCredentials,
  createSession,
  limpiarFallos,
  loginBloqueado,
  registrarFallo,
  sessionCookieOptions,
} from "@/lib/adminAuth";

export async function POST(request) {
  if (!adminConfigured()) {
    return NextResponse.json(
      { error: "El acceso de administración no está configurado en el servidor (falta ADMIN_PASSWORD)." },
      { status: 503 }
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  if (loginBloqueado(ip)) {
    return NextResponse.json(
      { error: "Demasiados intentos fallidos. Espera 15 minutos e inténtalo de nuevo." },
      { status: 429 }
    );
  }

  const { usuario, password } = await request.json().catch(() => ({}));
  if (!checkCredentials(usuario ?? "", password ?? "")) {
    registrarFallo(ip);
    return NextResponse.json({ error: "Usuario o contraseña incorrectos." }, { status: 401 });
  }

  limpiarFallos(ip);
  const { value, maxAge } = createSession();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, value, sessionCookieOptions(maxAge));
  return response;
}
