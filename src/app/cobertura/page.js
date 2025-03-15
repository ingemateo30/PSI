"use client";

import { useState, useEffect } from "react";
import Navbar from '@/component/navbar';
import FloatingSocial from '@/component/redes';
import Boton from '@/component/botonsubir';
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { motion } from "framer-motion";

export default function Cobertura() {
    const [direccion, setDireccion] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [animateCards, setAnimateCards] = useState(false);
  
    useEffect(() => {
      // Activar animación de las tarjetas después de cargar la página
      setAnimateCards(true);
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      
      // Simulación de verificación
      setTimeout(() => {
        setIsLoading(false);
        alert(`Verificando cobertura para: ${direccion}`);
      }, 1500);
    };
  
    return (
      <>
        <Navbar />
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen text-gray-900 py-16 px-6">
          {/* Hero Section con fondo y animación */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative"
          >
            <div className="absolute inset-0 bg-blue-500 opacity-5 rounded-3xl -z-10"></div>
            <div className="py-12 px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0e6493] mb-6">
                ¡Conéctate con <span className="text-[#e31e25]">PSI Fibra</span>!
              </h2>
              <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600">
                Descubre la mejor cobertura de fibra óptica en tu ciudad. 
                <span className="hidden md:inline"> Verifica disponibilidad y únete a la mejor conexión.</span>
              </p>
              
              {/* Indicadores de velocidad */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-white px-4 py-2 rounded-full shadow-md flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="font-medium">Hasta 1 Gbps</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-md flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="font-medium">Fibra 100% dedicada</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-md flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="font-medium">Latencia mínima</span>
                </div>
              </div>
            </div>
          </motion.div>
  
          {/* Mapa de Cobertura Visual */}
          <div className="max-w-7xl mx-auto mb-16 relative overflow-hidden rounded-xl shadow-xl">
            <div className="relative h-64 md:h-80 bg-[#0e6493] overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path fill="#ffffff" d="M40,-65.5C53.5,-60.3,67.1,-52.6,75.5,-40.8C83.9,-28.9,87.1,-12.9,85.8,2.2C84.5,17.3,78.7,31.5,69.6,42.9C60.5,54.3,48.1,62.9,34.8,68.2C21.5,73.6,7.3,75.7,-7.4,75.9C-22,76.1,-44,74.4,-61.6,66C-79.2,57.5,-92.4,42.4,-97.8,24.7C-103.2,7,-100.8,-13.3,-92.9,-30C-85.1,-46.7,-71.7,-59.9,-56.3,-64.6C-40.9,-69.4,-23.5,-65.7,-7.4,-63.3C8.7,-60.9,26.5,-70.7,40,-65.5Z" transform="translate(100 100)" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4">Mapa de Cobertura</h3>
                  <p className="max-w-md mx-auto">Contamos con amplia cobertura en Santander y Huila</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="flex flex-wrap justify-center gap-6">
                {["San Gil", "Socorro", "Piedecuesta", "Campoalegre"].map((city, index) => (
                  <div key={city} className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-[#e31e25] mr-2"></div>
                    <span className="font-medium">{city}</span>
                    {index < 3 && <span className="mx-2 text-gray-300 hidden md:inline">•</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
  
  
          {/* Formulario de Consulta Mejorado */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 max-w-lg mx-auto bg-white p-8 rounded-xl shadow-2xl text-center border border-gray-100"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-2xl font-semibold text-[#0e6493] mb-4">Consulta tu cobertura</h3>
            <p className="text-gray-600 mb-6">Ingresa tu dirección y te confirmaremos la disponibilidad del servicio.</p>
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Ejemplo: Calle 10 #5-20, San Gil"
                  className="w-full pl-10 p-4 rounded-lg border border-gray-300 focus:border-[#0e6493] focus:ring-2 focus:ring-[#0e6493] focus:outline-none transition-all duration-200"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="mt-6 w-full bg-[#e31e25] text-white font-semibold py-4 rounded-lg hover:bg-red-600 transition-all duration-300 flex items-center justify-center"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verificando...
                  </span>
                ) : (
                  <span>📍 Verificar cobertura</span>
                )}
              </button>
            </form>
          </motion.div>
  
          {/* Ventajas con iconos */}
          <div className="max-w-5xl mx-auto mt-20">
            <h3 className="text-2xl font-bold text-center text-[#0e6493] mb-10">¿Por qué elegir PSI Fibra?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Alta Velocidad",
                  description: "Conexión ultrarrápida para todas tus actividades online."
                },
                {
                  icon: "🛡️",
                  title: "Estabilidad",
                  description: "Sin caídas ni interrupciones en tu señal de internet."
                },
                {
                  icon: "💰",
                  title: "Mejor Precio",
                  description: "Planes accesibles con la mejor relación calidad-precio."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={animateCards ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-semibold text-[#0e6493] mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
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
          phoneNumber="573204000000"
          accountName="PSI Fibra"
          avatar="https://psi-fibra.vercel.app/logo.png"
          chatMessage="¡Hola! ¿En qué podemos ayudarte?"
          allowClickAway
          darkMode={false}
        />
      </>
    );
  }