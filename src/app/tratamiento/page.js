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
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#0e6493] text-white rounded-full mr-3">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-gray-500">PBX:</span> 
                    <strong className="ml-2 text-[#0e6493]">(7) 7236020</strong>
                  </div>
                </div>
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
                <li><a href="/tratamiento" className="text-gray-300 hover:text-white">Tratamiendo de datos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Términos y Condiciones</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} PSI Fibra. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>


      <FloatingSocial />
      <Boton />
    </div>
  );
}