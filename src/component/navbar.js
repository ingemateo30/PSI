"use client";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Globe, Tv, CreditCard, MapPin, Building2, Menu, X, Home, UserPlus, Search, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Boton from "@/component/contratarnav"
import localFont from 'next/font/local';



export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPagoMenuOpen, setIsPagoMenuOpen] = useState(false);
    const [isServiciosOpen, setIsServiciosOpen] = useState(false);
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
    return (
        <div>
            <div className="bg-[#0e6493] text-white text-xs py-2">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2">
                        <a
                            href="https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=7895&searchedCategoryId=&searchedAgreementName=PSI%20PROVEEDOR%20DE%20TELECOMUNICACIONES%20SAS"
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
                        <div className="hidden lg:flex items-center space-x-2">
                            <a
                                href="/"
                                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493] font-branding-sf"
                            >
                                <Home size={18} />
                                <span>Inicio</span>
                            </a>
                            {/* MENÚ SERVICIOS */}
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
                                        className={`transition-transform duration-200 ${isServiciosOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Dropdown Servicios */}
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

                                {/* Dropdown */}
                                {isPagoMenuOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fadeIn z-50">
                                        <a
                                            href="https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=7895&searchedCategoryId=&searchedAgreementName=PSI%20PROVEEDOR%20DE%20TELECOMUNICACIONES%20SAS"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#0e6493] transition-colors"
                                            onClick={() => setIsPagoMenuOpen(false)}
                                        >
                                            <CreditCard size={18} className="text-[#0e6493]" />
                                            <span className="font-medium">MiPago</span>
                                        </a>
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
                            {/*  BOTÓN DE REGISTRO */}
                            <a

                                href="/Registro"
                                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493] font-branding-sf"
                            >
                                <UserPlus size={18} />
                                <span>Registro</span>
                            </a>
                        </div>
                        <div className="hidden lg:flex items-center gap-4">

                            {/* Botón Cotizar */}
                            <div className="flex items-center">
                                <Boton />
                            </div>

                            {/* Logo PSE / ePayco */}
                            <a
                                href="https://pde1565542.epayco.me/recaudo/psi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:scale-105 transition"
                            >
                                <Image
                                    src="/pse.png"   // ✅ DEBE EXISTIR EN /public
                                    alt="PSE ePayco"
                                    width={60}
                                    height={30}
                                    className="object-contain"
                                />
                            </a>

                        </div>
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


            <div className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} h-screen overflow-y-auto`}>
                <div className="pt-24 px-4 space-y-4">


                    <a
                        href="/fibra"
                        className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-gray-50 rounded-lg font-branding-sf"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Globe size={20} className="text-[#0e6493]" />
                        <span className="font-medium">Fibra Óptica</span>
                    </a>


                    <a
                        href="/television"
                        className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-gray-50 rounded-lg font-branding-sf"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Tv size={20} className="text-[#0e6493]" />
                        <span className="font-medium">Televisión</span>
                    </a>


                    <div className="space-y-2">
                        <div className="flex items-center space-x-3 p-4 text-gray-700 font-branding-sf font-semibold">
                            <CreditCard size={20} className="text-[#0e6493]" />
                            <span>Pague en línea</span>
                        </div>
                        <div className="ml-8 space-y-2">
                            <a
                                href="https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=7895&searchedCategoryId=&searchedAgreementName=PSI%20PROVEEDOR%20DE%20TELECOMUNICACIONES%20SAS"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="text-sm">→ MiPago</span>
                            </a>
                            <a
                                href="https://pde1565542.epayco.me/recaudo/psi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="text-sm">→ PSE-ePayco</span>
                            </a>
                        </div>
                    </div>



                    <a
                        href="/cobertura"
                        className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-gray-50 rounded-lg font-branding-sf"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <MapPin size={20} className="text-[#0e6493]" />
                        <span className="font-medium">Cobertura</span>
                    </a>


                    <a
                        href="/empresa"
                        className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-gray-50 rounded-lg font-branding-sf"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Building2 size={20} className="text-[#0e6493]" />
                        <span className="font-medium">Empresa</span>
                    </a>
                    {/* 🆕 BOTÓN DE REGISTRO MÓVIL */}
                    <a

                        href="/Registro"
                        className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-gray-50 rounded-lg font-branding-sf"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <UserPlus size={20} className="text-[#0e6493]" />
                        <span className="font-medium">Registro</span>
                    </a>
                    <a
                        href="/consultar"
                        className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-gray-50 rounded-lg font-branding-sf"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Search size={20} className="text-[#0e6493]" />
                        <span className="font-medium">Consultar</span>
                    </a>

                    <div className="pt-4 mt-4 border-t border-gray-100">
                        <a
                            href="https://wa.me/573184550936"
                            className="flex items-center justify-center space-x-2 w-full py-4 px-6 bg-gradient-to-r from-[#e31e25] to-[#ff3c42] text-white rounded-lg font-semibold hover:shadow-md transition-shadow font-branding-sf"
                        >
                            <svg
                                className="w-5 h-5 animate-pulse"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                ></path>
                            </svg>
                            <span>Cotizar ahora</span>
                        </a>
                    </div>

                </div>
            </div>

        </div>
    );
}