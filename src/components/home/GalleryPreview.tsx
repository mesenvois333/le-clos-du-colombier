import Link from "next/link";
import Image from "next/image";

interface Props {
  content: Record<string, string>;
  images: string[];
}

export default function GalleryPreview({ content, images }: Props) {
  const [img1, img2, img3, img4] = images;

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-4">
              {content.galerieSectionSubtitle ?? "Laissez-vous inspirer"}
            </p>
            <h2 className="font-display text-5xl font-light text-[#1A1A1A]">
              {content.galerieSectionTitle ?? "Galerie Photos"}
            </h2>
          </div>
          <Link
            href="/galerie"
            className="shrink-0 self-start font-body text-[11px] tracking-[0.2em] uppercase font-medium text-[#8B6947] border-b border-[#8B6947] pb-0.5 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors"
          >
            {content.galerieCtaText ?? "Voir toute la galerie"} →
          </Link>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-[580px]">
          <div className="md:col-span-2 relative overflow-hidden group">
            {img1 && (
              <Image
                src={img1}
                alt="Le Clos du Colombier — bergerie"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </div>

          <div className="grid grid-rows-3 gap-2">
            {[img2, img3, img4].filter(Boolean).map((img, i) => (
              <div key={i} className="relative overflow-hidden group">
                <Image
                  src={img}
                  alt={`Le Clos du Colombier — photo ${i + 2}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
