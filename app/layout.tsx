import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
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
  title: {
    default: "AI Marketing Crew - Mission Control",
    template: "%s · AI Marketing Crew",
  },
  description:
    "Watch an autonomous AI marketing team launch a product, rescue a pipeline, and run a week of operations - 9 agents, 12 expert skills, end-to-end.",
  keywords: [
    "AI marketing",
    "marketing automation",
    "AI agents",
    "Claude Code",
    "growth engine",
    "lead scoring",
    "Bayesian A/B testing",
  ],
  authors: [{ name: "Varun Kulkarni", url: "https://github.com/varunk130" }],
  openGraph: {
    title: "AI Marketing Crew - Mission Control",
    description:
      "An interactive showcase of an autonomous AI marketing team. 9 agents, 12 expert skills, end-to-end.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Crew - Mission Control",
    description:
      "Watch an autonomous AI marketing team in action. 9 agents. 12 skills. Live.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
