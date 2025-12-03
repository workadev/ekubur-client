import { useState, useEffect } from "react";
import arrowLight from "../assets/images/icons/arrow-right-line.svg";

const slides = [
  {
    title: "photo1",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=70"
  },
  {
    title: "photo2",
    image: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?auto=format&fit=crop&w=1200&q=70"
  },
  {
    title: "photo3",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=70"
  },
];

function SectionBanner() {
  const [current, setCurrent] = useState(0);

  // auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrent(index);

  return (
    <section id="home" className="relative w-full h-[79vh] overflow-hidden bg-[#F7F7F9]">
      {/* Wrapper for slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative h-[79vh]"
          >
            <img
              src={slide.image}
              alt={slide.title}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              decoding="async"
              className="w-full h-full object-cover md:pl-[161px]"
            />
            <div className="absolute inset-0"></div>
          </div>
        ))}
      </div>

      {/* Text overlay */}
      <div className="absolute top-1/2 left-0 md:left-[96px] -translate-y-1/2 backdrop-blur-sm bg-white max-w-[304px] md:max-w-[660px] w-full shadow-lg">
        <div className="relative py-16 px-6 md:px-12 md:py-8 md:max-w-105">
          <div className="h-2 md:h-4 bg-[#0D7330] absolute top-0 left-0 w-full max-w-[155px] md:max-w-[304px]" />
          <h2 className="text-[46px] font-[CormorantGaramond] mb-2 font-bold">
            Returning to the Eternal Peace
          </h2>
          <p className="mb-6 md:mb-15">
            A serene place where every soul finds its way back to the Creator
          </p>
          <button className="px-[26px] flex py-2 bg-[#0D7330] text-white text-[17px] rounded-[10px] transition hover:opacity-90">
            Arrange Services <img src={arrowLight} alt="arrowLight" loading="lazy" decoding="async" className="ml-2" />
          </button>
        </div>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-[18px] md:bottom-[26px] left-1/2 md:left-[185px] -translate-x-1/2 md:translate-none flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-[60px] h-[10px] transition ${
              i === current ? "bg-[#95CFA4]" : "bg-[#0D733061]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default SectionBanner;
