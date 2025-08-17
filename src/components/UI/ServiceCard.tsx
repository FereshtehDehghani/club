import React from "react";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";
import { TClubServiceOption } from "@/data/clubData";
import { toPersianDigits } from "@/utils/helpers";

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
    <div className='w-full md:w-[48%] lg:w-[30%] xl:w-[32%] border border-gray-200 rounded-xl py-2'>
      {/* ----------- Info ----------- */}
      <div className='flex flex-row justify-between items-center px-2'>
        <div className='flex flex-row justify-start items-center gap-2 pb-2'>
          <Image
            src={image}
            alt={description}
            width={62}
            height={2}
            style={{ objectFit: "cover", borderRadius: 6, height: 55 }}
            sizes='(max-width: 768px) 8vw, (max-width: 1200px) 10vw, 13vw'
          />
          <div className='flex flex-col justify-between items-start min-h-[53px] ml-3'>
            <p className='text-sm font-medium text-typography-primary'>
              {description}
            </p>

            <p className='text-[10px] text-typography-secondary'>
              {`از ساعت ${startTime}   الی  ${endTime}`}
            </p>
          </div>
        </div>
        <button type='button' className='flex flex-row justify-end -ml-1'>
          <Icon
            icon={"tabler:chevron-left"}
            width={22}
            height={22}
            style={{ color: "#cd7f32" }}
          />
        </button>
      </div>
      <div className='w-full px-2'>
        <div className='border-b-1 border-gray-200' />
      </div>

      {/* ---------- Prices----------- */}
      <div
        className={`w-full flex flex-row ${
          discountPercentage ? "justify-between" : "justify-end"
        } items-center pt-2`}
      >
        {discountPercentage ? (
          <div className='flex flex-row min-w-16 font-vazir tracking-wider text-center text-white text-[11px]  bg-[#cd7f32] px-1 py-1 mx-0  rounded-l-sm'>
            <p>{`${toPersianDigits(discountPercentage)}٪ تخفیف`}</p>
          </div>
        ) : null}
        <div className='flex flex-row justify-end items-center gap-4 pl-3 font-vazir tracking-wider'>
          {discountPercentage ? (
            <div>
              <div className='relative inline-block'>
                <span className='text-xs text-typography-light  font-vazir tracking-wide'>
                  {" "}
                  {toPersianDigits(price.toLocaleString() ?? 0)}
                </span>
                <span className='text-[10px] text-typography-light pr-[3px] font-vazir tracking-wide'>
                  تومان
                </span>

                <div className='flex items-center justify-center absolute inset-0 '>
                  <div className='w-full h-[1px] bg-[#cd7f32] transform -skew-5' />
                </div>
              </div>
            </div>
          ) : null}

          <p className='text-sm font-normal font-vazir tracking-wider text-black'>
            {` ${toPersianDigits(
              (price - (price * discountPercentage) / 100).toLocaleString()
            )}`}{" "}
            <span className='text-[10px] text-typography-light'>تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
