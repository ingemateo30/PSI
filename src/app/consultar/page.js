"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Lock, CheckCircle, AlertCircle } from "lucide-react";
import Navbar from "@/component/navbar";
import FloatingSocial from "@/component/redes";
import Boton from "@/component/botonsubir";

export default function ConsultarPage() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    numeroDocumento: "",
    telefono: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.numeroDocumento) {
      newErrors.numeroDocumento = "Documento requerido";
    } else if (formData.numeroDocumento.length < 6) {
      newErrors.numeroDocumento = "Documento inválido";
    }

    if (!formData.telefono) {
      newErrors.telefono = "Teléfono requerido";
    } else if (!/^[0-9]{7,10}$/.test(formData.telefono)) {
      newErrors.telefono = "Teléfono debe tener entre 7 y 10 dígitos";
    }

    if (!formData.email) {
      newErrors.email = "Email requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/consultar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Guardar token y datos en localStorage
        localStorage.setItem("clienteToken", data.token);
        localStorage.setItem("clienteData", JSON.stringify(data.cliente));
        
        // Redirigir al portal
        window.location.href = "/consultar/portal";
      } else {
        setErrors({ general: data.message || "Cliente no encontrado. Verifica tus datos." });
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({ general: "Error de conexión. Intente nuevamente." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-blue-600 mb-2">
              Consulta tus Facturas y Contratos
            </h1>
            <p className="text-gray-600">
              Ingresa tus datos para acceder a tu información
            </p>
          </motion.div>

          {errors.general && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-xl p-4 mb-6 flex items-start shadow-md"
          >
              <AlertCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-red-800">{errors.general}</p>
            </motion.div>
          )}

          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 backdrop-blur-sm">
           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 mb-6 border border-blue-100 shadow-sm">
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-lg p-2 mr-3">
              <Lock className="text-blue-600" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-blue-900 mb-1 text-lg">🔒 Información Segura</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                Necesitamos validar tu identidad. Ingresa los datos que registraste con nosotros.
              </p>
            </div>
          </div>
        </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center">
                  <div className="bg-blue-100 rounded-lg p-1.5 mr-2">
                    <User className="text-blue-600" size={16} />
                  </div>
                  <span>Número de Documento *</span>
                </label>
                <input
                  type="text"
                  name="numeroDocumento"
                  value={formData.numeroDocumento}
                  onChange={handleChange}
                  placeholder="Ej: 1234567890"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 bg-gray-50 focus:bg-white"
                />
                {errors.numeroDocumento && (
                  <p className="text-red-500 text-sm mt-1">{errors.numeroDocumento}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center">
                <div className="bg-blue-100 rounded-lg p-1.5 mr-2">
                  <Phone className="text-blue-600" size={16} />
                </div>
                  <span>Número de Teléfono *</span>
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Ej: 3001234567"
                 className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 bg-gray-50 focus:bg-white"
                />
                {errors.telefono && (
                  <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center">
                <div className="bg-blue-100 rounded-lg p-1.5 mr-2">  
                  <Mail className="text-blue-600" size={16} />
                </div>
                  <span>Correo Electrónico *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ej: tu@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 bg-gray-50 focus:bg-white"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                {loading ? (
                  <>
                    <span className="inline-block animate-spin mr-2">⏳</span>
                    Validando...
                  </>
                ) : (
                  <>
                    <CheckCircle className="inline mr-2" size={20} />
                    Acceder a mi Portal
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-gray-600 text-center">
                ¿No eres cliente aún?{" "}
                <a href="/Registro" className="text-blue-600 hover:underline font-semibold">
                  Regístrate aquí
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <FloatingSocial />
      <Boton />
    </div>
  );
}
