import { resumeProfile } from "@/lib/portfolio-data";

export default function ResumePanel() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase text-cyan-200/75">Resume profile</p>
          <h1 className="text-4xl font-black text-white md:text-6xl">{resumeProfile.name}</h1>
          <p className="mt-4 text-xl text-cyan-100">{resumeProfile.title}</p>
          <p className="mt-5 text-lg leading-8 text-slate-300">{resumeProfile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={resumeProfile.resumePath}
              download="Soumya-Ganguly-Resume.pdf"
              className="hover-trigger rounded-lg border border-cyan-300/35 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-50"
            >
              Download resume
            </a>
            <a
              href={`mailto:${resumeProfile.email}`}
              className="hover-trigger rounded-lg border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-white"
            >
              {resumeProfile.email}
            </a>
          </div>

          <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.045] p-5">
            <p className="text-sm font-semibold text-slate-400">Location</p>
            <p className="mt-1 text-white">{resumeProfile.location}</p>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-lg border border-white/10 bg-[#070b13]/80 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-white">Strengths</h2>
            <div className="mt-5 grid gap-3">
              {resumeProfile.strengths.map((strength) => (
                <div key={strength} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {resumeProfile.skills.map((group) => (
              <div key={group.label} className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
                <h3 className="font-bold text-cyan-100">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-white/10 bg-[#070b13]/80 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-white">Experience Signal</h2>
            <div className="mt-5 grid gap-4">
              {resumeProfile.experience.map((item) => (
                <div key={item.title} className="border-l border-cyan-300/35 pl-4">
                  <h3 className="font-bold text-cyan-100">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
