import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { MessageCircle } from "lucide-react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SERVITECNICO ELECTRONIC | Línea Hogar, Computadores y Cundinamarca",
  description:
    "Expertos en reparación y mantenimiento de lavadoras, neveras, secadoras y servicio técnico de computadores. Servicio a domicilio en Bogotá, Soacha y toda Cundinamarca.",
  generator: "Servitecnico",
  icons: {
    icon: [
      {
        url: "/logo-servitecnico-azul.png",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased overflow-x-hidden`}
      >
        {children}

        {/* Botón WhatsApp */}
        <a
          href="https://wa.me/573008032230"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:-translate-y-1 transition-all z-50 flex items-center justify-center"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </a>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
