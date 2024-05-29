import React, { useState, useEffect } from "react";

const images = [
  {
    src: "https://i.imgur.com/MyZfu1J.jpg",
  },
  {
    src: "https://i.imgur.com/zv52vYA.jpg",
  },
  {
    src: "https://i.imgur.com/vjmPgaH.jpg",
  },
  {
    src: "https://i.imgur.com/0X2P272.jpg",
  },
];

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex  items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-2xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`mySlides fade absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="numbertext absolute top-0 left-0 m-2 text-white bg-black bg-opacity-50 p-1 rounded">
              {index + 1} / {images.length}
            </div>
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot h-3 w-3 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
