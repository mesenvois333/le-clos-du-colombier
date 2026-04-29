"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/notre-salle", label: "Notre Salle" },
  { href: "/galerie", label: "Galerie" },
  { href: "/videos", label: "Vidéos" },
  { href: "/localisation", label: "Localisation" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E4E1DB]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18 py-5">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start shrink-0">
              <span
                className={`font-display text-xl font-medium tracking-widest transition-colors leading-tight ${
                  scrolled ? "text-[#1A1A1A]" : "text-white"
                }`}
                style={{ fontStyle: "normal" }}
              >
                Le Clos du Colombier
              </span>
              <span
                className={`font-body text-[11px] tracking-[0.3em] uppercase transition-colors mt-0.5 ${
                  scrolled ? "text-[#8B6947]" : "text-white/60"
                }`}
              >
                Ferme de Malassise · 77
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-[13px] tracking-[0.12em] uppercase font-medium transition-colors ${
                    scrolled
                      ? "text-[#2C2C2C] hover:text-[#8B6947]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`ml-2 px-5 py-2.5 text-[13px] font-body font-medium tracking-[0.12em] uppercase transition-all duration-300 ${
                  scrolled
                    ? "bg-[#8B6947] text-white hover:bg-[#1A1A1A]"
                    : "bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm"
                }`}
              >
                Réserver
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 transition-colors ${
                scrolled ? "text-[#1A1A1A]" : "text-white"
              }`}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-[#E4E1DB] ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 font-body text-[13px] tracking-[0.15em] uppercase text-[#2C2C2C] border-b border-[#E4E1DB] hover:text-[#8B6947] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 py-3.5 text-center bg-[#8B6947] text-white font-body text-[13px] tracking-[0.15em] uppercase hover:bg-[#1A1A1A] transition-colors"
            >
              Réserver
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
