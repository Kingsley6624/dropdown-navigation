import React from "react";
import heroDesktop from "../assets/images/image-hero-desktop.png";
import heroMobile from "../assets/images/image-hero-mobile.png";
import audiophile from "../assets/icons/client-audiophile.svg";
import databiz from "../assets/icons/client-databiz.svg";
import maker from "../assets/icons/client-maker.svg";
import meet from "../assets/icons/client-meet.svg";


const HomePage = () => {

  return (
    <section className="">
      <div className="flex flex-col md:flex-row-reverse md:justify-between gap-12 px-[5.55%] md:py- py-6">
        <div className="flex-1 flex justify-center">
          <picture>
            <source media="(min-width:768px)" srcSet={heroDesktop} />
            <img
              className="h-full max-w-[300px] w-full"
              src={heroMobile}
              alt=""
            />
          </picture>
        </div>
        <div className="flex-1 flex flex-col justify-between items-center md:items-start gap-8">
          <h1 className="font-bold text-4xl md:text-6xl">Make remote work</h1>
          <p className="text-gray-600 text-base md:text-lg">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="w-fit bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Learn more
          </button>
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <img src={databiz} alt="Databiz logo" className="h-4 md:h-8" />
            <img
              src={audiophile}
              alt="Audiophile logo"
              className="h-4 md:h-8"
            />
            <img src={meet} alt="Meet logo" className="h-4 md:h-8" />
            <img src={maker} alt="Maker logo" className="h-4 md:h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
