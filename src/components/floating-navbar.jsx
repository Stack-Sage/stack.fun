"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Start with it visible
  let scrollTimeout = null;

  useEffect(() => {
    // Function to hide the navbar after 2 seconds of no scrolling
    const handleScroll = () => {
      setVisible(true); // Show the navbar immediately when scrolling
      clearTimeout(scrollTimeout); // Clear the previous timeout

      // Set a new timeout to hide the navbar after 2 seconds of inactivity
      scrollTimeout = setTimeout(() => {
        setVisible(false);
      }, 3000); // 2 seconds delay
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout); // Clear the timeout if the component unmounts
    };
  }, []); // Empty dependency array means this effect runs only once

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          className={`flex w-fit fixed top-8 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-lg z-[5000] pr-2 pl-8 py-2 items-center  justify-center space-x-4 ${className}`}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={idx}
              to={navItem.link}
              className="relative px-2 lg:px-6 dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
