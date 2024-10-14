import React from "react";
import img from "../assets/memories.svg";
import underline from "../assets/underline.svg";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import highlight from "../assets/Highlight_05.svg"

function Memories() {
  return (
    <div className="px-14 mt-24 flex flex-col gap-8">
      <div className=" flex justify-center items-center gap-4 flex-col">
        <h1 className="font-extrabold text-9xl tracking-widest">
          CREATING MEMORIES
        </h1>
        <h1 className="stroke text-6xl tracking-wide">
          BY TURNING ORDINARY SCENES INTO TIMELESS STORIES.
        </h1>
      </div>

      <div className="px-6 flex justify-between gap-4">
        <div className="bg-[#292524] text-white pl-6 pr-20 py-12 w-[100%} flex flex-col items-end justify-between rounded-xl">
          <div className="flex flex-col gap-6 items-start">
            <div className="flex flex-col relative justify-center items-center">
              <h1 className="text-6xl font-semibold">ABOUT</h1>
              <img src={underline} alt="" />
              <img className="absolute top-[-30%] left-0" src={highlight} alt="" />
            </div>

            <p className=" text-xl pl-8 tracking-widest">
              DoPy at <b className="font-semibold"> BITS Hyderabad </b> is a
              creative hub where photographers capture campus life and tell
              visual stories. From event coverage to skill-building workshops...{" "}
              <b className="font-semibold">
                {" "}
                We transform moments into lasting memories.
              </b>
            </p>
          </div>

          <div className="flex justify-center cursor-pointer items-center gap-4 text-3xl font-bold">
            OUR PORs <BsArrowDownRightCircleFill />
          </div>
        </div>
        <img className="shadow" src={img} alt="" />
      </div>
    </div>
  );
}

export default Memories;
