import React from "react";
import { TextAnimate } from "./ui/text-animate";

const Hero = () => {
  return (
    <div className="w-full max-w-screen-sm mx-auto lg:max-w-screen-lg bg-[#d9d9d9] backdrop-blur-sm h-[400px] rounded-2xl mt-24 flex flex-col items-center justify-center">
      <img src="/mama/mama.png" alt="mama" />
      <TextAnimate
        text="Mama Louisa"
        type="popIn"
        className="text-[40px] font-bold text-neutral-700 tracking-widest"
      />
    </div>
  );
};

export default Hero;
