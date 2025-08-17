"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Icon } from "@iconify/react";
import { toPersianDigits } from "@/utils/helpers";

interface IProps {
  clubImage: string;
  address: string;
  phone: string;
  followers: string;
  rating: string;
}

const indicatorStyle = {
  width: 5,
  height: 5,
  backgroundColor: "#E0E0E0",
  borderRadius: "50%",
  cursor: "pointer",
  margin: "-8px 1px 0",
  transition: "all 0.3s ease",
};

const activeIndicatorStyle = {
  ...indicatorStyle,
  opacity: 1,
  width: 12,
  height: 5,
  borderRadius: "32px",
  backgroundColor: "#cd7f32",
};

const RenderInfo = ({ icon, info }: { icon: string; info: string }) => {
  return (
    <div className='flex flex-row justify-start items-center gap-[2px]'>
      <Icon icon={icon} width={20} height={20} style={{ color: "#cd7f32" }} />
      <p className='text-[10px] tracking-wide md:text-sm text-typography-primary'>
        {info}
      </p>
    </div>
  );
};
const BusinessCard: React.FC<IProps> = (props: IProps) => {
  const { clubImage, address, phone, followers, rating } = props;
  const [inedxSlider, setIndexSlider] = useState(0);

  const slideImages = [
    {
      url: clubImage,
    },
    {
      url: clubImage,
    },
    {
      url: clubImage,
    },
    {
      url: clubImage,
    },
    {
      url: clubImage,
    },
    {
      url: clubImage,
    },
    {
      url: clubImage,
    },
  ];

  return (
    <div className='w-full max-w-5xl mx-auto -mt-22 '>
      <Slide
        autoplay={true}
        arrows={false}
        duration={3000}
        slidesToShow={1}
        transitionDuration={500}
        onChange={(from, to) => setIndexSlider(to)}
        indicators={(index) => (
          <div
            style={
              index === inedxSlider ? activeIndicatorStyle : indicatorStyle
            }
          />
        )}
      >
        {slideImages.map((slideImage, index) => (
          <div
            key={index}
            className='relative w-full flex flex-col gap-0 border border-gray-200 rounded-t-xl rounded-b-md'
          >
            <div className='relative h-[160px] sm:h-[230px]  md:h-[280px] overflow-hidden'>
              <Image
                alt={`club image ${index + 1}`}
                src={slideImage.url}
                fill
                className='object-'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw'
                style={{
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  border: "1px soloid #fff",
                }}
              />
            </div>

            <div
              className='bg-white  z-40  flex flex-col gap-2 px-2 py-2 rounded-md -mt-2 text-right'
              style={{ direction: "rtl" }}
            >
              <RenderInfo icon={"fluent:location-24-filled"} info={address} />

              <div className='flex flex-row justify-between items-center gap-4 '>
                <RenderInfo
                  icon={"line-md:phone-filled"}
                  info={toPersianDigits(phone)}
                />
                <RenderInfo
                  icon={"flowbite:users-solid"}
                  info={`${toPersianDigits(followers)}+`}
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
