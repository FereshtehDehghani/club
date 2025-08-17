import React from "react";

import { TClubServiceOption } from "@/data/clubData";
import ServiceCard from "../UI/ServiceCard";

interface IProps {
  clubServices: TClubServiceOption[];
}

const ServicesListCards: React.FC<IProps> = (props) => {
  const { clubServices } = props;

  return (
    <>
      {clubServices?.length ? (
        <div className='w-full flex flex-col justify-start md:flex-row md:justify-between md:flex-wrap max-w-5xl gap-3'>
          {clubServices?.map((item) => (
            <ServiceCard key={item.id} serviceOption={item} />
          ))}
        </div>
      ) : (
        <p>دیتایی برای نمایش وجود ندارد</p>
      )}
    </>
  );
};

export default ServicesListCards;
