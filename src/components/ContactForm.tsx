"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone?: string;
  eventType: string;
  date?: string;
  guests?: string;
  message: string;
}

interface Props {
  content: Record<string, string>;
}

const EVENT_TYPES = [
  "Mariage",
  "Réception de famille",
  "Anniversaire",
  "Séminaire professionnel",
  "Cocktail / Vin d'honneur",
  "Autre",
];

// Create a free form at https://formspree.io and paste your form ID here
const FORMSPREE_ENDPOINT = "https://formspree.io/f/closducolombier77";

const inputClass = "w-full border border-[#E4E1DB] px-4 py-3 font-body text-sm text-[#1A1A1A] outline-none focus:border-[#8B6947] transition-colors bg-white placeholder:text-[#C0BDB8]";

export default function ContactForm({ content }: Props) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#F3F0EA] p-8 text-center">
        <p className="font-display text-2xl font-light text-[#1A1A1A] mb-2">Merci !</p>
        <p className="font-body text-[#7A7A7A]">{content.formSuccess}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-body text-xs tracking-wide text-[#2C2C2C] font-medium mb-2">{content.formName} *</label>
          <input
            {...register("name", { required: true })}
            className={`${inputClass} ${errors.name ? "border-red-400" : ""}`}
            placeholder="Prénom et nom"
          />
        </div>
        <div>
          <label className="block font-body text-xs tracking-wide text-[#2C2C2C] font-medium mb-2">{content.formEmail} *</label>
          <input
            {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
            type="email"
            className={`${inputClass} ${errors.email ? "border-red-400" : ""}`}
            placeholder="votre@email.fr"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-body text-xs tracking-wide text-[#2C2C2C] font-medium mb-2">{content.formPhone}</label>
          <input
            {...register("phone")}
            type="tel"
            className={inputClass}
            placeholder="06 xx xx xx xx"
          />
        </div>
        <div>
          <label className="block font-body text-xs tracking-wide text-[#2C2C2C] font-medium mb-2">{content.formEventType} *</label>
          <select
            {...register("eventType", { required: true })}
            className={`${inputClass} ${errors.eventType ? "border-red-400" : ""}`}
          >
            <option value="">Choisissez...</option>
            {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-body text-xs tracking-wide text-[#2C2C2C] font-medium mb-2">{content.formDate}</label>
          <input
            {...register("date")}
            type="date"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-body text-xs tracking-wide text-[#2C2C2C] font-medium mb-2">{content.formGuests}</label>
          <input
            {...register("guests")}
            type="number"
            min="1"
            className={inputClass}
            placeholder="Ex : 80"
          />
        </div>
      </div>

      <div>
        <label className="block font-body text-xs tracking-wide text-[#2C2C2C] font-medium mb-2">{content.formMessage} *</label>
        <textarea
          {...register("message", { required: true })}
          rows={5}
          className={`${inputClass} resize-none ${errors.message ? "border-red-400" : ""}`}
          placeholder="Décrivez votre projet, vos questions, votre date..."
        />
      </div>

      {status === "error" && (
        <p className="font-body text-red-600 text-sm">{content.formError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-10 py-4 bg-[#8B6947] text-white font-body text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#1A1A1A] transition-colors duration-300 disabled:opacity-60"
      >
        {isSubmitting ? "Envoi en cours..." : content.formSubmit}
      </button>
    </form>
  );
}
