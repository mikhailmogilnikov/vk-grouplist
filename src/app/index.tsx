import { createRoot } from 'react-dom/client';
import { queryClient } from '@/shared/api/query-client';
import App from './app';
import { Providers } from './providers';
import '@vkontakte/vkui/dist/vkui.css';

createRoot(document.getElementById('root')!).render(
  <Providers client={queryClient}>
    <App />
  </Providers>,
);
