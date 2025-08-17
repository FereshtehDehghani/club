"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const MenuBar = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  const menus = [
    { name: "messages", icon: "mdi:email-outline" },
    { name: "chat", icon: "mdi:chat-outline" },
    { name: "home", icon: "mdi:home-outline" },
    { name: "profile", icon: "mdi:account-outline" },
  ];

  return (
    <div className='w-full max-w-5xl fixed bottom-4  left-1/2 transform -translate-x-1/2 z-50 px-4'>
      <motion.div
        className='w-full flex  justify-between items-center gap-2 py-4 px-8 rounded-lg bg-[#1c2b3a]'
        style={{ borderRadius: "12px" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {menus.map((menu) => (
          <motion.button
            key={menu.name}
            onClick={() => setActiveMenu(menu.name)}
            className={`relative rounded-lg flex items-center justify-center font-extralight`}
            style={{ borderRadius: "12px" }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#2d3e50",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Icon
              icon={menu.icon}
              width={20}
              height={20}
              className={"text-white"}
              
            />
            {activeMenu === menu.name && (
              <motion.span
                className='absolute -top-1 -right-1 w-[6px] h-[6px] bg-[#cd7f32] rounded-full'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default MenuBar;
