"use client";

import Link from "next/link";

interface Props {
  content: Record<string, string>;
  bgImage: string;
}

export default function HeroSection({ content, bgImage }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed background — naturally bright sun-flared base, gentle tonal touch */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${bgImage}')`,
          filter: "brightness(1.04) saturate(0.95) contrast(0.96) sepia(0.04)",
        }}
        aria-hidden="true"
      />
      {/* Layer A — champagne-gold diffusion wash (soft-light blend) */}
      <div
        className="absolute inset-0 bg-[#E8C892]/15"
        style={{ mixBlendMode: "soft-light" }}
        aria-hidden="true"
      />
      {/* Layer B — readability tint for white text contrast on a bright base */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      {/* Layer C — top-center radial champagne glow */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top, rgba(232,200,146,0.22) 0%, rgba(232,200,146,0.06) 35%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Warm bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#3a2a16]/35 to-transparent" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto pt-20">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="block h-px w-10 bg-white/40" />
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-white/70">
            {content.heroTagline ?? "Fontenay-Trésigny · Seine-et-Marne (77)"}
          </span>
          <span className="block h-px w-10 bg-white/40" />
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none mb-6 tracking-tight">
          {content.heroTitle ?? "Le Clos du Colombier"}
        </h1>

        <p className="font-display text-lg md:text-xl text-white/75 leading-relaxed mb-10 font-light italic max-w-2xl mx-auto">
          {content.heroSubtitle ?? "Ferme fortifiée du XIIIe siècle — bergerie de 200 m² dans un parc clos pour vos mariages et réceptions."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-white text-[#1A1A1A] font-body text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B6947] hover:text-white transition-all duration-300"
          >
            {content.heroCtaPrimary ?? "Nous contacter"}
          </Link>
          <Link
            href="/notre-salle"
            className="px-8 py-3.5 border border-white/50 text-white font-body text-[11px] tracking-[0.2em] uppercase font-medium hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            {content.heroCtaSecondary ?? "Découvrir la salle"}
          </Link>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-50">
          <span className="font-body text-[9px] tracking-[0.3em] uppercase text-white">Défiler</span>
          <div className="w-px h-12 bg-white/40 animate-pulse" />
        </div>
      </div>

      {/* Corner tag */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-end gap-1">
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-white/40">Ferme historique</span>
        <span className="font-display text-sm font-light text-white/60 italic">XIIIe siècle</span>
      </div>
    </section>
  );
}
