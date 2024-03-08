import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>{children}</AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
