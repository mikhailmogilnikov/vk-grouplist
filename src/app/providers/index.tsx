import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import { ReactNode } from 'react';
import { I18nProvider } from '../i18n';

type Props = {
  children: ReactNode;
  client: QueryClient;
};

export const Providers = ({ children, client }: Props) => {
  return (
    <QueryClientProvider client={client}>
      <I18nProvider>
        <ConfigProvider>
          <AdaptivityProvider>
            <AppRoot>{children}</AppRoot>
          </AdaptivityProvider>
        </ConfigProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
};
