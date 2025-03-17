"use client";
import { useState } from "react";
import {
    Wifi,
    CheckCircle,
    Download,
    Upload,
    Smartphone,
    Tv,
    ShoppingCart,
    ChevronRight,
    Star,
    Zap,
    Shield,
    Clock
} from "lucide-react";
import Navbar from '@/component/navbar';
import FloatingSocial from '@/component/redes';
import Boton from '@/component/botonsubir';
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Image from "next/image";

const internetPlans = [
    {
        speed: "300",
        name: "PLAN BÁSICO",
        price: "$52.900",
        uploadSpeed: "150",
        benefits: [
            "Ideal para 5-7 dispositivos",
            "Streaming HD",
            "Gaming casual"
        ],
        color: "#0e6493",
    },
    {
        speed: "500",
        name: "PLAN PREMIUM",
        price: "$71.100",
        uploadSpeed: "250",
        benefits: [
            "Ideal para 10+ dispositivos",
            "Streaming 4K",
            "Gaming online"
        ],
        featured: true,
        color: "#0e6493",
    },
    {
        speed: "700",
        name: "PLAN TURBO",
        price: "$89.900",
        uploadSpeed: "350",
        benefits: [
            "Ideal para 15+ dispositivos",
            "Streaming 4K HDR",
            "Gaming profesional"
        ],
        color: "#0e6493",
    },
    {
        speed: "1000",
        name: "PLAN GIGABIT",
        price: "$109.900",
        uploadSpeed: "500",
        benefits: [
            "Ideal para 20+ dispositivos",
            "Múltiples streams 4K",
            "Gaming competitivo"
        ],
        color: "#0e6493",
    },
    {
        speed: "300",
        name: "PLAN BÁSICO",
        price: "$52.900",
        uploadSpeed: "150",
        benefits: [
            "Ideal para 5-7 dispositivos",
            "Streaming HD",
            "Gaming casual"
        ],
        color: "#0e6493",
    },
    {
        speed: "300",
        name: "PLAN BÁSICO",
        price: "$52.900",
        uploadSpeed: "150",
        benefits: [
            "Ideal para 5-7 dispositivos",
            "Streaming HD",
            "Gaming casual"
        ],
        color: "#0e6493",
    },
];

const bundlePlans = [
    {
        name: "PAQUETE FULL",
        price: "$129.900",
        includes: [
            { icon: Wifi, text: "500 Megas" },
            { icon: Smartphone, text: "Ilimitado" },
            { icon: Tv, text: "TV Premium" },
        ],
        benefits: [
            "Múltiples dispositivos conectados",
            "Ideal para familias",
            "Entretenimiento completo"
        ],
        featured: true,
    },
    {
        name: "PAQUETE FULL TIGO",
        price: "$99.900",
        includes: [
            { icon: Wifi, text: "500 Megas" },
            { icon: Smartphone, text: "Ilimitado" },
            { icon: Tv, text: "Max" },
        ],
        benefits: [
            "Gaming y streaming 4K",
            "Llamadas sin límites",
            "Contenido exclusivo"
        ],
    },
    {
        name: "PAQUETE INTERNET + TV",
        price: "$99.200",
        includes: [
            { icon: Wifi, text: "500 Megas" },
            { icon: Tv, text: "TV" },
            { text: "", icon: null },
        ],
        benefits: [
            "Conexión ultrarrápida",
            "Canales premium",
            "Ideal para gamers"
        ],
    }
];

