"use client";

import { motion } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const [indicatorOffset, setIndicatorOffset] = useState("16px");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < 100);
    };

    const adjustIndicatorPosition = () => {
      const buttonsContainer = document.querySelector(".button-container");
      if (buttonsContainer) {
        const rect = buttonsContainer.getBoundingClientRect();
        const offset = window.innerHeight - rect.bottom;
        setIndicatorOffset(`${Math.max(offset, 16)}px`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", adjustIndicatorPosition);

    adjustIndicatorPosition();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", adjustIndicatorPosition);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 flex justify-center items-center w-full pointer-events-none"
      style={{ marginBottom: indicatorOffset }}
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="flex flex-col items-center text-center"
      >
        <span className="text-sm text-muted-foreground mb-2">
          Role para explorar
        </span>
        <AiOutlineDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </div>
  );
}
