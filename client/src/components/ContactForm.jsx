import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = ({ language }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      className="flex flex-col w-full max-w-[1000px] mx-auto p-8 min-h-screen justify-center"
      id="contact"
    >
      <h2 className="md:text-7xl text-5xl font-semibold m-20 text-center">
        {language === "en" ? "Contact Us" : "Contacto"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          {language === "en" ? "Name" : "Nombre"}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border-bottom focus:ring-gray-400 border-b-1 border-gray-400 auto-complete:bg-white"
          placeholder={language === "en" ? "Your Name" : "Tu Nombre"}
          required
        />

        <label htmlFor="email" className="block text-sm font-medium mb-1">
          {language === "en" ? "Email" : "Correo"}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border-b-1 rounded-lg border-gray-400"
          placeholder={language === "en" ? "Your Email" : "Tu Correo"}
          required
        />

        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          {language === "en" ? "Subject" : "Asunto"}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border-b-1 rounded-lg border-gray-400"
          placeholder={language === "en" ? "Subject" : "Asunto"}
          required
        />

        <label htmlFor="description" className="block text-sm font-medium mb-1">
          {language === "en" ? "Description" : "Descripción"}
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border-b-1 rounded-lg border-gray-400"
          placeholder={language === "en" ? "Your Message" : "Tu Mensaje"}
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 rounded-lg hover:bg-gray-600 border-1 border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition"
        >
          {language === "en" ? "Send Message" : "Enviar Mensaje"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
