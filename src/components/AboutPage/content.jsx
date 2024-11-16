import React from "react";
import Logo from "../../assets/logo/neeram_logo-NoBg.png";
import neeramimage from "../../assets/ContentImg/neeramimage.jpeg";
import certificate1 from "../../assets/Certificats/neeram certificate 1.jpeg";
import certificate2 from "../../assets/Certificats/neeram certificate 2.jpeg";
import certificate3 from "../../assets/Certificats/neeram certificate 3.jpeg";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex justify-center bg-white text-black  p-4">
      <div className="w-full max-w-[80rem]  mt-20 md:mt-28">
        <motion.h1
          className="bg-custom-orange text-white text-center text-2xl md:text-3xl  p-3 font-serif font-bold "
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>
        <div className="border border-black ">
          <img className="mx-auto w-96 h-70" src={Logo} alt="Neeram Logo" />
          <div className="max-w-6xl mx-6  mb-10 mt-6">
            <motion.h1 className="leading-relaxed text-justify text-lg md:text-2xl "
             initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
              <span className="text-custom-orange font-bold text-3xl md:text-5xl">
                N
              </span>
              <span className="text-custom-orange font-bold text-2xl">
                eeram Coconut Industries Private Limited
              </span>
              <span className="ml-2">
                are manufacturers of pure coconut oil. Different varieties of
                coconut oil like roasted, cold press, and virgin are made. They
                are packed in convenient small consumer packs like pouches,
                bottles, and cans for the purpose of using as edible oil and
                hair oil. Manufactured in a modernized unit at Anakkallu, it is
                available all over coastal Karnataka districts of Dakshina
                Kannada, Udupi, Uttara Kannada, Kasaragod, and Kodagu. The
                company was formed with the vision to spread the benefits of
                coconut to people, and it has come a long way with still a long
                way to go.
              </span>
            </motion.h1>
          </div>
        </div>

        <motion.div className="mt-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-bold text-black mb-6">Why we exist</h2>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col w-full max-w-md  md:mb-0 md:mt-0 order-1 md:order-2">
              <img
                src={neeramimage}
                alt="Neeram's story image"
                className="w-full h-64 md:h-96 rounded-lg object-cover"
              />
            </div>
            <motion.div className="max-w-3xl mt-10 md:mt-0 md:mr-10 order-2 md:order-1"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
              <span className="text-custom-orange grid gap-2 font-[KoHo] text-[42px] md:text-[60px] font-bold leading-[60px] md:leading-[78px] text-left">
                Neeram’s story began with an aim to standardise cold pressed
                oils and make it the go-to choice like earlier days.
              </span>
              <div className="flex justify-items-start mt-10 font-sans text-xl md:text-2xl">
                Oils are the most important for cooking. But commonly used
                refined oils are the most harmful for health. So Neeram’s
                founder set out to bring a solution. Here’s how it all began.
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1 className="bg-custom-orange text-white text-center text-2xl md:text-3xl p-3 mt-10 font-serif font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Certificates
        </motion.h1>
        <motion.div className="flex flex-wrap  justify-center gap-10 mt-10 mb-10  "
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}>
          <img
            src={certificate1}
            alt="neeram certificate"
            className="w-80 h-auto rounded-lg"
          />
          <img
            src={certificate2}
            alt="neeram certificate"
            className="w-80 h-auto rounded-lg"
          />
          <img
            src={certificate3}
            alt="neeram certificate"
            className="w-80 h-auto rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
