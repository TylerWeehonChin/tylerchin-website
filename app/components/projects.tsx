// components/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Pokémon Quiz",
    description: "A Pokémon Quiz built with Next.js, React and CSS.",
    link: "https://tylerchin-pokemon-website.vercel.app/",
  },
  {
    title: "Project #2",
    description: "",
    link: "https://github.com/TylerWeehonChin/",
  },
  {
    title: "Project #3",
    description: "",
    link: "https://github.com/TylerWeehonChin/",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="snap-start h-screen flex flex-col items-center justify-center bg-[#8AB2A6] px-6 py-12"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-semibold mb-12 text-[#3E3F5B]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F6F1DE] text-[#3E3F5B] rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm flex-grow">{project.description}</p>
            <div className="flex items-center mt-4 text-[#3E3F5B] hover:text-[#ACD3A8]">
              <FaGithub className="mr-2" /> View here
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
