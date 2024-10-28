import React from "react";
import img1 from "../assets/events/FreshersFair.jpg";
import img2 from "../assets/events/SARCTalnetShow.jpg";
import img3 from "../assets/events/SEEPBootcamp.JPG";
import img4 from "../assets/events/SangamEvent.JPG";
import img5 from "../assets/events/GoogleCareerTalks.JPG";
import img6 from "../assets/events/RedBullEcell.JPG";
import img7 from "../assets/events/CCOpenMic.JPG";
import img8 from "../assets/events/ACCAcadTour.jpg";
import img9 from "../assets/events/BHCGGuesstimate.jpg";
import img10 from "../assets/events/AlchemyOrientation.jpg";
import img11 from "../assets/events/BITSof Sucess.jpg";
import img12 from "../assets/events/EmbryoXJanus.jpg";
import img13 from "../assets/events/IEEEVerilogWebsite.jpg";
import img14 from "../assets/events/IITHFriendlies.jpg";
import img15 from "../assets/events/IndependenceDay.JPG";
import img16 from "../assets/events/OpenMicSAC.jpg";
import img17 from "../assets/events/Phoenix_ProfTalk.jpg";
import img18 from "../assets/events/PhoenixTechExpo.jpg";
import img19 from "../assets/events/SARCevent.JPG";
import img20 from "../assets/events/RAFTeacherday.JPG";

// Define sections with titles, images, and unique links
const sections = [
  { title: "Freshers Fair", link: "https://drive.google.com/drive/u/1/folders/1SccchE4G-HwfGq22F7DDSisZMVp3h6tg", image: img1 },
  { title: "SARC Talent Show", link: "https://drive.google.com/drive/u/1/folders/1BiIpSvFLkTDuN7ES8fOz5Vzf9GLuEHT7", image: img2 },
  { title: "CC Open Mic", link: "https://drive.google.com/drive/u/1/folders/1yimckFavRgIhLkmcE2iuixTUaDAdJlUv", image: img7 },
  { title: "ACC Acad Tour", link: "https://drive.google.com/drive/u/1/folders/1f0boYWrKJEJ_SVsN9DZ7tE7KDyC-blw9", image: img8 },
  { title: "Google Career Talk", link: "https://drive.google.com/drive/u/1/folders/1Jo9rhg9NBc_uOHAc59p7QrLD_X8E3TUq", image: img5 },
  { title: "Redbull E-Cell", link: "https://drive.google.com/drive/u/1/folders/1BiIpSvFLkTDuN7ES8fOz5Vzf9GLuEHT7", image: img6 },
  { title: "SEEP Bootcamp 2.0", link: "https://drive.google.com/drive/u/1/folders/1PAmHLLBgvo3Yu27P4h4SMpfVQuC3gfpa", image: img3 },
  { title: "Sangam Event", link: "https://drive.google.com/drive/u/1/folders/15YVIXe9Fc5a60ZPOG8J7o7dAH9y4tkVg", image: img4 },
  { title: "BHCG Guesstimate", link: "https://drive.google.com/drive/u/1/folders/1yDq2k_LnFPWDktkVVxla26rjHxphmLJj", image: img9 },
  { title: "Alchemy Orientation", link: "https://drive.google.com/drive/u/1/folders/1TL_1tPuX9AxskPmwF2T4kULmVuXWOkrY", image: img10 },
  { title: "BITS of Sucess", link: "https://drive.google.com/drive/u/1/folders/10EgK4RXk2XHaJtvoOS2BlL13ZRYCKjey", image: img11 },
  { title: "Embryo X SEDS Janus", link: "https://drive.google.com/drive/u/1/folders/1Qjj6Ot-USLJnm_t276UwmLM3dGZHrJrz", image: img12 },
  { title: "IEEE Verilog Workshop", link: "https://drive.google.com/drive/u/1/folders/1K147XRHmEBG2HyomtXwDrGGk3tdwOdfOs", image: img13 },
  { title: "IITH Friendlies", link: "https://drive.google.com/drive/u/1/folders/1WXtRfUWzv6RhmNJktsBPZFc5jWET-BQI", image: img14 },
  { title: "Independence Day", link: "https://drive.google.com/drive/u/1/folders/1tYnRcVm_8YAuU7LSCTjTYuUCn5AJPt8D", image: img15 },
  { title: "Open Mic SAC", link: "https://drive.google.com/drive/u/1/folders/1k636CFmCtgRKx0x-zX6MsLgJgVMP712r", image: img16 },
  { title: "Phoenix Talk with Professor", link: "https://drive.google.com/drive/u/1/folders/12kE8yRVQyiXZe8IV2dmxIfJmBpurpWoJ", image: img17 },
  { title: "Phoenix Tech Expo", link: "https://drive.google.com/drive/u/1/folders/1fl_0VkfeZEty1t3GqCb0uDXTR46y-ovd", image: img18 },
  { title: "SARC Event", link: "https://drive.google.com/drive/u/1/folders/1jA3IMoFQKSD6BR8_Wkp0zlekS3BQMkT8", image: img19 },
  { title: "RAF Teachers Day", link: "https://drive.google.com/drive/u/1/folders/1_lCDgXjCnca_yE8MiZ-o4ScG_tgNZvzf", image: img20 },
];

function NavigationPage() {
  const navigateToLink = (link) => {
    window.location.href = link; // Navigate to the specified link
  };

  return (
    <div className="atk-div pt-32">
      {/* Main Title, Subheading, and View All Button */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Events</h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore our diverse range of events covered and moments captured in each.
        </p>
        <button
  onClick={() => navigateToLink("https://drive.google.com/drive/u/1/folders/1q2QwSwEKciYv3Ev-ZAhuR3jOU6m3uqo_")}
  className="font-medium text-lg md:text-base bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-800 transition duration-200"
>
  View All
</button>
      </div>

      {/* Section images with title overlay */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {sections.map((section, index) => (
          <div
            key={index}
            onClick={() => navigateToLink(section.link)}
            className="relative w-80 h-64 overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            {/* Section image with lighter gradient overlay */}
            <img
              className="w-full h-full object-cover transform transition duration-500 ease-in-out"
              src={section.image}
              alt={`${section.title}-cover`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-20 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white tracking-wide">
                {section.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavigationPage;