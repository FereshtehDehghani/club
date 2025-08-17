"use client";
import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ITab {
  id: string;
  title: string | ReactNode;
  content: ReactNode;
}
interface IProps {
  tabs: ITab[];
  activeTab: ITab;
  onChangeTab: (tabValue: ITab) => void;
}

const Tabs = (props: IProps) => {
  const { tabs, activeTab, onChangeTab } = props;

  return (
    <div className='w-full' dir='rtl'>
      <div className='relative border-b border-gray-200'>
        <nav className='flex flex-row justify-between -mb-px overflow-x-auto'>
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => onChangeTab(tab)}
              className={`relative py-1  font-medium  text-xs md:text-sm whitespace-nowrap text-typography-primary hover:text-gray-900 ${
                index === 0 ? "pr-0" : "text-center"
              }`}
            >
              {tab.title}
              {activeTab.id === tab.id && (
                <motion.div
                  className='absolute bottom-0 right-0 left-0 h-0.5 bg-[#cd7f32]'
                  layoutId='activeTab'
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className='py-4 min-h-[200px]'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
