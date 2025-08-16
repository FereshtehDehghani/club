"use client";

import React, { ReactNode, useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";
import { clubData, TClubServiceOption } from "@/data/clubData";
import Tabs, { ITab } from "../UI/TabMenu";
import { v4 as uuidv4 } from "uuid";
import { Content } from "next/font/google";
import ServicesListCards from "./ServicesListCards";

interface IProps {}

const HomeTabs: React.FC<IProps> = (props) => {
  const tabs = useMemo(() => {
    const allServices: TClubServiceOption[] = [];
    clubData.services?.forEach((item) => {
      allServices.push(...item.options);
    });

    const temprorayArray = [
      {
        id: uuidv4(),
        title: (<Icon icon='uil:search' width='24' height='24' />) as ReactNode,
        content: (<div>HIIII</div>) as ReactNode,
      },

      {
        id: uuidv4(),
        title: "همه",
        content: (
          <ServicesListCards clubServices={allServices} />
        ) as ReactNode,
      },
    ];
    const servicesTabs = clubData.services.map((item) => ({
      id: item.id,
      title: item.title,
      content: (<ServicesListCards clubServices={item.options} />) as ReactNode,
    }));

    return [...temprorayArray, ...servicesTabs];
  }, [clubData.services]);

  const [activeTab, setActivetab] = useState(tabs[1]);

  const onChangeTab = (newActivateTab: typeof activeTab) =>
    setActivetab(newActivateTab as ITab);

  return (
    <div className='w-full max-w-5xl'>
      <Tabs tabs={tabs} activeTab={activeTab} onChangeTab={onChangeTab} />
    </div>
  );
};

export default HomeTabs;
