import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Le Clos du Colombier – Salle de Réception Seine-et-Marne (77)",
    template: "%s | Le Clos du Colombier",
  },
  description:
    "Le Clos du Colombier, ferme fortifiée du XIIIe siècle à Fontenay-Trésigny (77). Bergerie rénovée de 200 m², jusqu'à 150 convives assis. Mariages, séminaires et réceptions. Accès Nationale 4.",
  keywords: [
    "salle de réception Seine-et-Marne",
    "salle mariage 77",
    "mariage Fontenay-Trésigny",
    "ferme réception Brie",
    "location salle 77610",
    "salle mariage proche Paris",
    "réception historique Seine-et-Marne",
    "Clos du Colombier",
    "Ferme de Malassise",
    "salle mariage 150 personnes 77",
    "location salle mariage Île-de-France",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Le Clos du Colombier",
  },
  other: {
    "geo.region": "FR-77",
    "geo.placename": "Fontenay-Trésigny",
    "geo.position": "48.687664;2.888494",
    ICBM: "48.687664, 2.888494",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
