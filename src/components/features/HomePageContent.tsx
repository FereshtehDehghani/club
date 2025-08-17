import React from "react";

import { clubData } from "@/data/clubData";

// ** Import Components
import HomeTabs from "../layout/HomeTabs";
import BusinessCard from "../layout/BusinessCard";

const HomePageContent: React.FC = () => {
  return (
    <div className='w-full max-w-5xl bg-white px-4 pb-16 rounded-t-3xl flex flex-col gap-5 items-center absolute top-44 md:top-48 min-h-3/4'>
      <BusinessCard
        clubImage={clubData.images.cardImage}
        address={clubData.address.location}
        phone={clubData.address.phone}
        followers={clubData.followers}
        rating={clubData.rating}
      />
      <HomeTabs />
    </div>
  );
};

export default HomePageContent;
