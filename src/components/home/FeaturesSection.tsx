import Link from "next/link";

interface Props {
  content: Record<string, string>;
  features: { title: string; description: string }[];
}

const featureAccents = [
  "Patrimoine",
  "Nature",
  "Sérénité",
  "Accessibilité",
  "Festivités",
  "Accompagnement",
];

export default function FeaturesSection({ content, features }: Props) {
  return (
    <section className="bg-[#F3F0EA] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-4">
              {content.featuresLabel ?? "Pourquoi nous choisir"}
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-[#1A1A1A] leading-tight max-w-lg">
              {content.featuresTitle ?? "Un cadre d'exception"}
            </h2>
          </div>
          <Link
            href="/notre-salle"
            className="shrink-0 self-start md:self-auto font-body text-[11px] tracking-[0.2em] uppercase font-medium text-[#8B6947] border-b border-[#8B6947] pb-0.5 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors"
          >
            {content.featuresCtaText ?? "Découvrir l'espace"} →
          </Link>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E4E1DB]">
          {features.slice(0, 6).map((feature, i) => (
            <div
              key={feature.title}
              className="bg-white p-10 hover:bg-[#FAFAF8] transition-colors group"
            >
              <p className="font-body text-[9px] tracking-[0.35em] uppercase text-[#C9A882] mb-4">
                {featureAccents[i] ?? ""}
              </p>
              <h3 className="font-display text-2xl font-light text-[#1A1A1A] mb-4 group-hover:text-[#8B6947] transition-colors">
                {feature.title}
              </h3>
              <span className="block w-6 h-px bg-[#E4E1DB] mb-4 group-hover:bg-[#8B6947] transition-colors" />
              <p className="font-body text-[#7A7A7A] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
