import React from "react";

import { clubData } from "@/data/clubData";

// ** Import Components
import Header from "../layout/Header";

const Home: React.FC = () => {
  return (
    <div  className="w-full">
      <Header
        clubName={clubData.name}
        logoSrc={clubData.images.logo}
        backgroundImage={clubData.images.mainImage}
      />
    </div>
  );
};

export default Home;
