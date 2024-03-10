import { QueryClientProvider } from '@tanstack/react-query';
import { Provider as StoreProvider } from 'react-redux';
import { I18nProvider } from '../i18n';
import { store } from '../store';

export const ServiceProviders = ({ children, client }) => {
  return (
    <StoreProvider store={store}>
      <QueryClientProvider client={client}>
        <I18nProvider>{children}</I18nProvider>
      </QueryClientProvider>
    </StoreProvider>
  );
};
