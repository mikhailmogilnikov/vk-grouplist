import { Tappable, UsersStack } from '@vkontakte/vkui';
import { useTranslation } from 'react-i18next';
import { FALLBACK_IMG_GRAY } from '@/shared/config';
import { User } from '@/shared/model/types/user.type';

type Props = {
  friends: User[];
  onClick?: () => void;
};

export const FriendsStack = ({ friends, onClick }: Props) => {
  const [t] = useTranslation();
  const friendsCount = friends.length;

  const avatars = friends.map(() => FALLBACK_IMG_GRAY);

  return (
    <Tappable onClick={onClick} style={{ padding: '3px 0' }}>
      <UsersStack photos={avatars} visibleCount={3}>
        {t('groups.friends.t', { count: friendsCount })}
      </UsersStack>
    </Tappable>
  );
};
