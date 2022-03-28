import React from 'react';

const errorPage = () => {
  return (
    <div className="flex h-90vh flex-col items-center justify-center bg-gradient-to-t from-brandDarkGray to-black px-3 lg:flex-row lg:px-20 ">
      <div class="flex flex-col items-center lg:mx-10 ">
        <div class="text-center font-sourceCodepro text-9xl font-bold tracking-widest">
          404
        </div>
        <div class="text-center text-lg leading-5 text-brandLightBlue">
          The page you are looking for is either under development or doesn't
          exist!
        </div>
        <div class="text lg my-4 text-gray-700 lg:my-2">
          Let's go back{' '}
          <a
            href="/"
            class="mx-3 rounded-md border-1 border-white bg-white px-2 py-1 font-bold text-black  hover:bg-black hover:text-white"
          >
            Home
          </a>
        </div>
      </div>
      <div
        class="my-5 h-48 w-48 rounded-xl bg-white bg-cover bg-bottom bg-no-repeat lg:mx-10 lg:h-96 lg:w-96"
        style={{
          backgroundImage: 'url(/images/404PaperToy.jpg)',
        }}
      />
    </div>
  );
};

export default errorPage;
