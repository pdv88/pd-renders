import React from "react";

const Pricing = ({ language }) => {
  const tiers = [
    {
      name: "Essential",
      price: "1,800",
      highlighted: false,
      savingsTag:
        language === "en"
          ? "~75% less than a junior hire"
          : "~75% menos que contratar un junior",
      features: [
        {
          en: "Photometric accurate still images",
          es: "Imágenes estáticas fotométricamente precisas",
          included: true,
        },
        {
          en: "Unlimited iterations on active space",
          es: "Iteraciones ilimitadas en el espacio activo",
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
          en: "No contracts or HR overhead",
          es: "Sin contratos ni carga administrativa",
          included: true,
        },
        {
          en: "Interactive virtual tours",
          es: "Recorridos virtuales interactivos",
          included: false,
        },
      ],
    },
    {
      name: "Pro",
      price: "3,000",
      highlighted: true,
      savingsTag:
        language === "en"
          ? "~60% less than a junior hire"
          : "~60% menos que contratar un junior",
      features: [
        {
          en: "Photometric accurate still images",
          es: "Imágenes estáticas fotométricamente precisas",
          included: true,
        },
        {
          en: "Interactive virtual tours (Unreal Engine)",
          es: "Recorridos virtuales interactivos (Unreal Engine)",
          included: true,
        },
        {
          en: "Unlimited iterations on active spaces",
          es: "Iteraciones ilimitadas en los espacios activos",
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
        {
          en: "No contracts or HR overhead",
          es: "Sin contratos ni carga administrativa",
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
              ? "Predictable pricing. No surprises."
              : "Precios predecibles. Sin sorpresas."}
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--text-secondary)" }}>
            {language === "en"
              ? "Both plans cost less than a junior archviz artist's monthly salary — with better photometric accuracy and zero overhead."
              : "Ambos planes cuestan menos que el salario mensual de un artista junior de archviz — con mejor precisión fotométrica y cero overhead."}
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
              <p className="mb-2 text-sm" style={{ color: "var(--text-muted)" }}>
                {language === "en" ? "per month" : "por mes"}
              </p>

              {/* Savings tag */}
              <p
                className="text-xs font-semibold mb-8 inline-block"
                style={{ color: "var(--accent)" }}
              >
                {tier.savingsTag}
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

        {/* Free Trial Banner */}
        <div className="glass-card mt-12 p-8 md:p-10 text-center max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">
                {language === "en" ? "Not sure yet?" : "¿Aún no estás seguro?"}
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                {language === "en"
                  ? "Try us with a free render or a 1-week trial — no commitment, no credit card required. See the photometric difference for yourself."
                  : "Pruébanos con un render gratuito o una prueba de 1 semana — sin compromiso, sin tarjeta de crédito. Comprueba la diferencia fotométrica por ti mismo."}
              </p>
            </div>
            <a href="#contact" className="btn-primary whitespace-nowrap">
              {language === "en" ? "Start Free Trial" : "Prueba Gratis"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
