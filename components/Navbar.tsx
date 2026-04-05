"use client";

import { useState, useEffect } from "react";
import { Menu, X, Wrench } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#inicio");
          }}
          className="flex items-center gap-2 group"
        >
          <img
            src={
              scrolled
                ? "/logo-servitecnico-azul.png"
                : "/logo-servitecnico-blanco.png"
            }
            alt="Servitecnico Electronic Logo"
            className="h-14 md:h-18 w-auto transition-all duration-300"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium transition-colors duration-200 ${scrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNav("#contacto")}
          className={`hidden md:inline-flex items-center text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md ${scrolled ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-white text-[#0a1628] hover:bg-white/90"}`}
        >
          Contáctanos
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-1 transition-colors duration-200 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleNav("#contacto")}
            className="mt-4 w-full bg-primary text-primary-foreground text-sm font-semibold px-5 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contáctanos
          </button>
        </div>
      )}
    </header>
  );
}
