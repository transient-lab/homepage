"use client";

import { useState } from "react";
import Image from "next/image";

/* ───────────────────────── Data ───────────────────────── */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const PRODUCTS = [
  {
    name: "MixLab",
    tagline: "음원 제작 분야의 GitHub",
    description:
      "멀티트랙 기반 실시간 협업, 버전 관리와 AB 테스트, 전문 오디오 미터링까지. 음원 제작의 모든 워크플로우를 하나의 플랫폼에서.",
    features: ["실시간 멀티트랙 협업", "버전 관리 & AB 테스트", "프로 오디오 미터링", "멤버 권한 관리"],
    status: "Coming Soon",
    link: "https://mixlab.co.kr",
  },
  {
    name: "Coming Next",
    tagline: "다음 혁신을 준비하고 있습니다",
    description:
      "Transient Lab은 오디오 크리에이터를 위한 더 많은 도구를 개발하고 있습니다. 새로운 제품 소식을 가장 먼저 받아보세요.",
    features: [],
    status: "In Development",
    link: "",
  },
];

const TEAM = [
  {
    name: "팀원 1",
    role: "CEO / Product",
    description: "제품 비전과 전략을 이끌어갑니다.",
  },
  {
    name: "팀원 2",
    role: "CTO / Engineering",
    description: "기술 아키텍처와 개발을 총괄합니다.",
  },
  {
    name: "팀원 3",
    role: "Design / UX",
    description: "사용자 경험과 인터페이스를 디자인합니다.",
  },
  {
    name: "팀원 4",
    role: "Audio Engine",
    description: "핵심 오디오 엔진을 개발합니다.",
  },
];

const VALUES = [
  {
    title: "Craft",
    description: "우리는 소리를 다루는 크리에이터입니다. 모든 디테일에 장인 정신을 담습니다.",
  },
  {
    title: "Collaborate",
    description: "혼자보다 함께 만드는 음악이 더 위대합니다. 협업의 장벽을 없앱니다.",
  },
  {
    title: "Innovate",
    description: "기존의 방식에 안주하지 않습니다. 기술로 창작의 새로운 가능성을 엽니다.",
  },
];

/* ───────────────────────── Icons ──────────────────────── */

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="22 4 12 13 2 4" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ───────────────────────── Navbar ─────────────────────── */

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <Image src="/logo.webp" alt="Transient Lab" width={520} height={200} className="h-10 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm bg-primary text-secondary px-4 py-2 rounded-full hover:bg-accent transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-sm bg-primary text-secondary px-4 py-2 rounded-full text-center hover:bg-accent transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ───────────────────────── Hero ──────────────────────── */

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Sound Innovation
          <br />
          <span className="text-text-light">Starts Here.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Transient Lab은 인간의 창작과 협업을 지원하는 오디오 소프트웨어를 개발합니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 bg-primary text-secondary px-8 py-3.5 rounded-full text-sm font-medium hover:bg-accent transition-colors"
          >
            제품 둘러보기
            <ArrowRightIcon />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 border border-border px-8 py-3.5 rounded-full text-sm font-medium hover:bg-bg-alt transition-colors"
          >
            더 알아보기
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── About ─────────────────────── */

function About() {
  return (
    <section id="about" className="py-32 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-20">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            소리에 진심인 사람들이
            <br />
            모여 만듭니다.
          </h2>
          <p className="text-muted leading-relaxed">
            Transient Lab은 음악과 기술의 교차점에서 태어났습니다. 음원 제작 현장의 불편함을 직접 겪은
            크리에이터들이 모여, 더 나은 협업과 창작 환경을 만들기 위해 시작했습니다.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="group p-8 bg-white rounded-2xl border border-border hover:border-primary transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── Products ────────────────────── */

function Products() {
  return (
    <section id="products" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-3">Products</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            크리에이터를 위한
            <br />
            도구를 만듭니다.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.name}
              className={`relative p-8 md:p-10 rounded-2xl border transition-colors ${
                i === 0
                  ? "bg-bg-dark text-white border-transparent"
                  : "bg-bg-alt border-border border-dashed"
              }`}
            >
              {/* Status badge */}
              <span
                className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-6 ${
                  i === 0 ? "bg-white/10 text-white/70" : "bg-white text-muted"
                }`}
              >
                {product.status}
              </span>

              <h3 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h3>
              <p className={`text-sm mb-4 ${i === 0 ? "text-white/60" : "text-muted"}`}>
                {product.tagline}
              </p>
              <p className={`text-sm leading-relaxed mb-6 ${i === 0 ? "text-white/80" : "text-muted"}`}>
                {product.description}
              </p>

              {product.features.length > 0 && (
                <ul className="space-y-2">
                  {product.features.map((feat) => (
                    <li
                      key={feat}
                      className={`flex items-center gap-2 text-sm ${
                        i === 0 ? "text-white/70" : "text-muted"
                      }`}
                    >
                      <CheckIcon />
                      {feat}
                    </li>
                  ))}
                </ul>
              )}

              {product.link && (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-medium bg-white text-black px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
                >
                  자세히 보기
                  <ArrowRightIcon />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Team ──────────────────────── */

function Team() {
  return (
    <section id="team" className="py-32 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-3">Team</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            함께 만드는 사람들
          </h2>
          <p className="text-muted leading-relaxed">
            음악, 오디오 엔지니어링, 소프트웨어 개발 — 다양한 분야의 전문가들이 하나의 목표를 향해 나아갑니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="group p-6 bg-white rounded-2xl border border-border hover:border-primary transition-colors"
            >
              {/* Avatar placeholder */}
              <div className="w-14 h-14 bg-bg-dark rounded-full mb-4 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold mb-1">{member.name}</h3>
              <p className="text-xs text-muted font-medium mb-3">{member.role}</p>
              <p className="text-sm text-muted">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── Contact ─────────────────────── */

function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            함께하고 싶다면
            <br />
            언제든 연락주세요.
          </h2>
          <p className="text-muted leading-relaxed mb-12">
            투자, 협업, 채용 등 어떤 이야기든 환영합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:contact@transientlab.kr"
              className="inline-flex items-center gap-3 bg-primary text-secondary px-8 py-4 rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              <MailIcon />
              contact@transientlab.kr
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted">
            <MapPinIcon />
            <span>대전광역시 유성구 어은로 52번길 13 지하3호, 4호, 5호</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ─────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Image src="/logo.webp" alt="Transient Lab" width={140} height={36} className="h-7 w-auto mb-2" />
            <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Transient Lab. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ────────────────────────── Page ──────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
