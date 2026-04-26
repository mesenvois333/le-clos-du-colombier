import Link from "next/link";
import Image from "next/image";

interface Props {
  content: Record<string, string>;
  image: string;
}

export default function AboutSection({ content, image }: Props) {
  return (
    <section className="bg-[#FAFAF8] py-28">
      {/* Section header */}
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center mb-20">
        <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-5">
          {content.aboutLabel ?? "Notre histoire"}
        </p>
        <h2 className="font-display text-5xl md:text-6xl font-light text-[#1A1A1A] leading-tight mb-8">
          {content.aboutTitle ?? "Un lieu chargé d'histoire"}
        </h2>
        <blockquote className="font-display text-lg md:text-xl text-[#7A7A7A] leading-relaxed italic">
          "Ancienne propriété féodale de l'Abbaye de Chaumes en Brie, la Ferme de Malassise conserve ses douves et ses bâtiments de différentes époques, dont un colombier du XIIIe siècle qui lui donne son nom."
        </blockquote>
      </div>

      {/* Image + text */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch shadow-sm">
          {/* Image */}
          <div className="relative min-h-[480px] overflow-hidden">
            <Image
              src={image}
              alt="La Ferme de Malassise — Le Clos du Colombier"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text panel */}
          <div className="bg-white px-12 py-16 flex flex-col justify-center">
            <span className="block w-8 h-px bg-[#8B6947] mb-8" />
            <p className="font-body text-[#2C2C2C] leading-relaxed text-base mb-5">
              {content.aboutParagraph1 ?? "Le Clos du Colombier de la Ferme de Malassise est une ancienne bergerie de 200 m² rénovée, nichée dans un parc clos et boisé en Seine-et-Marne."}
            </p>
            <p className="font-body text-[#2C2C2C] leading-relaxed text-base mb-5">
              {content.aboutParagraph2 ?? "Ancienne propriété féodale, la ferme conserve ses douves et ses bâtissons de différentes époques, dont un colombier du XIIIe siècle qui lui donne son nom."}
            </p>
            <p className="font-body text-[#2C2C2C] leading-relaxed text-base mb-10">
              {content.aboutParagraph3 ?? "Véronique et Christophe Meurillon vous accueillent toute l'année pour faire de votre réception un moment hors du temps."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/notre-salle"
                className="px-6 py-3 bg-[#8B6947] text-white font-body text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#1A1A1A] transition-colors text-center"
              >
                {content.aboutCtaPrimary ?? "Découvrir la salle"}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-[#E4E1DB] text-[#2C2C2C] font-body text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#8B6947] hover:text-[#8B6947] transition-colors text-center"
              >
                {content.aboutCtaSecondary ?? "Planifier une visite"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
