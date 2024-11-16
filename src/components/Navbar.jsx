import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo/neeram_logo-NoBg.png";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

const navLinks = [
  { id: 1, href: "/", name: "Products" },
  { id: 2, href: "/oilmill", name: "Oil Mill" },
  { id: 3, href: "/about", name: "About Us" },
  { id: 4, href: "/contact", name: "Contact Us" },
];

const NavItems = ({ toggleMenu }) => (
  <ul className="flex flex-col gap-4 sm:flex-row">
    {navLinks.map(({ id, href, name }) => (
      <li key={id} className="text-black hover:text-custom-orange">
        <Link to={href} onClick={toggleMenu}>
          {name}
        </Link>
      </li>
    ))}
  </ul>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <div className="w-full fixed bg-gray-50 border-b-2 border-gray-200 z-50 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img className="w-28 md:w-36 cursor-pointer" src={logo} alt="Neeram Logo" />
        </Link>
        <button
          onClick={toggleMenu}
          className="text-black hover:text-white flex sm:hidden"
          aria-label="Toggle menu"
        >
          <img src={isOpen ? close : menu} alt="toggle" className="w-10 h-10" />
        </button>
        <nav className="hidden sm:flex gap-8 font-bold">
          <NavItems toggleMenu={toggleMenu} />
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-sidebar absolute right-0 w-44 sm:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <nav className="p-5 bg-gray-50 rounded-b-md">
              <NavItems toggleMenu={toggleMenu} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
