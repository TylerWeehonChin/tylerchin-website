// components/Projects.tsx
"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { useState } from 'react';
import Pokeball from './icons/Pokeball';

const projects = [
  {
    title: "Pokémon Quiz",
    description: "Interactive quiz testing Pokémon names with a scoring system.",
    details: "Built with Next.js, React and CSS",
    link: "https://tylerchin-pokemon-website.vercel.app/",
    github: "https://github.com/TylerWeehonChin/tylerchin-pokemon-website",
    technologies: ["Next.js", "React", "CSS", "JavaScript"],
    preview: "🎮 Interactive quiz interface with colorful Pokemon cards and real-time scoring",
    icon: Pokeball
  },
  {
    title: "Project #2",
    description: "...",
    details: "...",
    link: "",
    github: "https://github.com/TylerWeehonChin",
    technologies: [""],
    preview: "🌐 ...",
    icon: FaCode
  },
  {
    title: "Java Course Project",
    description: "Academic software engineering project demonstrating object-oriented programming principles.",
    details: "Complex software engineering application",
    link: "https://github.com/TylerWeehonChin/",
    github: "https://github.com/TylerWeehonChin/java-project",
    technologies: ["Java", "OOP", "Data Structures", "Algorithms"],
    preview: "☕ Command-line application with robust architecture and comprehensive testing",
    icon: FaCode
  },
];

const Projects: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section
      id="projects"
      className="section-container items-center justify-center bg-[#F6F1DE] px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-16"
    >
      {/* Title */}
      <motion.div 
        className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E3F5B] text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">Projects</h2>
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-7xl w-full">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className={`bg-[#3E3F5B] text-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 text-center cursor-pointer transition-all duration-300 ${
              expandedCard === idx ? 'transform scale-105 shadow-2xl' : 'hover:shadow-xl'
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            onClick={() => toggleCard(idx)}
          >
            <div className="flex flex-col items-center h-full">
              {/* Header Section */}
              <div className="flex items-center justify-center w-full mb-3 sm:mb-4">
                <project.icon className="text-2xl sm:text-3xl md:text-4xl text-[#ACD3A8]" />
              </div>

              {/* Project Preview Window */}
              <div className="w-full bg-gray-800 rounded-lg p-2 sm:p-3 md:p-4 mb-3 sm:mb-4 border-2 border-[#8AB2A6]">
                <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-gray-900 rounded p-2 sm:p-3 text-left">
                  <p className="text-xs sm:text-sm text-[#ACD3A8] font-mono leading-relaxed">{project.preview}</p>
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">{project.title}</h3>
              <p className="text-sm sm:text-base mb-2 sm:mb-3 font-medium px-2 sm:px-0">{project.description}</p>

              {/* Expandable Content */}
              <motion.div
                initial={false}
                animate={{ 
                  height: expandedCard === idx ? "auto" : "0",
                  opacity: expandedCard === idx ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden w-full"
              >
                <div className="pt-3 sm:pt-4 border-t border-gray-200">
                  {/* Technologies */}
                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold mb-2 text-[#ACD3A8]">Technologies</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-[#ACD3A8] text-[#3E3F5B] px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs bg-[#8AB2A6] text-white px-3 py-2 rounded-full hover:bg-[#ACD3A8] hover:text-[#3E3F5B] transition-colors w-full sm:w-auto justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt className="mr-1" /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs bg-[#8AB2A6] text-white px-3 py-2 rounded-full hover:bg-[#ACD3A8] hover:text-[#3E3F5B] transition-colors w-full sm:w-auto justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="mr-1" /> Code
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Click indicator */}
              <div className="mt-auto pt-3 sm:pt-4">
                <p className="text-xs sm:text-sm text-gray-400">
                  {expandedCard === idx ? "Click to collapse" : "Click to explore"}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
