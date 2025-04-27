import React from "react";
import cameraIcon from "../assets/icons/camera.png";
import panoramaIcon from "../assets/icons/360.png";
import animationIcon from "../assets/icons/movie.png";

const Services = ({ language }) => {

  const cards = [
    {
      icon: cameraIcon,
      title: language === "en" ? "Still Images" : "Imágenes Estáticas",
      description:
        language === "en"
          ? "High-quality still renders to bring your ideas to life with stunning detail."
          : "Imágenes estáticas de alta calidad para dar vida a tus ideas con un detalle impresionante.",
    },
    {
      icon: panoramaIcon,
      title: "360° Renders",
      description:
        language === "en"
          ? "Immersive 360° renders for a complete and interactive experience."
          : "Renders inmersivos de 360° para una experiencia completa e interactiva.",
    },
    {
      icon: animationIcon,
      title: language === "en" ? "Animations" : "Animaciones",
      description:
        language === "en"
          ? "Dynamic animations to showcase your projects in motion."
          : "Animaciones dinamicas para mostrar tus proyectos en movimiento",
    },
  ];

  return (
    <section className="flex flex-col justify-center min-h-screen" id="services">
      <h2 className="text-3xl font-bold text-center mb-8">
        {language === "en" ? "Our Services" : "Nuestros Servicios"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12">
        {cards.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-md:border-l-1 max-md:border-r-1 md:border-b-1 md:border-t-1 border-gray-400 rounded-lg p-6 text-center relative group"
            style={{ overflow: "hidden" }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              e.currentTarget.style.setProperty("--x", `${x}%`);
              e.currentTarget.style.setProperty("--y", `${y}%`);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty("--x", "50%");
              e.currentTarget.style.setProperty("--y", "50%");
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(circle at var(--x) var(--y), #292929, #232323)",
                pointerEvents: "none",
              }}
            ></div>
            <img
              className="w-14 m-4 relative z-10"
              src={service.icon}
              alt={`${service.title} Icon`}
            />
            <h3 className="text-xl font-semibold mb-4 relative z-10">
              {service.title}
            </h3>
            <p className="relative z-10">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
