// components/Footer.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Let's Connect!");
    const body = encodeURIComponent("Hi Tyler,\n\nI came across your portfolio and would love to connect!\n\nBest regards,");
    window.open(`mailto:twhc99@gmail.com?subject=${subject}&body=${body}`);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tyler-chin-89937b271/',
      icon: FaLinkedin,
      color: 'hover:text-blue-500',
      hoverBg: 'hover:bg-blue-50'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/TylerWeehonChin',
      icon: FaGithub,
      color: 'hover:text-gray-700',
      hoverBg: 'hover:bg-gray-50'
    },
    {
      name: 'Email',
      url: 'mailto:twhc99@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-red-500',
      hoverBg: 'hover:bg-red-50'
    }
  ];

  return (
    <footer
      id="contact"
      className="bg-[#F6F1DE] text-[#3E3F5B] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto text-center">
        {/* Title Section */}
        <motion.div
          className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-[#3E3F5B]">Get In Touch</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#3E3F5B] opacity-80 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-2 sm:px-0">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          {/* Email Draft Button */}
          <motion.button
            onClick={handleEmailClick}
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#ACD3A8] text-[#3E3F5B] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 transition-all duration-300 hover:bg-[#8AB2A6] hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPaperPlane className="text-base sm:text-lg md:text-xl" />
            <span className="whitespace-nowrap">Send me an email</span>
          </motion.button>

          {/* Social Links */}
          <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full bg-white text-[#3E3F5B] transition-all duration-300 ${link.color} ${link.hoverBg} hover:scale-110 shadow-lg hover:shadow-xl`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                viewport={{ amount: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Visit my ${link.name}`}
              >
                <link.icon className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;