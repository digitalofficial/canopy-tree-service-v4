import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Canopy Tree Service | Tree Trimming & Removal in Tucson, AZ",
  description:
    "Professional tree trimming, removal, stump grinding, and emergency storm cleanup in Tucson, AZ. Licensed, insured, family-owned. 15+ years experience. Call for a free estimate.",
  keywords:
    "tree trimming Tucson, tree removal Tucson AZ, stump grinding, emergency tree service, palm tree trimming, land clearing Tucson",
  openGraph: {
    title: "Canopy Tree Service | Tree Trimming & Removal in Tucson, AZ",
    description:
      "Professional tree trimming, removal, stump grinding, and emergency storm cleanup in Tucson, AZ. Licensed & insured. Free estimates.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "Service"],
    name: "Canopy Tree Service",
    description:
      "Professional tree trimming, tree removal, stump grinding, and emergency storm cleanup services in Tucson, AZ.",
    url: "https://canopytreeservicetucson.com",
    telephone: "(520) 555-0140",
    email: "info@canopytreeservicetucson.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tucson",
      addressRegion: "AZ",
      postalCode: "85701",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.2226,
      longitude: -110.9747,
    },
    areaServed: {
      "@type": "City",
      name: "Tucson",
      sameAs: "https://en.wikipedia.org/wiki/Tucson,_Arizona",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tree Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tree Trimming & Pruning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tree Removal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Stump Grinding",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Storm Cleanup",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Palm Tree Trimming",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Land Clearing",
          },
        },
      ],
    },
    priceRange: "$$",
    image: "https://canopytreeservicetucson.com/og-image.jpg",
    sameAs: [],
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
