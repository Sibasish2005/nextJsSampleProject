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
  title: {
    default: "Sibasish Chakraborti | Full Stack Developer",
    template: "%s | Sibasish Chakraborti",
  },

  description:
    "Sibasish Chakraborti is a Full Stack Developer specializing in Next.js, React, Node.js, and MongoDB. View projects, skills, and contact details.",

  keywords: [
    "Sibasish Chakraborti",
    "Sibasish Dev",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "MERN Stack Developer",
    "Web Developer Portfolio India",
  ],

  authors: [{ name: "Sibasish Chakraborti" }],
  creator: "Sibasish Chakraborti",
  publisher: "Sibasish Chakraborti",

  metadataBase: new URL("https://sibasishdev.in"),
  alternates: {
    canonical: "https://sibasishdev.in",
  },

  icons: {
    icon: "/profileIcon.png",
    shortcut: "/profileIcon.png",
    apple: "/profileIcon.png",
  },

  openGraph: {
    title: "Sibasish Chakraborti | Full Stack Developer",
    description:
      "Portfolio of Sibasish Chakraborti, a Full Stack Developer building scalable web applications.",
    url: "https://sibasishdev.in",
    siteName: "SibasishDev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sibasish Chakraborti - Full Stack Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sibasish Chakraborti | Full Stack Developer",
    description:
      "Full Stack Developer portfolio showcasing projects and experience in Next.js and backend development.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
        
      </body>
    </html>
  );
}
