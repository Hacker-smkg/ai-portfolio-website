import ResumePanel from "@/components/ResumePanel";
import { resumeProfile } from "@/lib/portfolio-data";

export const metadata = {
  title: "Resume | Soumya Ganguly",
  description: `Download Soumya Ganguly's resume and contact ${resumeProfile.email}.`,
};

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <ResumePanel />
    </main>
  );
}
