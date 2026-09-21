/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // El flyer conjunto de Santander se dividió: ahora hay un QR y un flyer por sede.
      { source: "/descubre/santander", destination: "/descubre", permanent: false },
    ];
  },
};

export default nextConfig;
