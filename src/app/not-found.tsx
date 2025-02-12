"use client";

import { Button } from "@/components/ui/button";
import { HomeIcon, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function GlobalError() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center space-y-8">
          {/* Animated 404 Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-[150px] font-bold text-primary/10 leading-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-2xl font-bold text-primary">
                Page Not Found
              </h2>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground">
              Oops! The page you're looking for seems to have wandered off into
              the digital wilderness.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                variant="default"
                onClick={() => router.back()}
                className="space-x-2"
              >
                <MoveLeft className="h-4 w-4" />
                <span>Go Back</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/")}
                className="space-x-2"
              >
                <HomeIcon className="h-4 w-4" />
                <span>Home Page</span>
              </Button>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute inset-0 -z-10 flex items-center justify-center"
          >
            <div className="w-[500px] h-[500px] rounded-full bg-primary blur-3xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
