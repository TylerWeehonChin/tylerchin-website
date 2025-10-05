// header.tsx
import { FaLinkedin, FaGithub } from 'react-icons/fa';
//import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full h-12 sm:h-14 md:h-16 flex items-center justify-between px-4 sm:px-6 bg-[#3E3F5B] shadow-md">
      <nav className="flex space-x-4 sm:space-x-6">
        <a href="#about" className="nav-link text-sm sm:text-base">About Me</a>
        <a href="#projects" className="nav-link text-sm sm:text-base">Projects</a>
        <a href="#contact" className="nav-link text-sm sm:text-base">Contact</a>
        <a href="https://www.linkedin.com/in/tyler-chin-5b86a7258/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl sm:text-2xl nav-link" />
        </a>
        <a href="https://github.com/TylerWeehonChin" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl sm:text-2xl nav-link" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
