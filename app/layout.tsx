import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pitchr — Agency proposals, written in ten minutes.",
  description:
    "Tell us about the client and the scope. Get a polished proposal with pricing and timeline, on your letterhead.",
  openGraph: {
    title: "Pitchr — Agency proposals, written in ten minutes.",
    description:
      "Tell us about the client and the scope. Get a polished proposal with pricing and timeline, on your letterhead.",
    images: [
      {
        url: "https://waitlist-api-sigma.vercel.app/api/og?title=Pitchr&accent=violet&category=Productivity",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://waitlist-api-sigma.vercel.app/api/og?title=Pitchr&accent=violet&category=Productivity",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-neutral-900 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
