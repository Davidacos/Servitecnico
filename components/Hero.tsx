"use client";

import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Star,
  Wrench,
  Phone,
} from "lucide-react";

const stats = [
  { value: "+500", label: "Equipos reparados" },
  { value: "10+", label: "Años de experiencia" },
  { value: "24h", label: "Respuesta rápida" },
  { value: "100%", label: "Garantía incluida" },
];

const trust = [
  { icon: ShieldCheck, text: "Agendamiento inmediato" },
  { icon: Clock, text: "Servicio en el día" },
  { icon: Star, text: "Garantía en repuestos" },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden w-full min-h-screen flex items-center pt-24 pb-20"
      style={{
        background:
          "linear-gradient(145deg, #0a1628 0%, #0d2347 50%, #0a3d6e 100%)",
      }}
    >
      {/* Decorative circles (controlados para no romper mobile) */}
      <div
        className="hidden md:block absolute top-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
        }}
      />
      <div
        className="hidden md:block absolute bottom-[100px] left-[-80px] w-[250px] h-[250px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* ── LEFT ── */}
          <div className="py-6 sm:py-10 space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Servicio técnico de Línea Hogar y Computadores
            </div>

            {/* Title */}
            <h1 className="font-poppins text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Tu hogar y{" "}
              <span
                className="relative inline-block"
                style={{
                  WebkitTextStroke: "2px #3b82f6",
                  color: "transparent",
                }}
              >
                equipos
              </span>
              <br className="hidden sm:block" />
              en marcha.
            </h1>

            {/* Description */}
            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-md">
              Reparamos computadores y contamos con expertos en línea hogar:
              lavadoras, neveras y secadoras. Técnicos certificados listos para
              visitarte en Bogotá, Soacha y toda Cundinamarca.
            </p>

            {/* Trust */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {trust.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-2 bg-white/10 border border-white/15 text-white text-xs sm:text-sm px-3 py-2 rounded-full"
                >
                  <Icon className="w-4 h-4" />
                  {text}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => scrollTo("#contacto")}
                className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Solicitar servicio
              </button>

              <button
                onClick={() => {
                  const message = "*Hola, deseo cotizar un servicio técnico:*";
                  window.open(
                    `https://wa.me/573008032230?text=${message}`,
                    "_blank",
                  );
                }}
                className="flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl"
              >
                Cotizar ahora
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-white text-xl sm:text-2xl font-bold">
                    {s.value}
                  </p>
                  <p className="text-white/70 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT (solo desktop) ── */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Glow */}
            <div className="absolute w-72 h-72 bg-blue-500 blur-3xl opacity-30 rounded-full" />

            {/* Card */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-3 w-[340px] shadow-2xl">
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-white text-black text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                4.9
              </div>

              {/* Floating card (solo desktop) */}
              <div className="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2 bg-white p-3 rounded-xl w-36 shadow-lg">
                <p className="text-green-600 font-bold text-sm">Activo</p>
                <p className="text-xs text-gray-500">Disponible hoy</p>
              </div>

              <img
                src="/images/technician-hero.jpg"
                alt="Técnico"
                className="w-full h-[420px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
