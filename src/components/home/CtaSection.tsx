import Link from "next/link";

interface Props {
  content: Record<string, string>;
  bgImage: string;
}

export default function CtaSection({ content, bgImage }: Props) {
  return (
    <section
      className="relative min-h-[480px] flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url('${bgImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto py-24">
        <p className="font-body text-[10px] tracking-[0.4em] uppercase text-white/50 mb-5">
          {content.ctaLabel ?? "Réservez votre date"}
        </p>
        <h2 className="font-display text-5xl md:text-6xl font-light text-white leading-tight mb-6">
          {content.ctaTitle ?? "Votre événement de rêve vous attend"}
        </h2>
        <span className="block w-10 h-px bg-[#C9A882] mx-auto mb-6" />
        <p className="font-body text-white/65 leading-relaxed mb-10 text-base max-w-md mx-auto">
          {content.ctaText ?? "Les dates se réservent à l'avance. Contactez-nous dès aujourd'hui pour vérifier la disponibilité."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-white text-[#1A1A1A] font-body text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B6947] hover:text-white transition-all duration-300"
          >
            {content.ctaButtonPrimary ?? "Nous contacter"}
          </Link>
          <a
            href="tel:+33762441212"
            className="px-8 py-3.5 border border-white/40 text-white font-body text-[11px] tracking-[0.2em] uppercase font-medium hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            {content.ctaButtonSecondary ?? "07 62 44 12 12"}
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 font-body text-[10px] tracking-[0.15em] uppercase text-white/35">
          <span>Disponible toute l'année</span>
          <span className="hidden sm:block text-white/20">·</span>
          <span>Devis gratuit</span>
          <span className="hidden sm:block text-white/20">·</span>
          <span>Visite sur rendez-vous</span>
        </div>
      </div>
    </section>
  );
}
