import React from "react";

import { clubData } from "@/data/clubData";

// ** Import Components
import Header from "../layout/Header";
import BusinessCard from "../UI/BusinessCard";
import HomeTabs from "../layout/HomeTabs";

const HomePageContent: React.FC = () => {
  return (
    <div className='w-full max-w-5xl'>
      <div className='w-full max-w-5xl bg-white px-4 pb-16 rounded-t-4xl flex flex-col gap-5 items-center absolute top-48 min-h-3/4'>
        <BusinessCard
          clubImage={clubData.images.cardImage}
          address={clubData.address.location}
          phone={clubData.address.phone}
          followers={clubData.followers}
          rating={clubData.rating}
        />
        <HomeTabs />
      </div>
    </div>
  );
};

export default HomePageContent;
