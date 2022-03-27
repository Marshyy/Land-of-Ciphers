import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Nav } from '../components/';
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black text-white">
      <Nav current="home" />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
