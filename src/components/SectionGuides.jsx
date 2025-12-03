import { useEffect, useState } from "react";
import imgGuides from "../assets/images/guides.jpg";
import ArrowUpRight from "../assets/images/icons/arrow-right-up-line.svg";
import CheckCircle from "../assets/images/icons/icon-check-circle.svg";

function SectionGuides() {
  const guides = [
    {
      title: "Procedures and Supplications According to the Sunnah",
      desc: "Managing a burial is considered fard kifayah",
      popupTitle: "The process is carried out with dignity and care",
      highlight: "In Islam, the burial of a deceased Muslim is an act of honor, compassion, and religious duty. The process is carried out with dignity and care, reflecting the belief that every life returns to Allah in peace. Managing a burial is considered fard kifayah—a communal obligation to ensure that a fellow Muslim is laid to rest in the most respectful manner.",
      card1: {
        title: "1. The Meaning of Burial in Islam",
        desc: "Burial (al-dafn) is a deeply symbolic act representing humanity’s return to its original creation. After washing, shrouding, and performing the funeral prayer, the final step is to gently return the body to the earth.",
        surah: `“From the earth We created you, and into it We will return you, and from it We will bring you out once again.” (Qur’an, Surah Taha: 55)`
      },
      titlePrayer: "2. The Proper Steps of the Islamic Burial (According to Sunnah)",
      prayers: [
        { 
          title: "Preparing the Grave", 
          desc: [
            "The grave should be dug deep enough and protected from disturbances.",
            "The orientation must be towards the Qibla.",
            "Both lahad (side niche) and shaqq (middle trench) structures are permissible."
          ] 
        },
        { 
          title: "Lowering the Body Gently", 
          desc: [
            "The deceased is lowered into the grave starting with the head.",
            "The sunnah is to recite: “Bismillahi wa ‘ala millati Rasulillah.” In the name of Allah and upon the way of the Messenger of Allah."
          ]
        },
        { 
          title: "Positioning the Body", 
          desc: [
            "The body is placed on its right side.",
            "The face is turned to face the Qibla."
          ]
        },
        { 
          title: "Covering and Filling the Grave", 
          desc: [
            "The grave is closed with wooden boards or stabilizers, then covered with soil gradually.",
            "It is recommended to place the first three handfuls of soil while saying: “Minha khalaqnakum, wa fiha nu‘idukum, wa minha nukhrijukum taratan ukhra.” From it We created you, to it We will return you, and from it We will resurrect you once again."
          ]
        },
        { 
          title: "Marking the Grave", 
          desc: [
            "A simple marker is placed.",
            "Islam encourages modesty — no excessive decoration."
          ]
        },
      ],
      sectionQuotes: {
        title: "3. Supplications During and After Burial",
        quotes: [
          {
            title: "Supplication When Placing the Body Into the Grave",
            desc: `“Bismillahi wa ‘ala millati Rasulillah.” 
In the name of Allah and upon the way of the Messenger of Allah.`
          },
          {
            title: "Supplications After Burial",
            desc: `“Allahummaghfirlahu, warhamhu, wa ‘afihi, wa‘fu ‘anhu.”
O Allah, forgive him, have mercy on him, grant him safety, and pardon his mistakes.`
          }
        ]
      },
      footer: "Islamic burial is more than a ritual—it's a final act of love, humility, and remembrance"
    },
    {
      title: "How to Cover the Grave with Soil in an Islamic Burial",
      desc: "This step is carried out gently, humbly, and according to the etiquette taught in the Sunnah.",
      popupTitle: "Covering the grave with soil is a meaningful and respectful act.",
      highlight: `After the body has been placed in the grave and covered with wooden planks or the inner grave covering, it is recommended (sunnah) for one of the attendants to begin the burial by taking three handfuls of soil and placing them gently at the head of the deceased while reciting the following phrases:

1. First Handful: “From it We created you.”
2. Second Handful: “And into it We will return you.”
3. Third Handful: “And from it We will bring you forth once again.”

This practice is based on the narration of ‘Amr ibn Rabi‘ah, who said: “The Prophet ﷺ performed the funeral prayer for ‘Uthman ibn Maz‘un. After that, he went to his grave and poured soil over it three times.” (Narrated in the books of hadith)`,
      card1: {
        title: "Covering the Grave Gently and Forming the Mound",
        desc: `After placing the first three handfuls of soil, the rest of the grave should be filled slowly and carefully. At the beginning, it is recommended to support the soil with materials such as branches, leaves, or a mat so that the soil settles evenly above the grave. 

The surface of the grave should be raised about one hand-span (approximately ¾ of a foot). This elevation helps distinguish the grave when visiting. The grave should then be leveled across the top, following the example of the Prophet ﷺ. It is reported that the graves of the Prophet ﷺ, Abu Bakr, and ‘Umar were all raised one hand-span and leveled on top.

This guidance is supported by the narration of Abu Hayyaj, from ‘Ali ibn Abi Talib, who said:
“I am sending you just as the Prophet ﷺ sent me: do not leave any statue without destroying it, and do not leave any elevated grave without leveling it.”
(Narrated by Muslim)`
      },
      card2: {
        title: "Placing a Simple Grave Marker",
        desc: `It is sunnah to place a simple stone or wooden marker at the head of the deceased. This follows the narration reported by Ibn Majah from Anas: “The Prophet ﷺ marked the grave of ‘Uthman ibn Maz‘un with a stone.”

The purpose of the marker is simply to identify the grave, not to decorate it.`
      },
      sectionQuotes: {
        title: "Ruling on Writing and Building on Graves",
        desc: "Writing names or other inscriptions on tombstones is considered disliked (makruh) in Islamic teachings. However, scholars allow simple writing if needed for identification—especially where many graves are alike—since this serves a practical purpose and does not contradict the spirit of humility.",
        quotes: [
          {
            title: "This ruling is based on the hadith of Jarir, who said:",
            desc: `“The Messenger of Allah ﷺ forbade the plastering of graves, writing on them, or building structures over them.”
  (Narrated by Ahmad, Muslim, al-Nasa’i, and Abu Dawud)`
          },
          {
            title: "The use of clay or simple materials is also allowed, as mentioned in the narration of Ja‘far ibn Muhammad, from his father:",
            desc: `“The Prophet ﷺ raised the grave one hand-span above the ground, coated it with clay taken from nearby soil, and placed pebbles on top.”`
          }
        ]
      },
      sectionBottom: {
        title: "Sprinkling Water Over the Grave",
        desc: `After the burial mound is complete, it is sunnah to sprinkle clean, cool water over the grave. The sprinkling should start from the head of the deceased and proceed toward the feet.
This practice is based on the narration from Jabir ibn ‘Abdillah, who said:

“Water was sprinkled over the grave of the Prophet ﷺ, and the one who performed the sprinkling was Bilal ibn Rabah. He began from the right side of the head down to the feet.”
(Narrated by al-Bayhaqi)`
      }
    },
    {
      title: "Do’a for Patience & Strength",
      desc: "Prayer for the grieving family to remain steadfast.",
      popupTitle: "Strengthening the heart with faith, prayer, and steadfast patience",
      highlight: "In moments of loss, uncertainty, or hardship, Islam teaches believers to seek patience (ṣabr) and strength (quwwah) through sincere prayer. Patience is not merely enduring difficulties—it is the state of trusting Allah’s wisdom, accepting His decree, and remaining steadfast in the face of trials. Strength, likewise, comes from the heart that relies fully on Allah, the Source of all power and comfort.",
      card1: {
        title: "The Essence of Patience in Islam",
        desc: `Patience is one of the greatest virtues praised in the Qur’an. Allah promises His help and companionship to those who remain steadfast:

“Indeed, Allah is with those who are patient.”
(Qur’an 2:153)

Through patience, a believer finds peace, clarity, and the ability to continue despite emotional or physical hardship.`
      },
      sectionQuotes: {
        title: "Powerful Do’a for Patience & Strength",
        desc: "These prayers bring comfort to the heart, reminding the believer that no burden is placed upon them except what they are capable of bearing.",
        quotes: [
          {
            title: "Do’a for Patience in Trials",
            desc: `“Rabbishrah lī ṣadrī.” 
“My Lord, expand my chest with calmness and patience.”`
          },
          {
            title: "Do’a for Inner Strength",
            desc: `“Allahumma inni as’aluka quwwata fid-dīn, 
wat-thabāta ‘alal-haqq.”
“O Allah, I ask You for strength in my faith 
and steadfastness upon truth.”`
          },
          {
            title: "Do’a for Peace During Hardship",
            desc: `“Hasbunallahu wa ni‘mal wakīl.”
“Allah is sufficient for us, and He is the best disposer of affairs.”`
          }
        ]
      },
      sectionBottom: {
        title: "A Reminder of Hope",
        desc: "Hardships are not signs of weakness, but opportunities for drawing closer to Allah. Every tear, every struggle, and every whispered du’a is heard. With patience and sincere prayer, Allah grants strength that rises from within—quiet yet powerful."
      }
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
    <section id="guides" className="bg-white">
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
                        loading="lazy"
                        decoding="async"
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
            loading="lazy"
            decoding="async"
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
                  {selectedGuide.popupTitle}
                </h2>
                <p className="text-sm mt-3 md:text-base text-[#12100EB2] leading-relaxed" style={{ whiteSpace: "pre-line" }}>
                  {selectedGuide.highlight}
                </p>
              </div>

              <div className="bg-white rounded-xl p-3 md:p-6 space-y-3 mb-6">
                {
                  selectedGuide.card1 && (
                    <>
                      <p className="font-bold text-lg md:text-2xl font-[CormorantGaramond] text-[#12100EE5]">
                        {selectedGuide.card1.title}
                      </p>
                      <p className="text-base text-[#12100EE5]" style={{ whiteSpace: "pre-line" }}>
                        {selectedGuide.card1.desc}
                      </p>
                      {
                        selectedGuide.card1.surah && <p className="text-base text-[#12100EE5] mt-6" style={{ whiteSpace: "pre-line" }}>
                          {selectedGuide.card1.surah}
                        </p>
                      }
                    </>
                  )
                }
                {
                  selectedGuide.timings && (
                    <>
                      <p className="font-bold text-lg md:text-2xl font-[CormorantGaramond] text-[#12100EE5]">
                        When Tahlil Is Recited (Timing Guide)
                      </p>
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
                    </>
                  )
                }
              </div>

              {
                selectedGuide.card2 && <div className="bg-white rounded-xl p-3 md:p-6 space-y-3 mb-6">
                  <p className="font-bold text-lg md:text-2xl font-[CormorantGaramond] text-[#12100EE5]">
                    {selectedGuide.card2.title}
                  </p>
                  <p className="text-base text-[#12100EE5]" style={{ whiteSpace: "pre-line" }}>
                    {selectedGuide.card2.desc}
                  </p>
                </div>
              }

              {
                selectedGuide.prayers && <div className="bg-white rounded-xl p-4 md:p-6 space-y-4 mb-6">
                  <p className="font-bold text-2xl font-[CormorantGaramond] text-[#12100EE5] mb-3">
                    {
                      selectedGuide.titlePrayer ? selectedGuide.titlePrayer : "Full List of Dhikr & Prayers"
                    }
                  </p>
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
                      <img src={CheckCircle} alt="CheckCircle" loading="lazy" decoding="async" className="opacity-[.5]" />
                        <div>
                          <p className="text-[#12100EE5]">{prayer.title}</p>
                          {
                            typeof prayer.desc == "string" && <p className="text-xs text-[#12100EB2] mt-2 leading-relaxed">
                              {prayer.desc}
                            </p>
                          }
                          {
                            typeof prayer.desc == "object" && <ul className="ml-5">
                              {
                                prayer.desc.map((item, index) => (
                                  <li key={`prayerdesc-${index}`} className="text-xs text-[#12100EB2] mt-2 leading-relaxed list-disc">
                                    {item}
                                  </li>
                                ))
                              }
                            </ul>
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              }

              {
                selectedGuide.sectionQuotes && (
                  <div className="bg-white rounded-xl p-4 md:p-6 space-y-4 mb-6">
                    <p className="font-bold text-lg md:text-2xl font-[CormorantGaramond] text-[#12100EE5]">
                      {selectedGuide.sectionQuotes.title}
                    </p>
                    {
                      selectedGuide.sectionQuotes.desc && <div className="text-base">
                        {selectedGuide.sectionQuotes.desc}
                      </div>
                    }
                    <div 
                      className={`
                        grid
                        grid-cols-1
                        ${selectedGuide.sectionQuotes.quotes?.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"}
                        gap-3
                        md:gap-4
                      `}
                    >
                      {selectedGuide.sectionQuotes.quotes?.map((quotes, i) => (
                        <div
                          key={`${quotes.title}-${i}`}
                          className="
                            text-center
                            content-center
                            p-4
                            bg-white
                            border
                            border-[#0D7330]
                            rounded-[10px]
                          "
                        >
                          <p className="text-[#12100EE5]">{quotes.title}</p>
                            <p
                              className="text-sm text-[#12100EB2] mt-2 leading-relaxed"
                              style={{ whiteSpace: "pre-line" }}
                            >
                              {quotes.desc}
                            </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }

              {
                selectedGuide.sectionBottom && <div className="bg-white rounded-xl p-3 md:p-6 space-y-3 mb-6">
                  <p className="font-bold text-lg md:text-2xl font-[CormorantGaramond] text-[#12100EE5]">
                    {selectedGuide.sectionBottom.title}
                  </p>
                  <p className="text-base text-[#12100EE5]" style={{ whiteSpace: "pre-line" }}>
                    {selectedGuide.sectionBottom.desc}
                  </p>
                </div>
              }

              <p className="text-center text-xs md:text-sm text-[#12100EE5]">
                {
                  selectedGuide.footer ? selectedGuide.footer : "May this remembrance be a source of light, tranquility, and mercy for the soul of the departed."
                }
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SectionGuides;
