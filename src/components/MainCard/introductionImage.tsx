import { useState } from "react";
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
  // Click Next
  const handleClickNext = () => {
    const nextImage = activeImage + 1;
    if (nextImage >= images.length) {
      setActiveImage(0);
    } else {
      setActiveImage(activeImage);
    }
  };
  // Click Back
  const handleClickPrevios = () => {
    const nextImage = activeImage - 1;
    if (nextImage < 0) {
      setActiveImage(images.length - 1);
    } else {
      setActiveImage(activeImage);
    }
  };
  // Click Navigate
  const handleClickNegavite = (index: number) => {
    setActiveImage(index);
  };

  return (
    <div className="relative ">
      <div className="relative w-[892px] h-[302px] ">
        {images.map((item, index) => (
          <div
            key={index}
            className={`absolute opacity-${
              activeImage === index ? "100" : "0"
            } transaction-all duration-500 `}
          >
            <img src={item} /> {""}
          </div>
        ))}
        <div>
          {" "}
          {/* Click Next */}
          <div
            className="absolute text-[50px] top-[50%]  translate-y-[-50%] cursor-pointer text-red-800 right-0"
            onClick={handleClickNext}
          >
            <GoChevronRight />
          </div>
          {/* Click back */}
          <div
            className="absolute text-[50px] top-[50%] translate-y-[-50%] cursor-pointer text-red-800 left-0"
            onClick={handleClickPrevios}
          >
            <GoChevronLeft />
          </div>
          {/* Button negative */}
          <div className="absolute flex gap-2 cursor-pointer  bottom-[5px] right-[5px]">
            {images.map((_item, index) => (
              <div
                key={index}
                className="w-[10px] h-[10px] rounded-full bg-slate-500"
                onClick={() => handleClickNegavite(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroImage;
