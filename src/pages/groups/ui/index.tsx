import { PanelHeader } from '@vkontakte/vkui';
import { useTranslation } from 'react-i18next';
import { GroupList } from '@/widgets/grouplist';

export const GroupsPage = () => {
  const [t] = useTranslation();

  return (
    <>
      <PanelHeader>{t('groups.header')}</PanelHeader>
      <GroupList />
    </>
  );
};
