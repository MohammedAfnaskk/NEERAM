import React from "react";
import WhatsAppLogo from "../../assets/whatsapp.png";

export default function WhatsApp() {
  return (
    <div>
       <a
        href="https://api.whatsapp.com/send?phone=+919747844455&text=Hi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50"

      >
        <img
          src={WhatsAppLogo}
          alt="WhatsApp"
          className="w-18 h-20 md:w-24 md:h-24 object-cover hover:opacity-80 transition-opacity duration-300"
        />
      </a>
    </div>
  );
}
