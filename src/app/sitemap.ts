import type { MetadataRoute } from "next";

const siteUrl = "https://7mountain-poker.vercel.app";
const lastMod = new Date("2026-03-22");

// Feature pages with their paths
const featurePages = [
  "tv-modus",
  "fernbedienung",
  "liga",
  "blindstruktur",
  "icm-rechner",
];

// Blog articles
const blogArticles = [
  "poker-turnier-planen",
  "perfekte-blindstruktur",
  "poker-timer-vergleich",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    {
      url: siteUrl,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Feature pages
    ...featurePages.map((page) => ({
      url: `${siteUrl}/features/${page}`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Blog articles
    ...blogArticles.map((slug) => ({
      url: `${siteUrl}/blog/${slug}`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Blog index
    {
      url: `${siteUrl}/blog`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    // Legal pages
    {
      url: `${siteUrl}/impressum`,
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/datenschutz`,
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
