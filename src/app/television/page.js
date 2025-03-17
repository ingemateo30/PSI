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
      bgImage: "/4.png" // Placeholder para demo
    },
    "Deportes": {
      channels: ["ESPN", "Fox Sports", "Win Sports", "Directv Sports", "Gol Caracol"],
      icon: "/4.png",
      bgImage: "/api/placeholder/300/200"
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
      <Navbar />
      <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen text-gray-900 py-16 px-6">
        {/* Hero Section */}
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

        {/* Plan Card Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-[#0e6493] p-6 text-white">
              <h3 className="text-3xl font-bold">Plan Full HD</h3>
              <p className="opacity-90">La mejor experiencia de televisión para tu hogar</p>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-4xl font-bold text-[#e31e25]">$49.900 <span className="text-lg text-gray-600 font-normal">/mes</span></p>
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
                  <span>100+ canales HD</span>
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
                  <span>Soporte 24/7</span>
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

        {/* Canales Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-[#0e6493] mb-12">Explora Nuestros Canales</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(canales).map(([categoria, data]) => (
              <div
                key={categoria}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2"
                onClick={() => showChannels(categoria)}
              >
                {/* Background Image with Overlay */}
                <div className="relative h-56">
                  <img
                    src={data.bgImage}
                    alt={categoria}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-white rounded-full p-2 mr-4">
                        <img src={data.icon} alt="" className="w-full object-contain" />
                      </div>
                      <h4 className="text-2xl font-bold">{categoria}</h4>
                    </div>

                    <p className="text-sm opacity-90">
                      {data.channels.length} canales disponibles
                    </p>
                  </div>
                </div>

                {/* Hover Content - Channel List */}
                <div className={`absolute inset-0 bg-[#0e6493] bg-opacity-95 flex flex-col justify-center p-6 text-white transition-all duration-300 ${selectedCategory === categoria ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <h4 className="text-xl font-bold mb-4">Canales de {categoria}</h4>
                  <ul className="space-y-2">
                    {data.channels.map((canal, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-[#e31e25] rounded-full mr-2"></span>
                        {canal}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 self-start bg-[#e31e25] hover:bg-red-700 text-white text-sm py-2 px-4 rounded transition">
                    Ver todos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-20 text-center bg-gradient-to-r from-[#0e6493] to-[#073a57] rounded-2xl shadow-xl p-12 text-white relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
          </div>

          {/* Contenido principal */}
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">¿Listo para disfrutar la mejor TV?</h3>
            <p className="text-lg mb-8 max-w-xl mx-auto">
              Contrata ahora y recibe instalación gratuita y el primer mes con 50% de descuento
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#e31e25] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition">
                Contratar ahora
              </button>
              <button className="bg-white hover:bg-gray-100 text-[#0e6493] font-bold py-3 px-8 rounded-lg shadow-lg transition">
                Ver planes internet
              </button>
            </div>
          </div>
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

