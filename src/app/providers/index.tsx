import { QueryClient } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { ServiceProviders } from './service.providers';
import { UiProviders } from './ui.providers';

type Props = {
  children: ReactNode;
  client: QueryClient;
};

export const Providers = ({ children, client }: Props) => {
  return (
    <ServiceProviders client={client}>
      <UiProviders>{children}</UiProviders>
    </ServiceProviders>
  );
};
