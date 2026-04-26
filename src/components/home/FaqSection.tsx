import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  content: Record<string, string>;
  faq: FaqItem[];
}

export default function FaqSection({ content, faq }: Props) {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-4">
            {content.faqLabel ?? "Questions fréquentes"}
          </p>
          <h2 className="font-display text-5xl font-light text-[#1A1A1A]">
            {content.faqTitle ?? "FAQ"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
          {faq.map((item) => (
            <div key={item.question} className="border-t border-[#E4E1DB] pt-6 group">
              <h3 className="font-display text-xl font-light text-[#1A1A1A] mb-3 group-hover:text-[#8B6947] transition-colors">
                {item.question}
              </h3>
              <p className="font-body text-[#7A7A7A] text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="font-body text-[#7A7A7A] text-sm mb-4">
            {content.faqFooter ?? "Vous ne trouvez pas la réponse à votre question ?"}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center font-body text-[11px] tracking-[0.2em] uppercase font-medium text-[#8B6947] border-b border-[#8B6947]/40 pb-0.5 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors"
          >
            {content.faqFooterLink ?? "Contactez-nous directement"} →
          </Link>
        </div>
      </div>
    </section>
  );
}
