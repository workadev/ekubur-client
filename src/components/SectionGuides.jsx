import imgGuides from "../assets/images/guides.jpg";

function SectionGuides() {
  const guides = [
    "Preparing the Deceased (Ghusl & Kafan)",
    "Performing the Funeral Prayer (Shalat Jenazah)",
    "Arranging the Burial (Pemakaman)",
    "After the Burial: Doa and Remembrance",
    "Prayers & Remembrances"
  ]

  return (
    <section className="bg-white">
      <div className="bg-[#E6F3EA] py-10 px-6 md:py-24 md:px-24 rounded-t-3xl">
        <h1 className="text-[38px] md:text-[46px] font-[CormorantGaramond] font-bold text-center md:text-left">
          Funeral Guides & Islamic Duʿā
        </h1>
        <p className="text-sm mt-3 text-center md:text-left">
          A collection of step-by-step guidance and meaningful prayers to support families during moments of loss
        </p>
        <div className="flex justify-between mt-6">
          <div className="w-full">
            {
              guides.map((item) => (
                <div className="p-4 md:py-8 md:px-9 border-b border-[#C2E2C8]">
                  {item}
                </div>
              ))
            }
          </div>
          <img
            src={imgGuides}
            alt="imgGuides"
            className="
              rounded-xl
              mb-4
              h-[218px]
              md:h-auto
              md:mb-0
              md:w-[40%]
              md:max-w-[360px]
              object-cover
              hidden
              md:block" 
            />
        </div>
      </div>
    </section>
  );
}

export default SectionGuides;