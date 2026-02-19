import React, { useEffect, useRef, useState } from "react";

const CostComparison = ({ language }) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const options = [
    {
      label: "PD Renders",
      cost: "$1,800",
      costSubtext: "USD " + (language === "en" ? "/month" : "/mes"),
      barPercent: 20,
      highlighted: true,
      attributes: [
        {
          en: "Pro-level, spec-accurate quality",
          es: "Calidad profesional y fiel a las especificaciones",
          good: true,
        },
        {
          en: "Zero HR overhead",
          es: "Cero carga administrativa",
          good: true,
        },
        {
          en: "Predictable 3–5 day delivery",
          es: "Entrega predecible en 3–5 días",
          good: true,
        },
        {
          en: "Unlimited iterations on active space",
          es: "Iteraciones ilimitadas en el espacio activo",
          good: true,
        },
        {
          en: "Flat monthly fee — no surprises",
          es: "Tarifa mensual fija — sin sorpresas",
          good: true,
        },
      ],
    },
    {
      label: language === "en" ? "Junior In-House" : "Junior In-House",
      cost: "$7,000–9,000+",
      costSubtext:
        language === "en"
          ? "USD/month (salary + overhead)"
          : "USD/mes (salario + overhead)",
      barPercent: 85,
      highlighted: false,
      attributes: [
        {
          en: "Needs oversight on IES, CCT, materials",
          es: "Requiere supervisión en IES, CCT, materiales",
          good: false,
        },
        {
          en: "Contracts, payroll, benefits, PTO",
          es: "Contratos, nómina, prestaciones, vacaciones",
          good: false,
        },
        {
          en: "Learning curve limits output",
          es: "La curva de aprendizaje limita la producción",
          good: false,
        },
        {
          en: "Turnover risk & onboarding costs",
          es: "Riesgo de rotación y costos de capacitación",
          good: false,
        },
        {
          en: "Equipment & software licenses",
          es: "Equipo y licencias de software",
          good: false,
        },
      ],
    },
    {
      label: "Freelancer",
      cost: "$600–1,500",
      costSubtext:
        language === "en"
          ? "USD/month (variable)"
          : "USD/mes (variable)",
      barPercent: 45,
      highlighted: false,
      attributes: [
        {
          en: "Inconsistent quality",
          es: "Calidad inconsistente",
          good: false,
        },
        {
          en: "Invoice management & per-revision billing",
          es: "Gestión de facturas y cobro por revisión",
          good: false,
        },
        {
          en: "Variable availability",
          es: "Disponibilidad variable",
          good: false,
        },
        {
          en: "No guaranteed turnaround",
          es: "Sin garantía de plazos",
          good: false,
        },
        {
          en: "Revision friction & extra fees",
          es: "Fricción en revisiones y cargos extra",
          good: false,
        },
      ],
    },
  ];

  return (
    <section className="section-padding" id="compare" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--accent)] tracking-[0.15em] uppercase text-sm font-semibold mb-4">
            {language === "en" ? "Cost Comparison" : "Comparación de Costos"}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            {language === "en"
              ? "How we compare."
              : "Cómo nos comparamos."}
          </h2>
          <p
            className="max-w-xl mx-auto text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            {language === "en"
              ? "Pro-level photometric accuracy at a fraction of the cost of hiring in-house."
              : "Precisión fotométrica profesional a una fracción del costo de contratar internamente."}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt, i) => (
            <div
              key={i}
              className={`${
                opt.highlighted ? "glass-card-pro" : "glass-card"
              } p-8 flex flex-col relative`}
            >
              {/* Badge for PD Renders */}
              {opt.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge-accent">
                    {language === "en" ? "Best Value" : "Mejor Valor"}
                  </span>
                </div>
              )}

              {/* Option label */}
              <h3 className="text-xl font-semibold mb-4">{opt.label}</h3>

              {/* Cost bar */}
              <div className="mb-2">
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ background: "var(--border-subtle)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: visible ? `${opt.barPercent}%` : "0%",
                      background: opt.highlighted
                        ? "linear-gradient(90deg, var(--accent), var(--accent-soft))"
                        : "rgba(255,255,255,0.2)",
                    }}
                  />
                </div>
              </div>

              {/* Cost label */}
              <div className="mb-1">
                <span
                  className="text-2xl font-bold"
                  style={{
                    color: opt.highlighted
                      ? "var(--accent)"
                      : "var(--text-primary)",
                  }}
                >
                  {opt.cost}
                </span>
              </div>
              <p
                className="text-xs mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                {opt.costSubtext}
              </p>

              {/* Divider */}
              <div
                className="h-px w-full mb-6"
                style={{ background: "var(--border-subtle)" }}
              />

              {/* Attributes */}
              <ul className="space-y-3 flex-1">
                {opt.attributes.map((attr, j) => (
                  <li key={j} className="flex items-start gap-3">
                    {attr.good ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--accent)]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                      </svg>
                    )}
                    <span
                      className="text-sm"
                      style={{
                        color: attr.good
                          ? "var(--text-primary)"
                          : "var(--text-muted)",
                      }}
                    >
                      {language === "en" ? attr.en : attr.es}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostComparison;
