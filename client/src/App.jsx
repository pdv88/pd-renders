import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';
/* import Services from './components/Services'; */
/* import Testimonials from './components/Testimonials.jsx'; */
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [language, setLanguage] = useState('es');
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <main className="min-h-screen flex flex-col w-full">
        <Header setLanguage={setLanguage} language={language} />
        <div ref={(el) => (sectionsRef.current[0] = el)} className="opacity-0 transition-opacity duration-700">
          <Hero language={language} />
        </div>
        <div ref={(el) => (sectionsRef.current[1] = el)} className="opacity-0 transition-opacity duration-700">
          <Gallery />
        </div>
        {/* <div ref={(el) => (sectionsRef.current[2] = el)} className="opacity-0 transition-opacity duration-700">
          <Services language={language} />
        </div> */}
        {/* <div ref={(el) => (sectionsRef.current[2] = el)} className="opacity-0 transition-opacity duration-700">
          <Testimonials language={language} />
        </div> */}
        <div ref={(el) => (sectionsRef.current[3] = el)} className="opacity-0 transition-opacity duration-700">
          <ContactForm language={language} />
        </div>
        <div ref={(el) => (sectionsRef.current[4] = el)} className="opacity-0 transition-opacity duration-700">
          <Footer language={language} />
        </div>
      </main>
    </>
  );
}

export default App;
