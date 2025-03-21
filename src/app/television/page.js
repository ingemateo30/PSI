"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from '@/component/navbar';
import FloatingSocial from '@/component/redes';
import Boton from '@/component/botonsubir';
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { motion } from "framer-motion";

export default function Television() {
  const canales = {
    "Noticias": {
      channels: ["CNN", "BBC News", "Caracol Noticias", "RCN Noticias", "NTN24"],
      icon: "/images/noticias-icon.png", // Asegúrate de tener estos íconos
      bgImage: "/deporte.png" // Placeholder para demo
    },
    "Deportes": {
      channels: ["ESPN", "ESPN2", "ESPN3", "ESPN4", "ESPN5", "ESPN6", "ESPN7", "discovery turbo"],
      icon: "/4.png",
      bgImage: "/deporte2.png"
    },
    "Entretenimiento": {
      channels: ["FX", "TNT", "Warner Channel", "Sony", "Universal"],
      icon: "/images/entretenimiento-icon.png",
      bgImage: "/api/placeholder/300/200"
    },
    "Películas": {
      channels: ["HBO", "Cinemax", "Paramount Channel", "Golden", "Star Channel"],
      icon: "/images/peliculas-icon.png",
      bgImage: "/api/placeholder/300/200"
    },
    "Infantil": {
      channels: ["Cartoon Network", "Disney Channel", "Nickelodeon", "Discovery Kids", "Baby TV"],
      icon: "/images/infantil-icon.png",
      bgImage: "/api/placeholder/300/200"
    },
    "Música": {
      channels: ["MTV", "VH1", "Telehit", "HTV", "MuchMusic"],
      icon: "/images/musica-icon.png",
      bgImage: "/api/placeholder/300/200"
    },
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  // Función para mostrar los canales de una categoría
  const showChannels = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <>
      <div className={`sticky top-0 z-50 transition-all duration-300 "}`}>
        <Navbar />
      </div>

      <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen text-gray-900 py-16 px-6">

        <div className="relative overflow-hidden rounded-xl max-w-6xl mx-auto mb-16 bg-[#0e6493] shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[url('/tv.jpg')] bg-cover bg-center"></div>
          <div className="relative z-10 text-white p-12 md:p-16 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Plan de Televisión</h2>
              <p className="text-lg md:text-xl mb-8">
                Disfruta de una experiencia visual inigualable con nuestra selección premium de canales HD.
              </p>
              <button className="bg-[#e31e25] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105">
                ¡Descubre más!
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-[#e31e25] rounded-full opacity-20 animate-ping"></div>
                <div className="relative bg-white p-4 rounded-xl shadow-xl transform rotate-3">
                  <img src="/logo.png" alt="TV Experience" className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-[#0e6493] p-6 text-white">
              <h3 className="text-3xl font-bold">Plan Full HD</h3>
              <p className="opacity-90">La mejor experiencia de televisión para tu hogar</p>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-4xl font-bold text-[#e31e25]">$44.900 <span className="text-lg text-gray-600 font-normal">/mes</span></p>
                  <p className="text-gray-600 mt-1">Sin cláusulas de permanencia</p>
                </div>
                <button className="bg-[#e31e25] text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition shadow-md">
                  Suscribirse
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#0e6493] flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>87+ canales HD</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#0e6493] flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Deportes y eventos PPV</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#0e6493] flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Canales internacionales</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center my-16 px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0e6493] mb-8">
            Canales Disponibles
          </h3>

          <div className="relative w-full max-w-[505px] h-auto mx-auto shadow-2xl rounded-xl overflow-hidden">
            <Image
              src="/canales.png"
              alt="Canales Disponibles"
              width={505}
              height={550}
              className="w-full h-auto object-contain md:object-cover"
            />
          </div>
        </div>




        <div className="max-w-4xl mx-auto mt-20 text-center bg-gradient-to-r from-[#0e6493] to-[#073a57] rounded-2xl shadow-xl p-12 text-white relative overflow-hidden">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
          </div>


          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">¿Listo para disfrutar la mejor TV?</h3>
            <p className="text-lg mb-8 max-w-xl mx-auto">
              Contrata ahora y recibe instalación gratuita y el primer mes con 50% de descuento
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/"
                className="bg-[#e31e25] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition text-center"
              >
                Contratar ahora
              </a>

              <a
                href="/fibra"
                className="bg-white hover:bg-gray-100 text-[#0e6493] font-bold py-3 px-8 rounded-lg shadow-lg transition text-center"
              >
                Ver planes internet
              </a>

            </div>
          </div>
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

