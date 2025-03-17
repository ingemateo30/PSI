"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [isPulsing, setIsPulsing] = useState(true);

    useEffect(() => {
        setIsVisible(true);
        const pulseInterval = setInterval(() => {
            setIsPulsing(prev => !prev);
        }, 2000);

        return () => clearInterval(pulseInterval);
    }, []);

    return (
        <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
            
            {/* Fondo con imagen y overlay */}
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
                    className="brightness-90 md:object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-[#0e6493]/50"></div>
            </div>

            {/* Contenido */}
            <div className="relative z-10 flex flex-col md:flex-row justify-center items-center w-full max-w-7xl px-4 md:px-10 gap-10">

                {/* Texto */}
                <div className={`max-w-xl text-center md:text-left transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
                    <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-white">
                        ¡Velocidad y entretenimiento{" "}
                        <span className="relative inline-block">
                            al mejor precio!
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#e31e25] rounded-full"></span>
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg mt-4 text-gray-100">
                        Disfruta fibra óptica de alta velocidad y TV premium sin costos ocultos.
                        ¡Contrata hoy y aprovecha esta oferta exclusiva!
                    </p>
                </div>

                {/* Tarjeta de oferta */}
                <div className="relative bg-gradient-to-r from-[#0e6493] to-[#0a4f7a] text-white p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md border border-[#3a84b3]/30 transition-all duration-700 text-center">
                    
                    <div className="absolute -top-5 px-4 py-2 bg-[#e31e25] text-white font-bold rounded-bl-lg rounded-tr-lg shadow-lg text-xs uppercase tracking-wide">
                        🔥 ¡OFERTA EXCLUSIVA! 🔥
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-4">
                        PACK FIBRA + TV PREMIUM
                    </h2>

                    <div className="relative inline-block">
                        <span className="absolute -top-4 left-0 text-lg font-bold text-[#e31e25]">desde</span>
                        <span className="text-5xl font-extrabold text-white">$89.900</span>
                        <span className="text-md font-medium text-gray-100 ml-2">/mes</span>
                    </div>

                    <div className="bg-[#0a4f7a]/50 rounded-xl p-4 mt-6">
                        <p className="text-lg font-bold text-white mb-3">Tu pack incluye:</p>
                        <ul className="space-y-2 text-left">
                            {["300 Mbps simétricos", "+120 canales Premium"].map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#e31e25]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-gray-100">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="text-sm text-gray-200 mt-4">Verifica la cobertura en tu zona.</p>

                    <button className="mt-6 bg-[#e31e25] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform w-full text-lg uppercase tracking-wider shadow-lg hover:scale-105">
                        ¡CONTRATAR AHORA!
                    </button>
                </div>

            </div>
        </div>
    );
}
