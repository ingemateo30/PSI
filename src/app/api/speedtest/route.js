import { NextResponse } from "next/server";
import FastSpeedtest from "fast-speedtest-api";

export async function GET() {
  try {
    let speedtest = new FastSpeedtest({
      // Necesitas una clave de Fast.com
      token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm&urlCount=5",
      verbose: false,
      timeout: 5000,
      unit: FastSpeedtest.UNITS.Mbps,
    });

    let speed = await speedtest.getSpeed();
    return NextResponse.json({ speed });
  } catch (error) {
    console.error("Error en la prueba de velocidad:", error);
    return NextResponse.json({ error: "No se pudo medir la velocidad" }, { status: 500 });
  }
}

