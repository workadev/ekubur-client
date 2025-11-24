import { useEffect, useState } from "react";
import imgGuides from "../assets/images/guides.jpg";
import ArrowUpRight from "../assets/images/icons/arrow-right-up-line.svg";
import CheckCircle from "../assets/images/icons/icon-check-circle.svg";

function SectionGuides() {
  const guides = [
    {
      title: "Surah Yasin Recitation",
      desc: "A blessed surah recited for peace and mercy.",
      highlight:
        "Recitation that brings tranquility and mercy for the departed soul.",
      timings: ["After Maghrib", "During illness", "Thursday night"],
      prayers: [
        { title: "Surah Yasin", desc: "A central recitation for ease." },
        { title: "Tasbih (33x)", desc: "Subhānallāh — Glory be to Allah." },
        { title: "Tahmid (33x)", desc: "Alhamdulillāh — All praise to Allah." },
      ],
    },
    {
      title: "Do’a for the Deceased",
      desc: "Supplication asking Allah’s forgiveness and mercy.",
      highlight:
        "Focused prayers seeking forgiveness, light, and spaciousness of the grave.",
      timings: ["After burial", "During visits", "Night prayers"],
      prayers: [
        { title: "Allāhumma ighfir lahu", desc: "Ask for forgiveness." },
        { title: "Allāhumma thabbit", desc: "Pray for firmness in the grave." },
        { title: "Salawat", desc: "Blessings upon the Prophet ﷺ." },
      ],
    },
    {
      title: "Do’a for Patience & Strength",
      desc: "Prayer for the grieving family to remain steadfast.",
      highlight:
        "Supplications that calm the heart and fortify patience during loss.",
      timings: ["Moments of grief", "After condolences", "Night reflection"],
      prayers: [
        { title: "Innallāha ma’a al-sābirīn", desc: "Reminder of Allah’s support." },
        { title: "Rabbi ishrah lī", desc: "Expansion of chest and ease." },
        { title: "Hasbunallāh", desc: "Reliance and trust in Allah." },
      ],
    },
    {
      title: "Tahlil & Remembrance",
      desc: "Gathering to recite dhikr, prayers, and blessings.",
      highlight:
        "A gathering where family recites dhikr, du’a, and praises to Allah as an act of remembrance.",
      timings: [
        "Right after the passing (same night)",
        "Day 3",
        "Day 7",
        "Day 40",
        "Day 100",
        "Death anniversary",
        "Before Ramadan / Eid",
        "During visits to the grave (Ziarah)",
      ],
      prayers: [
        { title: "Al-Fatihah", desc: "Opening prayer dedicated to the deceased." },
        { title: "Surah Yasin", desc: "A central recitation bringing peace & mercy." },
        { title: "Tasbih (33x)", desc: "Subhānallāh — Glory be to Allah." },
        { title: "Tahmid (33x)", desc: "Alhamdulillāh — All praise to Allah." },
        { title: "Takbir (33x)", desc: "Allāhu Akbar — Allah is the Greatest." },
        { title: "Tahlil Phrase", desc: "Lā ilāha illallāh — There is no deity but Allah." },
        { title: "Salawat upon the Prophet", desc: "Allāhumma ṣalli ‘alā Muhammad." },
        { title: "Do’a for the Deceased", desc: "Closing prayer asking forgiveness and mercy." },
      ],
    },
    {
      title: "Reading Surah Al-Mulk",
      desc: "A surah that protects from the torment of the grave.",
      highlight: "Recitation to seek protection from trials of the grave.",
      timings: ["Nightly", "Thursday evening", "After Isha"],
      prayers: [
        { title: "Surah Al-Mulk", desc: "Recite completely with reflection." },
        { title: "Istighfar", desc: "Seek forgiveness after recitation." },
      ],
    },
    {
      title: "Visiting the Grave (Ziarah Kubur)",
      desc: "A practice to remember death and make du’a.",
      highlight: "A humble visit to remember the hereafter and offer prayers.",
      timings: ["Fridays", "Before Eid", "After burial"],
      prayers: [
        { title: "Peace greetings", desc: "Assalāmu ‘alaykum ahl al-qubūr." },
        { title: "Al-Fatihah", desc: "Gift recitation to the deceased." },
        { title: "Short dhikr", desc: "Subhānallāh, Alhamdulillāh, Allāhu Akbar." },
      ],
    },
  ];

  const [selectedGuide, setSelectedGuide] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (selectedGuide) {
      const timer = setTimeout(() => setShowModal(true), 20);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [selectedGuide]);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedGuide(null), 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

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
          <div className="w-full md:mr-4">
            {
              guides.map((item, index) => (
                <a
                  key={`${item.title}-${index}`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedGuide(item);
                  }}
                  className="
                    group
                    block
                    border-b
                    border-[#C2E2C8]
                    hover:border-[#0D7330]
                    transition-colors
                  "
                >
                  <div className="p-4 md:py-8 md:px-9 flex items-start justify-between">
                    <div className="mr-6">
                      <div className="text-[#063D1B] mb-1 group-hover:font-bold transition-colors">
                        {item.title}
                      </div>
                      <div className="text-sm text-[#12100EB2]">
                        {item.desc}
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity self-center">
                      <img
                        src={ArrowUpRight}
                        alt="ArrowUpRight"
                        className="min-w-5 min-h-5"
                      />
                    </div>
                  </div>
                </a>
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

      {selectedGuide && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-end
            justify-center
            bg-black/40
            w-full
            pt-6
          "
          onClick={handleOverlayClick}
        >
          <div
            className={`
              relative
              w-full
              max-h-[98vh]
              bg-white
              rounded-t-[20px]
              shadow-2xl
              overflow-hidden
              transition-transform
              duration-300
              ease-out
              will-change-transform
              ${showModal ? "translate-y-0" : "translate-y-full"}
            `}
          >
            <button
              aria-label="Close"
              className="absolute right-5 top-5 text-[28px] text-[#0D7330] hover:text-[#0A5A26]"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="p-6 md:px-10 md:pb-6 md:pt-8 space-y-6 md:space-y-8 bg-[#F7F7F9] max-h-[calc(98vh-48px)] overflow-y-auto">
              <div className="mb-6">
                <p className="text-sm font-semibold text-[#12100EE5] mb-9 md:mb-14">
                  {selectedGuide.title}
                </p>
                <h2 className="text-2xl md:text-[46px] md:leading-[68px] font-[CormorantGaramond] font-bold text-[#12100E] leading-[38px]">
                  A gathering where family recites dhikr, du’a, and praises to Allah as an act of remembrance.
                </h2>
                <p className="text-sm mt-3 md:text-base text-[#12100EB2] leading-relaxed">
                  {selectedGuide.highlight}
                </p>
              </div>

              <div className="bg-white rounded-xl p-3 md:p-6 space-y-3 mb-6">
                <p className="font-bold text-lg md:text-2xl font-[CormorantGaramond] text-[#12100EE5]">When Tahlil Is Recited (Timing Guide)</p>
                <div className="flex flex-wrap gap-4">
                  {selectedGuide.timings?.map((time, i) => (
                    <span
                      key={`${time}-${i}`}
                      className="
                        inline-flex
                        items-center
                        px-3
                        py-[6px]
                        border
                        border-[#0D7330]
                        text-[#0D7330]
                        rounded-full
                        md:text-sm
                        bg-white
                        font-semibold
                      "
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-6 space-y-4 mb-6">
                <p className="font-bold text-2xl font-[CormorantGaramond] text-[#12100EE5] mb-3">Full List of Dhikr & Prayers</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  {selectedGuide.prayers?.map((prayer, i) => (
                    <div
                      key={`${prayer.title}-${i}`}
                      className="
                        flex
                        items-start
                        gap-2
                        pb-3
                        pt-4
                        px-3
                        md:pt-6
                        md:pb-7
                        md:px-6
                        bg-white
                        border
                        border-[#0D7330]
                        rounded-[10px]
                      "
                    >
                      <img src={CheckCircle} alt="CheckCircle" className="opacity-[.5]" />
                      <div>
                        <p className="text-[#12100EE5]">{prayer.title}</p>
                        <p className="text-xs text-[#12100EB2] mt-2 leading-relaxed">{prayer.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-center text-xs md:text-sm text-[#12100EE5]">
                May this remembrance be a source of light, tranquility, and mercy for the soul of the departed.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SectionGuides;
