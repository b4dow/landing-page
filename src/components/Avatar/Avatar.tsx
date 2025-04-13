import Image from "next/image";
import { MotionTransition } from "../Transition/Transition";

export const Avatar = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 right-0 hidden md:inline-block md:absolute"
    >
      <div className="relative max-w-80">
        <Image
          src="/avatar-1.png"
          width={350}
          height={350}
          unoptimized
          className="object-contain w-full h-full mask-b-from-80% mask-b-to-100% "
          alt="Avatar"
        />
      </div>
    </MotionTransition>
  );
};
