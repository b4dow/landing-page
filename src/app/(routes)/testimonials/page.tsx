"use client";

import { SliderTestimonials, CircleImage, TransitionPage } from "@/components";
import { Suspense } from "react";

const TestimonialsPage = () => {
  return (
    <>
      <TransitionPage />
      <div className="flex flex-col justify-center h-lvh my-20">
        <CircleImage />
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Algunos comentarios
          <span className="block font-bold text-secondary">
            de nuestros clientes
          </span>
        </h1>
        <Suspense
          fallback={
            <div>
              <h2>Cargando...</h2>
            </div>
          }
        >
          <SliderTestimonials />
        </Suspense>
      </div>
    </>
  );
};

export default TestimonialsPage;
