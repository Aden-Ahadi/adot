import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adotdevs.com"),
  title: {
    default: "adotdevs - Crafting Digital Experiences",
    template: "%s | adotdevs",
  },
  description:
    "Professional web and mobile app development services tailored to your business needs.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "Next.js",
    "React",
    "TypeScript",
    "UI/UX",
    "agency",
  ],
  authors: [{ name: "ADOT" }],
  creator: "ADOT",
  openGraph: {
    type: "website",
    url: "https://adotdevs.com/",
    title: "adotdevs - Crafting Digital Experiences",
    description:
      "Professional web and mobile app development services tailored to your business needs.",
    siteName: "adotdevs",
    images: [
      {
        url: "/adot.logo.png",
        width: 1200,
        height: 630,
        alt: "adotdevs logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "adotdevs - Crafting Digital Experiences",
    description:
      "Professional web and mobile app development services tailored to your business needs.",
    images: [
      {
        url: "/adot.logo.png",
        alt: "adotdevs logo",
      },
    ],
  },
  alternates: {
    canonical: "https://adotdevs.com/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#0f172a",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen w-full text-foreground bg-background">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
