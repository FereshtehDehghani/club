import React from "react";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";
import { TClubServiceOption } from "@/data/clubData";

interface IProps {
  serviceOption: TClubServiceOption;
}

const ServiceCard: React.FC<IProps> = (props) => {
  const {
    id,
    description,
    startTime,
    endTime,
    discountPercentage,
    price,
    image,
  } = props.serviceOption;

  return (
    <div className='w-full md:w-[48%] lg:w-[30%]  xl:w-[32%] border border-gray-200   rounded-2xl py-2'>
      {/* ----------- Info ----------- */}
      <div className='flex flex-row justify-between items-center   px-3'>
        <div className='flex flex-row justify-between items-center gap-2 pb-2'>
          <Image
            src={image}
            alt={description}
            width={100}
            height={100}
            style={{ objectFit: "cover", borderRadius: 12 }}
            sizes='(max-width: 768px) 12vw, (max-width: 1200px) 15vw, 18vw'
          />
          <div className='flex flex-col justify-between items-start gap-2'>
            <p className='text-sm text-typography-primary'>{description}</p>

            <p className='text-xs text-typography-secondary'>
              {`از ساعت ${startTime}   الی  ${endTime}`}
            </p>
          </div>
        </div>
        <button type='button'>
          <Icon
            icon={"tabler:chevron-left"}
            width={28}
            height={28}
            style={{ color: "#cd7f32" }}
          />
        </button>
      </div>
      <div className='w-full px-2'>
        <div className='border-b-1 border-gray-300' />
      </div>

      {/* ---------- Prices----------- */}
      <div className='w-full flex flex-row justify-between items-center py-2'>
        <div className='flex flex-row min-w-16 text-center text-white text-xs  bg-amber-600 px-2 py-1 mx-0  rounded-l-sm'>
          <p>{`تخفیف ${discountPercentage}٪`}</p>
        </div>
        <div className='flex flex-row justify-end items-center gap-4 pl-3'>
          <div className='relative inline-block'>
            <span className='text-xs text-typography-light'> {price.toLocaleString()}</span>
            <div className='flex items-center justify-center absolute inset-0 '>
              <div className='w-full h-[1px] bg-amber-600 transform -skew-6' />
            </div>
          </div>
          <p className='text-xs text-typography-primary'>
            {` ${(price - (price * discountPercentage) / 100).toLocaleString()}`}{" "}
            <span className='text-[10px] text-typography-light'>تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
