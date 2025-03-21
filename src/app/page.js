"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Hero from '@/component/hero';
import Navbar from '@/component/navbar';
import Planes from '@/component/planes';
import Image from 'next/image';
import FloatingSocial from '@/component/redes';
import Velocidad from '@/component/velocidad';
import Boton from '@/component/botonsubir';
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const Map = dynamic(() => import("@/component/mapa"), { ssr: false });
import Caracteristica from '@/component/caracteristicas';
import Enlaces from '@/component/enlaces'
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ArrowRight, MapPin, Phone, Star, UserCheck, Leaf, Recycle, Sun, Truck, CloudLightning } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    year: 2022,
    review: "El servicio es excelente, muy rápido y confiable.",
    image: "/avatars/maria.jpg",
  },
  {
    name: "Carlos Rodríguez",
    year: 2023,
    review: "Increíble experiencia, atención al cliente de primer nivel.",
    image: "/avatars/carlos.jpg",
  },
  {
    name: "Ana Martínez",
    year: 2024,
    review: "Muy recomendable, siempre cumplen con lo prometido.",
    image: "/avatars/ana.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>PSI - Internet y Televisión por Fibra Óptica</title>
        <meta name="description" content="Tu compañía de internet y televisión por fibra óptica con la mejor velocidad y servicio" />
        <meta name="keywords" content="fibra óptica, internet, televisión, PSI, alta velocidad" />
        <meta property="og:title" content="PSI - Internet y Televisión por Fibra Óptica" />
        <meta property="og:description" content="Tu compañía de internet y televisión por fibra óptica" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="sticky top-0 z-50">
        <Navbar />
      </motion.div>

      <Hero />

      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <Caracteristica />
      </section>


      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="relative bg-gradient-to-r from-[#0e6493] to-[#073a57] py-20 text-white overflow-hidden">
        <div className="relative container mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-bold mb-6">
            ¡Cobertura de PSI Fibra/TV!
          </motion.h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Conéctate a la mejor red de fibra óptica en las siguientes ciudades:
          </p>

          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
  {["San Gil", "Socorro", "Piedecuesta"].map((city, index) => (
    <motion.div 
      key={city} 
      initial={{ scale: 0.8, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      transition={{ delay: 0.1 * index }} 
      className="bg-white/10 p-6 rounded-xl shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 w-full max-w-xs"
    >
      <div className="flex items-center justify-center mb-4">
        <div className="p-3 bg-white/20 rounded-full">
          <MapPin size={28} />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-3 text-center">{city}</h3>
      <p className="text-gray-100 text-center">Conectividad premium en {city}.</p>
    </motion.div>
  ))}
</motion.div>

        </div>
      </motion.section>

      <section className="">
        <Planes />
      </section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <Map />
      </motion.section>

      <section id="velocidad">
        <Velocidad />
      </section>
      {/* Sostenibilidad */}
      <section id="sostenibilidad" className="py-10 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full opacity-20 translate-y-1/2 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-[#126491] mb-4">Sostenibilidad Ambiental</h2>
            <div className="w-16 h-1 bg-[#af5661] mx-auto mb-6"></div>
            <p className="text-gray-600">Nuestra contribución a un futuro más sostenible para Colombia y el planeta</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Imagen con efectos mejorados */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl transform md:rotate-1 transition-all duration-500 hover:rotate-0 hover:scale-[1.02]">
                <Image
                  src="/paneles1.jpeg"
                  alt="Sostenibilidad Ambiental"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#126491]/60 to-transparent"></div>

              </div>
            </div>

            <div className="md:w-1/2 w-full mt-8 md:mt-0">
              <h3 className="text-2xl font-semibold text-[#126491] mb-6 flex items-center">
                Nuestra Visión Sostenible
              </h3>

              <p className="text-lg text-gray-700 mb-6">
                Creemos firmemente en la necesidad de impulsar la transición energética y apostamos por las energías renovables como pilar de nuestro futuro.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-md mb-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h4 className="font-semibold text-lg mb-3 flex items-center text-gray-800">
                  <CloudLightning className="w-5 h-5 mr-2 text-[#af5661]" />
                  Energía Solar
                </h4>
                <p className="text-gray-600">
                  Con la instalación de paneles solares en nuestra sede principal, aportamos significativamente a la reducción de emisiones de CO₂.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h4 className="font-semibold text-lg mb-3 flex items-center text-gray-800">
                  <Recycle className="w-5 h-5 mr-2 text-[#af5661]" />
                  Digitalización Verde
                </h4>
                <p className="text-gray-600">
                  Adoptamos políticas de reducción en el uso de papel implementando trámites digitales, facturación electrónica y comunicación digital para minimizar nuestro impacto ambiental en todas nuestras operaciones logísticas.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center bg-green-50 py-2 px-4 rounded-full">
                  <Leaf className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-green-800 text-sm">Reducción de emisiones</span>
                </div>
                <div className="flex items-center bg-blue-50 py-2 px-4 rounded-full">
                  <Truck className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-blue-800 text-sm">Logística sostenible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Enlaces />
      </section>
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
      <FloatingSocial />
      <Boton />
    </div>
  );
}
