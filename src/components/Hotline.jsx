import phoneLine from "../assets/images/icons/phone-line.svg";

function Hotline() {
  return (
    <section className="py-[14px] px-6 bg-[#725C41] flex items-center justify-center">
      <a href="tel:+60-XXX-XXXX" className="flex items-center text-[#FAF9F6E5] text-xs">
        <img src={phoneLine} alt="phoneLine" className="mr-2" />
        <div className="uppercase">
          Emergency Hotline: +60-XXX-XXXX
        </div>
      </a>
    </section>
  );
}

export default Hotline;