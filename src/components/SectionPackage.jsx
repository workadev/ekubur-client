import imgCheck from "../assets/images/icons/circle-check.svg";

function SectionPackage() {
  const packages = [
    {
      title: "Critical Package",
      subtitle: "Less than 3 hour (immediate dispatch)",
      color: "bg-[#DE4F44]", // merah
      items: [
        "Urgent relocation with utmost respect",
        "Ghusl, kafan, and janazah prayer performed immediately",
        "Rapid preparation of the burial site",
        "Priority hearse with fast response",
        "Emergency support for required documents",
        "Intensive family coordination during urgent moments",
        "On-site team present until all rites are completed",
      ],
      header: "For immediate assistance, honoring Islamic rites with urgency and respect",
      footer:
        "For immediate assistance, honoring Islamic rites with urgency and respect",
    },

    {
      title: "High Priority",
      subtitle: "Approximately 6–12 hours",
      color: "bg-[#0369A1]", // biru
      items: [
        "Prompt same-day body transfer",
        "Ghusl, kafan, and janazah prayer arranged on the same day",
        "Burial site prepared within the same day",
        "Priority regular hearse",
        "Complete documentation assistance",
        "Structured, guided coordination with the family",
        "Team supporting the entire burial process",
      ],
      header: "For same-day with prioritized care and proper adherence to Islamic guidance",
      footer:
        "Families needing a same-day burial with orderly preparation.",
    },

    {
      title: "Scheduled Package",
      subtitle: "Based on scheduled appointment",
      color: "bg-[#0B622A]", // hijau
      items: [
        "Body transfer according to family's chosen time",
        "Ghusl, kafan, and janazah prayer fully scheduled",
        "Burial plot reserved and prepared ahead of time",
        "Standard hearse unit",
        "Documentation arranged in advance",
        "Peaceful and organized coordination with the family",
        "On-site support provided as needed",
      ],
      header: "For seeking a calm, well-planned, and serene Islamic burial arrangement",
      footer:
        "Planned, non-urgent burials with a focus on tranquility and preparation.",
    },
  ];

  return (
    <section id="packages" className="bg-white">
      <div className="py-10 px-6 md:py-24 md:px-24">
        <h1 className="text-[38px] md:text-[46px] font-[CormorantGaramond] font-bold text-center">
          Choose a Funeral Package
        </h1>
        <p className="text-sm mt-3 text-center">
          Select from our Sharia-compliant service packages, tailored to your family’s needs and level of urgency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden"
            >
              {/* Header */}
              <div className={`${pkg.color} text-white text-center pt-9 pb-6`}>
                <h3 className="text-2xl font-[CormorantGaramond] font-bold mb-1">
                  {pkg.title}
                </h3>
                <p className="text-sm font-bold opacity-90">{pkg.subtitle}</p>
              </div>

              {/* Body */}
              <div className={pkg.color}>
                <div className="p-5 bg-white rounded-t-3xl">
                  <div className="font-bold text-center mb-5 text-[#12100EB2]">
                    {pkg.header}
                  </div>
                  <ul className="space-y-4">
                    {pkg.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <img src={imgCheck} alt="imgCheck" loading="lazy" decoding="async" className="w-5 h-5 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <p className="text-gray-600 mt-6 text-sm text-center leading-relaxed">
                    {pkg.footer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionPackage;
