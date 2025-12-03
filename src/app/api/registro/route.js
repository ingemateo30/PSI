import { NextResponse } from "next/server";
import { registroWebService } from "@/lib/apiService";

export async function POST(request) {
  try {
    const data = await request.json();
    
    console.log("📋 Next.js recibió:", data);
    
    // Conectar con el backend
    const result = await registroWebService.registrar(data);
    
    console.log("✅ Registro exitoso:", result);
    
    return NextResponse.json({
      success: true,
      clienteId: result.clienteId || result.data?.cliente_id,
      message: result.message,
      data: result.data
    });
    
  } catch (error) {
    console.error("❌ Error:", error);
    
    return NextResponse.json(
      { 
        error: error.message || "Error al procesar",
        success: false
      },
      { status: 500 }
    );
  }
}