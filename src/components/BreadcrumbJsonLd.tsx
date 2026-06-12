const siteUrl = "https://7mountain-poker.vercel.app";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  // JSON-LD is a static, hardcoded object with no user input - safe to serialize
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "7Mountain Poker",
        item: siteUrl,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${siteUrl}${item.href}`,
      })),
    ],
  };

  // Safe: all values are hardcoded strings from the codebase, never from user input
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
