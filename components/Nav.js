import React from 'react';
import { useRouter } from 'next/router';
// icons

import { MdOutlineLandscape } from 'react-icons/md';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import {
  IoIosInformationCircleOutline,
  IoMdInformationCircle,
} from 'react-icons/io';

const categories = [
  {
    name: 'About',
    slug: 'about',
    origin: 'about',
  },

  {
    name: 'Home',
    origin: 'home',
    slug: '#',
  },
];
const mobNavOptions = [
  {
    name: 'Home',
    origin: 'home',
    slug: '#',
    icon1: <AiOutlineHome />,
    icon2: <AiFillHome />,
  },

  {
    name: 'About',
    origin: 'About',
    slug: 'about',
    icon1: <IoIosInformationCircleOutline />,
    icon2: <IoMdInformationCircle />,
  },
];
const Nav = () => {
  const router = useRouter();
  const activeSection =
    router.pathname == '/' ? 'home' : router.pathname.split('/')[1];

  return (
    <div className="    mx-auto lg:px-20   ">
      <div className=" hidden w-full py-3  lg:inline-block">
        <div className="block md:float-left">
          <a href="/" className="flex items-center text-brandLightBlue">
            <MdOutlineLandscape className="mr-2 text-5xl " />
            <span className="cursor-pointer  font-montserrat  text-4xl ">
              Land of Ciphers
            </span>
          </a>
        </div>
        {/* desktop nav */}
        <div className="hidden md:float-right md:contents ">
          {categories.map((category, index) => (
            <a href={`/${category.slug}`} key={index}>
              <span
                className={`
              mt-2 ml-7 cursor-pointer  px-1 font-semibold  md:float-right 
              ${
                activeSection.toLowerCase() === category.origin.toLowerCase()
                  ? ' text-brandPink'
                  : ' text-brandDarkGreen hover:text-gray-300'
              }
              `}
              >
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
      {/* mobile nav */}
      <div className="  flex w-screen items-center justify-between  p-3  lg:hidden">
        <a href="/" className="flex  items-center text-brandLightBlue">
          <MdOutlineLandscape className="mr-2 text-5xl " />
          <span className=" min-w-max  font-montserrat  text-xl ">
            Land of Ciphers
          </span>
        </a>
        <div className=" flex w-full justify-end text-xs ">
          {mobNavOptions.map((category, index) => (
            <a
              className="mx-2 flex flex-col items-center"
              href={`/${category.slug}`}
              key={index}
            >
              <div
                className={`my-1 text-2xl
                  
              ${
                activeSection.toLowerCase() === category.origin.toLowerCase()
                  ? ' text-brandRed'
                  : ' text-gray-700 '
              }
                `}
              >
                {/* {activeSection.toLowerCase() == category.origin.toLowerCase()
                  ? category.icon2
                  : category.icon1} */}
              </div>
              <span
                className={` mx-1 
               
              ${
                activeSection.toLowerCase() === category.origin.toLowerCase()
                  ? ' font-bold text-brandPink'
                  : ' text-gray-300 '
              }
              `}
              >
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
