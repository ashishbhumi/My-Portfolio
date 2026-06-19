import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCheckCircle,
  FiTarget,
  FiTool,
  FiTrendingUp,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import resumePdf from "../assets/Ashish__CV (1).pdf";

const resumeUrl = resumePdf;

const heroChips = [
  "Open to Full Stack / Backend Engineer roles",
  "Product Lead · Translense Private Limited",
  "Obsessed with scalable SaaS architecture",
];

const impactMetrics = [
  {
    value: "2+",
    label: "Years building SaaS",
    detail: "Product engineering across frontend, backend & systems",
  },
  {
    value: "300+",
    label: "LeetCode problems",
    detail: "Constant sharpening of DSA & problem-solving skills",
  },
  {
    value: "10+",
    label: "Production modules",
    detail: "Order, Inventory, Menu, Wallet, Coupon, Reporting and more",
  },
  {
    value: "5+",
    label: "SaaS integrations",
    detail: "GCS, Twilio, Brevo, payment gateways, analytics",
  },
];

const architectureColumns = [
  {
    heading: "Experience Layer",
    accent: "from-cyan-400/20 to-sky-500/10",
    items: [
      {
        title: "React Frontend",
        description:
          "Type-safe React + Tailwind interfaces for admin, seller, customer apps with Framer Motion micro-interactions.",
      },
    ],
  },
  {
    heading: "Service Layer",
    accent: "from-indigo-500/20 to-purple-500/10",
    items: [
      {
        title: "NestJS Backend",
        description:
          "Domain-driven NestJS services with modular architecture, Socket.IO gateways, and CQRS patterns for tenancy-aware logic.",
      },
    ],
  },
  {
    heading: "Data & Integrations",
    accent: "from-emerald-500/20 to-teal-500/10",
    items: [
      {
        title: "MySQL",
        description:
          "OLTP store with sharded schemas, indexing, and tuned queries for high-volume orders.",
      },
      {
        title: "MongoDB",
        description:
          "Document store for dynamic menus, analytics snapshots, event streams.",
      },
      {
        title: "Google Cloud Storage",
        description:
          "Managed asset pipeline for menus, media, onboarding with signed URLs.",
      },
      {
        title: "Twilio & Brevo",
        description:
          "Transactional communication layer spanning SMS, WhatsApp, email campaigns.",
      },
      {
        title: "Payment Gateway",
        description:
          "Unified abstraction for multiple PSPs, wallet, refunds, settlements.",
      },
    ],
  },
];

const caseStudy = {
  problem:
    "Restaurant teams lacked a connected operating system to manage ordering, fulfillment, loyalty, and finance across outlets.",
  solution:
    "Led Odriyo: Admin + Seller + Customer experiences aligning commerce, operations, and engagement for multi-tenant restaurants.",
  tech: "React · NestJS · TypeScript · MySQL · MongoDB · Google Cloud Platform",
  challenges: [
    "Multi-tenancy with tenant-aware RBAC and scoped data access",
    "Flexible promotion engine spanning coupons, combos, wallet credits",
    "Real-time order lifecycle sync across kitchens, operators, delivery partners",
  ],
  result:
    "Production-ready SaaS powering live restaurant operations with automated onboarding, reporting dashboards, and reliable uptime SLAs.",
};

const featureLinks: { label: string; href: string }[] = [
  { label: "View Odriyo", href: "https://odriyo.com" },
];

const experience = [
  {
    company: "Translense Private Limited",
    role: "Software Development Engineer (Product Lead)",
    duration: "June 2024 – Present",
    impact: [
      "Own product engineering for Odriyo, aligning business goals with engineering delivery across admin, seller, customer flows.",
      "Scaled NestJS microservices with multi-DB strategy (MySQL, MongoDB) supporting commerce-critical workloads.",
      "Shipped production-grade modules: Order, Inventory, Menu, Wallet, Coupon, Reporting, Notifications, Onboarding.",
      "Reduced communication latency via Socket.IO events, queue-driven notifications, and portal observability dashboards.",
      "Integrated Google Cloud Storage, Twilio, Brevo, payment gateways with compliance-ready audit logs.",
      "Mentored engineers, codified architecture guidelines, and orchestrated release planning.",
    ],
  },
];

const engineeringWins = [
  "Designed tenant-aware RBAC permission system covering feature flags and scoped roles.",
  "Built wallet & rewards engine with balance reconciliation and promotion campaigns.",
  "Implemented multi-tenant architecture with per-tenant configuration and isolation.",
  "Optimized SQL queries and indexing strategy to sustain peak-hour order traffic.",
  "Delivered Socket.IO notification hub for order lifecycle, KDS, and operations alerts.",
  "Established E2E testing infrastructure aligning Cypress flows with release gates.",
];

