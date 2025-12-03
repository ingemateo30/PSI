"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, Home, Phone, Mail } from "lucide-react";
import Navbar from "@/component/navbar";
import Link from "next/link";

// ✅ COMPONENTE INTERNO que usa useSearchParams
function ExitoContent() {
  const searchParams = useSearchParams();
  const clienteId = searchParams.get("id");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-2xl p-8 md:p-12 text-center border-4 border-green-100"
      >
        {/* Icono de éxito */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto w-28 h-28 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-2xl ring-8 ring-green-100 animate-bounce"
        >
          <CheckCircle className="text-white" size={56} />
        </motion.div>

        {/* Título */}
        <h1 className="text-4xl font-bold text-[#0e6493] mb-4">
          ¡Registro Exitoso!
        </h1>
        
        {/* ID de cliente */}
        {clienteId && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 mb-6 border-2 border-blue-200 shadow-lg">
            <p className="text-sm text-gray-600 mb-1">Tu ID de Cliente:</p>
            <p className="text-2xl font-bold text-[#0e6493]">#{clienteId}</p>
          </div>
        )}

        {/* Mensaje */}
        <p className="text-lg text-gray-700 mb-8">
          Hemos recibido tu solicitud de registro. En breve recibirás un correo electrónico con:
        </p>

        {/* Lista de lo que recibirá */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-700">Mensaje de bienvenida personalizado</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-700">Factura de tus planes seleccionados</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-700">Contrato en formato PDF</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-700">Información sobre la fecha de instalación</span>
            </li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div className="bg-[#0e6493] text-white rounded-lg p-6 mb-8">
          <h3 className="font-bold text-xl mb-4">¿Necesitas ayuda?</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-center">
              <Phone size={16} className="mr-2" />
              <span>San Gil: 318 455 0936</span>
            </div>
            <div className="flex items-center justify-center">
              <Phone size={16} className="mr-2" />
              <span>Socorro: 318 823 7392</span>
            </div>
            <div className="flex items-center justify-center">
              <Phone size={16} className="mr-2" />
              <span>Piedecuesta: 318 730 5239</span>
            </div>
            <div className="flex items-center justify-center mt-4">
              <Mail size={16} className="mr-2" />
              <span>contacto@psi.net.co</span>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center px-6 py-3 bg-[#0e6493] text-white rounded-lg hover:bg-[#073a57] font-medium transition-all"
          >
            <Home size={20} className="mr-2" />
            Volver al Inicio
          </Link>
          <Link
            href="/fibra"
            className="flex items-center justify-center px-6 py-3 border-2 border-[#0e6493] text-[#0e6493] rounded-lg hover:bg-blue-50 font-medium transition-all"
          >
            Ver Planes
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

// ✅ COMPONENTE PRINCIPAL con Suspense
export default function RegistroExito() {
  return (
    <>
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#0e6493] mx-auto mb-4"></div>
            <p className="text-gray-600">Cargando...</p>
          </div>
        </div>
      }>
        <ExitoContent />
      </Suspense>
    </>
  );
}