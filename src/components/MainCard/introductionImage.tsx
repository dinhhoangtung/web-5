import { useEffect, useState } from "react";
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
      setActiveImage(nextImage);
    }
    console.log(nextImage);
  };

  // Click Back
  const handleClickPrevios = () => {
    const previosImage = activeImage - 1;
    if (previosImage < 0) {
      setActiveImage(images.length - 1);
    } else {
      setActiveImage(previosImage);
    }
  };
  // Click Navigate
  const handleClickNegavite = (index: number) => {
    setActiveImage(index);
  };

  //Set time
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((preImage) => (preImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-3 ">
      <div className="relative w-[892px] h-[302px] ">
        {images.map((item, index) => (
          <div
            key={index}
            className={`absolute ${
              activeImage === index ? "opacity-100" : "opacity-0"
            } transaction-all duration-500 `}
          >
            <img src={item} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div>
          {/* Click Next */}
          <div>
            <GoChevronRight
              className="absolute text-[50px] top-[50%] font-sans text-6xl translate-y-[-50%] cursor-pointer text-slate-600 right-0 hover:text-blue-500"
              onClick={handleClickNext}
            />
          </div>
          {/* Click back */}
          <div
            className="absolute text-[50px] top-[50%] font-sans text-6xl translate-y-[-50%] cursor-pointer text-slate-600 left-0 hover:text-blue-500"
            onClick={handleClickPrevios}
          >
            <GoChevronLeft />
          </div>

          {/* Button negative */}
          <div className="absolute flex gap-2 cursor-pointer  bottom-[5px] right-[5px]">
            {images.map((_item, index) => (
              <div
                key={index}
                className={`w-[10px] h-[10px] rounded-full ${
                  index === activeImage ? "bg-blue-500" : "bg-white"
                } `}
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
