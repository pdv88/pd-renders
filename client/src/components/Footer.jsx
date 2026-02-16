import React from "react";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo2.webp";

const Footer = ({ language }) => {
  const navLinks = [
    { href: "#why", label: language === "en" ? "Why Us" : "Por Qué" },
    { href: "#gallery", label: "Portfolio" },
    { href: "#pricing", label: language === "en" ? "Pricing" : "Precios" },
    { href: "#contact", label: language === "en" ? "Contact" : "Contacto" },
  ];

  return (
    <footer className="border-t" style={{ borderColor: "var(--border-subtle)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#header">
              <img className="w-[100px] mb-4" src={logo} alt="Logo PD Renders" />
            </a>
            <p className="text-sm max-w-[240px] text-center md:text-left" style={{ color: "var(--text-muted)" }}>
              {language === "en"
                ? "Photometrically accurate architectural visualization for lighting designers."
                : "Visualización arquitectónica fotométricamente precisa para diseñadores de iluminación."}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-secondary)" }}>
              {language === "en" ? "Navigation" : "Navegación"}
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-[var(--accent)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-secondary)" }}>
              {language === "en" ? "Connect" : "Conecta"}
            </h4>
            <div className="flex gap-3">
              <a
                href="mailto:hola@pdrenders.com"
                className="flex w-10 h-10 items-center justify-center rounded-lg transition-all duration-200 hover:bg-[rgba(255,255,255,0.06)] hover:text-[var(--accent)]"
                style={{ color: "var(--text-muted)" }}
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
              <a
                href="https://www.instagram.com/pd.renders"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-10 h-10 items-center justify-center rounded-lg transition-all duration-200 hover:bg-[rgba(255,255,255,0.06)] hover:text-[var(--accent)]"
                style={{ color: "var(--text-muted)" }}
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/pd-renders"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-10 h-10 items-center justify-center rounded-lg transition-all duration-200 hover:bg-[rgba(255,255,255,0.06)] hover:text-[var(--accent)]"
                style={{ color: "var(--text-muted)" }}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider & copyright */}
        <div className="h-px w-full mb-6" style={{ background: "var(--border-subtle)" }} />
        <p className="text-center text-xs" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} PD Renders. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
