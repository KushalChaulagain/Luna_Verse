import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "lunaverse",
  description: "Where code meets community. Built for Nepal's next-gen builders.",
  openGraph: {
    title: "lunaverse",
    description: "Where code meets community. Built for Nepal's next-gen builders.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "lunaverse",
    description: "Where code meets community. Built for Nepal's next-gen builders.",
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
