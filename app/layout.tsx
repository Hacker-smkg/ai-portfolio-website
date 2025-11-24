import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Portfolio | Soumya Ganguly",
  description: "Intelligent portfolio website showcasing AI-powered projects and innovative solutions",
  keywords: ["AI", "Portfolio", "Machine Learning", "Web Development", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
