import imgAmbulance from "../assets/images/ambulance.jpg";
import imgFlower from "../assets/images/flower.jpg";
import imgMosque from "../assets/images/mosque.jpg";
import imgRip from "../assets/images/rip.jpg";

function SectionJourney() {
  const services = [
    {
      id: 1,
      title: "Ambulance & Transport Service",
      desc: "Providing respectful and peaceful transportation from home to the final resting place.",
      img: imgAmbulance,
      reverse: false,
    },
    {
      id: 2,
      title: "Spiritual Guidance & Religious Leaders",
      desc: "Guiding the farewell process with prayers, sincerity, and peace of mind.",
      img: imgMosque,
      reverse: true,
    },
    {
      id: 3,
      title: "Cemetery & Grave Service",
      desc: "From preparation to maintenance, we ensure every resting place is cared for with dignity.",
      img: imgRip,
      reverse: false,
    },
    {
      id: 4,
      title: "Seamless Payment Process",
      desc: "A secure and transparent payment system designed to bring peace of mind to every family",
      img: imgFlower,
      reverse: true,
    },
  ]

  return (
    <section className="bg-[#A68A64]">
      <div className="bg-white py-10 px-6 md:py-24 md:px-24 rounded-t-3xl">
        <h1 className="text-[46px] font-[CormorantGaramond] font-bold text-center md:text-left">
          Services That Accompany the Final Journey
        </h1>
        <p className="text-sm mt-3 text-center md:text-left">
          We provide complete services to ensure every farewell is handled with respect and serenity
        </p>
        <div className="flex flex-col">
          {services.map((item) => (
            <div
              key={item.id}
              className={`${item.reverse ? "justify-end" : ""} flex flex-col md:flex-row items-center mt-8`}
            >
              {/* Image */}
              <div
                className={`${
                  item.reverse ? "md:order-2" : ""
                } relative w-full h-[192px] max-w-[720px] md:h-[404px] rounded-t-[20px] md:rounded-[20px] overflow-hidden`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 bg-[#59473166] w-full h-full" />
              </div>

              {/* Text Card */}
              <div
                className={`${
                  item.reverse ? "md:order-1 rounded-b-[20px] md:rounded-r-none md:rounded-l-[20px]" : "rounded-b-[20px] md:rounded-l-none md:rounded-r-[20px]"
                } bg-[#4A4E41] text-white p-4 md:p-10 w-full md:max-w-[446px]`}
              >
                <h3 className="text-2xl md:text-[38px] font-bold mb-3 font-[CormorantGaramond] text-[#FAF9F6E5] text-center md:text-left">
                  {item.title}
                </h3>
                <p className="text-sm text-[#FAF9F6E5] text-center md:text-left">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionJourney;