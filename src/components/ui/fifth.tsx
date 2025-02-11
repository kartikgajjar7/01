"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Fifth() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el.querySelectorAll(".fade-in"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="mt-20 lg:mt-40">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-2 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-[42px] lg:leading-[49.22px] font-bold text-center text-gray-900 mb-20 uppercase">
            Lorem ipsum dolor sit amet
            <br />
            consectetur. Commodo leo amet.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            {[
              "/hro.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/2560px-Honda_Logo.svg.png",
              "/bjaj.png",
              "/tvs.png",
              "/enfild.png",
              "/yamaha.png",
              "/ktm.png",
              "/ather.jpeg",
              "/ola.png",
              "/revolt.png",
              "/ultra.jpeg",
              "/ktm.png",
            ].map((src, index) => (
              <motion.div key={index} className="fade-in">
                <Image
                  width={86}
                  height={97}
                  src={src}
                  alt={`Logo ${index}`}
                  className="h-12 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="min-h-screen mt-20 bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <h3 className="text-blue-600 text-lg mb-4">
              Lorem ipsum dolor sit amet
            </h3>
            <h2 className="text-4xl font-bold text-gray-900">
              LOREM IPSUM DOLOR SIT
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui.
            </p>
          </motion.div>

          <div className="grid bg-white px-28 grid-cols-1 md:grid-cols-2 place-items-center gap-8">
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                className="space-y-4 bg-white px-5 w-screen lg:h-[560px] lg:w-[445px] fade-in"
              >
                <img
                  src="https://images.unsplash.com/photo-1587223075055-82e9a937ddff?auto=format&fit=crop&w=600&h=400"
                  alt="Placeholder image"
                  className="w-full h-[250px] object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat
                  faucibus cursus nisi.
                </p>
                <a href="#" className="text-blue-600 font-medium inline-block">
                  Learn More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fifth;
