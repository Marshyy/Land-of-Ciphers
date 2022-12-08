import React from 'react';

const ciphers = [
  {
    name: 'Ceaser and Shift',
    slug: 'ceaser',
    image: 'https://i.imgur.com/QQQQQQQ.png',
  },
  {
    name: 'Vigenere',
    slug: 'vigenere',
    image: 'https://i.imgur.com/QQQQQQQ.png',
  },
  {
    name: 'Railfence',
    slug: 'railfence',
    image: 'https://i.imgur.com/QQQQQQQ.png',
  },
  {
    name: 'Playfair',
    slug: 'playfair',
    image: 'https://i.imgur.com/QQQQQQQ.png',
  },
  {
    name: 'Hill',
    slug: 'hill',
    image: 'https://i.imgur.com/QQQQQQQ.png',
  },
];
const HomepageCipherList = () => {
  return (
    <div
      id="ciphers"
      className=" flex w-full flex-col  items-center justify-center bg-gradient-to-t from-brandDarkGray to-black px-3  py-10  lg:my-0 lg:min-h-screen lg:px-20"
    >
      <div class="my-5 w-full text-center  font-montserrat text-3xl font-bold text-brandPink lg:text-center lg:text-5xl">
        Explore these Ciphers
      </div>
      <div className="flex h-auto w-full flex-col flex-nowrap items-center justify-center lg:flex-row lg:flex-wrap">
        {ciphers.map((cipher, index) => (
          <a
            href={`/${cipher.slug}`}
            className=" my-2   flex h-auto  w-2/3 flex-col  items-center rounded-md bg-brandLightGray  p-3 hover:bg-gray-900 lg:m-5 lg:h-52 lg:w-64 lg:p-8 "
          >
            <div class=" w-full text-left font-sourceCodepro text-gray-200 lg:text-lg">
              {index + 1}.
            </div>
            <div class="my-1 w-full text-left font-sourceCodepro text-3xl text-gray-400 lg:mt-5">
              {cipher.name}
            </div>
            <div class="my-1 w-full text-left text-sm text-gray-400 underline lg:my-5">
              Read More
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomepageCipherList;
