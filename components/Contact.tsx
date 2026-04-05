"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    mensaje: "",
    urgencia: "Normal",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const whatsappNumber = "+573008032230";
    const message = `*Hola, quiero solicitar un servicio:*%0A%0A*Nombre:* ${form.nombre}%0A*Tel\u00e9fono:* ${form.telefono}%0A*Urgencia:* ${form.urgencia}%0A*Problema:* ${form.mensaje}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Mark as sent and clear form
    setSent(true);
    setLoading(false);
    setSent(true);
    setLoading(false);
    setForm({ nombre: "", telefono: "", mensaje: "", urgencia: "Normal" });

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* Left — Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Contacto
            </span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground text-balance">
              ¿Tu electrodoméstico tiene fallas?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cuéntanos qué está pasando y nos comunicaremos contigo a la
              brevedad para agendar la visita de nuestro técnico.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Llámanos</p>
                <p className="font-semibold text-foreground">+57 300 803 2230</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Correo</p>
                <p className="font-semibold text-foreground">santiagosalamanca65@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Ubicación</p>
                <p className="font-semibold text-foreground">Bogotá D.C., Colombia</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
            <h4 className="font-poppins font-semibold text-foreground">Horario de atención</h4>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Lunes – Viernes</span>
              <span className="font-medium text-foreground">7:00 am – 6:00 pm</span>
            </div>
            <div className="flex justify-between text-sm border-t border-border pt-3">
              <span className="text-muted-foreground">Sábado</span>
              <span className="font-medium text-foreground">8:00 am – 4:00 pm</span>
            </div>
            <div className="flex justify-between text-sm border-t border-border pt-3">
              <span className="text-muted-foreground">Domingo</span>
              <span className="font-medium text-muted-foreground">Cerrado</span>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-foreground">¡Mensaje enviado!</h3>
              <p className="text-muted-foreground">
                Nos comunicaremos contigo pronto. ¡Gracias por contactarnos!
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-2 text-sm text-primary font-medium hover:underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="font-poppins font-bold text-xl text-foreground mb-6">
                Envíanos un mensaje
              </h3>

              {/* Nombre */}
              <div className="space-y-1.5">
                <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                  Nombre completo <span className="text-destructive">*</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  className="w-full border border-input bg-background rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                />
              </div>

              {/* Teléfono */}
              <div className="space-y-1.5">
                <label htmlFor="telefono" className="text-sm font-medium text-foreground">
                  Teléfono <span className="text-destructive">*</span>
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="Ej: 300 803 2230"
                  className="w-full border border-input bg-background rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                />
              </div>

              {/* Urgencia */}
              <div className="space-y-1.5">
                <label htmlFor="urgencia" className="text-sm font-medium text-foreground">
                  Nivel de Urgencia <span className="text-destructive">*</span>
                </label>
                <select
                  id="urgencia"
                  name="urgencia"
                  required
                  value={form.urgencia}
                  onChange={handleChange}
                  className="w-full border border-input bg-background rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                >
                  <option value="Baja">Baja - Mantenimiento general</option>
                  <option value="Normal">Normal - Revisión estándar</option>
                  <option value="Alta">Alta - Equipo no funciona</option>
                  <option value="Urgente">⚠️ Urgente - Reparación inmediata</option>
                </select>
              </div>

              {/* Mensaje */}
              <div className="space-y-1.5">
                <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                  Describe el problema <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  required
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Ej: Mi lavadora no centrifuga y hace un ruido extraño..."
                  className="w-full border border-input bg-background rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg hover:bg-primary/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
