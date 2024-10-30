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
    <ul className="nav-ul flex flex-col gap-4 sm:flex-row ">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li text-back hover:text-custom-orange">
          <Link to={href} className="nav-li_a" onClick={() => {toggleMenu}}>
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
    <div className="text-center  bg-gray-50 border-b-2 border-b-gray-200  z-50 fixed w-full ">
      <div className="ml-3 sm:ml-18 md:ml-20 lg:ml-28 flex justify-between items-center">
        <img className="w-28 md:w-36" src={logo} alt="Neeram Logo" />

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="text-black hover:text-white flex sm:hidden mr-5"
          aria-label="Toggle menu"
        >
          <img src={isOpen ? close : menu} alt="toggle" className="w-10 h-10" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-8 font-bold pr-32 sm:pr-20">
          <NavItems  toggleMenu={toggleMenu} />
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
         <div className="nav-sidebar absolute right-0 w-44   sm:hidden">
      <nav className="p-5 bg-gray-50 rounded-b-md   ">
            <NavItems toggleMenu={toggleMenu} />
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
