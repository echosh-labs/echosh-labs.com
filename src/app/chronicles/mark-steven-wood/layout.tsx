import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mark Steven Wood: The Principle of Correspondence | Justin Andrew Wood",
  description:
    "The life, safety vocation, caregiver's vigil, and alchemical transmutation of Mark Steven Wood (1950–2024).",
  openGraph: {
    title: "Mark Steven Wood: The Principle of Correspondence (1950–2024)",
    description:
      "The life, safety vocation, caregiver's vigil, and alchemical transmutation of Mark Steven Wood.",
    url: "https://echosh-labs.com/chronicles/mark-steven-wood/",
    siteName: "The Sovereign Estate of Justin Andrew Wood",
    images: [
      {
        url: "https://echosh-labs.com/images/grandpa_vernon_and_justin_gardening.jpg",
        width: 800,
        height: 1067,
        alt: "Generational Lineage: The Wood Family",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Steven Wood: The Principle of Correspondence (1950–2024)",
    description:
      "The life, safety vocation, caregiver's vigil, and alchemical transmutation of Mark Steven Wood.",
    images: ["https://echosh-labs.com/images/grandpa_vernon_and_justin_gardening.jpg"],
  },
};

export default function MarkStevenWoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
