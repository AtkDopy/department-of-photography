import React from "react";
import gallerybg from "../assets/gallerybg.svg";

function Gallery() {
  return (
    <div className="relative h-[100vh] px-12">
      <img className="absolute bottom-0 left-0" src={gallerybg} alt="" />
      <span>
        <h1 className=" font-medium text-5xl">A COLLECTION OF THE <br  className="mt-24"/> STORIES WE'VE TOLD, ONE <br /> CLICK AT A TIME.</h1>
      </span>
    </div>
  );
}

export default Gallery;
