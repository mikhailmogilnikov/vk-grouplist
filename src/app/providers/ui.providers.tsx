import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import { useTranslation } from 'react-i18next';

export const UiProviders = ({ children }) => {
  const [t, i18n] = useTranslation();
  t;
  return (
    <ConfigProvider locale={i18n.language}>
      <AdaptivityProvider>
        <AppRoot>{children}</AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
