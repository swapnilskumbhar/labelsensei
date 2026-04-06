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
  title: "LabelSensei AI - See Beyond the Label",
  description: "An AI-powered Intelligent Health Inspector. Send a photo of any grocery or personal care ingredients to LabelSensei on WhatsApp.",
  keywords: [
    "AI ingredient analyzer", 
    "food label scanner", 
    "WhatsApp health bot", 
    "decode ingredient list", 
    "personal care product safety",
    "hidden sugars detector", 
    "ultra-processed food scanner", 
    "clean label AI"
  ],
  authors: [{ name: "LabelSensei" }],
  openGraph: {
    title: "LabelSensei AI - See Beyond the Label",
    description: "An AI-powered Intelligent Health Inspector. Send a photo of any grocery or personal care ingredients to LabelSensei on WhatsApp.",
    siteName: "LabelSensei AI",
    locale: "en_US",
    type: "website",
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
