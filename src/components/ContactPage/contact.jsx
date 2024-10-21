import React from "react";
import ContactForm from "./emailForm";

function ContactPage() {
  return (
    <div className="flex flex-col items-center bg-white text-black p-4">
      <div className="w-full max-w-[80rem]">
        <h2 className="text-3xl font-bold text-center mt-6 mb-8 ">Contact us</h2>

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
              <p className="text-lg leading-relaxed  text-gray-600">
              +91 97478 44455<br/>
              sharathksasikumar@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
