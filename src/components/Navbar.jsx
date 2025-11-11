import { Link } from "react-router-dom";
import ekuburLogo from "../assets/images/ekubur-logo.svg";
import menuLine from "../assets/images/icons/menu-line.svg";

function Navbar() {
  return (
    <nav className="navbar flex justify-between items-center py-3 px-4 md:px-16 md:py-6 bg-white shadow">
      <img src={ekuburLogo} className="h-[68px]" />

      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link to={"/feature"} className="hover:text-[#A68A64]">
            Features
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="hover:text-[#A68A64]">
            Contact
          </Link>
        </li>
      </ul>

      <button className="md:hidden flex items-center p-2 text-[#A68A64] text-[13px] md:text-[17px] font-medium">
        Menu
        <img src={menuLine} className="h-[14px] md:h-9 ml-1" />
      </button>
    </nav>
  );
}

export default Navbar;