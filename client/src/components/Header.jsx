import React, { useState, useEffect } from "react";
import logo from "../assets/logo2.webp";

const Header = ({ setLanguage, language }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#why", label: language === "en" ? "Why Us" : "Por Qué" },
    { href: "#gallery", label: "Portfolio" },
    { href: "#pricing", label: language === "en" ? "Pricing" : "Precios" },
    { href: "#contact", label: language === "en" ? "Contact" : "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "header-blur py-3" : "py-5"
      }`}
      id="header"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#header" className="flex-shrink-0">
          <img
            className="w-[90px] md:w-[110px] transition-all duration-300"
            src={logo}
            alt="Logo PD Renders"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-[var(--accent)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language toggle + mobile menu */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            <button
              className={`px-1.5 py-0.5 rounded transition-all duration-200 cursor-pointer ${
                language === "en"
                  ? "text-white font-bold"
                  : "font-normal hover:text-white cursor-pointer"
              }`}
              style={{
                color: language === "en" ? "var(--text-primary)" : "var(--text-muted)",
              }}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <span style={{ color: "var(--text-muted)" }}>|</span>
            <button
              className={`px-1.5 py-0.5 rounded transition-all duration-200 cursor-pointer ${
                language === "es"
                  ? "text-white font-bold"
                  : "font-normal hover:text-white cursor-pointer"
              }`}
              style={{
                color: language === "es" ? "var(--text-primary)" : "var(--text-muted)",
              }}
              onClick={() => setLanguage("es")}
            >
              ES
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 py-4 header-blur">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium transition-colors duration-200 hover:text-[var(--accent)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
