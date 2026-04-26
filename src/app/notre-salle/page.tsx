import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { Check } from "lucide-react";
import { getContent, getLists, getImages, getFooterProps } from "@/lib/data";


export const metadata: Metadata = {
  title: "Notre Salle – Bergerie historique de 200 m²",
  description:
    "Découvrez notre bergerie rénovée de 200 m², implantée dans un parc clos et boisé au sein de la Ferme de Malassise. Un cadre unique pour vos mariages et réceptions à Fontenay-Trésigny (77).",
};

interface Space {
  title: string;
  capacity: string;
  area: string;
  description: string;
  features: string[];
}

interface Service {
  title: string;
  text: string;
}

const spaceQuotes = [
  "Une bergerie du XVIIIe siècle transformée en lieu de vie et de fête pour accueillir vos plus beaux souvenirs.",
  "Le parc est intégralement privatisé pour votre événement — intimité et sérénité garanties pour vous et vos convives.",
  "Le colombier médiéval est l'un des vestiges les mieux conservés de la Brie, et il porte le nom du domaine depuis des siècles.",
];

export default function NotreSallePage() {
  const content = { ...getContent("salle"), ...getContent("footer") };
  const lists = getLists();
  const images = getImages();
  const footerProps = getFooterProps();
  const spaces = lists.salleSpaces as Space[];
  const services = lists.salleServices as Service[];

  return (
    <>
      <Header />
      <main>
        <PageHero
          title={content.heroTitle}
          subtitle={content.heroSubtitle}
          image={images.salleHero as string}
          alt="La bergerie du Clos du Colombier"
        />

        {/* Intro */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-5">
              {content.introLabel}
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-[#1A1A1A] mb-6">
              {content.introTitle}
            </h2>
            <span className="block w-10 h-px bg-[#C9A882] mx-auto mb-8" />
            <p className="font-body text-[#7A7A7A] leading-relaxed text-lg">{content.introDescription}</p>
          </div>
        </section>

        {/* Spaces */}
        <section className="py-20 bg-[#F3F0EA]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-8">
              {spaces.map((space, i) => (
                <div
                  key={space.title}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-sm"
                >
                  <div className={`bg-white p-10 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="font-display text-3xl font-light text-[#1A1A1A] mb-1">{space.title}</h3>
                        <p className="font-body text-[#8B6947] text-sm tracking-wide">{space.capacity}</p>
                      </div>
                      <span className="font-display text-2xl font-light text-[#C9A882]">{space.area}</span>
                    </div>
                    <p className="font-body text-[#7A7A7A] leading-relaxed mb-6 text-sm">{space.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {space.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm font-body text-[#7A7A7A]">
                          <Check size={13} className="text-[#8B6947] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-[#111111] p-10 text-white flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="font-body text-[9px] tracking-[0.4em] uppercase text-[#8B6947] mb-5">Le saviez-vous ?</p>
                    <p className="font-display text-2xl font-light leading-relaxed text-white/80">
                      {spaceQuotes[i] ?? ""}
                    </p>
                    <span className="block w-8 h-px bg-[#8B6947]/40 mt-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-4">
                {content.servicesLabel}
              </p>
              <h2 className="font-display text-5xl font-light text-[#1A1A1A]">
                {content.servicesTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E4E1DB]">
              {services.map((s) => (
                <div key={s.title} className="bg-white p-8 hover:bg-[#FAFAF8] transition-colors group">
                  <h3 className="font-display text-2xl font-light text-[#1A1A1A] mb-3 group-hover:text-[#8B6947] transition-colors">{s.title}</h3>
                  <span className="block w-5 h-px bg-[#E4E1DB] mb-4 group-hover:bg-[#8B6947] transition-colors" />
                  <p className="font-body text-[#7A7A7A] text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#F3F0EA] text-center">
          <div className="max-w-2xl mx-auto px-6">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-5">Réservez votre date</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1A1A1A] mb-4">{content.ctaTitle}</h2>
            <span className="block w-10 h-px bg-[#C9A882] mx-auto mb-6" />
            <p className="font-body text-[#7A7A7A] mb-10">{content.ctaText}</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#8B6947] text-white font-body text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#1A1A1A] transition-colors duration-300"
            >
              {content.ctaButton}
            </Link>
          </div>
        </section>
      </main>
      <Footer {...footerProps} />
    </>
  );
}
