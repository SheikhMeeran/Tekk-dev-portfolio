import { useEffect, useState } from 'react';
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';

const testimonialsData = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.",
    name: "Patrick Muriungi",
    role: "CEO & Founder",
    image: "/images/testimonials/client-1.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.",
    name: "Joy Marete",
    role: "Finance Manager",
    image: "/images/testimonials/client-2.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.",
    name: "ClaireBelle Zawadi",
    role: "Global Brand Manager",
    image: "/images/testimonials/client-3.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.",
    name: "Uhuru Kenyatta",
    role: "CEO & Founder",
    image: "/images/testimonials/client-4.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const changeTestimonial = (nextIndex) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrent(nextIndex);
      setIsVisible(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = current === testimonialsData.length - 1 ? 0 : current + 1;
      changeTestimonial(nextIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const handlePrev = () => {
    const prevIndex = current === 0 ? testimonialsData.length - 1 : current - 1;
    changeTestimonial(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = current === testimonialsData.length - 1 ? 0 : current + 1;
    changeTestimonial(nextIndex);
  };

  const { text, name, image } = testimonialsData[current];

  return (
    <section className="bg-[linear-gradient(to_right,rgba(153,38,240,0.95),rgba(209,34,227,0.95))] relative text-center text-white">
      {/* Top SVG */}
      <div className="w-full overflow-hidden -mt-1">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288V0H1392C1344,0,1248,0,1152,0H0Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold">Testimonials</h1>
        <div className="h-1 w-20 bg-white mx-auto my-4 rounded-full" />
        <p className="text-base sm:text-lg text-white opacity-80 mb-10">
          what our clients are saying
        </p>

        {/* Testimonial Box */}
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-purple-200 text-gray-800 px-6 py-8 sm:px-10 sm:py-10 rounded-xl max-w-5xl mx-auto relative shadow-lg min-h-[200px] flex flex-col justify-between">
            <p className="text-base sm:text-lg leading-relaxed">
              <FaQuoteLeft className="inline mr-2 text-purple-500 text-2xl" />
              {text}
              <FaQuoteRight className="inline ml-2 text-purple-500 text-2xl" />
            </p>

            <div className="flex justify-center mt-6 text-purple-500 text-sm sm:text-base">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            {/* Client Image */}
            <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 bottom-[-40px]">
              <img
                src={image}
                alt={name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-purple-600 shadow-lg object-cover  relative bottom-8"
              />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-20">{name}</h3>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={handlePrev}
            className="text-white hover:text-gray-800 border border-gray-300  p-3 w-10 hover:bg-white transition duration-300"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="text-white hover:text-gray-800 border border-gray-300  p-3 w-10 hover:bg-white transition duration-300"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-purple-600 to-pink-500 p-4 rounded-full shadow-lg text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div> */}

      {/* Bottom SVG */}
      <div className="w-full overflow-hidden -mb-1">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
