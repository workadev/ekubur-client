import { Link } from "react-router-dom";
import ekuburLogo from "../assets/images/ekubur-logo.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-top py-6 md:py-10 px-6 md:px-16">
        <div className="flex justify-center md:justify-start">
          <img src={ekuburLogo} alt="ekuburLogo" className="md:h-[68px]" />
        </div>
        <div className="flex flex-col md:flex-row flex-wrap pt-8">
          <div className="w-full md:w-1/4 mb-7 md:mb-0 md:pr-12">
            <div className="h-full">
              <div className="mb-2 pb-3 text-2xl font-[CormorantGaramond] font-bold border-b-1 border-[#725C41]">
                Ekubur
              </div>
              <div className="text-[15px] font-extralight">
                Honoring Islamic traditions <br />
                with dignity and respect <br />
                in funeral services coordination.
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-7 md:mb-0 md:pr-12">
            <div className="h-full flex flex-col">
              <div className="mb-2 pb-3 text-2xl font-[CormorantGaramond] font-bold border-b-1 border-[#725C41]">
                Services
              </div>
              <Link className="text-[15px] mb-2 font-extralight">
                Ambulance Transport
              </Link>
              <Link className="text-[15px] mb-2 font-extralight">
                Religious Rites
              </Link>
              <Link className="text-[15px] mb-2 font-extralight">
                Document Management
              </Link>
              <Link className="text-[15px] font-extralight">
                Payment Processing
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-7 md:mb-0 md:pr-12">
            <div className="h-full flex flex-col">
              <div className="mb-2 pb-3 text-2xl font-[CormorantGaramond] font-bold border-b-1 border-[#725C41]">
                Support
              </div>
              <Link className="text-[15px] mb-2 font-extralight">
                24/7 Emergency Hotline
              </Link>
              <Link className="text-[15px] mb-2 font-extralight">
                Family Guidance
              </Link>
              <Link className="text-[15px] mb-2 font-extralight">
                Educational Resources
              </Link>
              <Link className="text-[15px] font-extralight">
                Provider Network
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <div className="h-full flex flex-col">
              <div className="mb-2 text-2xl font-[CormorantGaramond] font-bold pb-3 border-b-1 border-[#725C41]">
                Contact
              </div>
              <a href="tel:+60-XXX-XXXX" className="text-[15px] mb-3 font-extralight">
                +60-XXX-XXXX
              </a>
              <a href="mailto:support@e-kubur.com" className="text-[15px] mb-3 font-extralight">
                support@e-kubur.com
              </a>
              <div className="text-[15px] font-extralight">
                Kuala Lumpur, Malaysia
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer text-white text-center py-3 px-6">
        <div className="text-xs uppercase">
          🇲🇾 Designed for Malaysian Muslim families | Compliant with Islamic funeral traditions
        </div>
        <div className="pt-1 md:pt-2 text-xs uppercase">
          © {new Date().getFullYear()} EKubur. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;