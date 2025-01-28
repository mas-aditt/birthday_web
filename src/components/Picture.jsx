import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { picture} from '../assets';
import { Link } from 'react-router-dom'; 
import SectionWrapper from './SectionWrapper';
import picture1 from '../assets/picture1.jpg';
import picture2 from '../assets/picture2.jpg';
import picture3 from '../assets/picture3.jpg';
import picture4 from '../assets/picture4.jpg';
import picture5 from '../assets/picture5.jpg';
import picture6 from '../assets/picture6.jpg';
import picture7 from '../assets/picture7.jpg';
import picture8 from '../assets/picture8.jpg';
import picture9 from '../assets/picture9.jpg';
import picture10 from '../assets/picture10.jpg';
import picture11 from '../assets/picture11.jpg';
import picture12 from '../assets/picture12.jpg';
import picture13 from '../assets/picture13.jpg';
import picture14 from '../assets/picture14.jpg';
import picture15 from '../assets/picture15.jpg';
import picture16 from '../assets/picture16.jpg';
import picture17 from '../assets/picture17.jpg';
// Add your own images by putting them in the assets folder and import them.
const images = [
 picture1,
 picture2,
 picture3,
 picture4,
 picture5,
 picture6,
 picture7,
 picture8,
 picture9,
 picture10,
 picture11,
 picture12,
 picture13,
 picture14,
 picture15,
 picture16,
 picture17,

];
function Picture() {
  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };
  const allImagesLoaded = loadedImages === images.length;
  return (
    <SectionWrapper>
      <Link to="/card">
        <p className="absolute text-4xl font-bold text-customBlue inset-0 flex justify-center items-center text-center transform rotate-6 cursor-pointer">
          Kamu bertambah tua! :P
        </p>
      </Link>
      {!allImagesLoaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-xl font-medium text-gray-500">Loading images...</p>
        </div>
      )}
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            allImagesLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            zIndex: images.length - index,
          }}
          initial={{
            scale: 1,
            rotate: Math.random() * 20 - 10,
          }}
          whileDrag={{
            scale: 1.05,
            rotate: Math.random() * 20 - 10,
          }}
          drag
        >
          <img
            src={image}
            alt={`Stacked image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            onLoad={handleImageLoad} // Increment the counter when the image loads
          />
        </motion.div>
      ))}
    </SectionWrapper>
  );
}

export default Picture;
