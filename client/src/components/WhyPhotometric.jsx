import React from "react";

const WhyPhotometric = ({ language }) => {
  const columns = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--accent)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
      ),
      title: language === "en" ? "The Problem" : "El Problema",
      description:
        language === "en"
          ? "Most architectural visualization studios focus solely on making renders look beautiful — artistic lighting, exaggerated contrast, and unrealistic glows. The result? Stunning images that bear no resemblance to how the space will actually look once built."
          : "La mayoría de los estudios de visualización arquitectónica se enfocan solo en que los renders se vean bonitos — iluminación artística, contrastes exagerados y brillos irreales. ¿El resultado? Imágenes impactantes que no se parecen en nada a cómo se verá el espacio una vez construido.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--accent)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      ),
      title: language === "en" ? "Our Approach" : "Nuestro Enfoque",
      description:
        language === "en"
          ? "We work directly from your lighting design. IES photometric profiles, accurate lux levels, precise beam angles, and true color temperatures are the foundation of every render we produce. The light in our images matches the light in your specifications."
          : "Trabajamos directamente desde tu diseño de iluminación. Perfiles fotométricos IES, niveles de lux precisos, ángulos de haz exactos y temperaturas de color reales son la base de cada render que producimos. La luz en nuestras imágenes coincide con la luz en tus especificaciones.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--accent)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
      title: language === "en" ? "The Result" : "El Resultado",
      description:
        language === "en"
          ? "Your clients see exactly what they'll get. No surprises at installation. Our photometrically accurate renders serve as a reliable design validation tool — giving lighting designers and their clients the confidence to approve projects before a single fixture is installed."
          : "Tus clientes ven exactamente lo que obtendrán. Sin sorpresas en la instalación. Nuestros renders fotométricamente precisos sirven como una herramienta confiable de validación de diseño — dando a los diseñadores de iluminación y sus clientes la confianza para aprobar proyectos antes de instalar una sola luminaria.",
    },
  ];

  return (
    <section className="section-padding" id="why">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[var(--accent)] tracking-[0.15em] uppercase text-sm font-semibold mb-4">
            {language === "en"
              ? "Why Photometric Accuracy"
              : "Por Qué Precisión Fotométrica"}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            {language === "en"
              ? "Pretty isn't enough."
              : "Bonito no es suficiente."}
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "var(--text-secondary)" }}>
            {language === "en"
              ? "When your reputation depends on lighting performance, you need renders you can trust."
              : "Cuando tu reputación depende del rendimiento lumínico, necesitas renders en los que puedas confiar."}
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
              ? '"We don\'t fake the light. We render it."'
              : '"No inventamos la luz. La renderizamos."'}
          </p>
          <div className="divider-glow max-w-md mx-auto mt-6" />
        </div>
      </div>
    </section>
  );
};

export default WhyPhotometric;
