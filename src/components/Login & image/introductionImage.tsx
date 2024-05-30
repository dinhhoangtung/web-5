import React, { useState, useEffect } from "react";

const images = [
  {
    src: "https://phongdl.uit.edu.vn/sites/phongdl/files/slider/duc-2931.jpg",
  },
  {
    src: "https://phongdl.uit.edu.vn/sites/phongdl/files/slider/duc-2923.jpg",
  },
  {
    src: "https://phongdl.uit.edu.vn/sites/phongdl/files/slider/duc-2952.jpg",
  },
  {
    src: "https://phongdl.uit.edu.vn/sites/phongdl/files/slider/duc-2913.jpg",
  },
  {
    src: "https://phongdl.uit.edu.vn/sites/phongdl/files/slider/duc-2911.jpg",
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
    <div className="flex flex-col  content-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-2xl ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`mySlides fade absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
            <div className="flex justify-center absolute mt-4">
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
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
