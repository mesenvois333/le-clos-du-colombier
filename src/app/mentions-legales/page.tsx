import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getFooterProps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du Clos du Colombier – Ferme de Malassise, Fontenay-Trésigny (77).",
};

export default function MentionsLegalesPage() {
  const footerProps = getFooterProps();

  return (
    <>
      <Header />
      <main className="pt-36 pb-24 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-5">Informations légales</p>
          <h1 className="font-display text-5xl font-light text-[#1A1A1A] mb-12">Mentions Légales</h1>

          <div className="space-y-10 font-body text-[#7A7A7A]">
            <section>
              <h2 className="font-display text-2xl font-light text-[#1A1A1A] mb-4">Éditeur du site</h2>
              <span className="block w-6 h-px bg-[#C9A882] mb-4" />
              <p className="text-sm leading-relaxed">
                <strong className="text-[#2C2C2C] font-medium">Le Clos du Colombier – Ferme de Malassise</strong><br />
                Malassise, 77610 Fontenay-Trésigny<br />
                Téléphone : 07 62 44 12 12<br />
                E-mail : closducolombier77@gmail.com<br />
                Propriétaires : Véronique et Christophe Meurillon
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-light text-[#1A1A1A] mb-4">Hébergement</h2>
              <span className="block w-6 h-px bg-[#C9A882] mb-4" />
              <p className="text-sm leading-relaxed">Ce site est hébergé par un prestataire d'hébergement web professionnel. Les coordonnées de l'hébergeur sont disponibles sur demande.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-light text-[#1A1A1A] mb-4">Propriété intellectuelle</h2>
              <span className="block w-6 h-px bg-[#C9A882] mb-4" />
              <p className="text-sm leading-relaxed">
                L'ensemble du contenu de ce site (textes, photographies, images) est la propriété exclusive du Clos du Colombier ou de leurs auteurs respectifs.
                Toute reproduction, même partielle, est interdite sans autorisation préalable.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-light text-[#1A1A1A] mb-4">Données personnelles</h2>
              <span className="block w-6 h-px bg-[#C9A882] mb-4" />
              <p className="text-sm leading-relaxed">
                Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes.
                Elles ne sont ni vendues ni cédées à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès,
                de rectification et de suppression de vos données en nous contactant par e-mail.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-light text-[#1A1A1A] mb-4">Cookies</h2>
              <span className="block w-6 h-px bg-[#C9A882] mb-4" />
              <p className="text-sm leading-relaxed">Ce site n'utilise pas de cookies de traçage. Seuls des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être utilisés.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer {...footerProps} />
    </>
  );
}
