import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { Button } from "./ui/Button";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="sm:-top-10 h-screen" fill="white" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative m-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify center">
          {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Péter Révész
          </h2> */}
          <TextGenerateEffect
            words="Transforming concepts into seamless experiences"
            className="text-center text-[30px] md:text-4xl xl:text-6xl"
          />
          <p className="text-center max-w-[55vw] opacity-50 md:tracking-wider mb-6 text-sm md:text-lg lg:text:2xl lg:max-w-[40vw]">
            Hi, my name is Péter. I am a full-stack software engineer based in
            Budapest with a strong passion for frontend development. While you
            are here I would like to share some of my favourite work,
            technologies and development styles with you.
          </p>
          <div>
            <a href="#about">
              <MagicButton
                title="Start exploring"
                icon={<FaLocationArrow />}
                position="left"
              />
            </a>
            <a
              href="https://github.com/revesz-peter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title="GitHub" icon={<FaGithub />} position="left" />
            </a>
            <a
              href="https://www.linkedin.com/in/reveszpeter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title="LinkedIn" icon={<FaLinkedin />} position="left" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
