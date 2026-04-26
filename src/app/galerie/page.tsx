import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { getContent, getImages, getFooterProps } from "@/lib/data";


export const metadata: Metadata = {
  title: "Galerie Photos – Le Clos du Colombier",
  description:
    "Découvrez en images la bergerie historique, le colombier médiéval, le parc boisé et les réceptions du Clos du Colombier à Fontenay-Trésigny (77).",
};

const allImages = [
  // Mariages & Invités
  { src: "/images/gallery/p_ar-190706-15-38-03.jpg", alt: "Mariés au Clos du Colombier", category: "Mariages" },
  { src: "/images/gallery/p_dantan_2.jpg", alt: "Arrivée des mariés", category: "Mariages" },
  { src: "/images/gallery/p_ar-190706-20-35-02.jpg", alt: "Photo de groupe", category: "Mariages" },
  { src: "/images/gallery/p_me-06-15_20-41-16.jpg", alt: "Lancé de bouquet devant le parc", category: "Mariages" },
  { src: "/images/gallery/p_me-06-15_21-09-40.jpg", alt: "Soirée de mariage", category: "Mariages" },
  { src: "/images/gallery/p_me-06-16_00-12-54.jpg", alt: "Soirée de mariage", category: "Mariages" },
  { src: "/images/gallery/p_20150527-0760l.jpg", alt: "Entrée du parc", category: "Extérieur" },
  { src: "/images/gallery/p_20190507-mavr-0229-03m26_ls.jpg", alt: "Entrée du parc", category: "Extérieur" },
  { src: "/images/gallery/p_20150526-0626l.jpg", alt: "Entrée du parc", category: "Extérieur" },
  { src: "/images/gallery/p_caro_3.jpg", alt: "Un environnement plein de charmes", category: "Extérieur" },
  { src: "/images/gallery/p_caro_5.jpg", alt: "Vue du parc boisé", category: "Extérieur" },
  { src: "/images/gallery/p_20150527-0739ls.jpg", alt: "Vue du parc boisé", category: "Extérieur" },
  { src: "/images/gallery/p_20160611-0049ls.jpg", alt: "Le parc du Clos du Colombier", category: "Extérieur" },
  { src: "/images/gallery/p_2012-07-26-3851.jpg", alt: "Photo de mariage", category: "Mariages" },
  { src: "/images/gallery/p_dantan_13.jpg", alt: "Photo de mariage", category: "Mariages" },
  // Salle Extérieur & Espace
  { src: "/images/gallery/se_caro_1.jpg", alt: "Le colombier vu du parc", category: "Histoire" },
  { src: "/images/gallery/se_caro_4.jpg", alt: "Auvent de 75 m² attenant sur une terrasse de 110 m²", category: "Extérieur" },
  { src: "/images/gallery/se_20190507-mavrf-0312-00m07_ls.jpg", alt: "La salle et le colombier", category: "Extérieur" },
  { src: "/images/gallery/se_20190507-mavrf-0307-00m00_ls.jpg", alt: "Espace vert et salle", category: "Extérieur" },
  { src: "/images/gallery/se3_150905-1678.jpg", alt: "Entrée du Clos du Colombier", category: "Extérieur" },
  { src: "/images/gallery/se3_150905-1683.jpg", alt: "Auvent de 75 m² attenant sur une terrasse de 110 m²", category: "Extérieur" },
  { src: "/images/gallery/se_20150526-0706lr.jpg", alt: "Auvent de 75 m² attenant sur une terrasse de 110 m²", category: "Extérieur" },
  { src: "/images/gallery/se_20150526-0698l.jpg", alt: "Auvent de 75 m² et entrée", category: "Extérieur" },
  { src: "/images/gallery/se_20150526-0724ls.jpg", alt: "Auvent de 75 m² et entrée", category: "Extérieur" },
  { src: "/images/gallery/se_img_20220706_095101.jpg", alt: "Food Truck", category: "Extérieur" },
  // Salle Intérieur
  { src: "/images/gallery/s1_20150509-0343lt.jpg", alt: "Salle de réception de 200 m²", category: "Salle" },
  { src: "/images/gallery/s1_20150526-0692lr.jpg", alt: "Salle de réception de 200 m²", category: "Salle" },
  { src: "/images/gallery/s3_150905-1618.jpg", alt: "La salle du Clos du Colombier décorée", category: "Salle" },
  { src: "/images/gallery/s3_150905-1628.jpg", alt: "Décoration charpente", category: "Salle" },
  { src: "/images/gallery/s2_dantan_10.jpg", alt: "Salle de réception de 200 m²", category: "Salle" },
  { src: "/images/gallery/s2_20160527-p1000028ls.jpg", alt: "Salle de réception de 200 m²", category: "Salle" },
  { src: "/images/gallery/s2_ar-190706-18-03-06.jpg", alt: "Salle de réception de 200 m²", category: "Salle" },
  { src: "/images/gallery/s2_ancienne_25ls.jpg", alt: "Salle de réception de 200 m²", category: "Salle" },
  { src: "/images/gallery/s2_mediev_13.jpg", alt: "Salle médiévale", category: "Salle" },
  // Cérémonie
  { src: "/images/gallery/ce_20190413_2716.jpg", alt: "Cérémonie", category: "Cérémonie" },
  { src: "/images/gallery/ce_ancienne_11.jpg", alt: "Cérémonie dans le parc", category: "Cérémonie" },
  { src: "/images/gallery/ce_ar-190706-16-54-11.jpg", alt: "Cérémonie dans le parc", category: "Cérémonie" },
  { src: "/images/gallery/ce_dantan_3.jpg", alt: "Cérémonie dans le parc", category: "Cérémonie" },
  { src: "/images/gallery/ce_dantan_11.jpg", alt: "Cérémonie dans le parc", category: "Cérémonie" },
  // Colombier & Histoire
  { src: "/images/gallery/c_20150526-0695.jpg", alt: "Le colombier médiéval", category: "Histoire" },
  { src: "/images/gallery/c2_150905-1668.jpg", alt: "Le colombier du XIIIe siècle", category: "Histoire" },
  // Décoration & Réception
  { src: "/images/gallery/d_ancienne_10.jpg", alt: "Les atouts du Clos du Colombier", category: "Décoration" },
  { src: "/images/gallery/d_ar-190706-17-48-30.jpg", alt: "Photos des mariés", category: "Mariages" },
  { src: "/images/gallery/d_dantan_idelice_16.jpg", alt: "Buffet sur la terrasse", category: "Décoration" },
  { src: "/images/gallery/d_dantan_9.jpg", alt: "Table d'honneur", category: "Décoration" },
  { src: "/images/gallery/d_p1050613ls.jpg", alt: "Décoration de réception", category: "Décoration" },
  { src: "/images/gallery/d_mediev_03.jpg", alt: "Ambiance médiévale", category: "Décoration" },
  { src: "/images/gallery/d_traiteur67.jpg", alt: "Buffet traiteur", category: "Décoration" },
  { src: "/images/gallery/d_1004-fra-4727.jpg", alt: "Décoration de salle", category: "Décoration" },
];

