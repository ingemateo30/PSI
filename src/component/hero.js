"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
    // Estado para animación de entrada
    const [isVisible, setIsVisible] = useState(false);

    // Estado para efecto de pulsación en el botón
    const [isPulsing, setIsPulsing] = useState(true);

    useEffect(() => {
        setIsVisible(true);

        // Efecto de pulsación para el botón
        const pulseInterval = setInterval(() => {
            setIsPulsing(prev => !prev);
        }, 2000);

        return () => clearInterval(pulseInterval);
    }, []);

    return (
        <div className="relative w-full min-h-[650px] md:min-h-[700px] lg:min-h-[750px] flex items-center justify-center text-white overflow-hidden">

            <div className="absolute bottom-0 left-0 w-full z-20 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
                    <path fill="currentColor" fillOpacity="1" d="M0,80L48,73.3C96,67,192,53,288,50C384,47,480,53,576,60C672,67,768,73,864,76.7C960,80,1056,80,1152,76.7C1248,73,1344,67,1392,63.3L1440,60L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
                </svg>
            </div>


            {/* Fondo con imagen, efecto paralax y overlay mejorado */}
            <div className="absolute inset-0">

                <Image
                    src="/antena2.png"
                    alt="Fondo hero"
                    fill
                    style={{
                        objectFit: "cover",
                        transform: isVisible ? "scale(1.05)" : "scale(1)",
                        transition: "transform 10s ease-out"
                    }}
                    className="brightness-90"
                    priority
                />
                <div className="absolute inset-0 bg-[#0e6493]/50"></div>



            </div>


            {/* Contenido en dos columnas con mejor espaciado */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full max-w-7xl px-6 md:px-10 gap-16">

                {/* Texto a la izquierda con animaciones mejoradas */}
                <div
                    className={`max-w-xl transition-all duration-1000 ease-out text-left ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
                        }`}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug text-white drop-shadow-lg">
                        ¡Velocidad y entretenimiento{" "}
                        <span className="relative inline-block">
                            al mejor precio!
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#e31e25] rounded-full"></span>
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 text-gray-100 font-medium leading-relaxed">
                        Disfruta fibra óptica de alta velocidad y TV premium sin costos ocultos.
                        ¡Contrata hoy y aprovecha esta oferta exclusiva!
                    </p>
                </div>



                <div className="relative bg-gradient-to-r from-[#0e6493] to-[#0a4f7a] text-white hover:from-[#0a4f7a] hover:to-[#073a57] p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-lg border border-[#3a84b3]/30 transition-all duration-700 ease-out hover:shadow-[0px_20px_50px_rgba(0,0,0,0.5)] overflow-visible flex flex-col items-center text-center">
  
  {/* Badge de oferta */}
  <div className="absolute -top-5 px-6 py-2 bg-[#e31e25] text-white font-bold rounded-bl-lg rounded-tr-lg shadow-xl text-xs uppercase tracking-wide">
    🔥 ¡OFERTA EXCLUSIVA! 🔥
  </div>

  {/* Título */}
  <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white mt-6 mb-4">
    PACK FIBRA + TV PREMIUM
  </h2>

  {/* Precio */}
  <div className="relative inline-block text-center">
    <span className="absolute -top-4 -left-4 text-lg font-bold text-[#e31e25]">desde</span>
    <span className="text-6xl md:text-7xl font-extrabold text-white tracking-tight">$89.900</span>
    <span className="text-md font-medium text-gray-100 ml-2 align-top">/mes</span>
  </div>

  {/* Beneficios */}
  <div className="bg-[#0a4f7a]/50 rounded-xl p-6 mt-6 w-full">
    <p className="text-lg font-bold text-white mb-4">Tu pack incluye:</p>
    <ul className="space-y-3 text-left">
      {[
        "300 Mbps simétricos",
        "+120 canales Premium"
      ].map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#e31e25]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span className="text-gray-100">{item}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Nota de cobertura */}
  <p className="text-sm text-gray-200 mt-4 font-medium">Verifica la cobertura en tu zona.</p>

  {/* Botón CTA */}
  <button className="mt-6 bg-[#e31e25] hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform w-full text-lg uppercase tracking-wider shadow-lg hover:scale-105">
    ¡CONTRATAR AHORA!
  </button>

</div>





            </div>
        </div>
    );
}



