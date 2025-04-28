import React from "react";

const Hero = ({ language }) => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center text-left px-4">
      <h1 className="text-6xl sm:text-7xl font-bold ">
        {language === "en" ? (
          <>
            Architecture <em>imagined, rendered, realized.</em>
          </>
        ) : (
          <>
            Arquitectura <em>imaginada, renderizada, realizada.</em>
          </>
        )}
      </h1>
      <h3 className="w-full max-md:text-left text-center text-lg sm:text-xl md:text-2xl mt-4 opacity-30">
        {language === "en"
          ? "Still Renders | 360 Renders | Animations"
          : "Renders Estáticos | Renders 360 | Animaciones"}
      </h3>
      <button
        onClick={() => window.location.href = "#contact"}
        className="mt-6 px-6 py-3 border-1 border-gray-300 text-white hover:-translate-y-0.5 active:translate-y-0.5 transition duration-300"
      >
        {language === "en" ? "Contact Us" : "Contáctanos"}
      </button>
    </div>
  );
};

export default Hero;
