import '../styles/globals.css';

import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  // Your component logic here
  return <Component {...pageProps} />;
}

export default App;