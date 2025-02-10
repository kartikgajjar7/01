import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NavigationMenuDemo from "@/components/ui/navlinks";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Third from "@/components/ui/third";
import Fourth from "@/components/ui/fourth";
import Fifth from "@/components/ui/fifth";
import Second from "@/components/ui/second";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Bike } from "lucide-react";
import { CheckCircle } from "lucide-react";
export default function Home() {
  return (
    <div className="min-h-screen bg-transparent">
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
        </div>
        <Button
          variant="outline"
          className="bg-white text-[#222222] border-[#1959AC] hover:bg-[#1959AC] hover:text-white transition-colors"
        >
          Sign In
        </Button>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[calc(100vh-80px)] overflow-hidden">
        <div className="absolute top-0 right-0 w-[55%] h-full">
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
            className="w-full h-full object-cover"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 100%, 20% 0)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl pl-[66px]  pt-28">
          <div className="max-w-xl">
            <h1 className="text-[#222222] text-6xl font-bold leading-tight mb-6">
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
              <div className="flex gap-4">
                <Input
                  placeholder="Enter your email"
                  className="flex-1 border-[#1959AC] focus-visible:ring-[#1959AC]"
                />
                <Button className="bg-[#1959AC] hover:bg-[#0546D2] text-white px-8">
                  Submit
                </Button>
              </div>

              <div className="flex items-center gap-2 text-[#222222]">
                <CheckCircle className="text-[#1959AC]" size={20} />
                <span>No credit card required!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Second />
      <Third />
      <Fourth />
      <Fifth />
    </div>
  );
}