const skillCategories: { title: string; items: string[]; accent: string }[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C++"],
    accent: "from-cyan-400/40 to-sky-500/20",
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
    ],
    accent: "from-sky-500/30 to-indigo-500/20",
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "REST APIs", "WebSockets"],
    accent: "from-violet-500/30 to-purple-500/10",
  },
  {
    title: "Data",
    items: ["MySQL", "MongoDB", "Redis", "Prisma"],
    accent: "from-emerald-500/30 to-cyan-500/10",
  },
  {
    title: "Cloud & DevOps",
    items: ["Google Cloud Platform", "Amazon S3", "Docker", "GitHub Actions"],
    accent: "from-blue-500/30 to-slate-500/10",
  },
  {
    title: "Quality & Product",
    items: ["Jest", "Cypress", "Unit & E2E Testing", "Postman", "Storybook"],
    accent: "from-amber-500/30 to-orange-500/10",
  },
  {
    title: "Concepts",
    items: [
      "System Design",
      "Distributed Systems",
      "Authentication & Authorization",
      "Scalable SaaS Architecture",
      "Data Structures & Algorithms",
    ],
    accent: "from-fuchsia-500/40 to-rose-500/10",
  },
];

const learningFocus = [
  "AI Agents",
  "Advanced System Design",
  "Distributed Systems",
];

const blogTeasers = [
  {
    title: "NestJS Architecture Patterns",
    detail: "Structuring modular services for multi-tenant SaaS.",
  },
  {
    title: "Designing Multi-tenant SaaS",
    detail: "Lessons from Odriyo's separation of data and permissions.",
  },
  {
    title: "SQL Optimization Techniques",
    detail: "Indexing and query refactors that cut query time by 60%.",
  },
];

const testimonials = [
  {
    quote:
      "Ashish consistently takes ownership of complex features and delivers scalable solutions that keep releases on schedule.",
    author: "Product Manager",
    company: "Translense Private Limited",
  },
];

const achievements: string[] = [
  "Solved 300+ LeetCode problems, building strong foundations in data structures, algorithms, and complexity analysis.",
  "Took Odriyo from zero to a production SaaS used daily by live restaurant operations across admin, seller, and customer surfaces.",
  "Cut average query response time by ~60% through targeted indexing and query refactors on high-traffic order tables.",
  "Designed and shipped a tenant-aware RBAC system that now gates every feature flag and role across the platform.  ",
  "Mentored engineers on architecture standards, code review practices, and release discipline.",
  "Preparing for GATE CSE 2026 alongside full-time product engineering, balancing depth in CS fundamentals with shipping velocity.",
];

const contactActions: {
  label: string;
  href: string;
  description: string;
  icon: IconType;
}[] = [
  {
    label: "Email",
    href: "mailto:ashish10052002@gmail.com",
    description: "ashish10052002@gmail.com",
    icon: FiMail,
  },
  {
    label: "GitHub",
    href: "https://github.com/ashishbhumi",
    description: "github.com/ashishbhumi",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashish-singh-476640217/",
    description: "linkedin.com/in/ashish-singh-476640217",
    icon: FiLinkedin,
  },
  {
    label: "Resume",
    href: resumeUrl,
    description: "Download the latest resume copy",
    icon: FiExternalLink,
  },
];

const sectionEyebrowClass =
  "text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200";
const cardBaseClass =
  "rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/30 backdrop-blur-xl";

