import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Livemoreai",
  description: "Livemore AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>{children}</ThemeProvider>
      </body>
    </html>
  );
}
