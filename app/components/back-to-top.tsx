// components/BackToTop.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before accessing window
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show button when page is scrolled down
  useEffect(() => {
    if (!isMounted) return;

    const toggleVisibility = () => {
      if (typeof window !== 'undefined' && window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [isMounted]);

  // Scroll to top smoothly
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  // Don't render on server
  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 right-6 z-50 bg-[#3E3F5B] text-[#ACD3A8] p-3 rounded-full shadow-lg hover:bg-[#2A2B3D] hover:text-[#8AB2A6] transition-all duration-300 hover:scale-110"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <FaArrowUp className="text-lg sm:text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;