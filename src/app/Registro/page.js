"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Home, CreditCard, CheckCircle, AlertCircle } from "lucide-react";
import Navbar from "@/component/navbar";
import FloatingSocial from "@/component/redes";
import Boton from "@/component/botonsubir";
import { 
  registroWebService, 
  planesPublicosService, 
  ciudadesService, 
  sectoresService 
} from "@/lib/apiService";

export default function RegistroPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  
  // Estados para datos dinámicos
  const [planes, setPlanes] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [sectores, setSectores] = useState([]);
  const [loadingPlanes, setLoadingPlanes] = useState(true);
  const [loadingCiudades, setLoadingCiudades] = useState(true);
  const [loadingSectores, setLoadingSectores] = useState(false);

const [formData, setFormData] = useState({
  tipoDocumento: "CC",
  numeroDocumento: "",
  nombres: "",
  apellidos: "",
  email: "",
  celular: "",
  ciudad: "",
  ciudadId: "",
  sector: "",
  sectorId: "",
  direccion: "",
  barrio: "",
  estrato: "3",
  planesSeleccionados: [],
  tipoPermanencia: "sin_permanencia",
  aceptaTerminos: false,
  aceptaTratamientoDatos: false,
});

  // Cargar planes al montar
  useEffect(() => {
    const cargarPlanes = async () => {
      try {
        setLoadingPlanes(true);
        const response = await planesPublicosService.getActivos();
        
        if (response.success && response.data) {
          setPlanes(response.data);
          console.log('✅ Planes cargados:', response.data.length);
        }
      } catch (error) {
        console.error('❌ Error cargando planes:', error);
        setErrors({ general: 'Error al cargar planes. Recarga la página.' });
      } finally {
        setLoadingPlanes(false);
      }
    };

    cargarPlanes();
  }, []);

  // Cargar ciudades al montar
  useEffect(() => {
    const cargarCiudades = async () => {
      try {
        setLoadingCiudades(true);
        const response = await ciudadesService.getAll();
        
        if (response.success && response.data) {
          setCiudades(response.data);
          console.log('✅ Ciudades cargadas:', response.data.length);
        }
      } catch (error) {
        console.error('❌ Error cargando ciudades:', error);
      } finally {
        setLoadingCiudades(false);
      }
    };

    cargarCiudades();
  }, []);

  // Cargar sectores cuando cambia la ciudad
  useEffect(() => {
    const cargarSectores = async () => {
      if (!formData.ciudadId) {
        setSectores([]);
        return;
      }

      try {
        setLoadingSectores(true);
        const response = await sectoresService.getByCiudad(formData.ciudadId);
        
        if (response.success && response.data) {
          setSectores(response.data);
          console.log('✅ Sectores cargados:', response.data.length);
        }
      } catch (error) {
        console.error('❌ Error cargando sectores:', error);
        setSectores([]);
      } finally {
        setLoadingSectores(false);
      }
    };

    cargarSectores();
  }, [formData.ciudadId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handlePlanToggle = (planId) => {
    setFormData(prev => ({
      ...prev,
      planesSeleccionados: prev.planesSeleccionados.includes(planId)
        ? prev.planesSeleccionados.filter(id => id !== planId)
        : [...prev.planesSeleccionados, planId]
    }));
  };

  const validateStep = (stepNumber) => {
    const newErrors = {};

    if (stepNumber === 1) {
      if (!formData.numeroDocumento) newErrors.numeroDocumento = "Documento requerido";
      if (!formData.nombres) newErrors.nombres = "Nombres requeridos";
      if (!formData.apellidos) newErrors.apellidos = "Apellidos requeridos";
      if (!formData.email) newErrors.email = "Email requerido";
      if (!formData.celular) newErrors.celular = "Celular requerido";
    }

    if (stepNumber === 2) {
      if (!formData.ciudadId) newErrors.ciudad = "Seleccione una ciudad";
      if (!formData.direccion) newErrors.direccion = "Dirección requerida";
      if (!formData.barrio) newErrors.barrio = "Barrio requerido";
    }

    if (stepNumber === 3) {
      if (formData.planesSeleccionados.length === 0) {
        newErrors.planes = "Seleccione al menos un plan";
      }
      if (!formData.aceptaTerminos) {
        newErrors.terminos = "Debe aceptar los términos";
      }
      if (!formData.aceptaTratamientoDatos) {
        newErrors.tratamiento = "Debe aceptar el tratamiento de datos";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateStep(3)) return;

  setLoading(true);

  try {
    // Preparar datos limpiando campos vacíos
    const datosRegistro = {
      tipoDocumento: formData.tipoDocumento,
      numeroDocumento: formData.numeroDocumento,
      nombres: formData.nombres,
      apellidos: formData.apellidos,
      email: formData.email,
      celular: formData.celular,
      ciudadId: parseInt(formData.ciudadId),
      sectorId: formData.sectorId ? parseInt(formData.sectorId) : null,
      direccion: formData.direccion,
      barrio: formData.barrio,
      estrato: formData.estrato,
      planesSeleccionados: formData.planesSeleccionados,
      tipoPermanencia: formData.tipoPermanencia,
      aceptaTerminos: formData.aceptaTerminos,
      aceptaTratamientoDatos: formData.aceptaTratamientoDatos
    };

    console.log('📤 Enviando datos de registro:', datosRegistro);

    const response = await fetch("/api/registro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosRegistro),
    });

    const data = await response.json();
    console.log('📥 Respuesta del servidor:', data);

    if (response.ok && data.success) {
      window.location.href = `/Registro/exito?id=${data.clienteId}`;
    } else {
      setErrors({ general: data.error || "Error al procesar inscripción" });
    }
  } catch (error) {
    console.error("❌ Error:", error);
    setErrors({ general: "Error de conexión. Intente nuevamente." });
  } finally {
    setLoading(false);
  }
};

  const calcularTotal = () => {
    return formData.planesSeleccionados.reduce((total, planId) => {
      const plan = planes.find(p => p.id === planId);
      return total + (plan ? parseFloat(plan.precio) : 0);
    }, 0);
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-blue-600 mb-2">
              Registro de Cliente
            </h1>
            <p className="text-gray-600">
              Completa el formulario para activar tu servicio
            </p>
          </motion.div>

          {errors.general && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800">{errors.general}</p>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-300
                    ${step >= s 
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white ring-4 ring-blue-100 scale-110' 
                      : 'bg-gray-200 text-gray-600'}
                  `}>
                    {step > s ? '✓' : s}
                  </div>
                  {s < 3 && <div className={`w-20 h-1 ${step > s ? 'bg-blue-600' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">
                {step === 1 && "Datos Personales"}
                {step === 2 && "Dirección de Instalación"}
                {step === 3 && "Selección de Planes"}
              </h2>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="nombres"
                        value={formData.nombres}
                        onChange={handleChange}
                        placeholder="Nombres *"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
                      />
                      {errors.nombres && <p className="text-red-500 text-sm mt-1">{errors.nombres}</p>}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="apellidos"
                        value={formData.apellidos}
                        onChange={handleChange}
                        placeholder="Apellidos *"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
                      />
                      {errors.apellidos && <p className="text-red-500 text-sm mt-1">{errors.apellidos}</p>}
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        name="celular"
                        value={formData.celular}
                        onChange={handleChange}
                        placeholder="Celular *"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
                      />
                      {errors.celular && <p className="text-red-500 text-sm mt-1">{errors.celular}</p>}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="numeroDocumento"
                        value={formData.numeroDocumento}
                        onChange={handleChange}
                        placeholder="Número de Documento *"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
                      />
                      {errors.numeroDocumento && <p className="text-red-500 text-sm mt-1">{errors.numeroDocumento}</p>}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="inline w-4 h-4 mr-1" />
                      Ciudad *
                    </label>
                    {loadingCiudades ? (
                      <div className="text-center py-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                      </div>
                    ) : (
                      <select
                        value={formData.ciudadId}
                        onChange={(e) => {
                          const ciudadId = e.target.value;
                          const ciudad = ciudades.find(c => c.id === parseInt(ciudadId));
                          setFormData(prev => ({
                            ...prev,
                            ciudadId: ciudadId,
                            ciudad: ciudad ? ciudad.nombre : '',
                            sectorId: '',
                            sector: ''
                          }));
                        }}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 bg-gray-50 focus:bg-white text-gray-900"
                      >
                        <option value="">Seleccione su ciudad</option>
                        {ciudades.map((ciudad) => (
                          <option key={ciudad.id} value={ciudad.id}>
                            {ciudad.nombre} - {ciudad.departamento}
                          </option>
                        ))}
                      </select>
                    )}
                    {errors.ciudad && <p className="text-red-500 text-sm mt-1">{errors.ciudad}</p>}
                  </div>

                  {formData.ciudadId && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sector (Opcional)
                      </label>
                      {loadingSectores ? (
                        <div className="text-center py-4">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
                        </div>
                      ) : sectores.length > 0 ? (
                        <select
                          value={formData.sectorId}
                          onChange={(e) => {
                            const sectorId = e.target.value;
                            const sector = sectores.find(s => s.id === parseInt(sectorId));
                            setFormData(prev => ({
                              ...prev,
                              sectorId: sectorId,
                              sector: sector ? sector.nombre : ''
                            }));
                          }}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 bg-gray-50 focus:bg-white text-gray-900"
                        >
                          <option value="">Seleccione un sector (opcional)</option>
                          {sectores.map((sector) => (
                            <option key={sector.id} value={sector.id}>
                              {sector.nombre}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <p className="text-sm text-gray-500 italic">No hay sectores disponibles para esta ciudad</p>
                      )}
                    </div>
                  )}

                  <div>
                    <input
                      type="text"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                      placeholder="Dirección completa *"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
                    />
                    {errors.direccion && <p className="text-red-500 text-sm mt-1">{errors.direccion}</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="barrio"
                      value={formData.barrio}
                      onChange={handleChange}
                      placeholder="Barrio *"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
                    />
                    {errors.barrio && <p className="text-red-500 text-sm mt-1">{errors.barrio}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estrato Socioeconómico *
                    </label>
                    <select
                      name="estrato"
                      value={formData.estrato || '3'}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 bg-gray-50 focus:bg-white text-gray-900"
                    >
                      <option value="1">Estrato 1</option>
                      <option value="2">Estrato 2</option>
                      <option value="3">Estrato 3</option>
                      <option value="4">Estrato 4</option>
                      <option value="5">Estrato 5</option>
                      <option value="6">Estrato 6</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Seleccione sus planes *
                    </label>

                    {loadingPlanes ? (
                      <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Cargando planes disponibles...</p>
                      </div>
                    ) : planes.length === 0 ? (
                      <div className="text-center py-12 bg-yellow-50 rounded-lg">
                        <AlertCircle className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                        <p className="text-yellow-800 font-semibold">No hay planes disponibles</p>
                        <p className="text-yellow-600 text-sm mt-2">Por favor, contacte con soporte</p>
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-4">
                        {planes.map((plan) => (
                          <motion.div
                            key={plan.id}
                            whileHover={{ scale: 1.03, rotate: 0.5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handlePlanToggle(plan.id)}
                            className={`
                              relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300
                              ${formData.planesSeleccionados.includes(plan.id)
                                ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-2xl ring-4 ring-blue-100'
                                : 'border-gray-200 hover:border-blue-300 hover:shadow-xl bg-white'
                              }
                            `}
                          >
                            {formData.planesSeleccionados.includes(plan.id) && (
                              <CheckCircle className="absolute top-4 right-4 w-6 h-6 text-blue-600" />
                            )}

                            <div className="mb-3">
                              <span className={`
                                inline-block px-3 py-1 text-xs font-semibold rounded-full
                                ${plan.tipo === 'internet' ? 'bg-blue-100 text-blue-800' :
                                  plan.tipo === 'television' ? 'bg-purple-100 text-purple-800' :
                                  'bg-green-100 text-green-800'}
                              `}>
                                {plan.tipo === 'internet' ? '🌐 Internet' :
                                  plan.tipo === 'television' ? '📺 TV' :
                                  '📦 Combo'}
                              </span>
                            </div>

                            <h3 className="font-bold text-lg mb-3">{plan.nombre}</h3>

                            <div className="space-y-1 text-sm text-gray-600 mb-4">
                              {plan.velocidad_bajada && (
                                <p className="flex items-center">
                                  <span className="mr-2">⬇️</span>
                                  {plan.velocidad_bajada} Mbps bajada
                                </p>
                              )}
                              {plan.velocidad_subida && (
                                <p className="flex items-center">
                                  <span className="mr-2">⬆️</span>
                                  {plan.velocidad_subida} Mbps subida
                                </p>
                              )}
                              {plan.canales_tv && (
                                <p className="flex items-center">
                                  <span className="mr-2">📺</span>
                                  {plan.canales_tv} canales
                                </p>
                              )}
                              {plan.tecnologia && (
                                <p className="flex items-center">
                                  <span className="mr-2">🔧</span>
                                  {plan.tecnologia}
                                </p>
                              )}
                            </div>

                            <div className="border-t pt-4">
                              <p className="text-3xl font-bold text-blue-600">
                                ${parseFloat(plan.precio).toLocaleString('es-CO')}
                                <span className="text-sm text-gray-600 font-normal">/mes</span>
                              </p>
                              {plan.aplica_iva && (
                                <p className="text-xs text-gray-500 mt-1">+ IVA (19%)</p>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {errors.planes && <p className="text-red-500 text-sm mt-3">{errors.planes}</p>}
                  </div>

                  {/* SELECTOR DE TIPO DE PERMANENCIA */}
                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="font-bold text-lg text-gray-900 mb-4">
                      Tipo de Instalación *
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Opción: Sin Permanencia */}
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setFormData(prev => ({ ...prev, tipoPermanencia: 'sin_permanencia' }))}
                        className={`
                          relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 overflow-hidden
                          ${formData.tipoPermanencia === 'sin_permanencia'
                            ? 'border-blue-600 bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50 shadow-2xl ring-4 ring-blue-100'
                            : 'border-gray-200 hover:border-blue-300 hover:shadow-xl bg-white'
                          }
                        `}
                      >
                        {formData.tipoPermanencia === 'sin_permanencia' && (
                          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
                        )}
                      
                        <div className="mb-3">
                          <h4 className="font-bold text-xl text-gray-900">Sin Permanencia</h4>
                          <p className="text-3xl font-bold text-blue-600 mt-2">
                            $150,000
                          </p>
                          <p className="text-sm text-gray-600 mt-1">Una sola instalación - IVA incluido</p>
                        </div>
                      
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Sin compromisos de tiempo</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Puede cancelar cuando desee</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Una instalación para todos los servicios</span>
                          </li>
                        </ul>
                      </motion.div>

                      {/* Opción: Con Permanencia */}
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setFormData(prev => ({ ...prev, tipoPermanencia: 'con_permanencia' }))}
                        className={`
                          relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 overflow-hidden
                          ${formData.tipoPermanencia === 'con_permanencia'
                            ? 'border-green-600 bg-gradient-to-br from-green-50 via-green-50 to-emerald-50 shadow-2xl ring-4 ring-green-100'
                            : 'border-gray-200 hover:border-green-300 hover:shadow-xl bg-white'
                          }
                        `}
                      >
                        {formData.tipoPermanencia === 'con_permanencia' && (
                          <div className="absolute top-0 right-0 w-32 h-32 bg-green-400 rounded-full filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
                        )}
                      
                        <div className="mb-3">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-bold text-xl text-gray-900">Con Permanencia</h4>
                            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                              AHORRA $100K
                            </span>
                          </div>
                          <p className="text-3xl font-bold text-green-600 mt-2">
                            $50,000
                          </p>
                          <p className="text-sm text-gray-600 mt-1">Una sola instalación - Ahorra $100,000</p>
                        </div>
                      
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Compromiso mínimo de 6 meses</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Precio de instalación reducido</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Una instalación para todos los servicios</span>
                          </li>
                        </ul>
                      </motion.div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 mt-4">
                      <p className="text-sm text-blue-900">
                        <strong>Nota:</strong> El costo de instalación se cobrará en tu primera factura junto con el primer mes de servicio.
                      </p>
                    </div>
                  </div>

                  {/* TÉRMINOS Y CONDICIONES */}
                  <div className="space-y-3 pt-6 border-t">
                    <label className="flex items-start cursor-pointer group">
                      <input
                        type="checkbox"
                        name="aceptaTerminos"
                        checked={formData.aceptaTerminos}
                        onChange={handleChange}
                        className="mt-1 mr-3 w-4 h-4"
                      />
                      <span className="text-sm group-hover:text-blue-600">
                        Acepto los <a href="/terminos" className="text-blue-600 underline" target="_blank">términos y condiciones</a> del servicio
                      </span>
                    </label>
                    {errors.terminos && <p className="text-red-500 text-sm ml-7">{errors.terminos}</p>}

                    <label className="flex items-start cursor-pointer group">
                      <input
                        type="checkbox"
                        name="aceptaTratamientoDatos"
                        checked={formData.aceptaTratamientoDatos}
                        onChange={handleChange}
                        className="mt-1 mr-3 w-4 h-4"
                      />
                      <span className="text-sm group-hover:text-blue-600">
                        Autorizo el <a href="/tratamiento" className="text-blue-600 underline" target="_blank">tratamiento de datos personales</a>
                      </span>
                    </label>
                    {errors.tratamiento && <p className="text-red-500 text-sm ml-7">{errors.tratamiento}</p>}
                  </div>

                  {/* RESUMEN DEL PEDIDO */}
                  {formData.planesSeleccionados.length > 0 && (
                    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-blue-200 shadow-xl">
                      <h3 className="font-bold text-xl mb-4 text-blue-900">Resumen de tu pedido</h3>
                      
                      <div className="space-y-3 mb-4">
                        <div className="font-semibold text-sm text-gray-700 mb-2">Planes mensuales:</div>
                        {formData.planesSeleccionados.map(planId => {
                          const plan = planes.find(p => p.id === planId);
                          return plan ? (
                            <div key={planId} className="flex justify-between text-sm bg-white rounded p-2">
                              <span>{plan.nombre}</span>
                              <span className="font-semibold">${parseFloat(plan.precio).toLocaleString('es-CO')}</span>
                            </div>
                          ) : null;
                        })}

                        <div className="border-t pt-3 mt-3">
                          <div className="flex justify-between text-sm font-semibold">
                            <span>Subtotal mensual:</span>
                            <span>${calcularTotal().toLocaleString('es-CO')}</span>
                          </div>
                        </div>

                        <div className="border-t pt-3 bg-yellow-50 rounded p-3 -mx-3">
                          <div className="font-semibold text-sm text-gray-700 mb-2">Costo único de instalación:</div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">
                              {formData.tipoPermanencia === 'con_permanencia' ? 'Con permanencia (6 meses)' : 'Sin permanencia'}
                            </span>
                            <span className="text-lg font-bold text-orange-600">
                              ${formData.tipoPermanencia === 'con_permanencia' ? '50,000' : '150,000'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-4 -mx-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-lg font-bold text-gray-900">Total primer mes:</span>
                          <span className="text-3xl font-bold text-blue-600">
                            ${(calcularTotal() + (formData.tipoPermanencia === 'con_permanencia' ? 50000 : 150000)).toLocaleString('es-CO')}
                          </span>
                        </div>
                        <p className="text-xs text-gray-700 text-right">
                          Incluye: Planes (${calcularTotal().toLocaleString('es-CO')}) + Instalación (${formData.tipoPermanencia === 'con_permanencia' ? '50,000' : '150,000'})
                        </p>
                      </div>

                      <p className="text-xs text-gray-600 mt-3 text-center">
                        * Precios sujetos a IVA según corresponda
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-between mt-8 pt-6 border-t">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      setStep(step - 1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="px-8 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 font-semibold transition-colors"
                  >
                    ← Anterior
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="ml-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
                  >
                    Siguiente →
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="ml-auto px-12 py-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white rounded-xl hover:from-green-700 hover:via-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse-slow"
                  >
                    {loading ? (
                      <>
                        <span className="inline-block animate-spin mr-2">⏳</span>
                        Procesando...
                      </>
                    ) : (
                      <>
                        ✓ Finalizar Registro
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <FloatingSocial />
      <Boton />
    </div>
  );
}