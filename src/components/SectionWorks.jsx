import ArrowUpRight from "../assets/images/icons/arrow-right-up-line.svg";
import imageWork from "../assets/images/image.jpg";

export default function HowWeWorks() {
  const items = [
    {
      title: "1. Submit Informations",
      desc: "Provide basic details about the deceased",
    },
    {
      title: "2. Select Package & Burial Plot",
      desc: "Choose the service package and available plot",
    },
    {
      title: "3. We Prepare All Arrangements",
      desc: "Our team prepares everything",
    },
    {
      title: "4. Track the Process in Real Time",
      desc: "Monitor updates until the burial is complete",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="py-10 px-6 md:py-24 md:px-24 rounded-t-3xl bg-[#0D733014]">
        <h1 className="text-[38px] md:text-[46px] font-[CormorantGaramond] font-bold text-center md:text-left">
          How We Works
        </h1>
        <p className="text-md mt-3 text-center md:text-left">
          A guided, Sharia-compliant process designed to support your family with clarity and ease.
        </p>
        <div className="mt-8 flex flex-col md:flex-row flex-col-reverse justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mr-6 w-full">
            {items.map((item, i) => (
              <div
                key={i}
                className="
                  group
                  relative
                  border
                  border-[#12100E38]
                  rounded-xl
                  p-6
                  hover:bg-[#cfe8d2]
                  hover:border-[#0D7330]
                  transition-colors
                  duration-300
                  flex 
                  justify-between 
                  flex-col
                  hover:text-[#0D7330]
                "
              >
                <div className="text-md text-[#084E22] mb-5">{item.title}</div>
                <div className="flex items-center">
                  <p className="text-sm font-bold">{item.desc}</p>
                  <div className="top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <img
                      src={ArrowUpRight}
                      alt="ArrowUpRight"
                      className="min-w-5 min-h-5 text-gray-700" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <img src={imageWork} alt="imageWork" className="rounded-xl mb-4 h-[218px] md:h-auto md:mb-0 md:w-[40%] md:max-w-[450px] object-cover" />
        </div>
      </div>
    </section>
  );
}