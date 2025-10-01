// components/Hero.tsx
"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero: React.FC = () => {
  return (
    <section className="snap-start h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Profile Image */}
      <div className="w-50 h-50 mb-6 relative">
        <Image
          src="/Me.jpg" 
          alt="Tyler Chin"
          fill
          className="rounded-full object-cover shadow-lg"
        />
      </div>

      {/* Name Animation */}
      <TypeAnimation
        sequence={["Tyler Chin", 1000]}
        wrapper="h1"
        cursor
        speed={50}
        className="text-5xl md:text-6xl font-bold mb-4"
      />

      {/* Short Bio */}
      <p className="text-lg md:text-xl max-w-xl">
        Computer science student who loves building clean, functional software, enjoys sports, and good food.
      </p>
    </section>
  );
};

export default Hero;
