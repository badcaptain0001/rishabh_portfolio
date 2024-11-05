"use client";

import { motion } from "framer-motion";
import { createSwapy } from "swapy";
import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import Time from "./Time";
import Availability from "./Availability";
import About from "./About";
import Exp from "./Exp";
import Social from "./Social";
import Projects from "./Projects";
import ImgShow from "./ImgShow";
import ExpCount from "./ExpCount";
import Blogs from "./Blogs";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Image from "next/image";
import Line from "./Line";
import Resume from "./Resume";
import { Stats } from "./Stats";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = (col: number, row: number) => ({
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.9
  },
  show: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
      delay: (col + row) * 0.1
    }
  }
});

const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches;

function Main() {
  useEffect(() => {
    if (isDesktop()) {
      const container = document.querySelector(".swapy-container")!;
      const swapy = createSwapy(container, {
        swapMode: "hover",
        autoScrollOnDrag: true,
      });

      swapy.onSwapStart(() => {
        console.log("Swap started");
      });

      swapy.onSwap(({ data }) => {
        const fromItem = data.array[0];
        const toItem = data.array[1];
        const fromGroup = fromItem.itemId?.split("-")[0];
        const toGroup = toItem.itemId?.split("-")[0];
        if (fromGroup !== toGroup) {
          console.log("Swap prevented due to group mismatch");
          return;
        }
        localStorage.setItem("slotItem", JSON.stringify(data.object));
      });

      swapy.onSwapEnd(({ hasChanged }) => {
        console.log("Swap ended. Has changed:", hasChanged);
      });

      return () => {
        swapy.destroy();
      };
    }
  }, []);

  return (
    <>
      <AnimatedCursor />
      <div className="max-w-6xl mx-auto swapy-container px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="hidden lg:block absolute top-24 left-20 mt-5 mr-5">
          <div className="transform -rotate-90">
            <Image
              src="/arrow.svg"
              alt="Arrow"
              height={50}
              width={50}
              className="text-white dark:invert dark:brightness-50 transition-all"
            />
          </div>
        </div>
        <div className="hidden lg:block absolute top-32 left-10 mt-10 ml-5">
          <p className="text-black dark:text-white text-[10px] font-playwrite">
            Try Dragging
          </p>
        </div>
        <motion.div 
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[22px] mt-5"
        >
          {/* Mobile-first layout */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[22px] order-1 lg:order-1">
            <motion.div variants={itemVariants(0, 0)} data-swapy-slot="slot6" data-swapy-group="large">
              <div data-swapy-item="large-About">
                <About />
              </div>
            </motion.div>
            <motion.div variants={itemVariants(0, 1)} className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-[22px]">
              <div data-swapy-slot="slot1" data-swapy-group="small">
                <div data-swapy-item="small-Time">
                  <Time />
                </div>
              </div>
              <div data-swapy-slot="slot2" data-swapy-group="small">
                <div data-swapy-item="small-Availability">
                  <Availability />
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants(0, 2)} data-swapy-slot="slot9" data-swapy-group="large">
              <div data-swapy-item="large-Exp">
                <Exp />
              </div>
            </motion.div>
          </div>

          {/* Second column (becomes third on larger screens) */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[22px] order-3 lg:order-2">
            <motion.div variants={itemVariants(1, 0)} data-swapy-slot="slot3" data-swapy-group="large">
              <div data-swapy-item="large-Projects">
                <Projects />
              </div>
            </motion.div>
            <motion.div variants={itemVariants(1, 1)} data-swapy-slot="slot7" data-swapy-group="large">
              <div data-swapy-item="large-Social">
                <Social />
              </div>
            </motion.div>
            <motion.div variants={itemVariants(1, 2)} className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-[22px]">
              <div data-swapy-slot="slot11" data-swapy-group="small">
                <div data-swapy-item="small-ExpCount">
                  <ExpCount />
                </div>
              </div>
              <div data-swapy-slot="slot12" data-swapy-group="small">
                <div data-swapy-item="small-Availability3">
                  <Resume />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Third column (becomes second on larger screens) */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[22px] order-2 lg:order-3">
            <motion.div variants={itemVariants(2, 0)} data-swapy-slot="slot8" data-swapy-group="large">
              <div data-swapy-item="large-ImgShow">
                <ImgShow />
              </div>
            </motion.div>
            <motion.div variants={itemVariants(2, 1)} data-swapy-slot="slot10" data-swapy-group="large">
              <div data-swapy-item="large-Blogs">
                <Blogs />
              </div>
            </motion.div>
            <motion.div variants={itemVariants(2, 2)} className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-[22px]">
              <div data-swapy-slot="slot4" data-swapy-group="small">
                <div data-swapy-item="small-Time2">
                  <Stats />
                </div>
              </div>
              <div data-swapy-slot="slot5" data-swapy-group="small">
                <div data-swapy-item="small-Availability2">
                  <Line />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
}

export default Main;