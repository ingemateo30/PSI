"use client";

import Image from "next/image";
import { Globe, Tv, CreditCard, MapPin, Building2 } from "lucide-react";

export default function Navbar() {
    return (
        <div className="relative">
            {/* Top info bar */}
            <div className="bg-[#0e6493] text-white text-xs py-2">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2">
                        <span className="hidden sm:inline font-medium">Conexión de alta velocidad</span>
                    </div>
                    <div className="flex flex-wrap gap-4 sm:gap-6 text-xs">
                        <a href="https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=7895&searchedCategoryId=&searchedAgreementName=PSI%20PROVEEDOR%20DE%20TELECOMUNICACIONES%20SAS"
                            className="hover:underline py-1 flex items-center group transition-all duration-300">
                            <svg className="w-3 h-3 mr-1 group-hover:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                            </svg>
                            <span className="group-hover:text-yellow-300">PAGA TU FACTURA</span>
                        </a>
                        <a href="#" className="hover:underline py-1 hidden md:flex items-center group transition-all duration-300">
                            <svg className="w-3 h-3 mr-1 group-hover:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <span className="group-hover:text-yellow-300">VENTAS 6013714000</span>
                        </a>
                        <a href="#" className="hover:underline py-1 hidden lg:flex items-center group transition-all duration-300">
                            <svg className="w-3 h-3 mr-1 group-hover:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
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
                        {/* Logo with subtle animation */}
                        <div className="flex items-center group cursor-pointer transition-all duration-300 hover:scale-105">
                            <a href="/" className="w-16 h-16 flex items-center scale-200 justify-center">
                                <Image src="/logo.png" alt="PSI Fibra" width={200} height={200} />
                            </a>
                        </div>

                        <div className="hidden lg:flex items-center space-x-2">
                            <a href="/fibra" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493]">
                                <Globe size={18} />
                                <span>Fibra Óptica</span>
                            </a>

                            <a href="/television" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493]">
                                <Tv size={18} />
                                <span>Televisión</span>
                            </a>

                            <a href="https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=7895&searchedCategoryId=&searchedAgreementName=PSI%20PROVEEDOR%20DE%20TELECOMUNICACIONES%20SAS" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493]">
                                <CreditCard size={18} />
                                <span>Pague en línea</span>
                            </a>

                            <a href="/cobertura" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493]">
                                <MapPin size={18} />
                                <span>Cobertura</span>
                            </a>

                            <a href="/empresa" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#0e6493] font-medium text-base hover:scale-105 transition-transform border-b-2 border-transparent hover:border-[#0e6493]">
                                <Building2 size={18} />
                                <span>Empresa</span>
                            </a>
                        </div>

                        {/* Call button with animation */}
                        <div className="hidden lg:flex items-center">
                            <a
                                href="#"
                                className="px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-[#e31e25] to-[#ff3c42] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg flex items-center space-x-2 relative overflow-hidden group"
                            >
                                <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <span>¿Te llamamos?</span>
                                <div className="absolute inset-0 bg-white opacity-20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden flex items-center">
                            <button
                                className="p-3 rounded-md text-gray-700 focus:outline-none hover:bg-gray-100 transition-colors"
                                aria-label="Menú principal"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile menu - simplified non-dropdown version */}
            <div className="lg:hidden bg-white border-t border-gray-100 py-3 shadow-inner hidden">
                <div className="px-4 space-y-3">
                    <a href="/fibra" className="block py-2 text-gray-700 font-medium hover:text-[#0e6493] transition-colors">
                        Fibra Óptica
                    </a>
                    <a href="/television" className="block py-2 text-gray-700 font-medium hover:text-[#0e6493] transition-colors">
                        Televisión
                    </a>
                    <a href="https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=7895&searchedCategoryId=&searchedAgreementName=PSI%20PROVEEDOR%20DE%20TELECOMUNICACIONES%20SAS" className="block py-2 text-gray-700 font-medium hover:text-[#0e6493] transition-colors">
                        Pague en línea
                    </a>
                    <a href="/cobertura" className="block py-2 text-gray-700 font-medium hover:text-[#0e6493] transition-colors">
                        Cobertura
                    </a>
                    <a href="/empresa" className="block py-2 text-gray-700 font-medium hover:text-[#0e6493] transition-colors">
                        Empresa
                    </a>
                    <div className="pt-2 mt-2 border-t border-gray-100">
                        <a href="#" className="flex items-center py-2 px-4 bg-[#e31e25] text-white rounded-md font-medium">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            ¿Te llamamos?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}