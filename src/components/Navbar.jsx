import ekuburLogo from "../assets/images/ekubur-logo.svg";
import menuLine from "../assets/images/icons/menu-line.svg";
import { useCallback, useEffect, useRef, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const menuItems = [
    { label: "About Us", target: "about" },
    { label: "Services", target: "services" },
    { label: "Process", target: "process" },
    { label: "Packages", target: "packages" },
    { label: "Guides", target: "guides" },
    { label: "Testimonials", target: "testimonials" },
    { label: "Contact", target: "contact" },
  ];

  const handleScroll = useCallback((target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  }, []);

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
        {menuItems.map(({ label, target }) => (
          <li key={target}>
            <button
              type="button"
              onClick={() => handleScroll(target)}
              className="hover:text-[#0D7330] transition-colors"
            >
              {label}
            </button>
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
            {menuItems.map(({ label, target }, index) => (
              <button
                type="button"
                key={target}
                onClick={() => handleScroll(target)}
                style={{ animationDelay: `${0.15 * index}s` }}
                className="text-left text-[#0D7330] text-sm animate-slideDown min-w-max"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
