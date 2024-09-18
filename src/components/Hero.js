import React from "react";
import heading from "../assets/heading.png";
import s1p1 from "../assets/s1p1.svg";
import s1p2 from "../assets/s1p2.svg";
import tape1 from "../assets/tape1.svg";
import tape2 from "../assets/tape2.svg";

function Hero() {
  return (
    <div className="px-16 pb-12 flex sm:gap-4 sm:pt-4 flex-col items-center justify-center">
      <div className=" w-[90vw] flex justify-start">
        <img className="w-[40rem]" src={heading} alt="" />
      </div>
      <div id="slider1" className=" relative flex items-end w-[90vw]">
        <img
          src={tape1}
          className="absolute md:w-28 top-0 left-0 translate-x-[-30%] translate-y-[-30%]"
          alt=""
        />
        <img
          src={tape2}
          className="absolute md:w-28 top-0 right-0 translate-x-[30%] translate-y-[-30%]"
          alt=""
        />
        <img
          src={s1p1}
          className="z-10 absolute sm:hidden md:w-32 md:right-[8%] md:top-[10%] top-[15%] right-[11%]"
          alt=""
        />
        <img src={s1p2} className="absolute sm:hidden md:w-24 top-[5%] right-[2%]" alt="" />
        <div className=" tracking-widestid pb-12 sm:pl-6 pl-12 sm:pb-6 flex gap-2 flex-col text-white">
          <h1 className="md:text-sm">A T M O S &nbsp;&nbsp; 2 0 2 2</h1>
          <h1 className="text-6xl md:text-3xl font-semibold">Every shot tell a</h1>
          <h1 className="text-6xl md:text-3xl font-semibold">timeless story.</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
