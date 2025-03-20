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
import { ArrowRight, MapPin, Phone, Star, UserCheck, Leaf, Recycle, Sun, Truck, CloudLightning} from "lucide-react";

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

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {["San Gil", "Socorro", "Piedecuesta", "Campoalegre"].map((city, index) => (
              <motion.div key={city} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 * index }} className="bg-white/10 p-6 rounded-xl shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
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
                    Con la instalación de paneles solares en nuestra sede principal, aportamos significativamente a la reducción de emisiones de CO₂, disminuyendo nuestra huella de carbono en el transporte de carga colombiano.
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-2">
                <img src="/psi.png" alt="PSI Fibra" className="w-32 md:w-40" />
              </div>
            </div>


            <div>
              <h4 className="text-lg font-bold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="/fibra" className="text-gray-300 hover:text-white">Internet Fibra Óptica</a></li>
                <li><a href="/television" className="text-gray-300 hover:text-white">Televisión HD</a></li>
                <li><a href="/fibra" className="text-gray-300 hover:text-white">Paquetes</a></li>
                <li><a href="/empresa" className="text-gray-300 hover:text-white">Empresas</a></li>
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
                <li><a href="/empresa" className="text-gray-300 hover:text-white">Sobre PSI</a></li>
                <li><a href="/normatividad" className="text-gray-300 hover:text-white">Normatividad</a></li>
                <li><a href="/tratamiento" className="text-gray-300 hover:text-white">Tratamiento de datos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Términos y Condiciones</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
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
