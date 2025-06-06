import React from "react";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo2.webp";

const Footer = ({ language }) => {
  return (
    <footer className="flex flex-col w-full text-white items-center justify-center text-center py-12">
      <div className="flex max-md:flex-col justify-evenly w-full">
        <div className="flex justify-center p-6">
          <img className="md:w-[150px] w-[100px]" src={logo} alt="Logo PD Reander" onClick={() => window.location.href="#header"}/>
        </div>
        <div className="flex flex-col justify-center p-12">
          <h2 className="text-2xl font-bold mb-4">
            {language === "en" ? "Follow us" : "Síguenos"}
          </h2>
          <div className="flex justify-center gap-4 mb-2">
            <a
              href="mailto:hola@pdrenders.com"
              className="flex text-white text-2xl w-14 h-14 items-center justify-center hover:text-gray-400"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/pd.renders"
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-white text-2xl w-14 h-14 items-center justify-center hover:text-gray-400"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/pd-renders"
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-white text-2xl w-14 h-14 items-center justify-center hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} PD Renders. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
