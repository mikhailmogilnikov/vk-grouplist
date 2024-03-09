import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './locales';

type Props = {
  children: React.ReactNode;
};

export const I18nProvider = ({ children }: Props) => {
  i18next.use(initReactI18next).init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

  return children;
};
