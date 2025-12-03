import { NextResponse } from "next/server";
import { consultaClienteService } from "@/lib/apiService";

export async function POST(request) {
  try {
    const data = await request.json();
    
    console.log("🔐 Validando cliente:", data);
    
    // Conectar con el backend
    const result = await consultaClienteService.validar(data);
    
    console.log("✅ Cliente validado:", result);
    
    return NextResponse.json({
      success: true,
      token: result.token,
      cliente: result.cliente,
      message: result.message
    });
    
  } catch (error) {
    console.error("❌ Error:", error);
    
    return NextResponse.json(
      { 
        success: false,
        message: error.message || "Error al validar cliente"
      },
      { status: error.message.includes('no encontrado') ? 404 : 500 }
    );
  }
}
