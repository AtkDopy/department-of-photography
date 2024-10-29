import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import underline from "../assets/underline.svg";
import highlight from "../assets/Highlight_05.svg";
import { BsArrowDownRightCircleFill } from "react-icons/bs";

function Memories() {
  // Hook for detecting if section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Triggers animation only once
    threshold: 0.2,    // 20% of the section must be in view to trigger
  });

  return (
    <div className="px-4 mt-8 flex flex-col gap-8" ref={ref}>
      {/* Animated text */}
      <motion.div
        className="flex justify-center items-center gap-4 flex-col"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animation when section is in view
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="font-extrabold text-6xl tracking-widest"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          CREATING MEMORIES
        </motion.h1>
        <motion.h1
          className="stroke text-4xl tracking-wide"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          BY TURNING ORDINARY SCENES INTO TIMELESS STORIES.
        </motion.h1>
      </motion.div>

      <div className="px-4 flex flex-col justify-center gap-4">
        {/* Animated "ABOUT" box */}
        <motion.div
          className="bg-[#292524] text-white pl-6 pr-4 py-8 w-full flex flex-col items-end justify-between rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4 items-start">
            <motion.div
              className="flex flex-col relative justify-center items-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl font-semibold">ABOUT</h1>
              <motion.img
                src={underline}
                alt=""
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <img className="absolute top-[-20%] left-0" src={highlight} alt="" />
            </motion.div>

            <motion.p
              className="text-lg pl-4 tracking-widest"
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              DoPy at <b className="font-semibold"> BITS Hyderabad </b> is a
              creative hub where photographers capture campus life and tell
              visual stories. From event coverage to skill-building workshops...{" "}
              <b className="font-semibold">
                {" "}
                We transform moments into lasting memories.
              </b>
            </motion.p>
          </div>

          
        </motion.div>
      </div>
    </div>
  );
}

export default Memories;
