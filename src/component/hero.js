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
                <div className="absolute inset-0 bg-gradient-to-b from-[#0e6493]/30 to-[#0e6493]/95 z-10"></div>
                <Image
                    src="/imagen.webp"
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
            
            {/* Elementos flotantes decorativos */}
            <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-[#e31e25]/10 blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-[#e31e25]/10 blur-3xl"></div>

            {/* Contenido en dos columnas con mejor espaciado */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full max-w-7xl px-6 md:px-10 gap-16">

                {/* Texto a la izquierda con animaciones mejoradas */}
                <div
                    className={`max-w-xl transition-all duration-1000 ease-out text-left ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
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
                    
                    {/* Puntos destacados */}
                    <div className="mt-8 space-y-3">
                        {[
                            "Velocidad garantizada",
                            "Instalación gratuita",
                            "Soporte 24/7"
                        ].map((feature, index) => (
                            <div 
                                key={index} 
                                className={`flex items-center transition-all duration-700 ease-out ${
                                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                                }`}
                                style={{ transitionDelay: `${500 + index * 200}ms` }}
                            >
                                <div className="mr-3 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#e31e25]">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-100 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tarjeta de oferta mejorada (Derecha) */}
                <div
                    className={`bg-gradient-to-br from-[#0e6493] to-[#0a5a86] p-10 rounded-3xl shadow-2xl w-full max-w-md border border-[#3a84b3]/30 transition-all duration-1000 ease-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                    } hover:shadow-[0px_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden`}
                >
                    {/* Efecto de brillo en la esquina */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-md"></div>
                    
                    {/* Badge mejorado */}
                    <div className="absolute -top-3 -right-3 bg-[#e31e25] text-white font-bold py-2 px-6 rounded-lg shadow-lg transform rotate-3 z-20">
                        <span className="text-xs uppercase tracking-wider">¡OFERTA EXCLUSIVA!</span>
                    </div>
                    
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
                    <div className="bg-[#0a5a86]/50 rounded-xl p-4 mb-6">
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
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-[#e31e25] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-gray-100">Precio fijo garantizado</span>
                            </li>
                        </ul>
                    </div>
                    
                    <p className="text-sm text-gray-200 text-center mt-2 font-medium">
                        Verifica la cobertura en tu zona.
                    </p>
                    
                    {/* Botón con efecto de pulsación */}
                    <button
                        className={`mt-6 bg-[#e31e25] hover:bg-red-700 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform w-full text-xl uppercase tracking-wider shadow-lg ${
                            isPulsing ? 'animate-pulse scale-105' : ''
                        }`}
                    >
                        ¡CONTRATAR AHORA!
                    </button>
                    
                    {/* Promoción de tiempo limitado */}
                    <p className="text-xs text-[#e31e25] font-bold text-center mt-4">
                        ¡Oferta válida hasta fin de mes!
                    </p>
                </div>

            </div>
        </div>
    );
}



