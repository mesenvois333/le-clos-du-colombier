import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { getContent, getImages, getFooterProps } from "@/lib/data";


export const metadata: Metadata = {
  title: "Vidéos – Le Clos du Colombier",
  description:
    "Regardez nos vidéos et découvrez l'atmosphère unique du Clos du Colombier – Ferme de Malassise, Fontenay-Trésigny (77).",
};

const videos = [
  {
    id: "z3Z4wGovsAg",
    title: "Le Clos du Colombier – Ferme de Malassise",
    description: "Découvrez la bergerie historique, le colombier médiéval et le parc boisé du Clos du Colombier.",
  },
  {
    id: "nkKaqcJHK44",
    title: "Le Clos du Colombier – Réceptions & Mariages",
    description: "Ambiance et moments forts des réceptions et mariages organisés au Clos du Colombier.",
  },
];

export default function VideosPage() {
  const images = getImages();
  const footerProps = getFooterProps();

  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Nos Vidéos"
          subtitle="Plongez dans l'atmosphère unique de la Ferme de Malassise"
          image={images.galerieHero as string}
          alt="Vidéos du Clos du Colombier"
        />

        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-5">En images et en mouvement</p>
              <h2 className="font-display text-5xl font-light text-[#1A1A1A] mb-6">Vivez l&apos;expérience</h2>
              <span className="block w-10 h-px bg-[#C9A882] mx-auto mb-8" />
              <p className="font-body text-[#7A7A7A] leading-relaxed max-w-lg mx-auto">
                Découvrez la bergerie historique, le colombier médiéval et l&apos;ambiance de nos plus belles réceptions.
              </p>
            </div>

            {/* Video embeds */}
            <div className="space-y-12 mb-16">
              {videos.map((video) => (
                <div key={video.id}>
                  <div className="relative w-full aspect-video bg-[#F3F0EA] overflow-hidden shadow-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  </div>
                  <div className="mt-4 px-1">
                    <p className="font-display text-xl font-light text-[#1A1A1A] mb-1">{video.title}</p>
                    <p className="font-body text-sm text-[#7A7A7A]">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-[#F3F0EA] p-10 text-center">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-4">Venez découvrir</p>
              <p className="font-display text-3xl font-light text-[#1A1A1A] mb-3">Une visite vaut mille vidéos</p>
              <span className="block w-8 h-px bg-[#C9A882] mx-auto mb-6" />
              <p className="font-body text-[#7A7A7A] text-sm mb-8 max-w-sm mx-auto">
                Véronique et Christophe vous accueillent pour une visite personnalisée de la Ferme de Malassise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-[#8B6947] text-white font-body text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#1A1A1A] transition-colors duration-300"
                >
                  Organiser une visite
                </Link>
                <Link
                  href="/galerie"
                  className="px-8 py-3.5 border border-[#E4E1DB] text-[#2C2C2C] font-body text-[11px] font-medium tracking-[0.2em] uppercase hover:border-[#8B6947] hover:text-[#8B6947] transition-colors duration-300"
                >
                  Voir la galerie photos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer {...footerProps} />
    </>
  );
}
