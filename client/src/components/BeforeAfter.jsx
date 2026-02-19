import React, { useState, useRef, useCallback } from "react";
import dayImg from "../assets/gallery/day.png";
import nightImg from "../assets/gallery/night.png";

const BeforeAfter = ({ language }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onPointerDown = useCallback(
    (e) => {
      e.preventDefault();
      dragging.current = true;
      containerRef.current.setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onPointerMove = useCallback(
    (e) => {
      if (!dragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <section className="section-padding" id="before-after">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[var(--accent)] tracking-[0.15em] uppercase text-sm font-semibold mb-4">
            {language === "en" ? "See the Difference" : "Ve la Diferencia"}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            {language === "en"
              ? "Day vs. Night. One model."
              : "Día vs. Noche. Un solo modelo."}
          </h2>
          <p
            className="max-w-xl mx-auto text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            {language === "en"
              ? "Drag the slider to compare how the same space looks under different lighting conditions — all photometrically accurate."
              : "Arrastra el slider para comparar cómo se ve el mismo espacio bajo diferentes condiciones de iluminación — todo fotométricamente preciso."}
          </p>
        </div>

        {/* Comparison slider */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="before-after-container glass-card"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {/* Before (day) — full-width background */}
            <img
              src={dayImg}
              alt={language === "en" ? "Day lighting" : "Iluminación diurna"}
              className="before-after-img"
              draggable={false}
            />

            {/* After (night) — clipped by slider */}
            <img
              src={nightImg}
              alt={
                language === "en"
                  ? "Night lighting"
                  : "Iluminación nocturna"
              }
              className="before-after-img"
              draggable={false}
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
            />

            {/* Labels */}
            <span className="before-after-label before-after-label--left">
              {language === "en" ? "Day" : "Día"}
            </span>
            <span className="before-after-label before-after-label--right">
              {language === "en" ? "Night" : "Noche"}
            </span>

            {/* Slider handle */}
            <div
              className="before-after-handle"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="before-after-handle-line" />
              <div className="before-after-handle-grip">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
