import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "hsl(230 25% 5%)" },
    { color: "hsl(230 25% 5%)" },
  ],
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "lunaverse",
  description: "Where code meets community. Built for Nepal's next-gen builders.",
  icons: {
    icon: [{ url: "/final_logo.png", type: "image/png" }],
    shortcut: [{ url: "/final_logo.png", type: "image/png" }],
    apple: [{ url: "/final_logo.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "lunaverse",
    description: "Where code meets community. Built for Nepal's next-gen builders.",
    type: "website",
    images: [
      {
        url: "/final_logo.png",
        width: 512,
        height: 512,
        alt: "Lunaverse logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "lunaverse",
    description: "Where code meets community. Built for Nepal's next-gen builders.",
    images: ["/final_logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
