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
import WhatsAppModal from '@/component/modal';
import Boton from '@/component/botonsubir';
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Image from "next/image";

const internetPlans = [
    {
        speed: "100",
        name: "PLAN TURBO",
        price: "$69.900",
        uploadSpeed: "100",
        benefits: [
            "Ideal para 3 dispositivos",
            "Wifi 5G"
        ],
        color: "#0e6493",
    },
    {
        speed: "300",
        name: "PLAN DELUXE",
        price: "$89.900",
        uploadSpeed: "250",
        benefits: [
            "Ideal para +5 dispositivos",
            "Wifi 5G"
        ],
        featured: true,
        color: "#0e6493",
    },
    {
        speed: "200",
        name: "PLAN PREMIUM",
        price: "$79.900",
        uploadSpeed: "150",
        benefits: [
            "Ideal para 4 dispositivos",
            "Wifi 5G"
        ],
        color: "#0e6493",
    },
    {
        speed: "50",
        name: "PLAN ESPECIAL",
        price: "$59.900",
        uploadSpeed: "50",
        benefits: [
            "Ideal para 2 dispositivos",
            "Wifi 5G"
        ],
        color: "#0e6493",
    }
];
const internetPlans2 = [
    {
        speed: "100",
        name: "PLAN TURBO",
        price: "$79.900",
        uploadSpeed: "100",
        benefits: [
            "Ideal para 3 dispositivos",
            "Wifi 5G"
        ],
        color: "#0e6493",
    },
    {
        speed: "300",
        name: "PLAN DELUXE",
        price: "$99.900",
        uploadSpeed: "250",
        benefits: [
            "Ideal para +5 dispositivos",
            "Wifi 5G"
        ],
        featured: true,
        color: "#0e6493",
    },
    {
        speed: "200",
        name: "PLAN PREMIUM",
        price: "$89.900",
        uploadSpeed: "150",
        benefits: [
            "Ideal para 5 dispositivos",
            "Wifi 5G"
        ],
        color: "#0e6493",
    },
    {
        speed: "50",
        name: "PLAN ESPECIAL",
        price: "$69.900",
        uploadSpeed: "50",
        benefits: [
            "Ideal para 2 dispositivos",
            "Wifi 5G"
        ],
        color: "#0e6493",
    }
];


const bundlePlans = [
    {
        name: "PAQUETE FULL",
        price: "$99.900",
        includes: [
            { icon: Wifi, text: "300 Megas" },
            { icon: Wifi, text: "Wifi y cable de red" }
        ],
        benefits: [
            "Múltiples dispositivos conectados",
            "Ideal para familias",
            "Entretenimiento completo"
        ],
        featured: true,
    },
    {
        name: "PAQUETE AVANZADO",
        price: "$89.900",
        includes: [
            { icon: Wifi, text: "200 Megas" },
            { icon: Wifi, text: "Wifi y cable de red" }
        ],
        benefits: [
            "Gaming y streaming 4K",
            "canales HD",
            "Contenido exclusivo"
        ],
    },
    {
        name: "PAQUETE INTERMEDIO",
        price: "$79.900",
        includes: [
            { icon: Wifi, text: "100 Megas" },
            { icon: Wifi, text: "Wifi y cable de red" },
            { icon: Tv, text: "87 canales HD" },
        ],
        benefits: [
            "Conexión ultrarrápida",
            "Ideal para gamers"
        ],
    }
];