export default function EnhancedPlansSection() {
    const [activeTab, setActiveTab] = useState("internet"); // "internet" or "bundles"
    const [selectedPlan, setSelectedPlan] = useState(1); // Default to the featured plan

    return (
        <>
 <div className={`sticky top-0 z-50 transition-all duration-300 "}`}>
        <Navbar />
      </div>
            <div className="relative py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/3.svg')] before:bg-cover before:bg-center before:opacity-10"></div>
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-50"></div>
                <div className="absolute top-1/3 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-40"></div>

                {/* Fiber optic decorative lines */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#e31e25] rounded animate-pulse"></div>
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#e31e25] to-blue-400 rounded animate-pulse"></div>
                    <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#e31e25] rounded animate-pulse"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="text-center mb-12">
                        <div className="inline-block">
                            <div className="flex items-center justify-center mb-3 bg-blue-100 text-[#0e6493] py-2 px-4 rounded-full">
                                <Wifi className="w-5 h-5 mr-2" />
                                <span className="text-sm font-bold">Conecta con lo mejor</span>
                            </div>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-[#0e6493] tracking-tight mb-6">
                            Nuestros <span className="relative inline-block">
                                Planes
                                <span className="block w-24 h-2 bg-[#e31e25] mx-auto mt-3 rounded-full"></span>
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Experimenta velocidades ultrarrápidas y estabilidad inigualable con nuestra tecnología de última generación.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex p-1 rounded-full bg-blue-50 shadow-md">
                            <button
                                onClick={() => setActiveTab("internet")}
                                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === "internet"
                                    ? "bg-gradient-to-r from-[#0e6493] to-[#073a57] text-white shadow-lg"
                                    : "text-[#0e6493] hover:bg-blue-100"
                                    }`}
                            >
                                Internet Fibra Óptica
                            </button>
                            <button
                                onClick={() => setActiveTab("bundles")}
                                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === "bundles"
                                    ? "bg-gradient-to-r from-[#0e6493] to-[#073a57] text-white shadow-lg"
                                    : "text-[#0e6493] hover:bg-blue-100"
                                    }`}
                            >
                                Paquetes Combinados
                            </button>
                        </div>
                    </div>

                    {/* Internet Planes */}
                    {activeTab === "internet" && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {internetPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`group relative h-full flex flex-col justify-between p-8 rounded-3xl shadow-xl text-center transform transition-all duration-500 hover:translate-y-2 ${plan.featured
                                            ? "bg-gradient-to-br from-[#0e6493] to-[#073a57] text-white"
                                            : "bg-white border-2 border-gray-100"
                                        }`}
                                >
                                    {plan.featured && (
                                        <div className="absolute -top-3 -right-3 bg-[#e31e25] text-white text-sm font-bold p-3 rounded-full shadow-lg flex items-center justify-center">
                                            <Star className="h-5 w-5 fill-white" />
                                        </div>
                                    )}

                                    {/* Speed highlight */}
                                    <div className="mb-6">
                                        <div
                                            className={`text-7xl font-extrabold leading-none ${plan.featured ? "text-white" : "text-[#e31e25]"
                                                }`}
                                        >
                                            {plan.speed}
                                        </div>
                                        <div
                                            className={`text-xl font-medium ${plan.featured ? "text-blue-100" : "text-[#0e6493]"
                                                }`}
                                        >
                                            Megas
                                        </div>
                                    </div>

                                    {/* Name and price */}
                                    <div className="mb-8">
                                        <h3
                                            className={`text-2xl font-bold ${plan.featured ? "text-white" : "text-[#0e6493]"
                                                }`}
                                        >
                                            {plan.name}
                                        </h3>
                                        <div className="flex justify-center items-baseline">
                                            <span
                                                className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-[#e31e25]"
                                                    }`}
                                            >
                                                {plan.price}
                                            </span>
                                            <span
                                                className={`text-sm ml-2 ${plan.featured ? "text-blue-100" : "text-gray-500"
                                                    }`}
                                            >
                                                /mes
                                            </span>
                                        </div>
                                        <p
                                            className={`text-sm mt-1 ${plan.featured ? "text-gray-200" : "text-gray-600"
                                                }`}
                                        >
                                            IVA Incluido
                                        </p>
                                    </div>

                                    {/* Speed details */}
                                    <div
                                        className={`flex justify-between p-4 mb-6 rounded-xl ${plan.featured ? "bg-white/10" : "bg-blue-50"
                                            }`}
                                    >
                                        <div className="text-center">
                                            <div className="flex justify-center">
                                                <Download
                                                    className={`h-5 w-5 ${plan.featured ? "text-blue-100" : "text-[#0e6493]"
                                                        }`}
                                                />
                                            </div>
                                            <div
                                                className={`font-bold text-lg ${plan.featured ? "text-white" : "text-[#0e6493]"
                                                    }`}
                                            >
                                                {plan.speed} MB
                                            </div>
                                            <div
                                                className={`text-xs ${plan.featured ? "text-blue-100" : "text-gray-500"
                                                    }`}
                                            >
                                                Descarga
                                            </div>
                                        </div>

                                        <div
                                            className={`h-auto w-px ${plan.featured ? "bg-white/20" : "bg-gray-300"
                                                }`}
                                        ></div>

                                        <div className="text-center">
                                            <div className="flex justify-center">
                                                <Upload
                                                    className={`h-5 w-5 ${plan.featured ? "text-blue-100" : "text-[#0e6493]"
                                                        }`}
                                                />
                                            </div>
                                            <div
                                                className={`font-bold text-lg ${plan.featured ? "text-white" : "text-[#0e6493]"
                                                    }`}
                                            >
                                                {plan.uploadSpeed} MB
                                            </div>
                                            <div
                                                className={`text-xs ${plan.featured ? "text-blue-100" : "text-gray-500"
                                                    }`}
                                            >
                                                Subida
                                            </div>
                                        </div>
                                    </div>

                                    {/* Benefits */}
                                    <div className="flex-grow">
                                        <ul className={`space-y-4 mb-8 ${plan.featured ? "text-gray-100" : "text-gray-700"}`}>
                                            {plan.benefits.map((benefit, i) => (
                                                <li key={i} className="flex justify-center items-center space-x-3">
                                                    <CheckCircle
                                                        className={`h-4 w-4 ${plan.featured ? "text-blue-100" : "text-[#0e6493]"
                                                            }`}
                                                    />
                                                    <span className="font-medium">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Button */}
                                    <button
                                        className={`w-full py-4 rounded-xl font-bold text-base flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl ${plan.featured
                                                ? "bg-white text-[#0e6493] hover:bg-gray-100"
                                                : "bg-gradient-to-r from-[#0e6493] to-[#0a4f7a] text-white hover:from-[#0a4f7a] hover:to-[#073a57]"
                                            }`}
                                    >
                                        ¡CONTRATAR AHORA!
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}



                    {/* Bundle Plans */}
                    {activeTab === "bundles" && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {bundlePlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`group relative h-full flex flex-col justify-between p-8 rounded-3xl shadow-xl text-center transform transition-all duration-500 hover:translate-y-2 ${plan.featured
                                        ? "bg-gradient-to-br from-[#0e6493] to-[#073a57] text-white"
                                        : "bg-white border-2 border-gray-100"
                                        }`}
                                >
                                    {plan.featured && (
                                        <div className="absolute -top-3 -right-3 bg-[#e31e25] text-white text-sm font-bold p-3 rounded-full shadow-lg flex items-center justify-center">
                                            <Star className="h-5 w-5 fill-white" />
                                        </div>
                                    )}

                                    {/* Header */}
                                    <div>
                                        <h3 className={`text-2xl font-extrabold ${plan.featured ? "text-white" : "text-[#0e6493]"} mb-4`}>
                                            {plan.name}
                                        </h3>
                                        <div className={`text-5xl font-bold ${plan.featured ? "text-white" : "text-[#e31e25]"} mb-1`}>
                                            {plan.price}
                                        </div>
                                        <p className={`text-sm ${plan.featured ? "text-gray-200" : "text-gray-600"} mb-8`}>
                                            IVA Incluido
                                        </p>

                                        {/* Divider */}
                                        <div className={`w-16 h-1 mx-auto ${plan.featured ? "bg-white/30" : "bg-[#0e6493]/20"} rounded-full mb-6`}></div>
                                    </div>

                                    {/* Lista de beneficios */}
                                    <div className="flex-grow">
                                        <ul className={`space-y-4 mb-8 ${plan.featured ? "text-gray-100" : "text-gray-700"}`}>
                                            {plan.includes.map((item, i) => (
                                                <li key={i} className="flex justify-center items-center space-x-3">
                                                    {item.icon ? (
                                                        <div className={`flex items-center justify-center p-2 rounded-full ${plan.featured ? "bg-white/20" : "bg-[#0e6493]/10"}`}>
                                                            <item.icon className={`${plan.featured ? "text-white" : "text-[#0e6493]"} h-5 w-5`} />
                                                        </div>
                                                    ) : (
                                                        <div className="w-9"></div>
                                                    )}
                                                    <span className="font-medium">{item.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Botón */}
                                    <button
                                        className={`w-full py-4 rounded-xl font-bold text-base flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl ${plan.featured
                                            ? "bg-white text-[#0e6493] hover:bg-gray-100"
                                            : "bg-gradient-to-r from-[#0e6493] to-[#0a4f7a] text-white hover:from-[#0a4f7a] hover:to-[#073a57]"
                                            }`}
                                    >
                                        ¡CONTRATAR AHORA!
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <footer className="bg-gray-800 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center">
                            {/* Logo */}
                            <div className="mb-2">
                                <img src="/psi.png" alt="PSI Fibra" className="w-32 md:w-40" />
                            </div>
                        </div>


                        <div>
                            <h4 className="text-lg font-bold mb-4">Servicios</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white">Internet Fibra Óptica</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Televisión HD</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Paquetes</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Empresas</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4">Soporte</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white">Centro de Ayuda</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Contacto</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Preguntas Frecuentes</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Reporte de Problemas</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4">Empresa</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white">Sobre PSI</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Noticias</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Trabaja con Nosotros</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Términos y Condiciones</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
                        <p>&copy; 2025 PSI Fibra. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
            <FloatingSocial />
            <Boton />
            <FloatingWhatsApp
                phoneNumber="573007235020"
                accountName="Proveedor de Telecomunicaciones"
                avatar="https://telecomunicaciones.com/logo.png"
                chatMessage="¡Hola! ¿En qué podemos ayudarte?"
                allowClickAway
            />
        </>
    );
}


