import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Valentinos Stylianou — Web Development & Automation",
    template: "%s · Valentinos Stylianou",
  },
  description:
    "Websites and automation systems that help businesses run more efficiently and convert more customers. Based in Finland.",
  keywords: [
    "freelance developer",
    "Next.js",
    "business automation",
    "Finland",
    "web development",
  ],
  authors: [{ name: "Valentinos Stylianou" }],
  creator: "Valentinos Stylianou",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Valentinos Stylianou",
    title: "Valentinos Stylianou — Web Development & Automation",
    description:
      "High-performing websites and practical automation workflows — focused on outcomes, speed, and clarity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentinos Stylianou — Web Development & Automation",
    description:
      "High-performing websites and practical automation workflows — focused on outcomes, speed, and clarity.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} flex min-h-screen flex-col bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
