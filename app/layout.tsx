import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dynamic Speed",
  description:
    "Dynamic is the edge-native API platform for teams that care about speed.",
  openGraph: {
    title: "Dynamic Speed",
    description:
      "Dynamic is the edge-native API platform for teams that care about speed.",
    type: "website",
    images: [
      {
        url: "/thumbnail.png",
        width: 1734,
        height: 907,
        alt: "Dynamic — Make every API feel instant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Speed",
    description:
      "Dynamic is the edge-native API platform for teams that care about speed.",
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
