"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NavigationMenuDemo from "@/components/ui/navlinks";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Bike, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import EmailForm from "./Email";
export default function First() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the hero section
    const ctx = gsap.context(() => {
      // Animate the hero content
      gsap.from(".hero-content", {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Animate the image section
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
    <div className="lg:min-h-screen bg-transparent">
      {/* Navigation Bar */}
      <nav className="flex sticky bg-transparent z-50 items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Bike size={32} className="text-[#1959AC]" />
          <span className="font-bold text-2xl text-[#222222]">LOGO</span>
        </div>
        <div className="hidden md:block">
          <NavigationMenuDemo />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <NavigationMenuDemo isMobile={true} />
            </SheetContent>
          </Sheet>
        </div>

        <Button
          variant="outline"
          className="bg-white text-[#222222] border-[#1959AC] hover:bg-[#1959AC] hover:text-white transition-colors"
        >
          Sign In
        </Button>
      </nav>

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
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80"
            alt="Motorcycle riders"
            className="w-full h-full object-cover hidden lg:block "
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 100%, 20% 0)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl pt-10 px-10 lg:pl-[66px] lg:pt-28">
          <div className="max-w-xl">
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
