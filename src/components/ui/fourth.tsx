"use client";
import React, { useRef, useEffect } from "react";
import { Bike } from "lucide-react";
import gsap from "gsap";
import { motion } from "framer-motion";

function Fourth() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a GSAP timeline to sequence the animations.
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Animate the background image fading in
    tl.from(".hero-bg", { opacity: 0, duration: 1.5 })
      // Then animate the logo dropping in from above
      .from(
        ".hero-logo",
        { y: -50, opacity: 0 },
        "-=0.8" // overlap the animations slightly
      )
      // Finally, animate the hero text coming up from below
      .from(".hero-text", { y: 50, opacity: 0 }, "-=0.6");
  }, []);

  // Framer Motion variants for the overall container.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="bg-white mt-16 px-2 lg:mt-40 h-[652px]"
      ref={containerRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <div className="relative h-full">
        {/* Background Image */}
        <div className="absolute inset-0 hero-bg">
          <img
            src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=2000"
            alt="Motorcycles in rain"
            className="w-full h-full object-cover brightness-50"
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          {/* Logo */}
          <div className="pt-8 hero-logo">
            <div className="bg-white text-black px-6 py-2 inline-block">
              <Bike className="w-6 h-6" />
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex items-center justify-center h-full -mt-20">
            <div className="max-w-4xl text-white text-center hero-text">
              <h1 className="text-xl text-center lg:text-[42px] font-bold leading-tight uppercase">
                Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus
                egestas aliquam viverra mi.
              </h1>
              <div className="mt-8 space-y-6 text-lg">
                <p className="text-gray-200 text-center font-extrabold text-[18px]">
                  Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
                  volutpat vestibulum nisi at ac risus amet. Mi accumsan
                  sagittis justo pellentesque id sed. Id tellus id luctus id. At
                  quis nunc libero urna arcu vulputate sed ut. Nisl porta massa
                  diam condimentum nulla quam.
                </p>
                <p className="text-gray-200 font-extrabold text-[18px]">
                  Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
                  condimentum ultrices non. Ornare semper in tincidunt
                  pellentesque cras mauris in vitae. At viverra quis eu
                  malesuada vel et porttitor. Nulla luctus quam lacus lacus non
                  at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla
                  ligula. Tincidunt cursus vitae leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brands Section */}
    </motion.div>
  );
}

export default Fourth;
