import React from 'react';
// icons
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import {
  IoIosInformationCircleOutline,
  IoMdInformationCircle,
} from 'react-icons/io';
import { RiFunctionFill, RiFunctionLine } from 'react-icons/ri';
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
const Nav = (props) => {
  const activeSection = props.current;

  return (
    <div className="    mx-auto lg:px-20   ">
      <div className=" hidden w-full py-3  lg:inline-block">
        <div className="block md:float-left">
          <a href="/">
            <span className="cursor-pointer  font-montserrat  text-4xl font-extrabold text-black">
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
              mt-2 ml-7 cursor-pointer  px-1 font-semibold md:float-right 
              ${
                activeSection.toLowerCase() === category.origin.toLowerCase()
                  ? ' text-red-500'
                  : ' text-gray-700'
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
      <div className="  flex w-screen items-center  p-3  lg:hidden">
        <div className=" flex w-full justify-between text-xs ">
          {mobNavOptions.map((category, index) => (
            <a
              className="flex flex-col items-center"
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
                {activeSection.toLowerCase() == category.origin.toLowerCase()
                  ? category.icon2
                  : category.icon1}
              </div>
              <span
                className={` mx-1
               
              ${
                activeSection.toLowerCase() === category.origin.toLowerCase()
                  ? ' font-bold text-black'
                  : ' text-gray-700 '
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
