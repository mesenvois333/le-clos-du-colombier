import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://leclosducolombier.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/notre-salle`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/galerie`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/localisation`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.9 },
  ];
}
