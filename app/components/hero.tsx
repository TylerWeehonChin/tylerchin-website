// components/Hero.tsx
"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero: React.FC = () => {
  return (
    <section className="section-container items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Profile Image */}
      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 mb-4 sm:mb-6 md:mb-8 lg:mb-10 relative">
        <Image
          src="/Me.png" 
          alt="Tyler Chin"
          fill
          className="rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
          priority
          sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 240px, 288px"
        />
      </div>

      {/* Name Animation */}
      <TypeAnimation
        sequence={["Tyler Chin", 2000]}
        wrapper="h1"
        cursor
        speed={20}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-[#3E3F5B]"
      />

      {/* Short Bio */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-[#3E3F5B] opacity-80 leading-relaxed px-2 sm:px-0">
        Computer science student who loves building clean, functional software, enjoys sports, and good food.
      </p>
    </section>
  );
};

export default Hero;
