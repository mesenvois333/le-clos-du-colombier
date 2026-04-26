import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { MapPin, Phone, Car, Train, Navigation } from "lucide-react";
import { getContent, getLists, getImages, getFooterProps } from "@/lib/data";


export const metadata: Metadata = {
  title: "Localisation – Malassise, 77610 Fontenay-Trésigny",
  description:
    "Le Clos du Colombier est situé à Malassise, 77610 Fontenay-Trésigny, Seine-et-Marne. Accès direct par la Nationale 4. GPS : 48.687664, 2.888494.",
};

const methodIcons = [Car, Train, Navigation];

interface AccesMethode {
  title: string;
  lines: string[];
}

export default function LocalisationPage() {
  const content = { ...getContent("localisation"), ...getContent("contact") };
  const lists = getLists();
  const images = getImages();
  const footerProps = getFooterProps();
  const methodes = lists.accesMethodes as AccesMethode[];

  return (
    <>
      <Header />
      <main>
        <PageHero
          title={content.heroTitle}
          subtitle={content.heroSubtitle}
          image={images.localisationHero as string}
          alt="Accès au Clos du Colombier"
        />

        {/* Intro */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-5">
              {content.introLabel}
            </p>
            <h2 className="font-display text-5xl font-light text-[#1A1A1A] mb-6">
              {content.introTitle}
            </h2>
            <span className="block w-10 h-px bg-[#C9A882] mx-auto mb-8" />
            <p className="font-body text-[#7A7A7A] leading-relaxed text-lg">{content.introDescription}</p>
          </div>
        </section>

        {/* Adresse + carte */}
        <section className="py-12 bg-[#F3F0EA]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-sm">
              {/* Adresse */}
              <div className="bg-white p-12">
                <h3 className="font-display text-3xl font-light text-[#1A1A1A] mb-8">Adresse</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-[#8B6947] mt-1 shrink-0" />
                    <div className="font-body">
                      <p className="font-medium text-[#1A1A1A] mb-1">Ferme de Malassise</p>
                      <p className="text-[#7A7A7A] text-sm">Malassise</p>
                      <p className="text-[#7A7A7A] text-sm">77610 Fontenay-Trésigny</p>
                      <p className="text-[#7A7A7A] text-sm">Seine-et-Marne (77)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Navigation size={18} className="text-[#8B6947] shrink-0" />
                    <div className="font-body">
                      <p className="text-xs text-[#7A7A7A] uppercase tracking-wide mb-1">GPS</p>
                      <p className="text-[#1A1A1A] font-mono text-sm">48.687664, 2.888494</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={18} className="text-[#8B6947] shrink-0" />
                    <a href="tel:+33762441212" className="font-body text-[#1A1A1A] hover:text-[#8B6947] transition-colors font-medium">
                      07 62 44 12 12
                    </a>
                  </div>
                </div>
                <div className="mt-10">
                  <a
                    href="https://www.google.fr/maps/place/Le+Clos+du+Colombier/@48.686559,2.889095,14z/data=!4m2!3m1!1s0x0:0x71260476c44a0273"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B6947] text-white font-body text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-[#1A1A1A] transition-colors"
                  >
                    <MapPin size={14} />
                    Ouvrir dans Google Maps
                  </a>
                </div>
              </div>

              {/* Carte */}
              <div className="min-h-[400px] lg:min-h-auto">
                <iframe
                  title="Localisation Le Clos du Colombier"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.8!2d2.888494!3d48.687664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDQxJzE1LjYiTiAywrA1MyczMC42IkU!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Accès */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-4">Itinéraires</p>
              <h2 className="font-display text-4xl font-light text-[#1A1A1A]">Comment nous rejoindre</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E4E1DB]">
              {methodes.map((m, i) => {
                const Icon = methodIcons[i % methodIcons.length];
                return (
                  <div key={m.title} className="bg-white p-8 hover:bg-[#FAFAF8] transition-colors group">
                    <div className="flex items-center gap-3 mb-6">
                      <Icon size={20} className="text-[#8B6947]" />
                      <h3 className="font-display text-2xl font-light text-[#1A1A1A]">{m.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {m.lines.map((line) => (
                        <li key={line} className="font-body text-sm text-[#7A7A7A] flex items-start gap-2">
                          <span className="text-[#C9A882] mt-1 shrink-0">·</span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-[#F3F0EA] text-center">
          <div className="max-w-xl mx-auto px-6">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-5">Besoin d'aide ?</p>
            <p className="font-display text-3xl font-light text-[#1A1A1A] mb-4">Une question sur l&apos;accès ?</p>
            <span className="block w-10 h-px bg-[#C9A882] mx-auto mb-6" />
            <p className="font-body text-[#7A7A7A] mb-10">Contactez Véronique et Christophe — ils vous guideront avec plaisir.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-[#8B6947] text-white font-body text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#1A1A1A] transition-colors duration-300"
              >
                Nous contacter
              </Link>
              <a
                href="tel:+33762441212"
                className="px-8 py-3.5 border border-[#E4E1DB] text-[#2C2C2C] font-body text-[11px] font-medium tracking-[0.2em] uppercase hover:border-[#8B6947] hover:text-[#8B6947] transition-colors duration-300"
              >
                07 62 44 12 12
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer {...footerProps} />
    </>
  );
}
