import React from "react";
import Neeram1 from "../../assets/ContentImg/NeeramPic.png";
import Neeram2 from "../../assets/ContentImg/neeram oil.jpg";
import Neeram3 from "../../assets/ContentImg/neeram 500ml.jpg";
import Neeram4 from "../../assets/ContentImg/neeram oil 500ml.jpg";

import coconut from "../../assets/ContentImg/Coconut.png";
import img1 from "../../assets/ContentImg/image (1).png";
import img2 from "../../assets/ContentImg/image (2).png";
import img3 from "../../assets/ContentImg/image (4).png";
import img4 from "../../assets/ContentImg/image (5).png";
import img5 from "../../assets/ContentImg/image (6).png";
import img6 from "../../assets/ContentImg/image (7).png";
import Carousel from "./carousel";
import Neeramadd1 from "../../assets/Carousel/neeram add1.jpeg";
import Neeramadd2 from "../../assets/Carousel/neeram add2.png";
import Neeramadd3 from "../../assets/Carousel/neeram add3.png";
import { motion } from "framer-motion";

const homeImages = [
  { id: 1, src: Neeramadd1, alt: "Home Slide 1" },
  { id: 2, src: Neeramadd2, alt: "Home Slide 2" },
  { id: 3, src: Neeramadd3, alt: "Home Slide 3" },
];

const neeramImages = [
  {
    id: 1,
    src: Neeram1,
    alt: "Neeram oil 1L",
    title: "Neeram Coconut Oil 1L",
    price: 280,
  },
  {
    id: 2,
    src: Neeram2,
    alt: "Neeram oil 1L",
    title: "Neeram Coconut Oil 1L",
    price: 230,
  },
  {
    id: 3,
    src: Neeram3,
    alt: "Neeram oil 500ml",
    title: "Neeram Coconut Oil 500ml",
    price: 140,
  },
  {
    id: 4,
    src: Neeram4,
    alt: "Neeram oil 1L",
    title: "Neeram Coconut Oil 500ml",
    price: 130,
  },
];

function Content() {
  return (
    <div className="flex flex-col items-center bg-white text-black p-4">
      <div className="w-full max-w-[80rem] mt-20 md:mt-24">
        <Carousel images={homeImages} />

        <motion.h1
          className="bg-custom-orange text-white text-center text-2xl md:text-3xl p-3 mt-5 md:mt-10 font-serif font-bold w-full"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Products
        </motion.h1>

        <div className="flex flex-wrap justify-center mt-14 gap-8">
          <div className="overflow-x-auto w-full justify-center">
            <div className="flex gap-6 justify-start md:justify-center items-center">
              {neeramImages.map((image) => (
                <motion.div
                  key={image.id}
                  className="flex-shrink-0 h-96"
                  initial={{ opacity: 0, y: 20 }} // Initial state: hidden and slightly lower
                  whileInView={{ opacity: 1, y: 0 }} // Final state: fully visible and in position
                  transition={{ duration: 0.5, delay: 0.1 * image.id }} // Staggered entrance
                >
                  <div className="block bg-gray-50 border dark:bg-neutral-700 text-left overflow-hidden w-full h-full">
                    <a href="#!" className="group">
                      <img
                        className="transform transition duration-500 ease-in-out group-hover:scale-110 hover:cursor-pointer w-full h-3/4"
                        src={image.src}
                        alt={image.alt}
                      />
                    </a>

                    <div className="p-4 h-1/3 flex flex-col justify-center">
                      <h5 className="mb-1 text-base font-bold tracking-wide text-neutral-800 dark:text-neutral-50 text-center">
                        {image.title}
                      </h5>
                      <p className="mb-2 font-extrabold tracking-wide text-center">
                        Rs: {image.price}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.h1
          className="bg-custom-orange text-white text-center text-2xl md:text-3xl p-3 mt-8 md:mt-10 font-serif font-bold w-full"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          High Grade Coconut Oil
        </motion.h1>
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center  gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={coconut}
            alt="High Grade Coconut Oil"
            className="w-80"
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
          />

          <h1 className="text-2xl md:text-4xl mt-0 md:mt-16 font-serif text-balance p-4">
            High Grade/Roasted coconut oil is unique and offered only by Neeram
            in the entire coastal Karnataka market. Copra is fully dried and
            roasted before oil extraction. It brings out the great aroma and
            sweet taste of copra. Use of high grade copra, removing moisture and
            sterilisation increases the shelf life of coconut oil. Oil is golden
            yellow in colour and is highly recommended for cooking.
          </h1>
        </motion.div>

        <motion.h1
          className="bg-custom-orange text-white text-center text-2xl md:text-3xl p-3 mt-14 font-serif font-bold w-full"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Neeram
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center text-center gap-10 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              img: img1,
              title: "Variety",
              text: "Roasted – copra pieces are roasted \n Cold Press – copra pieces are not roasted",
            },
            {
              img: img2,
              title: "Pure",
              text: "All varieties of coconut oil \n supplied by Neeram are 100% \n pure. Free from any adulteration, \n perfumes, additives, preservatives \n and chemicals",
            },
            {
              img: img3,
              title: "Edible Use",
              text: "This coconut oil is suitable \n for use in all types of cooking. \n Salad dressing, deep frying, \n shallow frying and raw consumption",
            },
            {
              img: img4,
              title: "Healthy",
              text: "Nourishes the skin, moisturises hair, \n strengthens root, keeps the head cool \n and widely used as hair oil either as it \n is or with additives",
            },
            {
              img: img5,
              title: "Convenient Packing",
              text: "Different pack forms, materials and \n sizes with desired strength for convenient \n carry, long shelf life and use",
            },
            {
              img: img6,
              title: "Available",
              text: "General stores of coastal Karnataka \n in districts like Dakshina Kannada, \n Udupi, Kasaragod, Uttara Kannada.",
            },
            // Add other items similarly
          ].map(({ img, title, text }, index) => (
            <motion.div key={index} className="flex flex-col items-center">
              <img src={img} className="w-24 h-24" alt={title} />
              <h1 className="mt-3 font-bold text-xl">{title}</h1>
              <h1 className="text-lg text-center">
                {text.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h1>
            </motion.div>
          ))}
        </motion.div>

        <motion.h1
          className="bg-custom-orange text-white text-center text-2xl md:text-3xl p-3 mt-14 font-serif font-bold w-full"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>
        <motion.div
          className="flex flex-col md:flex-row mt-14 justify-center items-center gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h1 className="text-xl">
              <span className="font-bold">
                Neeram Coconut Industries Private Limited
              </span>{" "}
              <br /> Anakkallu Rd, Anakkallu, Kerala 671541 <br /> F6RR+CHV
              Anakkallu, Kerala
            </h1>
            <h1 className="text-xl mt-5 text-orange-800 hover:text-custom-orange">
              <span className="font-bold text-black">Phone : </span>
              <a href="tel:+919747844455">+91 97478 44455</a>
            </h1>
            <h1 className="text-xl mt-5 text-orange-800 hover:text-custom-orange">
              <span className="font-bold text-black">Email :</span>{" "}
              <a href="mailto:sharathksasikumar@gmail.com">
                sharathksasikumar@gmail.com
              </a>
            </h1>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d517.964392354445!2d75.24086347011638!3d12.49076872804433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba48fe133e37d5b%3A0xfafdaf5802fa6fbf!2sNeeram%20coconut%20oil!5e0!3m2!1sen!2sin!4v1696112209937!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded"
              title="Google Maps"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Content;
