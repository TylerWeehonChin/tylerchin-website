// components/About.tsx
"use client";

import { motion } from 'framer-motion';

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="snap-start h-screen bg-[#ACD3A8] px-8 py-16 flex flex-col"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#3E3F5B]">About Me</h2>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-16 flex-grow justify-center">
        {/* Education (left) */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-start"
        >
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold mb-2">Education</h3>
            <p className="text-lg">
              4th year Computer Science student at Carleton University, specializing in software engineering.
            </p>
          </div>
        </motion.div>

        {/* Skills (right) */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-end"
        >
          <div className="w-full md:w-1/2 text-right">
            <h3 className="text-2xl font-semibold mb-2">Skills</h3>
            <p className="text-lg">
            I have strong proficiency in object-oriented programming using Java, Python, C, and C#. I have practical experience in test automation and QA using tools like Selenium, along with a solid understanding of API integration and back-end services like MongoDB. I’m also skilled in using tools like GitHub, Asana, and Discord to collaborate in agile teams and deliver scalable, high-quality software.
            </p>
          </div>
        </motion.div>

        {/* Hobbies (left) */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-start"
        >
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold mb-2">Hobbies</h3>
            <p className="text-lg">
              Outside of tech, I’m passionate about sports—both playing and watching hockey, basketball, soccer, and volleyball. I love exploring stories through movies, shows, anime, books, and manga, and I’m always up for gaming with friends. I'm also a big foodie with a soft spot for bubble tea, ramen, tacos, and poutine.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
