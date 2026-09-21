import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContentProvider from "@/component/ContentProvider";
import { readContent } from "@/lib/contentStore";

// El contenido lo edita el administrador en tiempo de ejecución, así que las páginas no pueden
// quedar congeladas en el build: se renderizan en cada petición con lo último guardado.
export const dynamic = "force-dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PSI",
  description: "internet",
};

export default async function RootLayout({ children }) {
  const content = await readContent();

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContentProvider content={content}>{children}</ContentProvider>
      </body>
    </html>
  );
}
