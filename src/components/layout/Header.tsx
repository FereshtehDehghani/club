import React from "react";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";

interface IProps {
  logoSrc: StaticImageData;
  clubName: string;
  backgroundImage: string;
}

const Header: React.FC<IProps> = (props) => {
  const { logoSrc, clubName, backgroundImage } = props;
  return (
    <div className='w-full'>
      <div
        className='w-full max-w-4xl min-h-[220] md:min-h-[420] bg-cover bg-center bg-no-repeat relative'
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(/images/club-bg-image.jpeg)",
        }}
      >
        <header className='w-full flex flex-row justify-between items-center z-10 px-4 py-4 '>
          <div className='w-full flex flex-row justify-self-start items-center  bg-transparent gap-2'>
            <div className='bg-white w-12 h-12  md:w-16 md:h-16 rounded-xl flex flex-col justify-center items-center '>
              <Image
                src={logoSrc}
                alt='club-logo'
                width={36}
                height={36}
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className='text-white text-md md:text-lg font-vazir font-medium'>
              {clubName}
            </p>
          </div>
          <button type='button'>
            <Icon icon='fluent:chat-16-filled' width='32' height='32' />
          </button>
        </header>
      </div>
    </div>
  );
};

export default Header;
