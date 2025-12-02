import { useEffect, useRef } from "react";
import userLine from "../assets/images/icons/user-line.svg";

function SectionTestimoni() {
  const carouselRef = useRef(null);

  const testimonials = [
    {
      name: "Lidya Melinda",
      location: "Kuala Lumpur",
      message: "The platform guided us through every step. The Ustadz arranged was knowledgeable and compassionate.",
    },
    {
      name: "Ahmed Hassam",
      location: "Kuala Lumpur",
      message: "Having all services in one place reduced our stress during a difficult time. Highly recommended.",
    },
    {
      name: "Nurul Hasana",
      location: "Selangor",
      message: "Having all services in one place reduced our stress during a difficult time. Highly recommended.",
    },
    {
      name: "Ahmed Rifai",
      location: "Selangor",
      message: "Having all services in one place reduced our stress during a difficult time. Highly recommended.",
    },
  ];

  useEffect(() => {
    const container = carouselRef.current;
    let index = 0;

    const interval = setInterval(() => {
      if (!container) return;

      const cardWidth = container.children[0].offsetWidth + 24; // 24 = gap-6
      index++;

      // Reset ke awal jika sudah di slide terakhir
      if (index >= testimonials.length) {
        index = 0;
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollTo({
          left: cardWidth * index,
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-6 md:py-15 bg-[#E6F3EA]">
      <div className="justify-items-center mb-8 px-6">
        <h1 className="font-[CormorantGaramond] font-bold text-[46px] text-center">
          Families Who Trusted Us
        </h1>
        <p className="mt-3 text-center">
          We are deeply grateful for every story and trust they’ve shared along the way.
        </p>
      </div>
      {/* Carousel */}
      <div
        ref={carouselRef}
        className="
          flex gap-6 overflow-x-auto pb-4 justify-items-center
          snap-x snap-mandatory scrollbar-hide scroll-smooth
        "
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[390px] bg-[#B8D4BF] rounded-2xl p-4 flex-shrink-0 snap-start flex items-center"
          >
            <div className="min-w-10 min-h-10 max-h-10 rounded-lg bg-[#8AB997] flex items-center justify-center mr-6">
              <img src={userLine} alt="userLine" loading="lazy" decoding="async" />
            </div>
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm py-3">{item.location}</p>
              <p className="text-sm">"{item.message}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionTestimoni;
