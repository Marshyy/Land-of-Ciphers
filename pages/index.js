import Head from 'next/head';
import Image from 'next/image';
const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Land of Ciphers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="font-montserrate text-center text-5xl">
        Welcome To The Land of Ciphers
      </div>
    </div>
  );
};

export default Home;
