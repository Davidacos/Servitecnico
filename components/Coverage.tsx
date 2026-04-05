import { MapPin, CheckCircle } from "lucide-react";

const zones = [
  "Chapinero",
  "Usaquén",
  "Suba",
  "Engativá",
  "Kennedy",
  "Bosa",
  "Fontibón",
  "Teusaquillo",
  "Puente Aranda",
  "Antonio Nariño",
  "Rafael Uribe",
  "Ciudad Bolívar",
  "Mártires",
  "Santa Fe",
  "La Candelaria",
  "Barrios Unidos",
  "Soacha",
  "Cundinamarca",
];

export default function Coverage() {
  return (
    <section
      id="cobertura"
      className="py-24 bg-[#0a1628] overflow-hidden relative"
    >
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-7">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-white/70 text-sm font-semibold uppercase tracking-widest">
                Cobertura
              </span>
            </div>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white text-balance">
              Servicio a domicilio en Bogotá, Soacha y Cundinamarca
            </h2>
            <p className="text-white/70 leading-relaxed">
              No importa dónde te encuentres, llegamos hasta tu puerta. Nuestros
              técnicos se desplazan a Bogotá, Soacha y toda Cundinamarca con
              puntualidad y profesionalismo. Solo contáctanos y coordinamos la
              visita.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    Cobertura en tu zona
                  </h4>
                  <p className="text-white/60 text-sm">
                    Realizamos visitas técnicas en Bogotá, Soacha y alrededores
                    con diagnóstico profesional.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    Atención rápida
                  </h4>
                  <p className="text-white/60 text-sm">
                    Agendamos tu servicio lo más pronto posible según
                    disponibilidad.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    Horario flexible
                  </h4>
                  <p className="text-white/60 text-sm">
                    Atendemos de lunes a sábado en horarios cómodos para ti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Localidades */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
          <h3 className="font-poppins font-semibold text-white text-xl mb-6">
            Localidades que atendemos
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {zones.map((zone) => (
              <div
                key={zone}
                className="flex items-center gap-2 text-white/80 text-sm"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                {zone}
              </div>
            ))}
          </div>
          <p className="text-white/50 text-xs mt-6 border-t border-white/10 pt-4">
            ¿Tu localidad no aparece? Consúltanos, cubrimos toda la ciudad.
          </p>
        </div>
      </div>
    </section>
  );
}
