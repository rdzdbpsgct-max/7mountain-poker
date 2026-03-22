import type { MetadataRoute } from "next";

const siteUrl = "https://7mountain-poker.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/features/tv-modus`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/features/fernbedienung`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/features/liga`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/features/blindstruktur`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/features/icm-rechner`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/impressum`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/datenschutz`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
