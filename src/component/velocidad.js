"use client";
import { useState, useEffect } from "react";
import { Gauge, Wifi, AlertTriangle, ArrowRight, CheckCircle, Activity } from "lucide-react";

export default function Velocidad() {
  const [speed, setSpeed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [testProgress, setTestProgress] = useState(0);
  const [testComplete, setTestComplete] = useState(false);

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setTestProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const medirVelocidad = async () => {
    setLoading(true);
    setError(null);
    setTestProgress(0);
    setTestComplete(false);
    
    try {
      const response = await fetch("/api/speedtest");
      const data = await response.json();

      if (response.ok) {
        setSpeed(data.speed.toFixed(2));
        setTestComplete(true);
      } else {
        setError("Error al medir la velocidad.");
      }
    } catch (error) {
      setError("No se pudo conectar con el servidor.");
    }

    setLoading(false);
  };

  const getSpeedQuality = (speed) => {
    if (!speed) return "";
    if (speed < 10) return "Básica";
    if (speed < 30) return "Buena";
    if (speed < 70) return "Muy buena";
    return "Excelente";
  };

  return (
    <section className="relative bg-gradient-to-r from-[#0e6493] to-[#073a57] py-16 text-white overflow-hidden">
      
      

      <div className="relative container mx-auto px-6 text-center">
        
        <h2 className="text-5xl font-bold mb-6">
          Test de Velocidad
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
          Comprueba la velocidad de tu conexión a internet con nuestra herramienta rápida y precisa.
        </p>

        
        <div className="max-w-xl mx-auto">
          <div className="bg-white/10 p-8 rounded-xl shadow-xl hover:bg-white/15 transition-all duration-300">
            <div className="flex flex-col items-center">
             
              <div className="relative w-64 h-64 mb-8">
                {!loading && !testComplete && !speed && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Gauge className="h-32 w-32 text-white opacity-40" />
                  </div>
                )}
                
                {loading && (
                  <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="40" 
                        fill="none" 
                        stroke="rgba(255, 255, 255, 0.2)" 
                        strokeWidth="8"
                      />
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="40" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="8"
                        strokeDasharray="251.2"
                        strokeDashoffset={251.2 - (251.2 * testProgress / 100)}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                      <text 
                        x="50" 
                        y="50" 
                        textAnchor="middle" 
                        dominantBaseline="middle" 
                        fill="white" 
                        fontSize="16"
                        fontWeight="bold"
                      >
                        {testProgress}%
                      </text>
                    </svg>
                  </div>
                )}

                {testComplete && speed && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-6xl font-bold text-white mb-2 transition-all duration-700">
                      {speed}
                    </div>
                    <div className="text-xl font-semibold text-white opacity-90">Mbps</div>
                    <div className="mt-2 font-medium text-white bg-white/20 px-4 py-1 rounded-full">
                      {getSpeedQuality(speed)}
                    </div>
                  </div>
                )}
              </div>

             
              {testComplete && speed && (
                <div className="w-full bg-white/10 rounded-xl p-4 mb-8">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-white/20">
                        <Wifi className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium text-white">Velocidad de descarga:</span>
                    </div>
                    <span className="font-bold text-white">{speed} Mbps</span>
                  </div>
                  <div className="mt-3 text-sm text-white/80">
                    {parseFloat(speed) > 30 ? (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-300" />
                        <span>Tu conexión es adecuada para streaming HD y videojuegos</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-300" />
                        <span>Tu conexión podría mejorarse para un rendimiento óptimo</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

             
              {error && (
                <div className="w-full bg-red-500/20 text-white p-4 rounded-xl mb-8 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="font-medium">{error}</span>
                </div>
              )}

              
              <button
                onClick={medirVelocidad}
                disabled={loading}
                className={`group relative w-full py-4 px-6 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 transform ${
                  loading 
                    ? "bg-gray-500/50 cursor-not-allowed" 
                    : "bg-white text-[#0e6493] hover:bg-white/90 hover:-translate-y-1"
                }`}
              >
                <span className="flex items-center justify-center">
                  {loading ? (
                    "Midiendo velocidad..."
                  ) : (
                    <>
                      {testComplete ? "Realizar nueva prueba" : "Iniciar prueba de velocidad"}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>

              {testComplete && speed && parseFloat(speed) < 30 && (
                <div className="w-full mt-8 bg-white/10 p-4 rounded-xl">
                  <h3 className="font-semibold text-lg text-white mb-2">
                    ¿Deseas mejorar tu velocidad?
                  </h3>
                  <p className="text-sm text-white/80 mb-3">
                    Contamos con planes de fibra óptica de alta velocidad diseñados para ti.
                  </p>
                  <button className="bg-white hover:bg-white/90 text-[#0e6493] py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-1">
                    Ver planes disponibles
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
