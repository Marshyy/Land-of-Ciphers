import React from 'react';
import { DiGithubAlt } from 'react-icons/di';
const about = () => {
  return (
    <>
      <div className=" px-3 py-10 lg:min-h-screen lg:px-20  ">
        <div className="flex h-full flex-col items-center justify-between lg:flex-row">
          <div className="my-2 flex h-full w-full flex-col items-center justify-center   lg:w-2/3 lg:px-8 ">
            <div className="w-full text-left  font-montserrat text-5xl font-bold text-brandPink">
              {' '}
              About Us
            </div>
            <div class="my-10 w-full text-justify text-sm text-gray-800">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              aperiam distinctio illo officia eveniet sequi porro nulla at sint
              quidem mollitia, voluptatem fugit. Consequuntur quod quia
              veritatis amet perferendis obcaecati.
            </div>
            <div class="my-7 w-full text-left font-montserrat text-4xl font-bold text-brandPink">
              Contributors
            </div>
            <div class="flex w-full flex-row-reverse items-center">
              <div className="flex w-1/2 items-center pr-5">
                <div className="flex w-full items-center justify-between rounded-md bg-gradient-to-tr from-brandDarkGray to-black px-5 py-2 ">
                  <div className="flex flex-col items-center">
                    <div
                      class=" m-3 h-32 w-32 rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('https://avatars.githubusercontent.com/u/57288196?v=4')`,
                      }}
                    />
                    <div class="font-sourceCodepro text-lg text-brandLightBlue">
                      Richinrix
                    </div>
                  </div>
                  <a
                    href="https://github.com/richinrix"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DiGithubAlt className="text-8xl text-brandLightGray" />
                    <div class="text-xs  text-gray-500 underline">
                      View on Github
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex w-1/2 items-center pl-5">
                <div className="flex w-full items-center justify-between rounded-md bg-gradient-to-tr from-brandDarkGray to-black px-5 py-2 ">
                  <div className="flex flex-col items-center">
                    <div
                      class=" m-3 h-32 w-32 rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('https://avatars.githubusercontent.com/u/28839897?v=4')`,
                      }}
                    />
                    <div class="font-sourceCodepro text-lg text-brandLightBlue">
                      Marshyy
                    </div>
                  </div>
                  <a
                    href="https://github.com/Marshyy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DiGithubAlt className="text-8xl text-brandLightGray" />
                    <div class="text-xs  text-gray-500 underline">
                      View on Github
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full p-7">
            <div
              className="h-96 w-96 rounded-full bg-gradient-to-tr from-brandDarkGray via-black to-black "
              // style={{
              //   backgroundImage:
              //     'radial-gradient(circle, #141415,#000000,#000000)',
              // }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
