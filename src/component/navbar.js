"use client";

import Image from "next/image";
import { Globe, Tv, CreditCard, MapPin, Building2, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative">
            {/* Top info bar */}
            <div className="bg-[#0e6493] text-white text-xs py-2">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2">
                        <span className="hidden sm:inline font-medium">PROVEEDOR DE TELECOMUNICACIONES S.A.S</span>
                    </div>
                    <div className="flex flex-wrap gap-4 sm:gap-6 text-xs">
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
                            href="#"
                            className="hover:underline py-1 hidden md:flex items-center group transition-all duration-300"
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
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                ></path>
                            </svg>
                            <span className="group-hover:text-yellow-300">VENTAS 6013714000</span>
                        </a>
                        <a
                            href="#"
                            className="hover:underline py-1 hidden lg:flex items-center group transition-all duration-300"
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
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                ></path>
                            </svg>
                            <span className="group-hover:text-yellow-300">SOPORTE TECNICO 018000128999</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main navbar */}
            <nav className="bg-white shadow-lg sticky top-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-24 items-center">
                        {/* Logo */}
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


                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-2">
                            <a
                                href="/fibra"
                                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493]"
                            >
                                <Globe size={18} />
                                <span>Fibra Óptica</span>
                            </a>

                            <a
                                href="/television"
                                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493]"
                            >
                                <Tv size={18} />
                                <span>Televisión</span>
                            </a>

                            <a
                                href="https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=7895&searchedCategoryId=&searchedAgreementName=PSI%20PROVEEDOR%20DE%20TELECOMUNICACIONES%20SAS"
                                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493]"
                            >
                                <CreditCard size={18} />
                                <span>Pague en línea</span>
                            </a>

                            <a
                                href="/cobertura"
                                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493]"
                            >
                                <MapPin size={18} />
                                <span>Cobertura</span>
                            </a>

                            <a
                                href="/empresa"
                                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493]"
                            >
                                <Building2 size={18} />
                                <span>Empresa</span>
                            </a>
                        </div>

                        {/* Desktop Call Button */}
                        <div className="hidden lg:flex items-center">
                            <a
                                href="#"
                                className="px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-[#e31e25] to-[#ff3c42] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg flex items-center space-x-2 relative overflow-hidden group"
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
                                <div className="absolute inset-0 bg-white opacity-20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                            </a>
                        </div>

                        {/* Mobile menu button */}
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

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} h-screen overflow-y-auto`}>
                <div className="pt-24 px-4 space-y-4">

                    {/* Fibra Óptica */}
                    <a
                        href="/fibra"
                        className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-gray-50 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Globe size={20} className="text-[#0e6493]" />
                        <span className="font-medium">Fibra Óptica</span>
                    </a>

                    {/* Televisión */}
                    <a
                        href="/television"
                        className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-gray-50 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Tv size={20} className="text-[#0e6493]" />
                        <span className="font-medium">Televisión</span>
                    </a>

                    {/* Pague en línea */}
                    <a
                        href="https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=7895&searchedCategoryId=&searchedAgreementName=PSI%20PROVEEDOR%20DE%20TELECOMUNICACIONES%20SAS"
                        className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-gray-50 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <CreditCard size={20} className="text-[#0e6493]" />
                        <span className="font-medium">Pague en línea</span>
                    </a>

                    {/* Cobertura */}
                    <a
                        href="/cobertura"
                        className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-gray-50 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <MapPin size={20} className="text-[#0e6493]" />
                        <span className="font-medium">Cobertura</span>
                    </a>

                    {/* Empresa */}
                    <a
                        href="/empresa"
                        className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-gray-50 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Building2 size={20} className="text-[#0e6493]" />
                        <span className="font-medium">Empresa</span>
                    </a>

                    {/* Botón Cotizar */}
                    <div className="pt-4 mt-4 border-t border-gray-100">
                        <a
                            href="#"
                            className="flex items-center justify-center space-x-2 w-full py-4 px-6 bg-gradient-to-r from-[#e31e25] to-[#ff3c42] text-white rounded-lg font-semibold hover:shadow-md transition-shadow"
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