"use client";
import { useState } from "react";
import { X, ArrowRight, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function BotonPagaAhora() {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            {/* Botón circular expandible - Estilo PSE */}
            <motion.div
                className="fixed right-6 bottom-32 z-40"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    delay: 1.2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    onMouseEnter={() => setIsExpanded(true)}
                    onMouseLeave={() => setIsExpanded(false)}
                    onTouchStart={() => setIsExpanded(true)}
                    className="relative group cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                >
                    {/* Contenedor con animación de expansión */}
                    <motion.div
                        className="flex items-center bg-white rounded-full shadow-2xl overflow-hidden border-2 border-gray-200"
                        animate={{
                            width: isExpanded ? "220px" : "56px",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                    >
                        {/* Logo PSI (siempre visible) */}
                        <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center">
                            <Image
                                src="/logo.png"
                                alt="PSI"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                        </div>

                        {/* Texto expandible */}
                        <motion.div
                            className="flex items-center justify-between pl-3 pr-4 whitespace-nowrap overflow-hidden"
                            initial={{ opacity: 0, width: 0 }}
                            animate={{
                                opacity: isExpanded ? 1 : 0,
                                width: isExpanded ? "auto" : 0,
                            }}
                            transition={{
                                opacity: { duration: 0.2, delay: isExpanded ? 0.1 : 0 },
                            }}
                        >
                            <div className="flex flex-col">
                                <span className="text-[#0e6493] font-bold text-base leading-tight">
                                    PAGA AHORA
                                </span>
                                <span className="text-gray-500 text-xs leading-tight">
                                    EN LÍNEA AQUÍ
                                </span>
                            </div>
                            <div className="ml-2">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="text-[#0e6493]"
                                >
                                    <path
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Indicador de pulso */}
                    <motion.div
                        className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                        animate={{
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    />
                </motion.button>
            </motion.div>

            {/* Modal de opciones */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay oscuro */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Modal de opciones */}
                        <motion.div
                            initial={{ x: 400, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 400, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-96"
                        >
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                {/* Header del modal */}
                                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-5 border-b border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-800">Elige tu método de pago</h3>
                                            <p className="text-sm text-gray-500 mt-1">Selecciona una opción para continuar</p>
                                        </div>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                                        >
                                            <X size={22} className="text-gray-600" />
                                        </button>
                                    </div>
                                </div>

                                {/* Opciones de pago */}
                                <div className="p-6 space-y-4">
                                    {/* Opción PSE-ePayco */}
                                    <motion.a
                                        href="https://pde1565542.epayco.me/recaudo/psi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="block p-5 bg-white rounded-2xl border-2 border-gray-200 hover:border-green-500 hover:shadow-lg transition-all group"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center border border-green-200">
                                                    <Image src="/logos/pse.png" alt="PSE" width={48} height={48} />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-lg text-gray-800 mb-0.5">PSE-ePayco</div>
                                                    <div className="text-sm text-gray-500">Transferencia bancaria</div>
                                                </div>
                                            </div>
                                            <ArrowRight size={20} className="text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </motion.a>
                                </div>

                                {/* Footer con seguridad */}
                                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                                        <Lock size={16} className="text-green-500" />
                                        <span>Conexión segura y encriptada</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
