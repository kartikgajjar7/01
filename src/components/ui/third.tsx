"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CircleDollarSign } from "lucide-react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Third() {
  const mainTitleRef = useRef(null);
  const featuresRef = useRef(null);
  const imageRef = useRef(null);
  const gradientRef = useRef(null);

  useGSAP(() => {
    // Animate main title
    gsap.from(mainTitleRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: mainTitleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate features
    gsap.from(".feature-item", {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 70%",
      },
    });

    // Animate image
    gsap.from(imageRef.current, {
      opacity: 0,
      x: 100,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 75%",
      },
    });

    // Animate gradient bar
    gsap.from(gradientRef.current, {
      scaleX: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: gradientRef.current,
        start: "top 90%",
      },
    });
  });

  return (
    <div className="min-h-screen mt-6 relative px-5 lg:ml-10 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-[#2563EB] text-xl font-medium mb-4"
              >
                Lorem ipsum dolor sit amet
              </motion.p>

              <h1
                ref={mainTitleRef}
                className="text-[42px] font-bold tracking-tight text-gray-900 leading-[1.15] uppercase"
              >
                LOREM IPSUM DOLOR SIT
                <br />
                AMET CONSECTETUR. EU ELIT.
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="mt-6 text-lg leading-relaxed text-gray-600"
              >
                Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
                leo eleifend condimentum in vitae faucibus. Amet massa malesuada
                sit pretium. Donec pharetra erat lacus suspendisse ornare.
              </motion.p>
            </div>

            {/* Feature List */}
            <div ref={featuresRef} className="space-y-10">
              {[1, 2, 3].map((item) => (
                <div key={item} className="feature-item space-y-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <CircleDollarSign className="w-8 h-8 text-red-500" />
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-xl font-semibold text-gray-900"
                    >
                      Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                      egestas.
                    </motion.h3>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-gray-600 leading-relaxed pl-12"
                  >
                    Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu
                    eu non viverra. Risus quam mattis senectus vitae interdum
                    odio ornare gravida vestibulum. Donec turpis nulla felis
                    mauris eu donec. Ipsum sit ut tortor.
                  </motion.p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div ref={imageRef} className="relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&h=1400"
              alt="Business professionals having a discussion"
              className="w-full lg:h-[700px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <motion.div
        ref={gradientRef}
        className="absolute right-0 w-[90%] h-[20px] bg-gradient-to-r from-[#3B5EE0] via-[#4CAF50] to-[#673AB7]"
        style={{ originX: 0 }}
      />
    </div>
  );
}

export default Third;
