import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import img1 from '../assets/gallery/img1.webp';
import img2 from '../assets/gallery/img2.webp';
import img3 from '../assets/gallery/img3.webp';
import img4 from '../assets/gallery/img4.webp';
import img5 from '../assets/gallery/img5.webp';
import img6 from '../assets/gallery/img6.webp';
import img7 from '../assets/gallery/img7.webp';
import img9 from '../assets/gallery/img9.webp';
import img10 from '../assets/gallery/img10.webp';
import img11 from '../assets/gallery/img11.webp';
import img13 from '../assets/gallery/img13.webp';
import img15 from '../assets/gallery/img15.webp';

const Gallery = ({ language }) => {

  const images = [
    { src: img1, alt: "Photometric accurate interior render — living room with precise lighting simulation" },
    { src: img2, alt: "Architectural visualization with accurate beam angles and lux distribution" },
    { src: img3, alt: "Photometric driven render showing realistic color temperature and shadows" },
    { src: img4, alt: "Interior lighting design render with IES profile accuracy" },
    { src: img5, alt: "Accurate architectural render showcasing natural and artificial light interaction" },
    { src: img6, alt: "Photometrically accurate commercial space lighting visualization" },
    { src: img7, alt: "Precise lighting simulation render for architectural project" },
    { src: img9, alt: "Photometric render with accurate luminaire beam patterns" },
    { src: img10, alt: "Architectural visualization with true-to-life color temperature rendering" },
    { src: img11, alt: "Interior render showcasing photometric accuracy for lighting design validation" },
    { src: img13, alt: "Accurate light distribution render for architectural lighting project" },
    { src: img15, alt: "Photometric driven architectural visualization with precise shadow mapping" },
  ];

  return (
    <section id="gallery" aria-label="Portfolio gallery">
      {/* Section header */}
      <div className="text-center py-16 px-6">
        <p className="text-[var(--accent)] tracking-[0.15em] uppercase text-sm font-semibold mb-4">
          {language === "en" ? "Our Work" : "Nuestro Trabajo"}
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl">
          Portfolio
        </h2>
      </div>

      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full">
          {images.map((img, i) => (
            <PhotoView key={i} src={img.src}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width="600"
                height="400"
                className="w-full h-full object-cover cursor-zoom-in hover:scale-105 transition transform duration-300 ease-in-out"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default Gallery;
