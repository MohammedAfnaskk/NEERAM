import React from "react";
import WhatsAppLogo from "../../assets/whatsapp.png";

export default function WhatsApp() {
  return (
    <div>
       <a
        href="https://api.whatsapp.com/send?phone=+919747844455&text=Hi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-2 right-1
         md:bottom-8 md:right-8 z-50"

      >
        <img
          src={WhatsAppLogo}
          alt="WhatsApp"
          className="w-14 h-14 md:w-16 md:h-16 object-cover hover:opacity-80 transition-opacity duration-300"
        />
      </a>
    </div>
  );
}
