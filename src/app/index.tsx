/* eslint-disable @conarti/feature-sliced/public-api */
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Providers } from './providers';

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App initialPanel='main' />
  </Providers>,
);
