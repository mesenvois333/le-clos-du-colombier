import Image from "next/image";

interface Props {
  title: string;
  subtitle?: string;
  image: string;
  alt?: string;
}

export default function PageHero({ title, subtitle, image, alt = "" }: Props) {
  return (
    <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
      <Image
        src={image}
        alt={alt || title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
      <div className="relative z-10 text-white px-8 md:px-16 pb-14 max-w-5xl">
        <span className="block w-8 h-px bg-[#C9A882] mb-5" />
        <h1 className="font-display text-5xl md:text-7xl font-light leading-tight text-white mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-base text-white/60 font-light max-w-xl mt-3">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
