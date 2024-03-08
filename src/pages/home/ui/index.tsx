import { Icon28SettingsOutline, Icon28UserOutline } from '@vkontakte/icons';
import { Group, PanelHeader, SimpleCell } from '@vkontakte/vkui';

export const HomePage = () => {
  return (
    <>
      <PanelHeader>Список групп</PanelHeader>
      <Group>
        <SimpleCell before={<Icon28UserOutline />}>Account</SimpleCell>
        <SimpleCell before={<Icon28SettingsOutline />}>Settings</SimpleCell>
      </Group>
    </>
  );
};
