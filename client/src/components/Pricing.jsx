import React from "react";

const Pricing = ({ language }) => {
  const tiers = [
    {
      name: "Essential",
      price: "1,800",
      highlighted: false,
      features: [
        {
          en: "Photometric accurate still images",
          es: "Imágenes estáticas fotométricamente precisas",
          included: true,
        },
        {
          en: "3–5 day delivery",
          es: "Entrega en 3–5 días",
          included: true,
        },
        {
          en: "1 space at a time",
          es: "1 espacio a la vez",
          included: true,
        },
        {
          en: "IES profile integration",
          es: "Integración de perfiles IES",
          included: true,
        },
        {
          en: "Virtual tours",
          es: "Recorridos virtuales",
          included: false,
        },
      ],
    },
    {
      name: "Pro",
      price: "3,000",
      highlighted: true,
      features: [
        {
          en: "Photometric accurate still images",
          es: "Imágenes estáticas fotométricamente precisas",
          included: true,
        },
        {
          en: "Interactive virtual tours",
          es: "Recorridos virtuales interactivos",
          included: true,
        },
        {
          en: "3–5 day delivery",
          es: "Entrega en 3–5 días",
          included: true,
        },
        {
          en: "2 spaces at a time",
          es: "2 espacios a la vez",
          included: true,
        },
        {
          en: "IES profile integration",
          es: "Integración de perfiles IES",
          included: true,
        },
      ],
    },
  ];

  return (
    <section className="section-padding" id="pricing">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--accent)] tracking-[0.15em] uppercase text-sm font-semibold mb-4">
            {language === "en" ? "Subscription Plans" : "Planes de Suscripción"}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            {language === "en"
              ? "Simple, predictable pricing."
              : "Precios simples y predecibles."}
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "var(--text-secondary)" }}>
            {language === "en"
              ? "Monthly subscriptions designed for lighting design firms. Cancel anytime."
              : "Suscripciones mensuales diseñadas para firmas de diseño de iluminación. Cancela cuando quieras."}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`${
                tier.highlighted ? "glass-card-pro" : "glass-card"
              } p-8 md:p-10 flex flex-col relative`}
            >
              {/* Pro badge */}
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge-accent">
                    {language === "en" ? "Most Popular" : "Más Popular"}
                  </span>
                </div>
              )}

              {/* Tier name */}
              <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl md:text-5xl font-bold">
                  ${tier.price}
                </span>
                <span style={{ color: "var(--text-muted)" }} className="text-lg">
                  USD
                </span>
              </div>
              <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
                {language === "en" ? "per month" : "por mes"}
              </p>

              {/* Divider */}
              <div className="h-px w-full mb-8" style={{ background: "var(--border-subtle)" }} />

              {/* Features */}
              <ul className="space-y-4 flex-1 mb-10">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    {f.included ? (
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
                      style={{
                        color: f.included
                          ? "var(--text-primary)"
                          : "var(--text-muted)",
                      }}
                      className="text-[0.95rem]"
                    >
                      {language === "en" ? f.en : f.es}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={tier.highlighted ? "btn-primary w-full text-center" : "btn-outline w-full text-center"}
              >
                {language === "en" ? "Get Started" : "Comenzar"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
