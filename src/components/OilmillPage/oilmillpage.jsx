import React from "react";
import neeramoilmill from "../../assets/ContentImg/neeram oilmill.jpeg";

function Oilmill() {
  return (
    <div className="flex flex-col items-center bg-white text-black p-4">
      <div className="w-full max-w-[80rem]">
        <h1 className="bg-custom-orange text-white text-center text-2xl md:text-3xl  p-4 font-serif font-bold ">
          Oil Mill
        </h1>
        <img
          className=" h-72 md:h-[40rem] w-full "
          src={neeramoilmill}
          alt="Neeram Oilmill"
        />
        <div className="mt-10 font-sans text-xl md:text-2xl px-4 mb-10">
          <span>
            Neeram has the necessary infrastructure to mechanically manufacture,
            pack, and market roasted coconut oil with a capacity of crushing 15
            tons of copra per day in 24 hours.
          </span>
          <p className="mt-5">
            Land -  78 cents area near, Anakkal, Kerala 671541
          </p>
          <p className="mt-5">
            Building - Main building with floor area of 6,600 sq. ft. and a
            total area of 9,000 sq.ft.
          </p>
          <p className="mt-5">
            Office - 1 office room with total seating facility, including
            computers, chairs, and tables.
          </p>
          <p className="mt-7 font-bold text-2xl md:text-3xl">
            Plant and Machinery
          </p>

          <section className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold mt-2 mb-2">
              Copra Section
            </h2>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>Copra stock and segregation work area</li>
              <li>1000 sq.ft. area capable of storing 45 tons of copra</li>
              <li>
                Copra Hopper – 3 Nos, each capable of storing 10 tons of copra
                for drying
              </li>
              <li>
                Copra Dryer – Hot air up to 80 degrees can be generated using an
                air heater. It can dry 9 tons of copra in 12 hours from market
                conditions to the desired level.
              </li>
              <li>
                Copra Cutter – Cuts copra into pieces of less than 12 mm size at
                the speed of 1 ton per hour
              </li>
              <li>
                Steam Boiler – IBR approved horizontal type, solid waste fired
                steam boiler of 300 kg/hour steam generation capacity. The
                generated steam is used for copra roasting in the cooker.
              </li>
              <li>
                Screw Conveyors and Bucket Elevators to move solid raw
                materials, work in progress, and finished goods.
              </li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold mt-2 mb-2">
              Oil Extraction Section
            </h2>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>Capable of roasting and crushing 750 kg of copra per hour</li>
              <li>
                Using a 4-stage cooker on top of the 1st expeller and 2
                expellers for first and second crushing
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mt-2 mb-2">
              Packing Section
            </h2>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>
                Pouch Packing Machines i.e., Automatic Form Fill and Seal
                machines. 3 machines, 1 each for 1 Litre, 500 ml, and 100 ml
                pouch packing.
              </li>
              <li>1 Double head, small bottle filling machine</li>
              <li>1 single head big bottle filling machine</li>
              <li>1 single head bulk tin and can filling machine</li>
              <li>1 Strapping machine</li>
              <li>
                30 Pallets of size 1200 mm x 1000 mm for stacking and moving
                finished goods from the packing area to the dispatch door
              </li>
              <li>1 Hand-operated pallet truck</li>
              <li>1 Compressor, 1 cooler</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Oilmill;
