"use client";

import { useState, useEffect, useRef, Fragment, type ReactNode } from "react";
import Image from "next/image";
import { LanguageProvider, useLang, type Locale } from "./i18n";

/* ───────────────────────── Data ───────────────────────── */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const MIXLAB_LINK = "https://mixlab.co.kr";
const CONTACT_EMAIL = "contact@transientlab.kr";

/* ───────────────────────── Helpers ────────────────────── */

// Reveal children with a subtle fade + rise the first time they scroll into view.
function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${shown ? " is-visible" : ""}${className ? " " + className : ""}`}
    >
      {children}
    </div>
  );
}

// Render an array of strings as lines separated by <br/>.
function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </>
  );
}

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

/* ─────────────────────── Language toggle ──────────────── */

const LOCALES: Locale[] = ["ko", "en"];

function LangToggle() {
  const { locale, setLocale } = useLang();
  return (
    <div className="inline-flex items-center rounded-full border border-border p-0.5 text-xs font-medium">
      {LOCALES.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`px-2.5 py-1 rounded-full transition-colors ${
            locale === l ? "bg-primary text-secondary" : "text-muted hover:text-primary"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

/* ───────────────────────── Navbar ─────────────────────── */

function Navbar() {
  const { t } = useLang();
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
          <LangToggle />
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-w-[8.5rem] text-sm bg-primary text-secondary px-4 py-2 rounded-full hover:bg-accent transition-colors"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 md:hidden">
          <LangToggle />
          <button onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
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
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ───────────────────────── Hero ──────────────────────── */

function Hero() {
  const { t } = useLang();
  return (
    <section className="min-h-dvh flex items-center justify-center pt-16 pb-16">
      <Reveal className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Make Change in
          <br />
          <span className="text-text-light">Music Industry</span>
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed whitespace-pre-line">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 bg-primary text-secondary px-8 py-3.5 rounded-full text-sm font-medium hover:bg-accent transition-colors"
          >
            {t.hero.ctaPrimary}
            <ArrowRightIcon />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 border border-border px-8 py-3.5 rounded-full text-sm font-medium hover:bg-bg-alt transition-colors"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ───────────────────────── About ─────────────────────── */

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-20 md:py-24 bg-bg-alt">
      <Reveal className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            <Lines lines={t.about.headline} />
          </h2>
          <p className="text-muted leading-relaxed">{t.about.body}</p>
        </div>

        {/* Category precedents */}
        <div className="mb-12 border-t border-border pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {t.about.precedents.map((p) => (
            <div
              key={p.field}
              className={`rounded-2xl border p-5 ${
                p.open ? "bg-bg-dark text-white border-transparent" : "bg-white border-border"
              }`}
            >
              <p className={`text-xs font-medium mb-2 ${p.open ? "text-white/50" : "text-muted"}`}>
                {p.field}
              </p>
              <p className="text-lg font-semibold">{p.name}</p>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.about.pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="group p-6 bg-white rounded-2xl border border-border hover:border-primary transition-colors"
            >
              <span className="text-sm font-semibold text-muted">{pillar.num}</span>
              <h3 className="text-xl font-semibold mt-3 mb-3">{pillar.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ──────────────────────── Products ────────────────────── */

function Products() {
  const { t } = useLang();
  return (
    <section id="products" className="py-20 md:py-24">
      <Reveal className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-3">Products</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            <Lines lines={t.products.headline} />
          </h2>
        </div>

        {/* MixLab */}
        <div className="relative p-8 md:p-10 rounded-2xl bg-bg-dark text-white">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-6 bg-white/10 text-white/70">
            {t.products.badge}
          </span>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">MixLab</h3>
              <p className="text-sm text-white/60 mb-5">{t.products.tagline}</p>
              <p className="text-sm text-white/80 leading-relaxed mb-8">{t.products.description}</p>

              <a
                href={MIXLAB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium bg-white text-black px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
              >
                {t.products.cta}
                <ArrowRightIcon />
              </a>
            </div>

            <ul className="space-y-3 lg:pt-1">
              {t.products.features.map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-sm text-white/80">
                  <CheckIcon />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ────────────────────────── Team ──────────────────────── */

function Team() {
  const { t } = useLang();
  return (
    <section id="team" className="py-20 md:py-24 bg-bg-alt">
      <Reveal className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-3">Team</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{t.team.headline}</h2>
          <p className="text-muted leading-relaxed">{t.team.intro}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.team.members.map((member) => (
            <div
              key={member.name}
              className="group p-6 bg-white rounded-2xl border border-border hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-20 rounded-xl overflow-hidden bg-bg-alt shrink-0">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="64px"
                    className="object-cover object-top grayscale"
                  />
                </div>
                <div>
                  <h3 className="font-semibold leading-tight">{member.name}</h3>
                  <p className="text-xs text-muted font-medium mt-1">{member.role}</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {member.credentials.map((c) => (
                  <li key={c} className="text-sm text-muted leading-snug">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Track record */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-8">Track Record</p>
          <div className="space-y-6">
            {t.team.trackRecord.map((row) => (
              <div key={row.year} className="grid grid-cols-[4rem_1fr] gap-4 sm:gap-8">
                <span className="text-sm font-semibold">{row.year}</span>
                <ul className="space-y-1.5">
                  {row.items.map((item) => (
                    <li key={item} className="text-sm text-muted leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ──────────────────────── Contact ─────────────────────── */

function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="py-20 md:py-24">
      <Reveal className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            <Lines lines={t.contact.headline} />
          </h2>
          <p className="text-muted leading-relaxed mb-12">{t.contact.body}</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-3 bg-primary text-secondary px-8 py-4 rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              <MailIcon />
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted">
            <MapPinIcon />
            <span>{t.contact.address}</span>
          </div>
        </div>
      </Reveal>
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
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} Transient Lab. All rights reserved.
            </p>
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
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Team />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
