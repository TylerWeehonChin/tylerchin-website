// components/About.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaGamepad, FaCalendarAlt, FaTrophy, FaHeart, FaHockeyPuck, FaBasketballBall, FaGamepad as FaGaming, FaTv, FaUtensils, FaPlane, FaMusic } from 'react-icons/fa';
import { useState } from 'react';

const aboutItems = [
  {
    icon: FaGraduationCap,
    title: "Education",
    description: "4th year Computer Science at Carleton University",
    details: "Specializing in Software Engineering",
    timeline: "2021 - Present",
    achievements: ["CO-OP", "Software Engineering Focus", "Data Structures & Algorithms"],
    extraIcon: FaCalendarAlt
  },
  {
    icon: FaCode,
    title: "Skills",
    description: "Full-stack development & QA testing",
    details: "Proficient in multiple programming languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "C#", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Selenium", level: 65 }
    ],
    extraIcon: FaTrophy
  },
  {
    icon: FaGamepad,
    title: "Hobbies",
    description: "Sports, gaming, and great food",
    details: "Always exploring new interests",
    interests: ["Hockey", "Basketball", "Gaming", "Anime", "Food", "Shows", "Traveling", "Music"],
    extraIcon: FaHeart
  }
];

const interestDetails = {
  "Hockey": {
    icon: FaHockeyPuck,
    title: "Hockey Enthusiast",
    description: "Been following NHL for years, love the fast-paced action and strategy. Favorite team changes with the season, but always respect great plays!",
    highlight: "Nothing beats playoff hockey!"
  },
  "Basketball": {
    icon: FaBasketballBall,
    title: "Basketball Fan",
    description: "Love watching NBA games and playing pickup games with friends. The athleticism and teamwork in basketball is incredible.",
    highlight: "March Madness is my favorite time of year!"
  },
  "Gaming": {
    icon: FaGaming,
    title: "Gaming Passion",
    description: "From strategy games to RPGs, gaming has always been a way to unwind and connect with friends. Love both competitive and story-driven games.",
    highlight: "Currently obsessed with indie games!"
  },
  "Anime": {
    icon: FaTv,
    title: "Anime Lover",
    description: "Enjoy everything from action-packed shonen to thought-provoking slice-of-life series. Always looking for the next great story to dive into.",
    highlight: "Studio Ghibli films are pure art!"
  },
  "Food": {
    icon: FaUtensils,
    title: "Food Explorer",
    description: "Always hunting for the best bubble tea spots, authentic ramen shops, and perfect tacos. Food is culture, and I love exploring different cuisines.",
    highlight: "Bubble tea runs are a daily necessity!"
  },
  "Shows": {
    icon: FaTv,
    title: "TV Series Binge-Watcher",
    description: "From sci-fi thrillers to comedy series, I love getting invested in well-crafted stories and character development.",
    highlight: "Always have a new series queued up!"
  },
  "Traveling": {
    icon: FaPlane,
    title: "Adventure Seeker",
    description: "Love exploring new places, trying local food, and experiencing different cultures. Every trip teaches something new.",
    highlight: "Next destination: somewhere with great food!"
  },
  "Music": {
    icon: FaMusic,
    title: "Music Enthusiast",
    description: "Music is the soundtrack to everything. Love discovering new artists and genres, from indie rock to electronic to classical.",
    highlight: "Always with headphones on while coding!"
  }
};

const About: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section
      id="about"
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E3F5B] text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">About Me</h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-7xl w-full">
        {aboutItems.map((item, idx) => (
          <motion.div
            key={idx}
            className={`bg-[#3E3F5B] text-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 text-center cursor-pointer transition-all duration-300 ${
              expandedCard === idx ? 'transform scale-105 shadow-2xl' : ''
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
              <div className="flex items-center justify-between w-full mb-3 sm:mb-4">
                <item.icon className="text-2xl sm:text-3xl md:text-4xl text-[#ACD3A8]" />
                <item.extraIcon className="text-lg sm:text-xl md:text-2xl text-[#8AB2A6] opacity-80" />
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base mb-2 sm:mb-3 font-medium">{item.description}</p>
              <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">{item.details}</p>

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
                <div className="pt-4 border-t border-gray-200">
                  {/* Education Card */}
                  {idx === 0 && item.achievements && (
                    <div>
                      <p className="text-sm font-semibold mb-2 text-[#ACD3A8]">{item.timeline}</p>
                      <div className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="text-xs bg-[#ACD3A8] text-[#3E3F5B] px-2 py-1 rounded-full inline-block mr-1 mb-1">
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills Card */}
                  {idx === 1 && item.skills && (
                    <div className="space-y-3">
                      {item.skills.map((skill, i) => (
                        <div key={i} className="text-left">
                          <div className="flex justify-between text-xs mb-1">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <motion.div
                              className="bg-[#ACD3A8] h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: expandedCard === idx ? `${skill.level}%` : 0 }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Hobbies Card */}
                  {idx === 2 && item.interests && (
                    <div className="flex flex-wrap gap-2">
                      {item.interests.map((interest, i) => (
                        <motion.button
                          key={i}
                          className={`text-xs px-3 py-1 rounded-full transition-colors ${
                            selectedInterest === interest 
                              ? 'bg-[#ACD3A8] text-[#3E3F5B]' 
                              : 'bg-[#8AB2A6] text-white hover:bg-[#ACD3A8] hover:text-[#3E3F5B]'
                          }`}
                          initial={{ scale: 0 }}
                          animate={{ scale: expandedCard === idx ? 1 : 0 }}
                          transition={{ duration: 0.2, delay: i * 0.05 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedInterest(selectedInterest === interest ? null : interest);
                          }}
                        >
                          {interest}
                        </motion.button>
                      ))}
                    </div>
                  )}
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

      {/* Interactive Detail Section */}
      {selectedInterest && interestDetails[selectedInterest as keyof typeof interestDetails] && (
        <motion.div
          className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl w-full px-2 sm:px-0"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-l-4 border-[#8AB2A6]">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 self-center sm:self-start">
                {React.createElement(interestDetails[selectedInterest as keyof typeof interestDetails].icon, {
                  className: "text-3xl sm:text-4xl md:text-5xl text-[#8AB2A6]"
                })}
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#3E3F5B] mb-2 sm:mb-0">
                    {interestDetails[selectedInterest as keyof typeof interestDetails].title}
                  </h3>
                  <button
                    onClick={() => setSelectedInterest(null)}
                    className="text-gray-400 hover:text-gray-600 text-xl self-end sm:self-auto"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                  {interestDetails[selectedInterest as keyof typeof interestDetails].description}
                </p>
                <div className="bg-[#ACD3A8] bg-opacity-20 rounded-lg p-3 sm:p-4">
                  <p className="text-[#3E3F5B] font-medium italic text-sm sm:text-base">
                    💭 {interestDetails[selectedInterest as keyof typeof interestDetails].highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default About;