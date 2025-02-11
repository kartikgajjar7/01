"use client";
import { Button } from "@/components/ui/button";
import NavigationMenuDemo from "@/components/ui/navlinks";
import { Bike, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import EmailForm from "./Email";

export default function First() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the hero section
    const ctx = gsap.context(() => {
      // Animate the hero content (using the .hero-content class)
      gsap.from(".hero-content", {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Animate the image section (using the imageRef)
      gsap.from(imageRef.current, {
        duration: 1.5,
        x: 100,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Framer Motion variants
  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="lg:min-h-screen bg-transparent" ref={heroRef}>
      {/* Navigation Bar */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="flex sticky bg-transparent z-50 items-center justify-between px-6 py-4 max-w-7xl mx-auto"
      >
        <div className="bg-gray-200 px-8 py-3">
          <span className="text-black font-bold text-lg tracking-wide">
            LOGO
          </span>
        </div>
        <div className="hidden md:block">
          <NavigationMenuDemo />
        </div>

        {/* Sign In Button */}
        <motion.div
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <Button
            variant="outline"
            className="bg-white text-[#222222] border-[#1959AC] hover:bg-[#1959AC] hover:text-white transition-colors"
          >
            Sign In
          </Button>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative h-fit lg:h-[calc(100vh-80px)] overflow-hidden">
        <div className="absolute top-0 right-0 w-[55%] lg:h-full">
          {/* Diagonal mask for the image */}
          <div
            className="absolute inset-0 bg-white"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 100%, 20% 0)",
            }}
          />
          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80"
            alt="Motorcycle riders"
            className="w-full h-full object-cover hidden lg:block"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 100%, 20% 0)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl pt-10 px-10 lg:pl-[66px] lg:pt-28">
          <div className="max-w-xl hero-content">
            <h1 className="text-[#222222] text-2xl lg:text-6xl font-bold leading-tight mb-6">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-[#222222]/80 text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur. Enim netus cras congue
              quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi
              platea morbi libero imperdiet neque. Justo suspendisse tristique
              posuere quis eget viverra. Nunc euismod ultrices etiam nulla
              habitasse.
            </p>

            <div className="flex flex-col gap-4">
              <EmailForm />

              <div className="flex items-center gap-2 text-[#222222]">
                <CheckCircle className="text-[#1959AC]" size={20} />
                <span>No credit card required!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
