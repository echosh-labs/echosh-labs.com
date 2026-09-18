import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Boy from Battersea: The Voyage of Vernon Wood | Justin Andrew Wood",
  description:
    "In 1903, thirteen-year-old Vernon Wood sailed on the SS Dominion to Canada as a British Home Child, earning the Barnardo Silver Medal in 1908 and founding a four-generation lineage of Canadian telecommunications.",
  openGraph: {
    title: "The Boy from Battersea: The Voyage of Vernon Wood (1903)",
    description:
      "The true story of Vernon Wood, the SS Dominion, and a century of Canadian telecommunications engineering.",
    url: "https://echosh-labs.com/chronicles/the-boy-from-battersea/",
    siteName: "The Sovereign Estate of Justin Andrew Wood",
    images: [
      {
        url: "https://echosh-labs.com/images/great_grandfather_vernon_wood.jpg",
        width: 800,
        height: 1067,
        alt: "Vernon Wood as a boy at Dr. Barnardo's Home, circa 1902",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Boy from Battersea: The Voyage of Vernon Wood (1903)",
    description:
      "The true story of Vernon Wood, the SS Dominion, and a century of Canadian telecommunications engineering.",
    images: ["https://echosh-labs.com/images/great_grandfather_vernon_wood.jpg"],
  },
};

export default function TheBoyFromBatterseaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
