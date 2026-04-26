import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import VenueStats from "@/components/home/VenueStats";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import { getContent, getLists, getImages, getFooterProps } from "@/lib/data";


const schemaOrg = {
  "@context": "https://schema.org",
  "@type": ["EventVenue", "LocalBusiness"],
  name: "Le Clos du Colombier",
  alternateName: "Ferme de Malassise",
  description:
    "Ferme fortifiée du XIIIe siècle à Fontenay-Trésigny (77). Bergerie rénovée de 200 m² pour mariages, séminaires et réceptions dans un parc clos et boisé.",
  url: "https://leclosducolombier.com",
  telephone: "+33762441212",
  email: "closducolombier77@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Malassise",
    addressLocality: "Fontenay-Trésigny",
    postalCode: "77610",
    addressRegion: "Seine-et-Marne",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.687664,
    longitude: 2.888494,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "20:00",
  },
  sameAs: [
    "https://www.facebook.com/closducolombier77",
    "https://www.instagram.com/leclosducolombier77/",
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Salle de 200 m²", value: true },
    { "@type": "LocationFeatureSpecification", name: "Capacité 150 personnes assises", value: true },
    { "@type": "LocationFeatureSpecification", name: "Capacité 180 personnes cocktail", value: true },
    { "@type": "LocationFeatureSpecification", name: "Auvent couvert 75 m²", value: true },
    { "@type": "LocationFeatureSpecification", name: "Terrasse 110 m²", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking privatif", value: true },
    { "@type": "LocationFeatureSpecification", name: "Accessible PMR", value: true },
    { "@type": "LocationFeatureSpecification", name: "Chauffage géothermique", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parc clos et boisé", value: true },
  ],
};

export const metadata: Metadata = {
  title: "Le Clos du Colombier – Salle de Réception Mariage Fontenay-Trésigny (77)",
  description:
    "Le Clos du Colombier, ferme fortifiée du XIIIe siècle à Fontenay-Trésigny en Seine-et-Marne. Salle de réception de 200 m² dans un parc boisé pour vos mariages, séminaires et réceptions. Accès direct par la Nationale 4.",
  keywords: [
    "salle mariage Fontenay-Trésigny",
    "salle réception Seine-et-Marne 77",
    "mariage ferme historique Brie",
    "location salle 77610",
    "salle mariage proche Paris nationale 4",
    "Clos du Colombier mariage",
    "Ferme de Malassise réception",
  ],
};

export default function HomePage() {
  const content = { ...getContent("accueil"), ...getContent("footer") };
  const lists = getLists();
  const images = getImages();
  const footerProps = getFooterProps();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Header />
      <main>
        <HeroSection content={content} bgImage={images.heroBackground as string} />
        <VenueStats stats={lists.stats as { value: string; label: string; suffix: string }[]} />
        <AboutSection content={content} image={images.aboutMain as string} />
        <FeaturesSection content={content} features={lists.features as { title: string; description: string }[]} />
        <GalleryPreview content={content} images={images.galleryPreview as string[]} />
        <TestimonialsSection content={content} testimonials={lists.testimonials as { name: string; date: string; rating: number; text: string }[]} />
        <FaqSection content={content} faq={lists.faq as { question: string; answer: string }[]} />
        <CtaSection content={content} bgImage={images.ctaBackground as string} />
      </main>
      <Footer {...footerProps} />
    </>
  );
}
