"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  User, FileText, File, Wrench, Calendar, 
  CheckCircle, Clock, XCircle, LogOut, Download,
  CreditCard, AlertCircle, Package
} from "lucide-react";
import Navbar from "@/component/navbar";
import FloatingSocial from "@/component/redes";
import Boton from "@/component/botonsubir";
import { consultaClienteService } from "@/lib/apiService";

export default function PortalClientePage() {
  const [loading, setLoading] = useState(true);
  const [cliente, setCliente] = useState(null);
  const [token, setToken] = useState(null);
  
  const [facturas, setFacturas] = useState([]);
  const [contratos, setContratos] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [instalaciones, setInstalaciones] = useState([]);
  
  const [tabActiva, setTabActiva] = useState("facturas");
  const [loadingData, setLoadingData] = useState(false);

  // 🆕 Estados para modal de detalle de factura
  const [modalDetalleFactura, setModalDetalleFactura] = useState(false);
  const [facturaSeleccionada, setFacturaSeleccionada] = useState(null);
  const [detallesFactura, setDetallesFactura] = useState([]);
  const [loadingDetalle, setLoadingDetalle] = useState(false);

  useEffect(() => {
    const tokenGuardado = localStorage.getItem("clienteToken");
    const clienteGuardado = localStorage.getItem("clienteData");

    if (!tokenGuardado || !clienteGuardado) {
      window.location.href = "/consultar";
      return;
    }

    setToken(tokenGuardado);
    setCliente(JSON.parse(clienteGuardado));
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!token) return;

    const cargarDatos = async () => {
      setLoadingData(true);
      try {
        if (tabActiva === "facturas" && facturas.length === 0) {
          const response = await consultaClienteService.obtenerFacturas(token);
          if (response.success) {
            setFacturas(response.data);
          }
        } else if (tabActiva === "contratos" && contratos.length === 0) {
          const response = await consultaClienteService.obtenerContratos(token);
          if (response.success) {
            setContratos(response.data);
          }
        } else if (tabActiva === "servicios" && servicios.length === 0) {
          const response = await consultaClienteService.obtenerServicios(token);
          if (response.success) {
            setServicios(response.data);
          }
        } else if (tabActiva === "instalaciones" && instalaciones.length === 0) {
          const response = await consultaClienteService.obtenerInstalaciones(token);
          if (response.success) {
            setInstalaciones(response.data);
          }
        }
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoadingData(false);
      }
    };

    cargarDatos();
  }, [tabActiva, token, facturas.length, contratos.length, servicios.length, instalaciones.length]);

  const handleLogout = () => {
    localStorage.removeItem("clienteToken");
    localStorage.removeItem("clienteData");
    window.location.href = "/consultar";
  };

  // 🆕 Función para ver detalle de factura
  const handleVerDetalleFactura = async (factura) => {
    setFacturaSeleccionada(factura);
    setModalDetalleFactura(true);
    setLoadingDetalle(true);
    
    try {
      const response = await consultaClienteService.obtenerDetalleFactura(factura.id, token);
      if (response.success) {
        setDetallesFactura(response.detalles);
      }
    } catch (error) {
      console.error('Error cargando detalles:', error);
    } finally {
      setLoadingDetalle(false);
    }
  };

  // 🆕 Función para descargar PDF de contrato
  const handleDescargarPDF = (contratoId) => {
    consultaClienteService.descargarPDFContrato(contratoId, token);
  };
  // 🆕 Función para descargar PDF de factura
