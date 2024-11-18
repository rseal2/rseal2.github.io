import React from "react";
import Image from "next/image";
import {TypeAnimation} from 'react-type-animation'

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello, I'm
            <span className="text-transparent bg-clip-text bg-[#235347]"> Raimee</span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I'm an aspiring software engineer
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black w-full sm:w-fit">Hire Me</button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3 w-full sm:w-fit">Download</button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-lg bg-[#181818] w-[350px] h-[250px] relative lg:w-[400px] lg:h-[300px]">
            <Image
              src="/images/headshot.png"
              alt="headshot"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={350}
              height={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
