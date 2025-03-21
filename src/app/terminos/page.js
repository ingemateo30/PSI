"use client";
import { motion } from "framer-motion";
import Head from 'next/head';
import { useState } from 'react';
import Navbar from '@/component/navbar';
import { ChevronRight, Zap, Clock, FileText, Check, X, Download, Eye } from "lucide-react";
import FloatingSocial from '@/component/redes';
import Boton from '@/component/botonsubir';

export default function InstalacionServicio() {
  const [showContractPreview, setShowContractPreview] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  
  const toggleContractPreview = (option) => {
    setSelectedOption(option);
    setShowContractPreview(!showContractPreview);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Costos de Instalación | PSI</title>
        <meta name="description" content="Información sobre costos de instalación del servicio de internet de PSI - Proveedor de Telecomunicaciones S.A.S." />
        <link rel="icon" href="/logo.png" />
      </Head>

      <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="sticky top-0 z-50">
        <Navbar />
      </motion.div>
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-16 bg-gradient-to-r from-[#0e6493] to-[#073a57] text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block p-3 rounded-full bg-white/10 mb-6">
            <Zap size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Instalación de Servicios</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Conoce las opciones de instalación para tu servicio de internet con fibra óptica
          </p>
        </div>
      </motion.section>

      <div className="relative py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="absolute inset-0">
          <div className="bg-gradient-to-b from-white to-blue-50 w-full h-full opacity-80"></div>
        </div>
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/3.svg')] before:bg-cover before:bg-center before:opacity-20"></div>

        <div className="relative container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#0e6493] mb-4">Opciones de Instalación</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                En PSI queremos facilitar tu acceso a nuestros servicios de internet con fibra óptica. 
                Elige la opción que mejor se adapte a tus necesidades.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Opción con permanencia */}
              <motion.div 
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-600 py-4 text-center text-white">
                  <h3 className="text-xl font-bold">Plan con Permanencia</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-gray-500 text-sm">Costo de instalación</span>
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-[#0e6493]">$50,000</span>
                    </div>
                    <div className="mt-2 inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                      <Clock size={16} className="mr-1" />
                      <span className="text-sm font-medium">Permanencia 6 meses</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Instalación profesional con técnicos certificados</span>
                    </div>
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Equipo ONT doble banda</span>
                    </div>
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Compromiso de permanencia por 6 meses</span>
                    </div>
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Soporte técnico postventa</span>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <button onClick={() => toggleContractPreview('permanencia')} className="flex items-center justify-center px-4 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                      <Eye size={20} className="mr-2" />
                      Previsualizar contrato
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Opción sin permanencia */}
              <motion.div 
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#e31e25] py-4 text-center text-white">
                  <h3 className="text-xl font-bold">Plan Sin Permanencia</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-gray-500 text-sm">Costo de instalación</span>
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-[#e31e25]">$150,000</span>
                    </div>
                    <div className="mt-2 inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full">
                      <X size={16} className="mr-1" />
                      <span className="text-sm font-medium">Sin permanencia</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Instalación profesional con técnicos certificados</span>
                    </div>
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Equipo ONT doble banda</span>
                    </div>
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Libertad para cancelar en cualquier momento</span>
                    </div>
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Soporte técnico postventa</span>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <button onClick={() => toggleContractPreview('sin-permanencia')} className="flex items-center justify-center px-4 py-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                      <Eye size={20} className="mr-2" />
                      Previsualizar contrato
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de previsualización del contrato (PDF) */}
      {showContractPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-[#0e6493]">
                Contrato de Servicio - {selectedOption === 'permanencia' ? 'Con Permanencia (6 meses)' : 'Sin Permanencia'}
              </h3>
              <button onClick={() => setShowContractPreview(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-grow relative w-full" style={{ height: "70vh" }}>
              <iframe 
                src={`/${selectedOption === 'permanencia' ? 'contrato-permanencia.pdf' : 'contrato-sin-permanencia.pdf'}#toolbar=0`} 
                className="absolute inset-0 w-full h-full border-0"
                title={`Contrato de Servicio - ${selectedOption === 'permanencia' ? 'Con Permanencia' : 'Sin Permanencia'}`}
              />
            </div>
            
            <div className="p-4 border-t border-gray-200 flex justify-between">
              <button onClick={() => setShowContractPreview(false)} className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition-colors">
                Cerrar
              </button>
              <a 
                href={`/contratos/${selectedOption === 'permanencia' ? 'contrato-permanencia.pdf' : 'contrato-sin-permanencia.pdf'}`} 
                download
                className="px-4 py-2 bg-[#0e6493] text-white rounded hover:bg-[#073a57] transition-colors flex items-center"
              >
                <Download size={18} className="mr-2" />
                Descargar contrato
              </a>
            </div>
          </div>
        </div>
      )}

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
    </div>
  );
}