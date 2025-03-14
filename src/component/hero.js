"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  // Estado para animación de entrada
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full min-h-[550px] md:min-h-[600px] lg:min-h-[650px] flex items-center justify-center text-white overflow-hidden">
      {/* Fondo con imagen y overlay */}
      <div className="absolute inset-0">
        <Image
          src="/imagen.webp" // Reemplaza con la URL correcta
          alt="Fondo hero"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-100"
          priority
        />
        <div className="absolute inset-0 bg-[#0e6493]/90"></div>
      </div>

      {/* Contenido en dos columnas */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full max-w-6xl px-6 md:px-10 gap-10">
        
        {/* Texto a la izquierda */}
        <div
          className={`max-w-lg transition-all duration-700 ease-in-out text-left ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            ¡La mejor oferta <span className="text-[#e31e25]">solo para ti!</span>
          </h1>
          <p className="text-lg md:text-xl mt-4 text-gray-200 font-medium">
            Conéctate con la mejor velocidad y la mejor cobertura.  
            Sin costos ocultos, sin preocupaciones.
          </p>
        </div>

        {/* Tarjeta de oferta (Derecha) */}
        <div
          className={`bg-[#0e6493] p-8 rounded-2xl shadow-2xl w-full max-w-md border-2 border-[#0a5a86] transition-all duration-700 ease-in-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } hover:scale-105 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.3)]`}
        >
          <div className="absolute -top-3 right-4 bg-[#e31e25] text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
            PROMOCIÓN
          </div>
          <h2 className="text-xl md:text-2xl font-semibold leading-tight text-center">
            FIBRA 900MB + TELEVISION
          </h2>
          <p className="text-5xl md:text-6xl font-extrabold my-4 text-center">$89.900</p>
          <p className="text-md font-bold text-gray-100 text-center">
            Precio fijo. Sin cambios ni sorpresas.
          </p>
          <p className="text-xs text-gray-300 text-center mt-1">Consulta disponibilidad o cobertura.</p>
          <button
            className="mt-5 bg-[#e31e25] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full text-lg"
          >
            ¡LO QUIERO!
          </button>
        </div>

      </div>
    </div>
  );
}



