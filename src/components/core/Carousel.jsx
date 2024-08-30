import { ChevronLeftIcon, ChevronRightIcon } from "@/constant/icons";
import { useState } from "react";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full ">
      <div className="overflow-hidden relative ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides?.map((slide, index) => (
            <img
              key={index}
              className="min-w-full h-[75vh] object-cover "
              src={slide.image}
            />
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-75 text-white p-2 rounded-full"
      >
        <ChevronLeftIcon className="size-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-75 text-white p-2 rounded-full"
      >
        <ChevronRightIcon className="size-6" />
      </button>
    </div>
  );
};

export default Carousel;
