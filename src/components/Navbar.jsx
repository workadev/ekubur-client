import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-blue-600">E-Kubur</h1>

      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link to={"/feature"} className="hover:text-blue-600">
            Features
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="hover:text-blue-600">
            Contact
          </Link>
        </li>
      </ul>

      <button className="md:hidden p-2 rounded hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;