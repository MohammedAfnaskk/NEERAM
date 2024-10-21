import { useState } from "react";
import logo from "../assets/logo/neeram_logo-NoBg.png";
import { Link } from "react-router-dom";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

const navLinks = [
  { id: 1, href: "/", name: "Products" },
  { id: 2, href: "/oilmill", name: "Oil Mill" },
  { id: 3, href: "/about", name: "About Us" },
  { id: 4, href: "/contact", name: "Contact Us" },
];

const NavItems = () => {
  return (
    <ul className="nav-ul flex flex-col gap-4 sm:flex-row">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <Link to={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <div className="text-center  bg-gray-300">
      <div className="ml-14 sm:ml-18 md:ml-20 lg:ml-28 flex justify-between items-center">
        <img className="w-36" src={logo} alt="Neeram Logo" />

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="text-black hover:text-white flex sm:hidden"
          aria-label="Toggle menu"
        >
          <img src={isOpen ? close : menu} alt="toggle" className="w-8 h-8" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-8 font-bold pr-32 sm:pr-20">
          <NavItems />
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav-sidebar sm:hidden">
          <nav className="p-5 bg-gray-300">
            <NavItems />
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
