import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Nav } from '../components/';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav current="home" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
