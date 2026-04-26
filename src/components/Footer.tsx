import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function IconFacebook({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconYoutube({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

interface FooterProps {
  footer?: Record<string, string>;
  contact?: Record<string, string>;
}

export default function Footer({ footer: f, contact: c }: FooterProps = {}) {
  const brandName = f?.brandName ?? "Le Clos du Colombier";
  const brandTagline = f?.brandTagline ?? "Salle de Réception – Seine-et-Marne (77)";
  const brandDescription = f?.brandDescription ?? "Une ferme fortifiée du XIIIe siècle pour vos mariages, réceptions et événements.";
  const instagramUrl = f?.instagramUrl ?? "https://www.instagram.com/leclosducolombier77/";
  const facebookUrl = f?.facebookUrl ?? "https://www.facebook.com/closducolombier77";
  const youtubeUrl = f?.youtubeUrl ?? "https://youtube.com";
  const adresse = c?.adresse ?? "Malassise";
  const ville = c?.ville ?? "77610 Fontenay-Trésigny";
  const adresseNote = c?.adresseNote ?? "Accès direct par la Nationale 4";
  const telephone = c?.telephone ?? "07 62 44 12 12";
  const email = c?.email ?? "closducolombier77@gmail.com";

  return (
    <footer className="bg-[#111111] text-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl font-light text-white tracking-wide mb-1">{brandName}</h3>
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-[#8B6947] mb-5">{brandTagline}</p>
            <p className="font-body text-sm leading-relaxed text-white/40 mb-8 max-w-xs">{brandDescription}</p>
            <div className="flex gap-3">
              {[
                { href: instagramUrl, label: "Instagram", Icon: IconInstagram },
                { href: facebookUrl, label: "Facebook", Icon: IconFacebook },
                { href: youtubeUrl, label: "YouTube", Icon: IconYoutube },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:text-[#C9A882] hover:border-[#C9A882]/40 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-body text-[10px] font-medium tracking-[0.25em] uppercase text-white/50 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/notre-salle", label: "Notre Salle" },
                { href: "/galerie", label: "Galerie Photos" },
                { href: "/videos", label: "Vidéos" },
                { href: "/localisation", label: "Localisation & Accès" },
                { href: "/contact", label: "Nous Contacter" },
                { href: "/mentions-legales", label: "Mentions Légales" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-white/35 hover:text-[#C9A882] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-body text-[10px] font-medium tracking-[0.25em] uppercase text-white/50 mb-6">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-white/40">
                <MapPin size={14} className="text-[#8B6947] mt-0.5 shrink-0" />
                <span className="font-body">
                  {adresse}<br />
                  {ville}<br />
                  <span className="text-white/25 text-xs">{adresseNote}</span>
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={14} className="text-[#8B6947] shrink-0" />
                <a href="tel:+33762441212" className="font-body text-white/40 hover:text-[#C9A882] transition-colors">{telephone}</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={14} className="text-[#8B6947] shrink-0" />
                <a href={`mailto:${email}`} className="font-body text-white/40 hover:text-[#C9A882] transition-colors break-all">{email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-body text-xs text-white/20">
          <p>© {new Date().getFullYear()} {brandName}. Tous droits réservés.</p>
          <Link href="/mentions-legales" className="hover:text-white/40 transition-colors">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
}
