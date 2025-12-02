import { Link } from "react-router-dom";
import ekuburLogo from "../assets/images/ekubur-logo.svg";
import menuLine from "../assets/images/icons/menu-line.svg";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const menuItems = ["About Us", "Services", "Contact"];

  // Detect click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar flex justify-between items-center py-3 px-4 md:px-16 md:py-6 bg-white shadow">
      <img src={ekuburLogo} alt="ekuburLogo" className="h-[68px]" />

      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        {menuItems.map((item) => (
          <li key={item}>
            <Link to={"/feature"} className="hover:text-[#0D7330]">
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden relative">
        <button 
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          className="flex items-center p-2 text-[#0D7330] text-[13px] md:text-[17px] font-medium transition-transform duration-300 gap-1"
        >
          <span>Menu</span>
          <img src={menuLine} alt="menuLine" loading="lazy" decoding="async" className="h-[14px]" />
        </button>
        <div
          ref={menuRef}
          className={`absolute right-0 overflow-hidden bg-white shadow-xl transition-all duration-500 ${open ? "max-h-96" : "max-h-0"}`}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href="#"
                style={{ animationDelay: `${0.15 * index}s` }}
                className={`text-[#0D7330] text-sm animate-slideDown min-w-max`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
