"use client";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Globe, Tv, CreditCard, MapPin, Building2, Menu, X, Home, UserPlus, Search, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Boton from "@/component/contratarnav"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPagoMenuOpen, setIsPagoMenuOpen] = useState(false);
    const [isServiciosOpen, setIsServiciosOpen] = useState(false);
    const [isPagoMobileOpen, setIsPagoMobileOpen] = useState(false);
    const serviciosMenuRef = useRef(null);
    const pagoMenuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (pagoMenuRef.current && !pagoMenuRef.current.contains(event.target)) {
                setIsPagoMenuOpen(false);
            }
            if (serviciosMenuRef.current && !serviciosMenuRef.current.contains(event.target)) {
                setIsServiciosOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Prevenir scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <div>
            {/* Barra superior */}
            <div className="bg-[#0e6493] text-white text-xs py-2">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2">
                        <a
                            href="https://pde1565542.epayco.me/recaudo/psi"
                            className="hover:underline py-1 flex items-center group transition-all duration-300"
                        >
                            <svg
                                className="w-3 h-3 mr-1 group-hover:text-yellow-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                ></path>
                            </svg>
                            <span className="group-hover:text-yellow-300">PAGA TU FACTURA</span>
                        </a>
                        <a
                            href="#velocidad"
                            className="hover:underline py-1 flex items-center group transition-all duration-300"
                        >
                            <svg
                                className="w-6 h-6 mr-2 group-hover:text-yellow-300"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                -
                            </svg>
                            <span className="group-hover:text-yellow-300">PRUEBA TU VELOCIDAD</span>
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-4 sm:gap-6 text-xs">
                        <a
                            href="https://wa.me/573184550936"
                            className="hover:underline py-1 hidden md:flex items-center group transition-all duration-300"
                        >
                            <FaWhatsapp className="w-3 h-3 mr-1 group-hover:text-yellow-300" />
                            <span className="group-hover:text-yellow-300">San Gil 3184550936</span>
                        </a>
                        <a
                            href="https://wa.me/573188237392"
                            className="hover:underline py-1 hidden lg:flex items-center group transition-all duration-300"
                        >
                            <FaWhatsapp className="w-3 h-3 mr-1 group-hover:text-yellow-300" />
                            <span className="group-hover:text-yellow-300">Socorro 3188237392</span>
                        </a>
                        <a
                            href="https://wa.me/573187305239"
                            className="hover:underline py-1 hidden lg:flex items-center group transition-all duration-300"
                        >
                            <FaWhatsapp className="w-3 h-3 mr-1 group-hover:text-yellow-300" />
                            <span className="group-hover:text-yellow-300">Piedecuesta 3187305239</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Navbar principal */}
            <nav className="bg-white shadow-lg sticky top-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-24 items-center">
                        <div className="flex items-center group cursor-pointer transition-all scale-200 duration-300 sm:hover:scale-105 p-2 sm:p-0">
                            <a href="/" className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16">
                                <Image
                                    src="/logo.png"
                                    alt="PSI Fibra"
                                    width={160}
                                    height={160}
                                    className="object-contain"
                                />
                            </a>
                        </div>

                        {/* Menú Desktop */}
                        <div className="hidden lg:flex items-center space-x-2">
                            <a
                                href="/"
                                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493] font-branding-sf"
                            >
                                <Home size={18} />
                                <span>Inicio</span>
                            </a>

                            {/* MENÚ DESPLEGABLE SERVICIOS */}
                            <div className="relative" ref={serviciosMenuRef}>
                                <button
                                    onClick={() => setIsServiciosOpen(!isServiciosOpen)}
                                    className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-all border-b-2 border-transparent hover:border-[#0e6493] font-branding-sf"
                                >
                                    <Globe size={18} />
                                    <span>Servicios</span>
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-200 ${isServiciosOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {isServiciosOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fadeIn z-50">
                                        <a
                                            href="/fibra"
                                            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#0e6493] transition-colors"
                                            onClick={() => setIsServiciosOpen(false)}
                                        >
                                            <Globe size={18} className="text-[#0e6493]" />
                                            <span className="font-medium">Fibra Óptica</span>
                                        </a>
                                        <div className="border-t border-gray-100 my-1"></div>
                                        <a
                                            href="/television"
                                            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#0e6493] transition-colors"
                                            onClick={() => setIsServiciosOpen(false)}
                                        >
                                            <Tv size={18} className="text-[#0e6493]" />
                                            <span className="font-medium">Televisión</span>
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* MENÚ DESPLEGABLE PAGUE EN LÍNEA */}
                            <div className="relative" ref={pagoMenuRef}>
                                <button
                                    onClick={() => setIsPagoMenuOpen(!isPagoMenuOpen)}
                                    className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-all border-b-2 border-transparent hover:border-[#0e6493] font-branding-sf"
                                >
                                    <CreditCard size={18} />
                                    <span>Pague en línea</span>
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-200 ${isPagoMenuOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {isPagoMenuOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fadeIn z-50">
                                        <div className="border-t border-gray-100 my-1"></div>
                                        <a
                                            href="https://pde1565542.epayco.me/recaudo/psi"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#0e6493] transition-colors"
                                            onClick={() => setIsPagoMenuOpen(false)}
                                        >
                                            <CreditCard size={18} className="text-[#0e6493]" />
                                            <span className="font-medium">PSE-ePayco</span>
                                        </a>
                                    </div>
                                )}
                            </div>

                            <a
                                href="/cobertura"
                                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493] font-branding-sf"
                            >
                                <MapPin size={18} />
                                <span>Cobertura</span>
                            </a>

                            <a
                                href="/empresa"
                                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493] font-branding-sf"
                            >
                                <Building2 size={18} />
                                <span>Empresa</span>
                            </a>

                            <a
                                href="/consultar"
                                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493] font-branding-sf"
                            >
                                <Search size={18} />
                                <span>Consultar</span>
                            </a>

                            <a
                                href="/Registro"
                                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493] font-branding-sf"
                            >
                                <UserPlus size={18} />
                                <span>Registro</span>
                            </a>
                        </div>

                        <div className="hidden lg:flex items-center gap-4">
                            <div className="flex items-center">
                                <Boton />
                            </div>
                            <a
                                href="https://pde1565542.epayco.me/recaudo/psi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:scale-105 transition"
                            >
                                <Image
                                    src="/pse.png"
                                    alt="PSE ePayco"
                                    width={60}
                                    height={30}
                                    className="object-contain"
                                />
                            </a>
                        </div>

                        {/* Botón hamburguesa móvil */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-3 rounded-md text-gray-700 focus:outline-none hover:bg-gray-100 transition-colors"
                                aria-label="Menú principal"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Menú móvil mejorado */}
            {isMenuOpen && (
                <>
                    {/* Overlay oscuro con animación */}
                    <div 
                        className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 animate-fadeIn"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Panel del menú móvil */}
                    <div className="lg:hidden fixed inset-y-0 left-0 right-0 z-50 bg-white shadow-2xl animate-slideDown">
                        {/* Header del menú móvil */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
                            <div className="flex items-center space-x-3">
                                <Image
                                    src="/logo.png"
                                    alt="PSI Fibra"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                                <span className="text-lg font-bold text-[#0e6493]">Menú</span>
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Cerrar menú"
                            >
                                <X size={24} className="text-gray-700" />
                            </button>
                        </div>

                        {/* Contenido scrolleable del menú */}
                        <div className="overflow-y-auto h-[calc(100vh-73px)] pb-6">
                            <div className="px-4 pt-4 space-y-2">
                                {/* Inicio */}
                                <a
                                    href="/"
                                    className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-blue-50 rounded-xl transition-colors font-branding-sf"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Home size={20} className="text-[#0e6493]" />
                                    <span className="font-medium">Inicio</span>
                                </a>

                                {/* Fibra Óptica */}
                                <a
                                    href="/fibra"
                                    className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-blue-50 rounded-xl transition-colors font-branding-sf"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Globe size={20} className="text-[#0e6493]" />
                                    <span className="font-medium">Fibra Óptica</span>
                                </a>

                                {/* Televisión */}
                                <a
                                    href="/television"
                                    className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-blue-50 rounded-xl transition-colors font-branding-sf"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Tv size={20} className="text-[#0e6493]" />
                                    <span className="font-medium">Televisión</span>
                                </a>

                                {/* Pague en línea - Acordeón mejorado */}
                                <div className="rounded-xl overflow-hidden border border-gray-200">
                                    <button
                                        onClick={() => setIsPagoMobileOpen(!isPagoMobileOpen)}
                                        className="flex items-center justify-between w-full p-4 text-gray-700 hover:bg-blue-50 transition-colors font-branding-sf"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <CreditCard size={20} className="text-[#0e6493]" />
                                            <span className="font-medium">Pague en línea</span>
                                        </div>
                                        <ChevronDown 
                                            size={20} 
                                            className={`text-gray-500 transition-transform duration-300 ${isPagoMobileOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    
                                    <div className={`overflow-hidden transition-all duration-300 ${isPagoMobileOpen ? 'max-h-40' : 'max-h-0'}`}>
                                        <div className="bg-gray-50 px-4 pb-2 space-y-2">
                                            <a
                                                href="https://pde1565542.epayco.me/recaudo/psi"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-white rounded-lg transition-colors"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <div className="w-2 h-2 rounded-full bg-[#0e6493]"></div>
                                                <span className="text-sm font-medium">PSE-ePayco</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Cobertura */}
                                <a
                                    href="/cobertura"
                                    className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-blue-50 rounded-xl transition-colors font-branding-sf"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <MapPin size={20} className="text-[#0e6493]" />
                                    <span className="font-medium">Cobertura</span>
                                </a>

                                {/* Empresa */}
                                <a
                                    href="/empresa"
                                    className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-blue-50 rounded-xl transition-colors font-branding-sf"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Building2 size={20} className="text-[#0e6493]" />
                                    <span className="font-medium">Empresa</span>
                                </a>

                                {/* Consultar */}
                                <a
                                    href="/consultar"
                                    className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-blue-50 rounded-xl transition-colors font-branding-sf"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Search size={20} className="text-[#0e6493]" />
                                    <span className="font-medium">Consultar</span>
                                </a>

                                {/* Registro */}
                                <a
                                    href="/Registro"
                                    className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-blue-50 rounded-xl transition-colors font-branding-sf"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <UserPlus size={20} className="text-[#0e6493]" />
                                    <span className="font-medium">Registro</span>
                                </a>

                                {/* Botón de contacto destacado */}
                                <div className="pt-6 mt-6 border-t border-gray-200">
                                    <a
                                        href="https://wa.me/573184550936"
                                        className="flex items-center justify-center space-x-2 w-full py-4 px-6 bg-gradient-to-r from-[#e31e25] to-[#ff3c42] text-white rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 font-branding-sf"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <FaWhatsapp className="w-5 h-5 animate-pulse" />
                                        <span>Cotizar ahora</span>
                                    </a>
                                </div>

                                {/* Números de contacto móvil */}
                                <div className="pt-4 space-y-3">
                                    <p className="text-xs text-gray-500 font-semibold px-2">Contáctanos:</p>
                                    <a
                                        href="https://wa.me/573184550936"
                                        className="flex items-center space-x-3 p-3 text-sm text-gray-600 hover:bg-green-50 rounded-lg transition-colors"
                                    >
                                        <FaWhatsapp className="w-4 h-4 text-green-600" />
                                        <span>San Gil: 318 455 0936</span>
                                    </a>
                                    <a
                                        href="https://wa.me/573188237392"
                                        className="flex items-center space-x-3 p-3 text-sm text-gray-600 hover:bg-green-50 rounded-lg transition-colors"
                                    >
                                        <FaWhatsapp className="w-4 h-4 text-green-600" />
                                        <span>Socorro: 318 823 7392</span>
                                    </a>
                                    <a
                                        href="https://wa.me/573187305239"
                                        className="flex items-center space-x-3 p-3 text-sm text-gray-600 hover:bg-green-50 rounded-lg transition-colors"
                                    >
                                        <FaWhatsapp className="w-4 h-4 text-green-600" />
                                        <span>Piedecuesta: 318 730 5239</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <style jsx global>{`
                @keyframes slideDown {
                    from {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .animate-slideDown {
                    animation: slideDown 0.3s ease-out;
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}