export default function EnhancedPlansSection() {
    const [activeTab, setActiveTab] = useState("internet");
    const [selectedPlan, setSelectedPlan] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlanId, setSelectedPlanId] = useState(null);


    const openModal = (planIndex) => {
        setSelectedPlanId(planIndex);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setSelectedPlanId(null);
    };

    return (
        <>
            <div className={`sticky top-0 z-50 transition-all duration-300 "}`}>
                <Navbar />
            </div>
            <div className="relative py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden">

                <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/3.svg')] before:bg-cover before:bg-center before:opacity-10"></div>
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-50"></div>
                <div className="absolute top-1/3 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-40"></div>


                <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#e31e25] rounded animate-pulse"></div>
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#e31e25] to-blue-400 rounded animate-pulse"></div>
                    <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#e31e25] rounded animate-pulse"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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


                    <div className="flex justify-center mb-12">
                        <div className="inline-flex p-1 rounded-full bg-blue-50 shadow-md">
                            <button
                                onClick={() => setActiveTab("internet")}
                                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === "internet"
                                    ? "bg-gradient-to-r from-[#0e6493] to-[#073a57] text-white shadow-lg"
                                    : "text-[#0e6493] hover:bg-blue-100"
                                    }`}
                            >
                                Internet Fibra Hogar
                            </button>
                            <button
                                onClick={() => setActiveTab("internet2")}
                                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === "internet2"
                                    ? "bg-gradient-to-r from-[#0e6493] to-[#073a57] text-white shadow-lg"
                                    : "text-[#0e6493] hover:bg-blue-100"
                                    }`}
                            >
                                Internet Fibra Comercial
                            </button>
                        </div>
                    </div>


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

                                    <>
                                        <button
                                            onClick={() => openModal(index)}
                                            className={`w-full py-4 rounded-xl font-bold text-base flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl ${plan.featured
                                                ? "bg-white text-[#0e6493] hover:bg-gray-100"
                                                : "bg-gradient-to-r from-[#0e6493] to-[#0a4f7a] text-white hover:from-[#0a4f7a] hover:to-[#073a57]"
                                                }`}
                                        >
                                            <span>¡LO QUIERO!</span>
                                        </button>

                                        {selectedPlanId === index && (
                                            <WhatsAppModal
                                                isOpen={true}
                                                onClose={closeModal}
                                                plan={plan}
                                            />
                                        )}

                                    </>

                                </div>

                            ))}

                        </div>

                    )}

                    {activeTab === "internet2" && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {internetPlans2.map((plan, index) => (
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

                                    <>
                                        <button
                                            onClick={() => openModal(index)}
                                            className={`w-full py-4 rounded-xl font-bold text-base flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl ${plan.featured
                                                ? "bg-white text-[#0e6493] hover:bg-gray-100"
                                                : "bg-gradient-to-r from-[#0e6493] to-[#0a4f7a] text-white hover:from-[#0a4f7a] hover:to-[#073a57]"
                                                }`}
                                        >
                                            <span>¡LO QUIERO!</span>
                                        </button>

                                        {selectedPlanId === index && (
                                            <WhatsAppModal
                                                isOpen={true}
                                                onClose={closeModal}
                                                plan={plan}
                                            />
                                        )}

                                    </>

                                </div>

                            ))}

                        </div>
                    )}
                </div>
            </div>
            <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Social Media Column */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div>
                <img src="/psi.png" alt="PSI Fibra" className="w-32 md:w-40" />
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Servicios</h4>
              <ul className="space-y-3">
                <li><a href="/fibra" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Internet Fibra Óptica
                </a></li>
                <li><a href="/television" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Televisión HD
                </a></li>
                <li><a href="/fibra" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Paquetes
                </a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Empresa</h4>
              <ul className="space-y-3">
                <li><a href="/empresa" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Sobre PSI
                </a></li>
                <li><a href="/normatividad" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Normatividad
                </a></li>
                <li><a href="/tratamiento" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Tratamiento de datos
                </a></li>
                <li><a href="/terminos" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Términos y Condiciones
                </a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300 text-sm">
            <p>&copy; {new Date().getFullYear()} PSI Fibra. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

            <FloatingSocial />
            <Boton />
            <FloatingWhatsApp
                phoneNumber="+573184550936"
                accountName="PSI"
                avatar="/logo.png"
                darkMode={true}
                statusMessage="Normalmente responde en 1 hora"
                chatMessage="¡Hola!, ¿en qué te podemos ayudar?"
                placeholder="Escribe un mensaje"
                notification={true}
                chatboxHeight={340}
            />
        </>
    );
}


