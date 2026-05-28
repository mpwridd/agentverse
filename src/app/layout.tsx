import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AgentVerse — AI Agent Tools, Reviews & Tutorials",
    template: "%s | AgentVerse",
  },
  description:
    "Review Mini PC, Raspberry Pi, kursus AI, dan tools automation terbaik. Panduan lengkap setup AI Agent di rumah.",
  keywords: [
    "AI Agent",
    "Mini PC",
    "Raspberry Pi",
    "n8n",
    "automation",
    "self-host",
    "local LLM",
    "home lab",
  ],
  authors: [{ name: "AgentVerse" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "AgentVerse",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
