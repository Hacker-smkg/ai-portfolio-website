import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import LocalCopilot from "@/components/LocalCopilot";
import Navbar from "@/components/Navbar";
import NeuralBackground from "@/components/NeuralBackground";

export const metadata: Metadata = {
  title: "Soumya Ganguly | AI-Native Full Stack Engineer",
  description:
    "AI-native portfolio for Soumya Ganguly: full-stack products, automation systems, local copilot, case studies, and downloadable resume.",
  keywords: ["Soumya Ganguly", "AI Engineer", "Full Stack Developer", "Next.js", "FastAPI", "Automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#05070d] text-slate-100 antialiased">
        <NeuralBackground />
        <Cursor />
        <Navbar />
        {children}
        <LocalCopilot />
      </body>
    </html>
  );
}
