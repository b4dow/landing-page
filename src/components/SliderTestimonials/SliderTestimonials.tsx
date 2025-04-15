"use client";
import Image from "next/image";
import { dataTestimonials } from "@/data/data";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

export const SliderTestimonials = () => {
  return (
    <div className="flex mt-10  items-center justify-center">
      <div>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
        >
          {dataTestimonials.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={data.imageUrl}
                  alt="Image testimonial"
                  width={100}
                  height={100}
                  className="mx-auto rounded-full"
                  unoptimized
                />
                <div>
                  <h4 className="text-center">{data.name}</h4>
                  <p className="mt-5 text-center">{data.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
