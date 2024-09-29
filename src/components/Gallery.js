import React from "react";
import gallerybg from "../assets/gallery/gallerybg.svg";
import img1 from "../assets/gallery/img1.svg";
import img2 from "../assets/gallery/img2.svg";
import img3 from "../assets/gallery/img3.svg";
import img4 from "../assets/gallery/img4.svg";
import too from "../assets/gallery/02.svg";

function Gallery() {
  return (
    <div className="relative w-[100vw] mt-40 h-[90vh]  px-14 pr-16">
      <img className="absolute bottom-0 left-0" src={gallerybg} alt="" />
      <div className="relative">
        <span className="flex flex-col gap-6">
          <h1 className=" font-medium lg:text-3xl text-5xl">A COLLECTION OF THE</h1>
          <h1 className=" font-medium lg:text-3xl text-5xl">STORIES WE'VE TOLD, ONE</h1>
          <h1 className=" font-medium lg:text-3xl text-5xl">CLICK AT A TIME.</h1>
          <p>
            <h1 className=" font-medium tracking-widest text-[#292524] text-xl">
              Every Shot We Take Tells a Story
            </h1>
            <h1 className=" font-medium tracking-widest text-[#292524] text-xl">
              {" "}
              Worth Sharing.
            </h1>
          </p>
          <button className="font-bold text-xl lg:text-sm border-black border-2 py-2 px-4 rounded-sm lg:w-60 w-96">
            View our entire collection
          </button>
        </span>

        <img className=" absolute lg:w-24 top-0 lg:right-[12rem] right-[18rem]" src={too} alt="" />
        <img className="absolute w-64 lg:w-40 top-[7rem] lg:top-[6rem] lg:right-[11rem] right-[17rem]" src={img1} alt="" />
        <img className="shadow absolute w-64 lg:w-40 top-[2rem] right-0" src={img2} alt="" />
        <img className="absolute top-[21rem] lg:top-[15rem] w-56 lg:w-40 lg:right-[18rem] right-[29rem]" src={img3} alt="" /> 
        <img className="shadow absolute top-[21rem] w-80 lg:w-56 lg:top-[15rem] lg:right-[3rem] right-[7rem]" src={img4} alt="" />
      </div>
    </div>
  );
}

export default Gallery;
