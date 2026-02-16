import React from "react";
import img9 from "../assets/gallery/img9.webp";

const Hero = ({ language }) => {
  return (
    <section className="hero-gradient relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={img9}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Eyebrow */}
        <p className="text-[var(--accent)] tracking-[0.2em] uppercase text-sm font-semibold mb-6">
          {language === "en"
            ? "Photometric Driven Renders"
            : "Photometric Driven Renders"}
        </p>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
          {language === "en" ? (
            <>
              Your Light. <br />
              <em className="text-[var(--accent)]">Accurately</em> Rendered.
            </>
          ) : (
            <>
              Tu Luz. <br />
              Renderizada con <em className="text-[var(--accent)]">Precisión.</em>
            </>
          )}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--text-secondary)" }}>
          {language === "en"
            ? "PD stands for Photometric Driven — because we specialize in accurate visualization for lighting designers and firms. Every lux, beam angle, and color temperature — rendered as it will be built."
            : "PD significa Photometric Driven — porque nos especializamos en visualización precisa para diseñadores de iluminación. Cada lux, ángulo de haz y temperatura de color — renderizado tal como será construido."}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="btn-primary">
            {language === "en" ? "See Plans" : "Ver Planes"}
          </a>
          <a href="#contact" className="btn-outline">
            {language === "en" ? "Contact Us" : "Contáctanos"}
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
    </section>
  );
};

export default Hero;
