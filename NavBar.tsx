import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resumePdf from "../assets/Ashish__CV (1).pdf";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Snapshot", href: "#snapshot" },
  { label: "How I Build", href: "#how-i-build" },
  { label: "Case Study", href: "#case-study" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
];

const resumeUrl = resumePdf;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>(navItems[0].href);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    closeMenu();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 220;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
      setActiveHref(href);
    }
  };

  // Scroll-spy: highlight whichever section is currently in view.
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const renderNavLinks = (className: string) => (
    <ul className={className}>
      {navItems.map((item) => {
        const isActive = activeHref === item.href;
        return (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              aria-current={isActive ? "true" : undefined}
              className={`relative inline-flex items-center px-2 py-1 text-sm font-medium tracking-wide transition-colors duration-200 group ${
                isActive ? "text-white" : "text-slate-300 hover:text-white"
              }`}
            >
              <span
                className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
              {isActive && (
                <span className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
              )}
              <span className="relative">{item.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto mt-4 w-[92%] max-w-6xl rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 shadow-lg shadow-cyan-500/5 backdrop-blur-xl"
      >
        {/* Row 1: Logo, Name, Social Links, Resume */}
        <div className="flex items-center justify-between gap-4 pb-3 border-b border-white/5">
          <a href="#overview" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400/80 to-indigo-500/80 p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950/90 text-sm font-semibold text-white">
                AS
              </div>
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Software Development Engineer
              </p>
              <p className="text-base font-semibold text-white">Ashish Kumar</p>
            </div>
          </a>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="https://github.com/ashishbhumi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
            >
              <FaGithub className="text-base" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-singh-476640217/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
            >
              <FaLinkedin className="text-base" />
            </a>
            <a
              href={resumeUrl}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:shadow-cyan-400/50"
            >
              <FiDownload />
              Resume
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/10 sm:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>

        {/* Row 2: Navigation Links */}
        <div className="hidden pt-3 lg:block">
          {renderNavLinks("flex items-center justify-center gap-5 text-xs")}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-4 lg:hidden"
            >
              {renderNavLinks("flex flex-col gap-3")}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/ashishbhumi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ashish-singh-476640217/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
                <a
                  href={resumeUrl}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:shadow-cyan-400/50"
                >
                  <FiDownload />
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
