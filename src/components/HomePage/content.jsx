import React from "react";
import Neeram from "../../assets/ContentImg/NeeramPic.png";
import coconut from "../../assets/ContentImg/Coconut.png";
import NeeramAdd from "../../assets/Carousel/Neeram.jpg";
import img1 from "../../assets/ContentImg/image (1).png";
import img2 from "../../assets/ContentImg/image (2).png";
import img3 from "../../assets/ContentImg/image (4).png";
import img4 from "../../assets/ContentImg/image (5).png";
import img5 from "../../assets/ContentImg/image (6).png";
import img6 from "../../assets/ContentImg/image (7).png";
import Carousel from "./carousel";
function Content() {
  return (
    <div className="flex flex-col items-center bg-white text-black p-4">
      <div className="w-full max-w-[80rem]">
        <Carousel className="h-72 md:h-[40rem]  bg-custom-orange" />

        <h1 className="bg-custom-orange text-white text-center text-2xl md:text-3xl p-3 mt-5 md:mt-10 font-serif font-bold w-full">
          Our Products
        </h1>

        <div className="flex flex-wrap justify-center mt-14 gap-8 ">
      <div className="overflow-x-auto w-full justify-center">
        <div className="flex gap-6 justify-start md:justify-center items-center">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex-shrink-0 w-60">
              {/* <!-- Card --> */}
              <div className="block  bg-white shadow-md dark:bg-neutral-700 text-left overflow-hidden">
                {/* <!-- Card image with zoom effect --> */}
                <a href="#!" className="group">
                  <img
                    className=" transform transition duration-500 ease-in-out group-hover:scale-110  object-cover"
                    src={Neeram}
                    alt=""
                  />
                </a>

                {/* <!-- Card body --> */}
                <div className="p-4">
                  {/* <!-- Title --> */}
                  <h5 className="mb-2 text-base font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
                    Neeram Coconut Oil
                  </h5>
                </div>
              </div>
              {/* <!-- Card --> */}
            </div>
          ))}
        </div>
      </div>
    </div>

        <h1 className="bg-custom-orange text-white text-center text-2xl md:text-3xl p-3 mt-8 md:mt-10 font-serif font-bold w-full">
          High Grade Coconut Oil
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center  gap-8">
          <img className="w-80" src={coconut} alt="" />
          <h1 className="text-2xl md:text-4xl mt-0 md:mt-16 font-serif text-balance p-4">
            High Grade/Roasted coconut oil is unique and offered only by Neeram
            in the entire coastal Karnataka market. Copra is fully dried and
            roasted before oil extraction. It brings out the great aroma and
            sweet taste of copra. Use of high grade copra, removing moisture and
            sterilisation increases the shelf life of coconut oil. Oil is golden
            yellow in colour and is highly recommended for cooking.
          </h1>
        </div>

        <h1 className="bg-custom-orange text-white text-center text-2xl md:text-3xl p-3 mt-14 font-serif font-bold w-full">
          Why Neeram
        </h1>

        <div className="flex flex-wrap justify-center text-center gap-10 mt-10">
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
          ].map(({ img, title, text }, index) => (
            <div key={index} className="flex flex-col items-center">
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
            </div>
          ))}
        </div>

        <h1 className="bg-custom-orange text-white text-center text-2xl md:text-3xl p-3 mt-14 font-serif font-bold w-full">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row mt-14 justify-center items-center gap-10">
          <div className="text-center">
            <h1 className="text-xl">
              <span className="font-bold">
                Neeram Coconut Industries Private Limited
              </span>{" "}
              <br /> Anakkallu Rd, Anakkallu, Kerala 671541 <br /> F6RR+CHV
              Anakkallu, Kerala
            </h1>
            <h1 className="text-xl mt-5 text-orange-800">
              <span className="font-bold text-black">Phone : </span>+91 97478
              44455
            </h1>
            <h1 className="text-xl mt-5 text-orange-800">
              <span className="font-bold text-black">Email :</span>{" "}
              <a
                href="mailto:sharathksasikumar@gmail.com"
                className="text-orange-800"
              >
                sharathksasikumar@gmail.com
              </a>
            </h1>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d517.964392354445!2d75.24086347011638!3d12.49076872804433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba48fe133e37d5b%3A0xfafdaf5802fa6fbf!2sNeeram%20coconut%20oil!5e0!3m2!1sen!2sin!4v1722616548117!5m2!1sen!2sin"
              className="w-full md:w-[30rem] h-[20rem] mt-5"
              aria-hidden="false"
              tabIndex="0"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
