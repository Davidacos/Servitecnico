"use client";

import { Wrench, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre Nosotros", href: "#nosotros" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  "Reparación de Lavadoras",
  "Reparación de Neveras",
  "Reparación de Secadoras",
  "Mantenimiento Preventivo",
  "Electrodomésticos en General",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-5 lg:col-span-1">
          <div className="flex items-center gap-2">
            <img
              src="/logo-servitecnico-blanco.png"
              alt="Servitecnico Electronic Logo"
              className="h-14 md:h-18 w-auto"
            />
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Servicio técnico especializado en reparación y mantenimiento de
            electrodomésticos de línea blanca y computadores en Bogotá, Soacha y
            Cundinamarca.
          </p>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0 text-accent" />
              Bogotá D.C., Soacha y Cundinamarca, Colombia
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
              +57 300 803 2230
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
              santiagosalamanca65@gmail.com
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-5">
          <h4 className="font-poppins font-semibold text-white">Navegación</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-5">
          <h4 className="font-poppins font-semibold text-white">Servicios</h4>
          <ul className="space-y-3">
            {services.map((svc) => (
              <li key={svc}>
                <button
                  onClick={() => scrollTo("#servicios")}
                  className="text-white/60 text-sm hover:text-white transition-colors text-left"
                >
                  {svc}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="space-y-5">
          <h4 className="font-poppins font-semibold text-white">
            ¿Necesitas ayuda?
          </h4>
          <p className="text-white/60 text-sm leading-relaxed">
            Contáctanos ahora mismo y un técnico se comunicará contigo para
            agendar la visita.
          </p>
          <button
            onClick={() => scrollTo("#contacto")}
            className="w-full bg-primary text-white text-sm font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Solicitar servicio
          </button>
          <a
            href="https://wa.me/573008032230"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 border border-white/20 text-white text-sm font-semibold py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            WhatsApp directo
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://fenixcom.fenixsuite.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              FenixCom
            </a>{" "}
            . Todos los derechos reservados.
          </p>
          <p>Atención profesional en Bogotá, Soacha y toda Cundinamarca</p>
        </div>
      </div>
    </footer>
  );
}
