import Head from 'next/head';
import HomepageCipherList from '../sections/HomepageCipherList';
import { MdOpenInNew } from 'react-icons/md';
import { GoMarkGithub } from 'react-icons/go';
const jokes = [
  'Two hashes walk into a bar, one was a salted.',
  'What do Vikings use to encrypt their messages? \n  Norse code',
  'Yo mama is so used, they call her IPv4.',
];
const Home = () => {
  return (
    <div className=" flex   flex-col items-center  justify-center   ">
      <Head>
        <title>Land of Ciphers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="flex w-full flex-col  items-center px-3 lg:h-90vh lg:flex-row lg:px-20 ">
        <div class="hidden h-full w-1/4 flex-col items-center justify-center border-r-1 border-brandDarkGreen px-10 py-10 lg:flex ">
          <div class="w-full text-left text-sm text-gray-500">
            {jokes[Math.floor(Math.random() * jokes.length)]}
          </div>
          <div
            style={{
              backgroundImage: `url('/images/homepage.jpg')`,
            }}
            class="my-10 h-64 w-full rounded-md bg-brandLightBlue bg-cover bg-center"
          ></div>
        </div>
        <div class="flex h-full w-full flex-col justify-between  py-10 lg:w-3/4 lg:px-10 ">
          <div class=" font-montserrat text-5xl font-bold lg:text-8xl ">
            <span class="text-brandPink">Welcome </span>
            <span class="text-gray-800">
              to the <span class="text-gray-800">Land of </span>
            </span>
            <span class=" text-brandLightBlue">Ciphers</span>
          </div>
          <div class="my-10 flex w-full flex-col items-center justify-center lg:my-20 lg:flex-row">
            <div className=" flex w-full flex-col items-center justify-center py-5 text-sm text-gray-500 hover:text-white lg:w-1/2 lg:px-5 ">
              <a
                href="#ciphers"
                rel="noopener noreferrer"
                target="_blank"
                class=" flex  h-full w-full cursor-pointer items-center  justify-center  rounded-lg border-2 border-brandLightBlue px-10 py-5 hover:bg-brandLightBlue"
              >
                <div class="h-full w-2/3">
                  <div className="mb-2 text-xl font-semibold text-gray-600  ">
                    Checkout the ciphers
                  </div>
                  <div class=" mx-auto rounded-md  bg-brandDarkGreen px-5 py-1 text-center text-xl uppercase text-white ">
                    Checkout
                  </div>
                </div>
                <div class="flex h-full w-1/3   items-center justify-end text-center text-brandDarkGreen">
                  <MdOpenInNew className="  text-5xl" />
                </div>
              </a>
            </div>
            <div className="   flex w-full flex-col items-center justify-center py-5 text-sm text-gray-500 hover:text-white lg:w-1/2 lg:px-5 ">
              <a
                href="https://github.com/Marshyy/Land-of-Ciphers"
                rel="noopener noreferrer"
                target="_blank"
                class=" flex h-full w-full cursor-pointer items-center  justify-center  rounded-lg border-2 border-brandLightBlue px-10 py-5 hover:bg-brandLightBlue"
              >
                <div class="h-full w-2/3">
                  <div className="mb-2 text-xl font-semibold text-gray-600  ">
                    Collab with us
                  </div>
                  <div class=" mx-auto rounded-md  bg-brandDarkGreen px-5 py-1 text-center text-xl uppercase text-white ">
                    Join us
                  </div>
                </div>
                <div class="flex h-full  w-1/3  items-center justify-end text-center text-brandDarkGreen">
                  <GoMarkGithub className=" text-5xl" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <HomepageCipherList />
    </div>
  );
};

export default Home;
