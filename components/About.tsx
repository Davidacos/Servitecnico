import { Award, Clock, ThumbsUp, Users } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Técnicos Certificados",
    desc: "Personal capacitado y con experiencia en las principales marcas del mercado.",
  },
  {
    icon: Clock,
    title: "Respuesta Rápida",
    desc: "Coordinamos visita en el menor tiempo posible. Tu comodidad es nuestra prioridad.",
  },
  {
    icon: ThumbsUp,
    title: "Garantía de Servicio",
    desc: "Todos nuestros trabajos incluyen garantía en mano de obra y repuestos originales.",
  },
  {
    icon: Users,
    title: "Más de 500 Clientes",
    desc: "Hogares y negocios en Bogotá, Soacha y toda Cundinamarca confían en nosotros.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Image mosaic */}
        <div className="grid grid-cols-2 gap-4">
          <div className="row-span-2 rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center min-h-64 border border-border">
            <img
              src="/images/hero-appliances.jpg"
              alt="Técnico trabajando"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl bg-primary flex items-center justify-center p-8">
            <div className="text-center">
              <span className="font-poppins text-5xl font-bold text-primary-foreground">10+</span>
              <p className="text-primary-foreground/80 text-sm mt-1">Años de experiencia</p>
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-border flex items-center justify-center p-8 shadow-sm">
            <div className="text-center">
              <span className="font-poppins text-5xl font-bold text-foreground">500+</span>
              <p className="text-muted-foreground text-sm mt-1">Clientes satisfechos</p>
            </div>
          </div>
        </div>

        {/* Right — Text */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Sobre Nosotros
            </span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground text-balance">
              Tu servicio técnico de confianza en Bogotá y Cundinamarca
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Somos un equipo de técnicos especializados en reparación y
              mantenimiento de equipos de cómputo y electrodomésticos de línea blanca. Llevamos más
              de 10 años atendiendo hogares y empresas en Bogotá, Soacha y toda Cundinamarca, siempre con honestidad, rapidez y calidad garantizada.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nos diferenciamos por la transparencia en nuestros precios, la
              puntualidad en nuestras visitas y el uso de repuestos originales
              con garantía. Nuestro objetivo es que tu equipo funcione como nuevo.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="flex flex-col gap-2 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm text-foreground">{val.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
