"use client";
import Image from "next/image";
import { MotionTransition } from "../Transition/Transition";

export const AvatarPortfolio = () => {
  return (
    <>
      <MotionTransition
        position="bottom"
        className="bottom-0 left-0 hidden md:inline-block md:absolute"
      >
        <Image
          src="/avatar-works.png"
          alt="Avatar"
          width={300}
          height={300}
          className="w-[250px] h-full"
          unoptimized
        />
      </MotionTransition>
    </>
  );
};
