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
      {/* Decorative circles */}
      <div
        className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[100px] left-[-80px] w-[300px] h-[300px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── LEFT ── */}
          <div className="py-10 space-y-8">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Servicio técnico de Línea Hogar y Computadores
            </div>

            {/* Headline */}
            <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] text-balance">
              Tu hogar y{" "}
              <span
                className="relative inline-block"
                style={{
                  WebkitTextStroke: "2px #3b82f6",
                  color: "transparent",
                }}
              >
                equipos
              </span>{" "}
              <br className="hidden sm:block" />
              en marcha.
            </h1>

            <p className="text-white/80 text-lg leading-relaxed max-w-lg">
              Reparamos computadores y contamos con expertos en línea hogar:
              lavadoras, neveras y secadoras. Técnicos certificados listos para
              visitarte en Bogotá, Soacha y toda Cundinamarca.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-3">
              {trust.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-2 bg-white/10 border border-white/15 text-white text-sm font-medium px-4 py-2 rounded-full"
                >
                  <Icon className="w-4 h-4 text-white/80 shrink-0" />
                  {text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollTo("#contacto")}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-black/40 hover:shadow-xl group text-base"
              >
                <Phone className="w-4 h-4" />
                Solicitar servicio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const message =
                    "*Hola, deseo cotizar un servicio t\u00e9cnico:*";
                  window.open(
                    `https://wa.me/573008032230?text=${message}`,
                    "_blank",
                  );
                }}
                className="inline-flex items-center gap-2 border-2 border-white/25 text-white hover:border-white/50 hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
              >
                Cotizar ahora
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="font-poppins text-3xl font-bold text-white">
                    {s.value}
                  </span>
                  <span className="text-white/70 text-xs leading-relaxed">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — technician card ── */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Glow behind card */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl opacity-30"
              style={{ background: "#3b82f6" }}
              aria-hidden="true"
            />

            {/* Card */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-3 w-[380px] shadow-2xl">
              {/* Rating badge */}
              <div className="absolute top-4 right-4 bg-white text-[#0a1628] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md z-10">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                4.9 / 5.0
              </div>

              {/* Tech label */}
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10">
                Técnico certificado
              </div>

              {/* Floating info card */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 w-40 z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Wrench className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-green-600 font-bold text-sm">
                    Activo
                  </span>
                </div>
                <p className="text-gray-500 text-xs">
                  Disponible hoy para visita
                </p>
              </div>

              <img
                src="/images/technician-hero.jpg"
                alt="Técnico de Servitecnico listo para atenderte"
                className="w-full h-[460px] object-cover object-top rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 z-0 text-[100px]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
          style={{ display: "block" }}
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  );
}
