import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LabelSensei AI | Decode Any Ingredient List Instantly via WhatsApp",
  description: "Stop guessing what's in your food, personal care, or baby products. Send a photo of any ingredient list to LabelSensei AI on WhatsApp and get instant, honest health awareness and risk ratings.",
  keywords: [
    "AI ingredient analyzer", 
    "food label scanner", 
    "decode ingredient list", 
    "WhatsApp health bot", 
    "hidden sugars detector", 
    "ultra-processed food scanner", 
    "toxin scanner app",
    "personal care product safety",
    "dietary restriction checker",
    "clean label AI"
  ],
  authors: [{ name: "Health Upstream" }],
  creator: "Health Upstream",
  openGraph: {
    title: "LabelSensei AI | See Beyond the Label",
    description: "Send a photo of any grocery or personal care ingredients to LabelSensei on WhatsApp. Decode hidden additives, toxic chemicals, and health risks instantly.",
    siteName: "LabelSensei AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LabelSensei AI | Stop Guessing What's In Your Products",
    description: "Snap a photo of the ingredient list. Get an instant, honest health analysis right in WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/whatsapp-bot.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">{children}</body>
    </html>
  );
}
