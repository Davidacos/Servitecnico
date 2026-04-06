"use client";
import {
  WashingMachine,
  Refrigerator,
  Wind,
  ShieldCheck,
  Zap,
  Thermometer,
  Laptop,
} from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "T\u00e9cnico de Computadores",
    description:
      "Diagn\u00f3stico, mantenimiento preventivo y correctivo, formateo, actualizaci\u00f3n de hardware y reparaci\u00f3n de PC y port\u00e1tiles.",
    tags: ["Formateo", "Hardware", "Mantenimiento"],
  },
  {
    icon: WashingMachine,
    title: "Reparación de Lavadoras",
    description:
      "Diagnóstico y reparación de lavadoras de todas las marcas. Problemas de centrifugado, filtraciones, plaquetas electrónicas y más.",
    tags: ["Samsung", "LG", "Whirlpool", "Haceb"],
  },
  {
    icon: Refrigerator,
    title: "Reparación de Neveras",
    description:
      "Recarga de gas, reparación de compresor, termostatos y sistemas de enfriamiento. Neveras frost y no frost.",
    tags: ["Mabe", "Whirlpool", "Samsung", "LG"],
  },
  {
    icon: Wind,
    title: "Reparación de Secadoras",
    description:
      "Servicio especializado en secadoras eléctricas y a gas. Problemas de calefacción, tambor, sensores y circuitos.",
    tags: ["Centrales", "LG", "Whirlpool", "GE"],
  },
  {
    icon: Zap,
    title: "Electrodomésticos en General",
    description:
      "Reparación de lavavajillas, hornos, estufas, aires acondicionados y cualquier línea blanca del hogar.",
    tags: ["Estufas", "Hornos", "Aires", "Lavavajillas"],
  },
  {
    icon: ShieldCheck,
    title: "Mantenimiento Preventivo",
    description:
      "Limpieza profunda, revisión general y ajuste de componentes para prolongar la vida útil de tus equipos.",
    tags: ["Limpieza", "Revisión", "Ajuste", "Garantía"],
  },
  {
    icon: Thermometer,
    title: "Urgencias y Domicilios",
    description:
      "Atención prioritaria para daños urgentes. Nos desplazamos a tu hogar o negocio en toda Bogotá.",
    tags: ["Rápido", "A domicilio", "Toda Bogotá"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Nuestros Servicios
          </span>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground text-balance">
            Todo lo que tu electrodoméstico necesita
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Contamos con técnicos especializados en las principales marcas del
            mercado. Reparamos rápido, con garantía y a precios justos.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="group bg-card border border-border rounded-2xl p-7 flex flex-col gap-5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-poppins font-semibold text-lg text-foreground">
                    {svc.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Cotizar Button */}
                <button
                  onClick={() => {
                    const message = `*Hola, quiero cotizar el servicio de:*%0A*${svc.title}*`;
                    window.open(
                      `https://wa.me/573008032230?text=${message}`,
                      "_blank",
                    );
                  }}
                  className="mt-2 w-full py-2.5 bg-primary/10 border border-primary/20 text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                >
                  Cotizar ahora
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
