"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Hero from '@/component/hero';
import Navbar from '@/component/navbar';
import Planes from '@/component/planes';
import FloatingSocial from '@/component/redes';
import Boton from '@/component/botonsubir';
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const Map = dynamic(() => import("@/component/mapa"), { ssr: false });
import Caracteristica from '@/component/caracteristicas';
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ArrowRight, MapPin, Phone, Star, UserCheck } from "lucide-react";

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

      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <Planes />
      </section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <Map />
      </motion.section>

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

      <FloatingWhatsApp phoneNumber="+573212631673" accountName="Jelcom soluciones informáticas" darkMode={true} />
      <FloatingSocial />
      <Boton />
    </div>
  );
}
