import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = ({ language }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSending(false);
          if (result.status === 200) {
            setSent(true);
            setFormData({ name: "", email: "", subject: "", description: "" });
            setTimeout(() => setSent(false), 4000);
          } else {
            alert("Failed to send message. Please try again.");
          }
        },
        (error) => {
          setSending(false);
          console.error(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const inputClasses =
    "w-full px-0 py-3 bg-transparent border-b border-[var(--border-subtle)] focus:border-[var(--accent)] focus:outline-none transition-colors duration-300 text-[var(--text-primary)] placeholder:text-[var(--text-muted)]";

  return (
    <section className="section-padding" id="contact">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[var(--accent)] tracking-[0.15em] uppercase text-sm font-semibold mb-4">
            {language === "en" ? "Get in Touch" : "Ponte en Contacto"}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            {language === "en"
              ? "Let's work together."
              : "Trabajemos juntos."}
          </h2>
          <p className="max-w-lg mx-auto text-lg" style={{ color: "var(--text-secondary)" }}>
            {language === "en"
              ? "Tell us about your project and we'll get back to you within 24 hours."
              : "Cuéntanos sobre tu proyecto y te responderemos en 24 horas."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
              {language === "en" ? "Name" : "Nombre"}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
              placeholder={language === "en" ? "Your name" : "Tu nombre"}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
              {language === "en" ? "Email" : "Correo"}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              placeholder={language === "en" ? "you@example.com" : "tu@ejemplo.com"}
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
              {language === "en" ? "Subject" : "Asunto"}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClasses}
              placeholder={language === "en" ? "Project details" : "Detalles del proyecto"}
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
              {language === "en" ? "Message" : "Mensaje"}
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`${inputClasses} resize-none`}
              placeholder={
                language === "en"
                  ? "Tell us about your lighting design project..."
                  : "Cuéntanos sobre tu proyecto de diseño de iluminación..."
              }
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending
              ? (language === "en" ? "Sending..." : "Enviando...")
              : sent
              ? (language === "en" ? "✓ Sent!" : "✓ ¡Enviado!")
              : (language === "en" ? "Send Message" : "Enviar Mensaje")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
