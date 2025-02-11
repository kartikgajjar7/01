"use client";

import EmblaCarousel from "./EmblaCarousel";
import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { Cloud, Castle, Clock, Stars } from "lucide-react";
import Image from "next/image";

/* ================================
   Custom hook & button components
   ================================ */

export default function TestimonialCarousel() {
  return (
    <div className="bg-[#3B52F6] px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-start justify-between">
          <div className="max-w-2xl">
            <h2 className="mb-2 text-lg font-medium text-white">
              Join other Sun harvesters
            </h2>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              LOREM IPSUM DOLOR SIT AMET
            </h1>
            <p className="text-lg text-white/90">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <button
            className="hidden rounded-full px-8 md:inline-flex bg-white text-[#3B52F6]"
            type="button"
          >
            Lorem Ipsum
          </button>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <EmblaCarousel />
          </div>
        </div>

        {/* Navigation buttons to scroll the carousel */}
      </div>
    </div>
  );
}
