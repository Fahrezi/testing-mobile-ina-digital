import '@/styles/globals.css';
import { App } from 'ina-ui/react';
import { AppPropsType } from 'next/dist/shared/lib/utils';

export default function MyApp({ Component, pageProps }: AppPropsType) {
  return (
    <div>
      <App theme="ios">
        <Component {...pageProps} />
      </App>
    </div>
  );
}
