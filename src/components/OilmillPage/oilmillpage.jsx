import React from "react";
import { motion } from "framer-motion";
import Carousel from "../HomePage/carousel";
import OilMillImage1 from "../../assets/Carousel/neeram oilmill.jpeg";
import OilMillImage2 from "../../assets/Carousel/neeram oilmill.png";

const oilMillImages = [
  { id: 1, src: OilMillImage1, alt: "Oil Mill Slide 1" },
  { id: 2, src: OilMillImage2, alt: "Oil Mill Slide 2" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Oilmill() {
  return (
    <div className="flex flex-col items-center bg-white text-black p-4">
      <div className="w-full max-w-[80rem] mt-20 md:mt-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50%" }} // Triggers animation as element comes into view on scroll
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h1
            className="bg-custom-orange text-white text-center text-2xl md:text-3xl p-4 font-serif font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Oil Mill
          </motion.h1>

          <Carousel images={oilMillImages} />

          <div className="mt-10 font-sans text-xl md:text-2xl px-4 mb-10">
            <motion.p
              className="mt-5"
              variants={fadeInUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ margin: "-50%" }}
            >
              Neeram has the necessary infrastructure to mechanically
              manufacture, pack, and market roasted coconut oil with a capacity
              of crushing 15 tons of copra per day in 24 hours.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-5"
              viewport={{ margin: "-50%" }}
            >
              Land - 78 cents area near, Anakkal, Kerala 671541
            </motion.p>
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-5"
              viewport={{ margin: "-50%" }}
            >
              Building - Main building with floor area of 6,600 sq. ft. and a
              total area of 9,000 sq.ft.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-5"
              viewport={{ margin: "-50%" }}
            >
              Office - 1 office room with total seating facility, including
              computers, chairs, and tables.
            </motion.p>

            <motion.h2
              className="mt-7 font-bold text-2xl md:text-3xl"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ margin: "-50%" }}
            >
              Plant and Machinery
            </motion.h2>

            <motion.section className="mb-6">
              <motion.h2
                className="text-xl md:text-2xl font-semibold mt-2 mb-2"
                variants={fadeInUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ margin: "-50%" }}
              >
                Copra Section
              </motion.h2>
              <ul className="list-disc list-outside pl-5 space-y-2">
                {[
                  "Copra stock and segregation work area",
                  "1000 sq.ft. area capable of storing 45 tons of copra",
                  "Copra Hopper – 3 Nos, each capable of storing 10 tons of copra for drying",
                  "Copra Dryer – Hot air up to 80 degrees can be generated using an air heater. It can dry 9 tons of copra in 12 hours from market conditions to the desired level.",
                  "Copra Cutter – Cuts copra into pieces of less than 12 mm size at the speed of 1 ton per hour",
                  "Steam Boiler – IBR approved horizontal type, solid waste fired steam boiler of 300 kg/hour steam generation capacity. The generated steam is used for copra roasting in the cooker.",
                  "Screw Conveyors and Bucket Elevators to move solid raw materials, work in progress, and finished goods."
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    transition={{ duration: 0.3 + index * 0.1, ease: "easeOut" }}
                    viewport={{ margin: "-50%" }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section className="mb-6">
              <motion.h2
                className="text-xl md:text-2xl font-semibold mt-2 mb-2"
                variants={fadeInUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ margin: "-50%" }}
              >
                Oil Extraction Section
              </motion.h2>
              <ul className="list-disc list-outside pl-5 space-y-2">
                {[
                  "Capable of roasting and crushing 750 kg of copra per hour",
                  "Using a 4-stage cooker on top of the 1st expeller and 2 expellers for first and second crushing",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    transition={{ duration: 0.3 + index * 0.1, ease: "easeOut" }}
                    viewport={{ margin: "-50%" }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section>
              <motion.h2
                className="text-xl md:text-2xl font-semibold mt-2 mb-2"
                variants={fadeInUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ margin: "-50%" }}
              >
                Packing Section
              </motion.h2>
              <ul className="list-disc list-outside pl-5 space-y-2">
                {[
                  "Pouch Packing Machines i.e., Automatic Form Fill and Seal machines. 3 machines, 1 each for 1 Litre, 500 ml, and 100 ml pouch packing.",
                  "1 Double head, small bottle filling machine",
                  "1 single head big bottle filling machine",
                  "1 single head bulk tin and can filling machine",
                  "1 Strapping machine",
                  "30 Pallets of size 1200 mm x 1000 mm for stacking and moving finished goods from the packing area to the dispatch door",
                  "1 Hand-operated pallet truck",
                  "1 Compressor, 1 cooler",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    transition={{ duration: 0.3 + index * 0.1, ease: "easeOut" }}
                    viewport={{ margin: "-50%" }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Oilmill;