const handleDescargarPDFFactura = async (facturaId) => {
  try {
    await consultaClienteService.descargarPDFFactura(facturaId, token);
  } catch (error) {
    console.error('Error descargando factura:', error);
    alert('Error al descargar la factura. Intente nuevamente.');
  }
};

  const getEstadoColor = (estado) => {
    switch (estado?.toLowerCase()) {
      case "pendiente": return "bg-yellow-100 text-yellow-800";
      case "pagada": case "activo": case "completada": return "bg-green-100 text-green-800";
      case "vencida": case "suspendido": return "bg-red-100 text-red-800";
      case "anulada": case "cancelado": return "bg-gray-100 text-gray-800";
      case "programada": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getEstadoIcon = (estado) => {
    switch (estado?.toLowerCase()) {
      case "pendiente": case "programada": return <Clock size={16} />;
      case "pagada": case "activo": case "completada": return <CheckCircle size={16} />;
      case "vencida": case "suspendido": return <XCircle size={16} />;
      default: return <AlertCircle size={16} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando portal...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-2xl p-6 mb-6 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mr-4 shadow-lg ring-4 ring-blue-100">
                  <User className="text-white" size={32} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{cliente?.nombre}</h1>
                  <p className="text-gray-600">Doc: {cliente?.identificacion}</p>
                  <div className="flex items-center mt-1">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold ${getEstadoColor(cliente?.estado)}`}>
                      {getEstadoIcon(cliente?.estado)}
                      <span className="ml-1">{cliente?.estado}</span>
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 border-2 border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
              >
                <LogOut size={20} className="mr-2" />
                Cerrar Sesión
              </button>
            </div>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex border-b overflow-x-auto">
              {[
                { id: "facturas", label: "Facturas", icon: <FileText size={20} /> },
                { id: "contratos", label: "Contratos", icon: <File size={20} /> },
                { id: "servicios", label: "Servicios", icon: <Package size={20} /> },
                { id: "instalaciones", label: "Instalaciones", icon: <Wrench size={20} /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setTabActiva(tab.id)}
                  className={`flex items-center px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                    tabActiva === tab.id
                      ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="p-6">
              {loadingData ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Cargando información...</p>
                </div>
              ) : (
                <>
                  {tabActiva === "facturas" && (
  <div>
    {facturas.length === 0 ? (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 font-semibold">No hay facturas registradas</p>
      </div>
    ) : (
      <div className="space-y-4">
        {facturas.map((factura) => (
          <motion.div
            key={factura.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.01 }}
            className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:border-blue-300"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div 
                className="flex-1 cursor-pointer"
                onClick={() => handleVerDetalleFactura(factura)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg">{factura.numero_factura}</h3>
                  <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold ${getEstadoColor(factura.estado)}`}>
                    {getEstadoIcon(factura.estado)}
                    <span className="ml-1">{factura.estado}</span>
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <p><Calendar className="inline w-4 h-4 mr-1" />
                    Emisión: {new Date(factura.fecha_emision).toLocaleDateString('es-CO')}
                  </p>
                  <p><Calendar className="inline w-4 h-4 mr-1" />
                    Vencimiento: {new Date(factura.fecha_vencimiento).toLocaleDateString('es-CO')}
                  </p>
                  {factura.fecha_pago && (
                    <p><CheckCircle className="inline w-4 h-4 mr-1 text-green-600" />
                      Pagada: {new Date(factura.fecha_pago).toLocaleDateString('es-CO')}
                    </p>
                  )}
                  {factura.periodo_facturacion && (
                    <p>Periodo: {factura.periodo_facturacion}</p>
                  )}
                </div>
                <p className="text-xs text-blue-600 mt-2">👆 Haz clic para ver detalles</p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-2xl font-bold text-blue-600">
                    ${parseFloat(factura.total || 0).toLocaleString('es-CO')}
                  </p>
                </div>
                
                {/* 🆕 BOTÓN DE DESCARGA PDF */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Evitar que se abra el modal
                    handleDescargarPDFFactura(factura.id);
                  }}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Download size={16} className="mr-2" />
                  Descargar PDF
                </button>

                {factura.estado === 'pendiente' && (
                  <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-lg text-xs font-semibold">
                    <Clock size={14} className="mr-1" />
                    Pendiente de pago
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    )}
  </div>
)}

                  {tabActiva === "contratos" && (
  <div>
    {contratos.length === 0 ? (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <File className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 font-semibold">No hay contratos registrados</p>
      </div>
    ) : (
      <div className="space-y-4">
        {contratos.map((contrato) => (
          <motion.div
            key={contrato.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg">{contrato.numero_contrato}</h3>
                  <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold ${getEstadoColor(contrato.estado)}`}>
                    {getEstadoIcon(contrato.estado)}
                    <span className="ml-1">{contrato.estado}</span>
                  </span>
                </div>
                
                <div className="space-y-1 text-sm text-gray-600">
                  {contrato.plan_nombre && (
                    <p className="font-semibold text-gray-900">Plan: {contrato.plan_nombre}</p>
                  )}
                  <p><Calendar className="inline w-4 h-4 mr-1" />
                    Inicio: {new Date(contrato.fecha_inicio).toLocaleDateString('es-CO')}
                  </p>
                  {contrato.fecha_fin && (
                    <p><Calendar className="inline w-4 h-4 mr-1" />
                      Fin: {new Date(contrato.fecha_fin).toLocaleDateString('es-CO')}
                    </p>
                  )}
                  {contrato.tipo_permanencia && (
                    <p>Permanencia: {contrato.tipo_permanencia} 
                      {contrato.permanencia_meses > 0 && ` (${contrato.permanencia_meses} meses)`}
                    </p>
                  )}
                </div>
              </div>

              {/* ✅ BOTÓN SIEMPRE VISIBLE */}
              <button 
                onClick={() => handleDescargarPDF(contrato.id)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download size={16} className="mr-2" />
                Descargar PDF
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    )}
  </div>
)}

                  {/* SERVICIOS e INSTALACIONES siguen igual... */}
                  {tabActiva === "servicios" && (
                    <div>
                      {servicios.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 rounded-lg">
                          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 font-semibold">No hay servicios registrados</p>
                        </div>
                      ) : (
                        <div className="grid md:grid-cols-2 gap-4">
                          {servicios.map((servicio) => (
                            <motion.div
                              key={servicio.id}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <h3 className="font-bold text-lg">{servicio.plan_nombre}</h3>
                                <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold ${getEstadoColor(servicio.estado)}`}>
                                  {getEstadoIcon(servicio.estado)}
                                  <span className="ml-1">{servicio.estado}</span>
                                </span>
                              </div>

                              <div className="space-y-2 text-sm">
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-600">Tipo:</span>
                                  <span className="font-semibold">{servicio.tipo}</span>
                                </div>
                                
                                {servicio.velocidad_bajada && (
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-600">⬇️ Bajada:</span>
                                    <span className="font-semibold">{servicio.velocidad_bajada} Mbps</span>
                                  </div>
                                )}
                                
                                {servicio.velocidad_subida && (
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-600">⬆️ Subida:</span>
                                    <span className="font-semibold">{servicio.velocidad_subida} Mbps</span>
                                  </div>
                                )}
                                
                                {servicio.canales_tv && (
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-600">📺 Canales:</span>
                                    <span className="font-semibold">{servicio.canales_tv}</span>
                                  </div>
                                )}

                                <div className="pt-3 border-t">
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Precio:</span>
                                    <span className="text-xl font-bold text-blue-600">
                                      ${parseFloat(servicio.precio || 0).toLocaleString('es-CO')}/mes
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {tabActiva === "instalaciones" && (
                    <div>
                      {instalaciones.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 rounded-lg">
                          <Wrench className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 font-semibold">No hay instalaciones registradas</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {instalaciones.map((instalacion) => (
                            <motion.div
                              key={instalacion.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <h3 className="font-bold text-lg">Instalación #{instalacion.id}</h3>
                                <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold ${getEstadoColor(instalacion.estado)}`}>
                                  {getEstadoIcon(instalacion.estado)}
                                  <span className="ml-1">{instalacion.estado}</span>
                                </span>
                              </div>

                              <div className="grid md:grid-cols-2 gap-3 text-sm">
                                <div>
                                  <p className="text-gray-600 mb-1">Fecha Programada:</p>
                                  <p className="font-semibold">
                                    {new Date(instalacion.fecha_programada).toLocaleDateString('es-CO', {
                                      weekday: 'long',
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric'
                                    })}
                                  </p>
                                </div>

                                {instalacion.fecha_realizada && (
                                  <div>
                                    <p className="text-gray-600 mb-1">Fecha Realizada:</p>
                                    <p className="font-semibold text-green-600">
                                      {new Date(instalacion.fecha_realizada).toLocaleDateString('es-CO')}
                                    </p>
                                  </div>
                                )}

                                {instalacion.tecnico_nombre && (
                                  <div>
                                    <p className="text-gray-600 mb-1">Técnico Asignado:</p>
                                    <p className="font-semibold">{instalacion.tecnico_nombre}</p>
                                  </div>
                                )}

                                {instalacion.observaciones && (
                                  <div className="md:col-span-2">
                                    <p className="text-gray-600 mb-1">Observaciones:</p>
                                    <p className="text-sm text-gray-700">{instalacion.observaciones}</p>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 🆕 MODAL DETALLE DE FACTURA */}
      {modalDetalleFactura && facturaSeleccionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-4 border-blue-100"
          >
            {/* Header del Modal */}
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Factura {facturaSeleccionada.numero_factura}
                </h3>
                <p className="text-sm text-gray-600">
                  Emisión: {new Date(facturaSeleccionada.fecha_emision).toLocaleDateString('es-CO')}
                </p>
              </div>
              <button
                onClick={() => setModalDetalleFactura(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle size={28} />
              </button>
            </div>

            {/* Contenido del Modal */}
            <div className="p-6">
              {loadingDetalle ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Cargando detalles...</p>
                </div>
              ) : (
                <>
                  {/* Información General */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-600">Estado</p>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mt-1 ${getEstadoColor(facturaSeleccionada.estado)}`}>
                          {facturaSeleccionada.estado}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Vencimiento</p>
                        <p className="font-semibold">
                          {new Date(facturaSeleccionada.fecha_vencimiento).toLocaleDateString('es-CO')}
                        </p>
                      </div>
                      {facturaSeleccionada.periodo_facturacion && (
                        <div className="col-span-2">
                          <p className="text-xs text-gray-600">Periodo de Facturación</p>
                          <p className="font-semibold">{facturaSeleccionada.periodo_facturacion}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Detalles de la Factura */}
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-4">Detalles de Cobro</h4>
                    <div className="space-y-3">
                      {detallesFactura.map((detalle) => (
                        <div key={detalle.id} className="border rounded-lg p-4 hover:bg-gray-50">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <p className="font-semibold text-gray-900">{detalle.concepto_nombre}</p>
                              {detalle.plan_nombre && (
                                <p className="text-sm text-gray-600">
                                  {detalle.plan_nombre} - {detalle.tipo_servicio}
                                </p>
                              )}
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-lg text-gray-900">
                                ${parseFloat(detalle.total || 0).toLocaleString('es-CO')}
                              </p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mt-2 pt-2 border-t">
                            <div className="flex justify-between">
                              <span>Cantidad:</span>
                              <span className="font-semibold">{detalle.cantidad}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Precio Unit:</span>
                              <span className="font-semibold">
                                ${parseFloat(detalle.precio_unitario || 0).toLocaleString('es-CO')}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Subtotal:</span>
                              <span className="font-semibold">
                                ${parseFloat(detalle.subtotal || 0).toLocaleString('es-CO')}
                              </span>
                            </div>
                            {detalle.valor_iva > 0 && (
                              <div className="flex justify-between">
                                <span>IVA ({detalle.porcentaje_iva}%):</span>
                                <span className="font-semibold">
                                  ${parseFloat(detalle.valor_iva || 0).toLocaleString('es-CO')}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Total */}
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-700">Total a Pagar:</span>
                      <span className="text-3xl font-bold text-blue-600">
                        ${parseFloat(facturaSeleccionada.total || 0).toLocaleString('es-CO')}
                      </span>
                    </div>
                  </div>
                      {/* Botones del modal */}
<div className="mt-6 flex justify-between items-center">
  <button
    onClick={() => handleDescargarPDFFactura(facturaSeleccionada.id)}
    className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
  >
    <Download size={20} className="mr-2" />
    Descargar PDF
  </button>
  
  <button
    onClick={() => setModalDetalleFactura(false)}
    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
  >
    Cerrar
  </button>
</div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}

      <FloatingSocial />
      <Boton />
    </div>
  );
}