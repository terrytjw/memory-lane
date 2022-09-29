import { useRouter } from "next/router";
import React from "react";
import Button from "./Button";

type HeroProps = {
  heading: string;
  message: string;
};
const Hero = ({ heading, message }: HeroProps) => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen mb-20 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[1]" />
      <div className="p-5 text-white z-[1] mt-[-10rem]">
        <h1 className="text-5xl font-bold">{heading}</h1>
        <h2 className="py-5 text-xl">{message}</h2>
        <Button onClick={() => router.push("#gallery")}>View more</Button>
      </div>
    </div>
  );
};

export default Hero;
