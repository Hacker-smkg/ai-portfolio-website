import Contact from "@/components/Contact";
import { resumeProfile } from "@/lib/portfolio-data";

export const metadata = {
  title: "Contact | Soumya Ganguly",
  description: `Contact Soumya Ganguly at ${resumeProfile.email}.`,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <Contact />
    </main>
  );
}
