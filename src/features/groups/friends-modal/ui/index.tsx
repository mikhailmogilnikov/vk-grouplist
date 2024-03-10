import { Group, ModalPageHeader } from '@vkontakte/vkui';
import { useTranslation } from 'react-i18next';
import { UserCell } from '@/entities/user';
import { useFriendsInModal } from '@/shared/lib/hooks/use-friends-in-group';

export const GroupFriendsModal = () => {
  const [t] = useTranslation();
  const { friends } = useFriendsInModal();

  return (
    <>
      <ModalPageHeader>{t('groups.friends_modal.title')}</ModalPageHeader>
      <Group>
        {friends.map((friend, index) => (
          <UserCell key={index} data={friend} />
        ))}
      </Group>
    </>
  );
};
