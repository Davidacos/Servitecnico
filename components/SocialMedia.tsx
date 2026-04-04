import { MessageCircle, Facebook, Instagram, ExternalLink } from "lucide-react";

const socials = [
  {
    name: "WhatsApp",
    handle: "+57 300 803 2230",
    desc: "Escríbenos directo y recibe atención inmediata.",
    href: "https://wa.me/573008032230",
    color: "bg-green-500 hover:bg-green-600",
    icon: MessageCircle,
    cta: "Chatear ahora",
  },
  {
    name: "Facebook",
    handle: "Servitecnico Electronic",
    desc: "Síguenos para tips de mantenimiento y promociones.",
    href: "https://facebook.com",
    color: "bg-blue-600 hover:bg-blue-700",
    icon: Facebook,
    cta: "Ver página",
  },
  {
    name: "Instagram",
    handle: "@servitecnico.electronic",
    desc: "Fotos de nuestros trabajos y antes/después.",
    href: "https://instagram.com",
    color: "bg-pink-600 hover:bg-pink-700",
    icon: Instagram,
    cta: "Ver perfil",
  },
];

export default function SocialMedia() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Redes Sociales
          </span>
          <h2 className="font-poppins text-3xl font-bold text-foreground text-balance">
            Conéctate con nosotros
          </h2>
          <p className="text-muted-foreground">
            Estamos disponibles en tus canales favoritos. Escríbenos o síguenos para
            mantenerte al día con nuestros servicios.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {socials.map((soc) => {
            const Icon = soc.icon;
            return (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center gap-4 bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 ${soc.color} rounded-2xl flex items-center justify-center transition-colors duration-300 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-poppins font-semibold text-foreground">{soc.name}</h3>
                  <p className="text-primary text-sm font-medium">{soc.handle}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{soc.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all">
                  {soc.cta}
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
