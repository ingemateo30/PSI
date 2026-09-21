/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // El flyer y el QR ahora son una herramienta interna del panel de administración (pestaña "Códigos QR").
      { source: "/descubre", destination: "/admin", permanent: false },
      { source: "/descubre/santander", destination: "/sedes/santander", permanent: false },
    ];
  },
};

export default nextConfig;
