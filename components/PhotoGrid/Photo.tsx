import Image from "next/image";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";

const Photo = ({ photoUrl }: { photoUrl: string }) => {
  return (
    <div className="relative">
      <Image
        src={photoUrl}
        alt="Instagram photo"
        width={50}
        height={50}
        layout="responsive"
      />
      <div className="flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 hover:bg-black/50 group transition-all">
        <AiFillInstagram
          size={50}
          className="hidden text-white/50 group-hover:inline"
        />
      </div>
    </div>
  );
};

export default Photo;
