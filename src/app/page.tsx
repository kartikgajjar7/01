"use client";
import First from "@/components/ui/first";
import Third from "@/components/ui/third";
import Fourth from "@/components/ui/fourth";
import Fifth from "@/components/ui/fifth";
import Second from "@/components/ui/second";
import Seventh from "@/components/ui/seventh";
import Carousel from "@/components/ui/dots";
import Sixth from "@/components/ui/sixth";
import QuoteForm from "@/components/form";
import FAQ from "@/components/ui/faq";
import Smartphone from "@/components/ui/Smartphone";
import { Footer } from "@/components/ui/footer";
import SecondHeroSection from "@/components/ui/herp";
import Dotcrousel from "@/components/ui/dotcrousel";
import GallerySection from "@/components/ui/complex";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import Middle from "@/components/ui/middle";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSkeleton from "@/components/ui/load";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup function to clear timeout if component unmounts
  }, []);
  return (
    <div className="min-h-screen overflow-hidden bg-transparent">
      {loading ? (
        <div className="flex justify-center items-center h-screen text-2xl font-bold">
          <LoadingSkeleton />
        </div>
      ) : (
        <MainContent />
      )}
    </div>
  );
}

const MainContent = () => (
  <>
    <First />
    <Second />
    <Third />
    <Fourth />
    <Fifth />
    <Sixth />
    <QuoteForm />
    <Smartphone />
    <GallerySection />
    <Middle />
    <TestimonialCarousel />
    <Seventh />
    <Dotcrousel />
    <FAQ />
    <SecondHeroSection />
    <Footer />
  </>
);
