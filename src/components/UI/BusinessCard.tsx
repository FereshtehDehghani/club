"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Icon } from "@iconify/react";

interface IProps {
  clubImage: string;
  address: string;
  phone: string;
  followers: string;
  rating: string;
}

const RenderInfo = ({ icon, info }: { icon: string; info: string }) => {
  return (
    <div className='flex flex-row justify-start items-center gap-1'>
      <Icon icon={icon} width={24} height={24} style={{ color: "#cd7f32" }} />
      <p className='text-xs md:text-sm text-typography-mid'>{info}</p>
    </div>
  );
};
const BusinessCard: React.FC<IProps> = (props: IProps) => {
  const { clubImage, address, phone, followers, rating } = props;

  const slideImages = [
    {
      url: clubImage,
      caption: "Slide 1",
    },
    {
      url: clubImage,
      caption: "Slide 2",
    },
    {
      url: clubImage,
      caption: "Slide 3",
    },
  ];

  return (
    <div className='w-full max-w-5xl mx-auto -mt-22 border-1 border-white rounded-2xl'>
      <Slide
        autoplay={false}
        indicators={true}
        arrows={false}
        duration={5000}
        transitionDuration={500}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index} className='relative w-full flex flex-col gap-0'>
            <div className='aspect-w-16 aspect-h-9 min-h-[220px] max-h-[320px] overflow-hidden'>
              <Image
                alt={`club image ${index + 1}`}
                src={slideImage.url}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw'
                style={{
                  borderTopRightRadius:18,
                  borderTopLeftRadius: 18,
                  border: "1px soloid #fff",
                }}
              />
            </div>

            <div
              className='bg-white  z-40  flex flex-col gap-2 px-2 py-2 rounded-t-md text-right border-b-1 border-gray-200'
              style={{ direction: "rtl" }}
            >
              <RenderInfo icon={"fluent:location-24-filled"} info={address} />

              <div className='flex flex-row justify-between items-center gap-4 '>
                <RenderInfo icon={"line-md:phone-filled"} info={phone} />
                <RenderInfo
                  icon={"flowbite:users-solid"}
                  info={`${followers}+`}
                />
                <RenderInfo icon={"uis:star"} info={rating} />
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default BusinessCard;
