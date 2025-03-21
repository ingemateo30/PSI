"use client";
import { motion } from "framer-motion";
import Head from 'next/head';
import Navbar from '@/component/navbar';
import { ChevronRight, Shield, FileText, User, Lock, Database,Phone } from "lucide-react";
import FloatingSocial from '@/component/redes';
import Boton from '@/component/botonsubir';

export default function PoliticaTratamientoDatos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Política de Tratamiento de Datos | PSI</title>
        <meta name="description" content="Política de tratamiento de datos personales de PSI - Proveedor de Telecomunicaciones S.A.S." />
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
            <Shield size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Tratamiento de Datos</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Protegemos su información personal con los más altos estándares de seguridad y privacidad
          </p>
        </div>
      </motion.section>

      <div className="relative py-16 bg-gradient-to-b from-white to-blue-50">
  
        <div className="absolute inset-0">
          <div className="bg-gradient-to-b from-white to-blue-50 w-full h-full opacity-80"></div>
        </div>
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/3.svg')] before:bg-cover before:bg-center before:opacity-20"></div>

        <div className="relative container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-10">
            <div className="mb-10">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center mb-8"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100 text-[#0e6493] mr-5">
                  <FileText size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0e6493]">Introducción</h2>
                  <div className="w-20 h-1 bg-[#e31e25] mt-2"></div>
                </div>
              </motion.div>
              
              <p className="text-gray-700 mb-6">
                En <strong>PROVEEDOR DE TELECOMUNICACIONES S.A.S.</strong>, lo más importante son nuestros clientes, proveedores y contratistas. 
                Por esta razón, aplicamos lineamientos, políticas, procedimientos y programas de privacidad que protegen sus datos personales, 
                mediante el uso y mantenimiento de medidas de seguridad técnica y física, a fin de impedir que terceros no autorizados accedan 
                a los mismos, de conformidad con lo definido en la Ley 1581 de 2012 y el Decreto Reglamentario 1377.
              </p>
              
              <p className="text-gray-700">
                Le informamos que, en cumplimiento de nuestra política de protección de datos personales, los datos que usted suministre 
                en virtud de los servicios que solicite o contratos que celebre con <strong>PROVEEDOR DE TELECOMUNICACIONES S.A.S.</strong>, 
                serán tratados con seguridad, dentro de los principios de protección definidos en la Ley 1581 de 2012 y en desarrollo de 
                nuestro objeto social.
              </p>
            </div>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100 text-[#0e6493] mr-5">
                  <User size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0e6493]">Responsable del Tratamiento</h2>
                  <div className="w-20 h-1 bg-[#e31e25] mt-2"></div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                El responsable del tratamiento de sus datos personales es <strong>PROVEEDOR DE TELECOMUNICACIONES S.A.S.</strong>, 
                quien los recogerá y tratará para:
              </p>
              
              <ul className="list-disc list-outside ml-6 text-gray-700 space-y-2 mb-6">
                <li>Atender o formalizar cualquier tipo de producto o servicio que usted solicite o requiera</li>
                <li>Informarle cualquier cambio en los productos o servicios ofrecidos</li>
                <li>Ofrecerle o informarle nuevos productos o servicios</li>
                <li>Evaluar la calidad del servicio ofrecido, lo cual se hará a través de encuestas de satisfacción al cliente</li>
                <li>Informar sobre eventos, promociones, descuentos y novedades de nuestro servicio</li>
                <li>Fines estadísticos</li>
              </ul>
              
              <p className="text-gray-700">
                Los datos personales que <strong>PROVEEDOR DE TELECOMUNICACIONES S.A.S.</strong> recoja a través de sus diferentes 
                canales transaccionales serán usados para las actividades del servicio de telecomunicaciones de acuerdo con nuestro 
                objeto social. Así mismo, la entidad podrá utilizar sus datos personales para ofrecerle y/o informarle sobre otros 
                productos y/o servicios que <strong>PROVEEDOR DE TELECOMUNICACIONES S.A.S.</strong> o cualquiera de sus filiales ofrezcan.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-10"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100 text-[#0e6493] mr-5">
                  <Lock size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0e6493]">Sus Derechos</h2>
                  <div className="w-20 h-1 bg-[#e31e25] mt-2"></div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Usted podrá limitar el uso o divulgación de sus datos personales, así como ejercer, cuando requiera, los derechos de:
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-blue-50 text-[#0e6493] px-4 py-2 rounded font-medium">Acceso</div>
                <div className="bg-blue-50 text-[#0e6493] px-4 py-2 rounded font-medium">Rectificación</div>
                <div className="bg-blue-50 text-[#0e6493] px-4 py-2 rounded font-medium">Actualización</div>
                <div className="bg-blue-50 text-[#0e6493] px-4 py-2 rounded font-medium">Cancelación o supresión</div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Estos derechos están consagrados en la ley y puede ejercerlos comunicándose con nuestra área de Servicio al Cliente 
                a la línea telefónica de la ciudad de San Gil:
              </p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#0e6493] text-white rounded-full mr-3">
                    <Database size={16} />
                  </div>
                  <div>
                    <span className="text-gray-500">Correo electrónico:</span> 
                    <strong className="ml-2 text-[#0e6493]">contacto@psi.net.co</strong>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700">
                Es de recordarle que el ejercicio de cualquiera de estos derechos no es un requisito indispensable para el ejercicio 
                de otro derecho.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-10"
            >
              <h3 className="text-2xl font-bold text-[#0e6493] mb-4">Domicilio Judicial</h3>
              <p className="text-gray-700 mb-6">
                El domicilio judicial de <strong>PROVEEDOR DE TELECOMUNICACIONES S.A.S.</strong> es la carrera 9 #9-94 en San Gil, Santander.
              </p>
              
              <h3 className="text-2xl font-bold text-[#0e6493] mb-4">Modificaciones a la Política</h3>
              <p className="text-gray-700">
                Cualquier modificación al presente aviso le será notificado a través de los medios que dispongamos.
              </p>
            </motion.div>
            
            <div className="border-t border-gray-200 pt-6 mt-10">
              <p className="text-gray-500 text-sm text-center">
                Última actualización: Marzo 2025
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Botón de descarga */}
      <div className="bg-white py-12 text-center">
        <a href="/politica-tratamiento-datos.pdf" download className="inline-flex items-center px-6 py-3 bg-[#0e6493] text-white font-medium rounded-md hover:bg-[#073a57] transition-colors">
          <FileText size={20} className="mr-2" />
          Descargar política completa
        </a>
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
    </div>
  );
}