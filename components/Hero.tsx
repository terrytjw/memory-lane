import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";
import BouncingBall from "./BouncingBall";
import Button from "./Button";

type HeroProps = {
  heading: string;
  message: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};
const Hero = ({ heading, message, setIsModalOpen }: HeroProps) => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen mb-20 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />
      <div className="p-5 text-white z-[1] mt-[-10rem]">
        <h1 className="text-5xl font-bold">{heading}</h1>
        <h2 className="py-5 text-xl">{message}</h2>
        <Button className="mt-4" onClick={() => setIsModalOpen(true)}>
          View mantra
        </Button>
        {/* <div className="mt-10 p-4">
          <BouncingBall />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
