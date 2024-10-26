import React, { useState } from "react";
import ContactForm from "./emailForm";
import location from "../../assets/location.png";
function ContactPage() {
  return (
    <div className="flex flex-col items-center bg-white text-black p-4 md:mb-5">
      <div className="w-full max-w-[80rem]  mt-20 md:mt-28">
        <h2 className="text-3xl font-bold text-center mt-6 md:mb-8 ">
          Contact us
        </h2>
        <div className="flex flex-col md:flex-row">
          <ContactForm />
          <div className="flex flex-col w-full max-w-md  mt-10 md:mb-0 md:mt-0 order-1 md:order-2">
            <div className="md:w-1/2 mb-8 md:mb-0 p-4">
              <h3 className="text-2xl  mb-4 ">Address</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                Neeram Coconut Industries Private Limited
                <br />
                Anakkallu Rd, Anakkallu, Kerala 671541 <br />
                F6RR+CHV Anakkallu, Kerala
              </p>
              <h3 className="text-2xl  mb-4 mt-6 ">Contact</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                <a
                  href="tel:+919747844455"
                  className="text-gray-600 hover:underline hover:text-custom-orange"
                >
                  +91 97478 44455
                </a>
                <br />
                <a
                  href="mailto:sharathksasikumar@gmail.com"
                  className="text-gray-600 hover:underline hover:text-custom-orange"
                >
                  sharathksasikumar@gmail.com
                </a>
              </p>

              <a
                href="https://www.google.com/maps/place/Neeram+coconut+oil/@12.490808,75.241314,328m/data=!3m1!1e3!4m6!3m5!1s0x3ba48fe133e37d5b:0xfafdaf5802fa6fbf!8m2!3d12.4908076!4d75.2413139!16s%2Fg%2F11rwtw0ylz?hl=en&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-custom-orange text-white flex items-center md:w-80 h-10 p-10 mt-10 
                       shadow-md hover:bg-green-700 transition"
                >
                  Click to View Our Location
                  <img src={location} alt="Location" className=" h-10 mr-3 " />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
