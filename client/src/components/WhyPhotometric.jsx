import React from "react";

const WhyPhotometric = ({ language }) => {
  const columns = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--accent)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
      title: language === "en" ? "Photometric Fidelity" : "Fidelidad Fotométrica",
      description:
        language === "en"
          ? "We render directly from your IES profiles, lux calculations, beam angles, and color temperatures. Every image matches your lighting specifications — no artistic guesses, no exaggerated glows. What you specify is what you see."
          : "Renderizamos directamente desde tus perfiles IES, cálculos de lux, ángulos de haz y temperaturas de color. Cada imagen coincide con tus especificaciones de iluminación — sin suposiciones artísticas, sin brillos exagerados. Lo que especificas es lo que ves.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--accent)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
        </svg>
      ),
      title: language === "en" ? "Cheaper Than a Junior" : "Más Barato que un Junior",
      description:
        language === "en"
          ? "At $1,800 USD/mo, you pay a fraction of a junior archviz artist's fully loaded cost ($7,000–$9,000+ USD/mo with salary, benefits, equipment, and software). Get higher quality output with predictable, flat-rate pricing — no surprise invoices."
          : "Por $1,800 USD/mes, pagas una fracción del costo total de un artista junior de archviz ($7,000–$9,000+ USD/mes con salario, prestaciones, equipo y software). Obtén mayor calidad con un precio fijo y predecible — sin facturas sorpresa.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--accent)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
      title: language === "en" ? "Zero Overhead" : "Cero Carga Administrativa",
      description:
        language === "en"
          ? "Skip the contracts, payroll, benefits, onboarding, PTO, performance reviews, and turnover risk. Just send your lighting specs — we deliver publication-ready renders in 3–5 days. Your virtual archviz department, without the HR."
          : "Olvídate de contratos, nómina, prestaciones, capacitación, vacaciones, evaluaciones y rotación. Solo envía tus especificaciones de iluminación — entregamos renders listos para presentar en 3–5 días. Tu departamento de archviz virtual, sin RRHH.",
    },
  ];

  return (
    <section className="section-padding" id="why">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[var(--accent)] tracking-[0.15em] uppercase text-sm font-semibold mb-4">
            {language === "en"
              ? "Why PD Renders"
              : "Por Qué PD Renders"}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            {language === "en"
              ? "Spec-accurate renders. No overhead."
              : "Renders fieles al diseño. Sin carga fija."}
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "var(--text-secondary)" }}>
            {language === "en"
              ? "Built for lighting designers and firms who need photometric accuracy without the cost and hassle of an in-house team."
              : "Creado para diseñadores de iluminación y firmas que necesitan precisión fotométrica sin el costo y la complejidad de un equipo interno."}
          </p>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, i) => (
            <div key={i} className="glass-card p-8">
              <div className="icon-container mb-5">{col.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{col.title}</h3>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                {col.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline divider */}
        <div className="mt-20 text-center">
          <div className="divider-glow max-w-md mx-auto mb-6" />
          <p className="italic text-lg md:text-xl" style={{ color: "var(--text-muted)" }}>
            {language === "en"
              ? '"Your virtual archviz department — without the overhead."'
              : '"Tu departamento de archviz virtual — sin el costo fijo."'}
          </p>
          <div className="divider-glow max-w-md mx-auto mt-6" />
        </div>
      </div>
    </section>
  );
};

export default WhyPhotometric;
