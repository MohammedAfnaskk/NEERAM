import React from "react";
import logo from "../assets/logo/neeram_logo-NoBg.png";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-300 md:h-32 p-4">
      <img className="w-28 h-24 mb-4 md:mb-0 ml-0 lg:ml-20" src={logo} alt="Neeram Logo" />
      <h1 className="text-center text-lg">
        Copyright © 2024{" "}
        <span className="text-orange-900 font-bold">
          Neeram Coconut Industries Private Limited
        </span>
        . All Rights Reserved.
      </h1>
      <div className="flex gap-6 mt-4 md:mt-0 text-2xl mr-0 lg:mr-20">
        <a href="#" aria-label="Instagram" className="hover:text-orange-900 transition-colors">
          <FaInstagram />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-orange-900 transition-colors">
          <FiFacebook />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-orange-900 transition-colors">
          <FaXTwitter />
        </a>
        <a href="#" aria-label="YouTube" className="hover:text-orange-900 transition-colors">
          <FiYoutube />
        </a>
      </div>
    </div>
  );
}

export default Footer;
