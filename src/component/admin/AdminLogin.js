"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";

export default function AdminLogin({ deshabilitado = false }) {
  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  async function entrar(e) {
    e.preventDefault();
    setCargando(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, password }),
      });
      if (res.ok) {
        router.refresh();
        return;
      }
      const data = await res.json().catch(() => ({}));
      setError(data.error || "No se pudo iniciar sesión.");
    } catch {
      setError("No se pudo conectar con el servidor.");
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#071a2b] via-[#0e3a5c] to-[#0e6493] flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8">
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="PSI" className="h-16 w-auto mb-3" />
          <h1 className="text-xl font-bold text-[#0e6493]">Administración del sitio</h1>
        </div>

        {deshabilitado ? (
          <p className="text-sm text-gray-700 bg-amber-50 border border-amber-200 rounded-lg p-4">
            El acceso de administración no está configurado. Defina la variable de entorno{" "}
            <code className="font-mono font-semibold">ADMIN_PASSWORD</code> en el servidor y reinicie la
            aplicación.
          </p>
        ) : (
          <form onSubmit={entrar} className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Usuario</span>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                autoComplete="username"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e6493]"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Contraseña</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e6493]"
              />
            </label>
            {error && <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">{error}</p>}
            <button
              type="submit"
              disabled={cargando}
              className="w-full flex items-center justify-center gap-2 bg-[#0e6493] hover:bg-[#073a57] disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-colors"
            >
              {cargando ? <Loader2 size={18} className="animate-spin" /> : <Lock size={18} />}
              Entrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
