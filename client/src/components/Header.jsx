import React from "react";
import logo from "../assets/logo2.webp";

const Header = ({ setLanguage, language }) => {
  return (
    <header className="w-full py-4" id="header">

      <div className="flex justify-end px-2">
        <p
          className={`${
            language === "en"
              ? "font-bold text-white"
              : "italic text-gray-300 cursor-pointer"
          }`}
          onClick={() => setLanguage("en")}
        >
          EN
        </p>
        <p >|</p>
        <p
          className={`${
            language === "es"
              ? "font-bold text-white"
              : "italic text-gray-300 cursor-pointer"
          }`}
          onClick={() => setLanguage("es")}
        >
          ES
        </p>
      </div>

      <div className="flex max-w-7xl mx-auto justify-evenly items-center">
        {/* <a
          href="#services"
          className="w-1/3 block text-md font-medium text-center hover:border-b-1 border-gray-400 rounded-lg" 
        >
          {language == "en" ? "Services" : "Servicios"}
        </a> */}
        <div className="w-1/3 text-xl font-semibold tracking-wide justify-center flex items-center">
          <img className="w-[100px] md:w-[150px]" src={logo} alt="Logo PD Renders" />
        </div>
        {/* <a
          href="#contact"
          className="w-1/3 block text-md font-medium text-center hover:border-b-1 border-gray-400 rounded-lg"
        >
          {language == "en" ? "Contact Us" : "Contacto"}
        </a> */}
      </div>
    </header>
  );
};

export default Header;
