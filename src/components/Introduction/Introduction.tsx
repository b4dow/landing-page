"use client";
import Image from "next/image";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

export const Introduction = () => {
  return (
    <div className="z-20 w-full  bg-darkBg/60">
      <div className="z-20  grid items-center h-full p-6 py-20 md:py-0 sm:grid-cols-2 ">
        <div className=" relative w-full h-96">
          <Image
            src="/photo-portfolio-original.png"
            priority
            alt="Avatar"
            fill
            unoptimized
            className="object-contain mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-top "
          />
        </div>
        <div className="flex flex-col justify-center max-w-md">
          <h1
            className="mb-5 text-2xl leading-tight 
            text-center md:text-left md:text-4xl md:mb-10"
          >
            Si puedes pensarlo,
            <TypeAnimation
              sequence={[
                " puedes programarlo",
                1000,
                "puedes optimizarlo",
                1000,
                "puedes implementarlo",
                1000,
                "puedes desarrollarlo",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-secondary"
            ></TypeAnimation>
          </h1>
          <p className="mx-auto  mb-2 text-xl md:mx-0 md:mb-8">
            Como desarrollador frontend, me dedico a combinar diseño y
            funcionalidad para crear experiencias digitales impactantes y
            accesibles
          </p>
          <div className="flex items-center justify-center gap-3 md:justify-start md:ga-10">
            <Link
              href="/projects"
              className="px-3 py-2 transition-all border-2 
              cursor-pointer text-md w-fit rounded-xl hover:shadow-xl 
              hover:shadow-white/50"
            >
              Ver Proyectos
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 transition-all border-2 
              cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl 
              hover:shadow-secondary/50"
            >
              Contacta Conmigo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
