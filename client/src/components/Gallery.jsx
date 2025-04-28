import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import img1 from '../assets/gallery/img1.webp';
import img2 from '../assets/gallery/img2.webp';
import img4 from '../assets/gallery/img4.webp';
import img5 from '../assets/gallery/img5.webp';
import img6 from '../assets/gallery/img6.webp';
import img7 from '../assets/gallery/img7.webp';
import img9 from '../assets/gallery/img9.webp';
import img10 from '../assets/gallery/img10.webp';
import img11 from '../assets/gallery/img11.webp';
import img13 from '../assets/gallery/img13.webp';
import img14 from '../assets/gallery/img14.webp';
import img15 from '../assets/gallery/img15.webp';

const Gallery = () => {
  
    const images = [img1, img2, img4, img5, img6, img7, img9, img10, img11, img13, img14, img15]; // Add more images as needed

  
    return (
    <section className="gallery-section" id='gallery'>
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full mx-auto">
          {images.map((src, i) => (
            <PhotoView key={i} src={src}>
              <img
                src={src}
                alt={`Render ${i + 1}`}
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