export default function GaleriePage() {
  const content = getContent("galerie");
  const images = getImages();
  const footerProps = getFooterProps();

  return (
    <>
      <Header />
      <main>
        <PageHero
          title={content.heroTitle}
          subtitle={content.heroSubtitle}
          image={images.galerieHero as string}
          alt="Galerie du Clos du Colombier"
        />

        <section className="py-20 bg-[#FAFAF8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-4">Photos</p>
              <p className="font-body text-[#7A7A7A] max-w-lg mx-auto">
                La bergerie historique, le colombier médiéval, le parc boisé et nos plus belles réceptions
              </p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
              {allImages.map((img, i) => (
                <div key={i} className="relative overflow-hidden group break-inside-avoid">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-end">
                      <div className="p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="font-body text-[9px] tracking-[0.35em] uppercase text-[#C9A882] mb-1">{img.category}</p>
                        <p className="font-display text-base font-light">{img.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white text-center border-t border-[#E4E1DB]">
          <div className="max-w-xl mx-auto px-6">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-5">Venez nous voir</p>
            <p className="font-display text-3xl font-light text-[#1A1A1A] mb-4">Une visite vaut mille photos</p>
            <span className="block w-10 h-px bg-[#C9A882] mx-auto mb-6" />
            <p className="font-body text-[#7A7A7A] mb-10">Venez découvrir la Ferme de Malassise en personne et laissez-vous séduire par son charme unique.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#8B6947] text-white font-body text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#1A1A1A] transition-colors duration-300"
            >
              Organiser une visite
            </Link>
          </div>
        </section>
      </main>
      <Footer {...footerProps} />
    </>
  );
}
