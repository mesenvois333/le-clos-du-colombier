"use client";

import { useState } from "react";

interface Testimonial {
  name: string;
  date: string;
  rating: number;
  text: string;
}

interface Props {
  content: Record<string, string>;
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ content, testimonials }: Props) {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  if (!current) return null;

  return (
    <section className="bg-[#F3F0EA] py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="font-body text-[10px] tracking-[0.4em] uppercase text-[#8B6947] mb-4">
          {content.testimonialsLabel ?? "Témoignages"}
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-[#1A1A1A] mb-16">
          {content.testimonialsTitle ?? "Ils nous font confiance"}
        </h2>

        {/* Pull quote */}
        <div className="relative mb-10">
          <div className="font-display text-9xl text-[#C9A882]/40 leading-none absolute -top-6 left-1/2 -translate-x-1/2 select-none">"</div>
          <blockquote className="font-display text-xl md:text-2xl text-[#2C2C2C] leading-relaxed italic pt-8 max-w-3xl mx-auto font-light">
            {current.text}
          </blockquote>
        </div>

        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="flex">
            {Array.from({ length: current.rating }).map((_, i) => (
              <span key={i} className="text-[#8B6947] text-base">★</span>
            ))}
          </div>
          <span className="text-[#E4E1DB]">·</span>
          <p className="font-body text-sm font-medium text-[#1A1A1A] tracking-wide">{current.name}</p>
          <span className="text-[#E4E1DB]">·</span>
          <p className="font-body text-sm text-[#7A7A7A]">{current.date}</p>
        </div>

        {/* Dots nav */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-px transition-all duration-300 ${
                i === active ? "w-10 bg-[#8B6947]" : "w-5 bg-[#C9A882]/40 hover:bg-[#C9A882]"
              }`}
              aria-label={`Témoignage ${i + 1}`}
            />
          ))}
        </div>

        <a
          href="https://www.mariages.net"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 font-body text-[10px] tracking-[0.3em] uppercase text-[#8B6947] hover:text-[#1A1A1A] transition-colors border-b border-[#8B6947]/30 hover:border-[#1A1A1A] pb-0.5"
        >
          {content.testimonialsLinkText ?? "Voir nos avis sur Mariages.net"} →
        </a>
      </div>
    </section>
  );
}
