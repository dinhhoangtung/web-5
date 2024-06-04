import React, { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const images = [
  "https://phongdl.uit.edu.vn/sites/phongdl/files/slider/duc-2931.jpg",

  "https://phongdl.uit.edu.vn/sites/phongdl/files/slider/duc-2923.jpg",

  "https://phongdl.uit.edu.vn/sites/phongdl/files/slider/duc-2952.jpg",

  "https://phongdl.uit.edu.vn/sites/phongdl/files/slider/duc-2913.jpg",

  "https://phongdl.uit.edu.vn/sites/phongdl/files/slider/duc-2911.jpg",
];

const IntroImage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const handleClickNext = () => {
    const nextImage = activeImage + 1;
    if (nextImage >= images.length) {
      setActiveImage(0);
    } else {
      setActiveImage(activeImage);
    }
  };

  const handleClickPrevios = () => {
    const nextImage = activeImage - 1;
    if (nextImage < 0) {
      setActiveImage(images.length - 1);
    } else {
      setActiveImage(activeImage);
    }
  };

  return (
    <div>
      <div>
        {images.map((item, index) => (
          <div
            key={index}
            className='absolute opacity-${activeImageID === images.id ? "100" : "0"}'
          >
            <img src={item} alt="" /> {""}
          </div>
        ))}
      </div>
      <div
        className="absolute top-[50%] translate-y-[50%] text-black right-0"
        onClick={handleClickNext}
      >
        <GoChevronRight />
      </div>
      <div
        className="absolute top-[50%] translate-y-[50%] text-black left-0"
        onClick={handleClickPrevios}
      >
        <GoChevronLeft />
      </div>
    </div>
  );
};

export default IntroImage;
