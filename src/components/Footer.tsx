import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import resumePdf from "../assets/Ashish__CV (1).pdf";

const resumeUrl = resumePdf;

const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ashishbhumi",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashish-singh-476640217/",
    icon: FiLinkedin,
  },
  {
    label: "Email",
    href: "mailto:ashish10052002@gmail.com",
    icon: FiMail,
  },
  {
    label: "Resume",
    href: resumeUrl,
    icon: FiDownload,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-slate-950/70 py-10 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      <div className="mx-auto flex w-[92%] max-w-6xl flex-col items-center gap-6 text-center text-slate-300">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
          Ashish Kumar · Software Development Engineer
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {footerLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noreferrer"}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
            >
              <Icon className="text-base transition-transform group-hover:-translate-y-[1px] group-hover:translate-x-[2px]" />
              {label}
            </a>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          © {new Date().getFullYear()} Ashish Kumar · Building scalable SaaS
          products
        </p>
      </div>
    </footer>
  );
};

export default Footer;
