import { Icon24Cancel, Icon24Done } from '@vkontakte/icons';
import {
  ModalPageHeader,
  PanelHeaderButton,
  usePlatform,
} from '@vkontakte/vkui';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const ModalHeaderWithAction = ({ onClick, children }: Props) => {
  const platform = usePlatform();

  return (
    <ModalPageHeader
      before={
        <>
          {(platform === 'android' || platform === 'vkcom') && (
            <PanelHeaderButton onClick={onClick}>
              <Icon24Cancel />
            </PanelHeaderButton>
          )}
        </>
      }
      after={
        <>
          {(platform === 'android' || platform === 'vkcom') && (
            <PanelHeaderButton onClick={onClick}>
              <Icon24Done />
            </PanelHeaderButton>
          )}
          {platform === 'ios' && (
            <PanelHeaderButton onClick={onClick}>Готово</PanelHeaderButton>
          )}
        </>
      }
    >
      {children}
    </ModalPageHeader>
  );
};
