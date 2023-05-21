import '../styles/globals.css';

import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';

function App({ Component, pageProps }: AppProps) {
  // Your component logic here
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default App;