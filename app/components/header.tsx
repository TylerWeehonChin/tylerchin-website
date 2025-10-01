// header.tsx
import { FaLinkedin, FaGithub } from 'react-icons/fa';
//import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between px-6 bg-[#3E3F5B] shadow-md">
    <nav className="flex space-x-6 text-[#8AB2A6]">
        <a href="#about" className="hover:text-[#ACD3A8] transition-colors">About Me</a>
          <a href="#projects" className="hover:text-[#ACD3A8] transition-colors">Projects</a>
          <a href="https://www.linkedin.com/in/tyler-chin-5b86a7258/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-[#ACD3A8]" />
          </a>
          <a href="https://github.com/TylerWeehonChin" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-[#ACD3A8]" />
          </a>
    </nav>
    </header>
  );
};

export default Header;
