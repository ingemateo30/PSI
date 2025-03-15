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
            {/* Fondo con imagen, efecto paralax y overlay mejorado */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0e6493]/20 to-[#0e6493]/105 z-10"></div>
                <Image
                    src="/hero.png"
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
                <div className="absolute inset-0 bg-[#0e6493]/70"></div>

                {/* Elementos decorativos */}
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a5a86] to-transparent"></div>
            </div>

         
            {/* Contenido en dos columnas con mejor espaciado */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full max-w-7xl px-6 md:px-10 gap-16">

                {/* Texto a la izquierda con animaciones mejoradas */}
                <div
                    className={`max-w-xl transition-all duration-1000 ease-out text-left ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
                        }`}
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
                        ¡La mejor oferta <span className="text-[#e31e25] relative inline-block">
                            solo para ti!
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#e31e25] rounded-full"></span>
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl mt-6 text-gray-100 font-medium leading-relaxed">
                        Conéctate con la mejor velocidad y la mejor cobertura.
                        Sin costos ocultos, sin preocupaciones.
                    </p>

                </div>

                <div className="relative bg-gradient-to-r from-[#0e6493] to-[#0a4f7a] text-white hover:from-[#0a4f7a] hover:to-[#073a57] p-10 rounded-3xl shadow-2xl w-full max-w-md border border-[#3a84b3]/30 transition-all duration-1000 ease-out hover:shadow-[0px_20px_50px_rgba(0,0,0,0.5)] overflow-visible">

                    {/* Badge de oferta, sobresale correctamente */}
                    <div className="absolute -top-5 right-1/2 translate-x-1/2 bg-[#e31e25] text-white font-bold py-2 px-6 rounded-bl-lg rounded-tr-lg shadow-xl z-50">
                        <span className="text-xs uppercase tracking-wide">🔥 ¡OFERTA EXCLUSIVA! 🔥</span>
                    </div>

                    {/* Efecto de brillo en la esquina */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-md"></div>

                    <h2 className="text-2xl md:text-3xl font-bold leading-tight text-center text-white mt-4 mb-2">
                        PACK FIBRA + TV PREMIUM
                    </h2>

                    <div className="my-6 text-center">
                        <div className="inline-block relative">
                            <span className="text-7xl md:text-8xl font-extrabold text-white tracking-tight">$89.900</span>
                            <span className="absolute -top-4 -left-4 text-lg font-bold text-[#e31e25]">desde</span>
                            <span className="text-md font-medium text-gray-100 ml-2 align-top">/mes</span>
                        </div>
                    </div>

                    {/* Lista de beneficios */}
                    <div className="bg-[#0a4f7a]/50 rounded-xl p-4 mb-6">
                        <p className="text-lg font-bold text-white text-center mb-3">
                            Tu pack incluye:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-[#e31e25] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-100">300 Mbps simétricos</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-[#e31e25] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-100">+120 canales Premium</span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-sm text-gray-200 text-center mt-2 font-medium">
                        Verifica la cobertura en tu zona.
                    </p>

                    {/* Botón con efecto de pulsación */}
                    <button
                        className="mt-6 bg-[#e31e25] hover:bg-red-700 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform w-full text-xl uppercase tracking-wider shadow-lg hover:scale-105"
                    >
                        ¡CONTRATAR AHORA!
                    </button>
                </div>




            </div>
        </div>
    );
}