const Home: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-12rem] right-[10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-14rem] left-[5%] h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      {/* HERO */}
      <section id="overview" className="px-6 pb-24 pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-emerald-200"
              >
                Open to Work · Full Stack & Backend
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05, duration: 0.5 }}
                className="font-mono text-sm text-cyan-300/80"
              >
                $ whoami
                <span className="ml-2 text-slate-400">
                  Ashish Kumar — software development engineer
                </span>
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
              >
                Building scalable SaaS products that unlock measurable business
                outcomes.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="max-w-2xl text-lg leading-relaxed text-slate-300"
              >
                Software Development Engineer with 2 years of experience
                delivering production-grade SaaS platforms on NestJS, React,
                TypeScript, MySQL, and MongoDB. I design REST APIs, orchestrate
                real-time systems with Socket.IO, and integrate cloud tooling to
                ship resilient, scalable products — and I lead the product end
                to end, from architecture decisions to what ships in the next
                release.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="https://odriyo.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:shadow-cyan-400/50"
                >
                  View Odriyo
                  <FiArrowUpRight className="text-base" />
                </a>
                <a
                  href={resumeUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
                >
                  Download Resume
                  <FiExternalLink className="text-base" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-300/10"
                >
                  Contact Me
                  <FiMail className="text-base" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400"
              >
                {heroChips.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.7rem] text-slate-300 backdrop-blur"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-900/40 backdrop-blur-xl"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  Currently Shipping
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  Product Lead · Translense Private Limited
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  June 2024 – Present
                </p>
                <p className="mt-6 text-sm leading-relaxed text-slate-300">
                  Delivering Odriyo — the operating system for restaurants —
                  across architecture, execution, and mentoring. I balance
                  product discovery with technical depth to move metrics that
                  matter.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-sky-500/10 p-4 text-slate-200">
                  <p className="text-3xl font-semibold text-white">2+</p>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Years shipping SaaS
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-4 text-slate-200">
                  <p className="text-3xl font-semibold text-white">300+</p>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    LeetCode problems solved
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SNAPSHOT METRICS */}
      <section id="snapshot" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className={cardBaseClass}
              >
                <p className="text-3xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-cyan-200">
                  {metric.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {metric.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW I BUILD — system layers */}
      <section id="how-i-build" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className={sectionEyebrowClass}>How I Build</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              I think in systems, not just screens.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Every product I ship is reasoned about top to bottom — from the
              interface someone touches, through the services that enforce
              business rules, down to the data and integrations underneath.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {architectureColumns.map((column, columnIndex) => (
              <motion.div
                key={column.heading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: columnIndex * 0.08, duration: 0.6 }}
                className={`rounded-3xl border border-white/10 bg-gradient-to-b ${column.accent} p-6 shadow-lg shadow-slate-900/30 backdrop-blur-xl`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                  {column.heading}
                </p>
                <div className="mt-5 space-y-4">
                  {column.items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-slate-950/30 p-4"
                    >
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section id="case-study" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-900/40 backdrop-blur-xl lg:p-10"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className={sectionEyebrowClass}>Case Study</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Odriyo
                </h2>
                <p className="mt-1 text-sm text-slate-400">{caseStudy.tech}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {featureLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/70 hover:bg-cyan-400/10"
                  >
                    {link.label}
                    <FiExternalLink className="text-base transition-transform group-hover:-translate-y-[1px] group-hover:translate-x-[2px]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                <div className="flex items-center gap-2 text-cyan-200">
                  <FiTarget />
                  <p className="text-xs font-semibold uppercase tracking-[0.25em]">
                    Problem
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {caseStudy.problem}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                <div className="flex items-center gap-2 text-cyan-200">
                  <FiTool />
                  <p className="text-xs font-semibold uppercase tracking-[0.25em]">
                    What I led
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {caseStudy.solution}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                <div className="flex items-center gap-2 text-cyan-200">
                  <FiTrendingUp />
                  <p className="text-xs font-semibold uppercase tracking-[0.25em]">
                    Result
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {caseStudy.result}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Hard problems I solved along the way
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200">
                {caseStudy.challenges.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className={sectionEyebrowClass}>Experience</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              Engineering leadership in fast-moving product environments.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              I partner with founders and product teams to build resilient
              systems, from architecture to pixel-perfect interfaces, while
              mentoring engineers and safeguarding quality.
            </p>
          </motion.div>

          <div className="mt-12 space-y-10">
            {experience.map((role) => (
              <motion.div
                key={role.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-900/40 backdrop-blur-xl"
              >
                <div className="absolute left-6 top-8 h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-500/30 blur-xl" />
                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                        {role.company}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        {role.role}
                      </h3>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-widest text-slate-300">
                      {role.duration}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-200">
                    {role.impact.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Engineering wins */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            {engineeringWins.map((win) => (
              <div key={win} className={cardBaseClass}>
                <p className="text-sm leading-relaxed text-slate-200">{win}</p>
              </div>
            ))}
          </motion.div>

          {/* Testimonial */}
          {testimonials.map((t) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8 text-lg leading-relaxed text-slate-100"
            >
              "{t.quote}"
              <footer className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                {t.author} · {t.company}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className={sectionEyebrowClass}>Skills</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              An end-to-end toolkit for modern SaaS engineering.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              From pixel-perfect React experiences to resilient NestJS services,
              I ship features with strong foundations in testing, automation,
              and cloud readiness.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: categoryIndex * 0.05, duration: 0.6 }}
                className={cardBaseClass}
              >
                <div
                  className={`inline-flex rounded-full border border-white/10 bg-gradient-to-r ${category.accent} px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200`}
                >
                  {category.title}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 12,
                      }}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-200"
                    >
                      <span className="h-1 w-1 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Currently leveling up */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-8 rounded-3xl border border-dashed border-cyan-400/30 bg-cyan-400/5 p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Currently leveling up
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {learningFocus.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-slate-950/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className={sectionEyebrowClass}>Achievements</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              Track record of delivering and leveling up.
            </h2>
            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-slate-200">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <FiCheckCircle className="mt-1 shrink-0 text-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* NOTES / WRITING */}
      <section id="notes" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className={sectionEyebrowClass}>Notes</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              Things I've been writing about.
            </h2>
          </motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogTeasers.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className={cardBaseClass}
              >
                <p className="text-base font-semibold text-white">
                  {post.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {post.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className={sectionEyebrowClass}>Contact</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              Let's build the next release together.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Ready to collaborate on high-impact SaaS products or discuss
              engineering roles? Drop a line or reach out on your preferred
              platform.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {contactActions.map(({ label, href, description, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-slate-900/30 backdrop-blur-xl"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-500/20 blur-2xl transition duration-300 group-hover:scale-125" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                    <Icon className="text-base" />
                    {label}
                  </div>
                  <p className="mt-4 text-lg font-medium text-white">
                    {description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-200">
                    Open
                    <FiArrowUpRight className="transition-transform group-hover:-translate-y-[1px] group-hover:translate-x-[2px]" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
