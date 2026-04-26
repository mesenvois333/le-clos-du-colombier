import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
import { getContent, getImages, getFooterProps } from "@/lib/data";


export const metadata: Metadata = {
  title: "Contact – Réserver votre date",
  description:
    "Contactez Véronique et Christophe Meurillon pour organiser votre événement au Clos du Colombier. Téléphone : 07 62 44 12 12. Email : closducolombier77@gmail.com.",
};

export default function ContactPage() {
  const content = { ...getContent("contactPage"), ...getContent("contact"), ...getContent("footer") };
  const images = getImages();
  const footerProps = getFooterProps();

  return (
    <>
      <Header />
      <main>
        <PageHero
          title={content.heroTitle}
          subtitle={content.heroSubtitle}
          image={images.contactHero as string}
          alt="Contacter Le Clos du Colombier"
        />

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Infos */}
              <div>
                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-5">Coordonnées</p>
                <h2 className="font-display text-4xl font-light text-[#1A1A1A] mb-6">Contactez-nous</h2>
                <span className="block w-8 h-px bg-[#C9A882] mb-8" />

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F3F0EA] flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-[#8B6947]" />
                    </div>
                    <div className="font-body">
                      <p className="font-medium text-[#1A1A1A] mb-1 text-sm">Adresse</p>
                      <p className="text-[#7A7A7A] text-sm">Malassise</p>
                      <p className="text-[#7A7A7A] text-sm">77610 Fontenay-Trésigny</p>
                      <p className="text-[#7A7A7A] text-xs mt-1">Accès par la Nationale 4</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F3F0EA] flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-[#8B6947]" />
                    </div>
                    <div className="font-body">
                      <p className="font-medium text-[#1A1A1A] mb-1 text-sm">Téléphone</p>
                      <a href="tel:+33762441212" className="text-[#7A7A7A] text-sm hover:text-[#8B6947] transition-colors">
                        07 62 44 12 12
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F3F0EA] flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-[#8B6947]" />
                    </div>
                    <div className="font-body">
                      <p className="font-medium text-[#1A1A1A] mb-1 text-sm">E-mail</p>
                      <a href="mailto:closducolombier77@gmail.com" className="text-[#7A7A7A] text-sm hover:text-[#8B6947] transition-colors break-all">
                        closducolombier77@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10 bg-[#F3F0EA] p-6">
                  <p className="font-display text-xl font-light text-[#1A1A1A] mb-2">Véronique & Christophe Meurillon</p>
                  <p className="font-body text-[#7A7A7A] text-sm leading-relaxed">
                    Disponibles toute l&apos;année pour répondre à vos questions et organiser une visite de la Ferme de Malassise.
                  </p>
                </div>
              </div>

              {/* Formulaire */}
              <div className="lg:col-span-2">
                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-5">Formulaire</p>
                <h2 className="font-display text-4xl font-light text-[#1A1A1A] mb-2">{content.formTitle}</h2>
                <p className="font-body text-[#7A7A7A] text-sm mb-8">{content.formSubtitle}</p>
                <ContactForm content={content} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer {...footerProps} />
    </>
  );
}
