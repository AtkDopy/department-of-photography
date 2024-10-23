import React from "react";
// Importing images individually
import img1 from "../assets/photo_gallery/1.jpg";
import img2 from "../assets/photo_gallery/2.JPG";
import img3 from "../assets/photo_gallery/3.jpg";
import img4 from "../assets/photo_gallery/4.jpg";
import img5 from "../assets/photo_gallery/5.jpg";
import img6 from "../assets/photo_gallery/6.JPG";
import img7 from "../assets/photo_gallery/7.JPG";
import img8 from "../assets/photo_gallery/8.jpg";
import img9 from "../assets/photo_gallery/9.jpg";
import img10 from "../assets/photo_gallery/10.JPG";
import img11 from "../assets/photo_gallery/11.jpg";
import img12 from "../assets/photo_gallery/12.jpg";
import img13 from "../assets/photo_gallery/13.jpg";
import img14 from "../assets/photo_gallery/14.jpg";
import img15 from "../assets/photo_gallery/15.jpg";
import img16 from "../assets/photo_gallery/16.jpg";
import img17 from "../assets/photo_gallery/17.jpg";
import img18 from "../assets/photo_gallery/18.jpg";
import img19 from "../assets/photo_gallery/19.jpg";
import img20 from "../assets/photo_gallery/20.jpg";

// Adding them to an array for easier use
const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20
];




function PhotoGallery() {
  return (
    <div className="atk-div pt-32">
      {images.map((e => (
        <img className="mb-4" src={e} alt="" />
      )))}
    </div>
  );
}

export default PhotoGallery;
