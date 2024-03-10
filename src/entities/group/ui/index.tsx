import { RichCell } from '@vkontakte/vkui';
import { useTranslation } from 'react-i18next';
import { useFriendsInModal } from '@/shared/lib/hooks/use-friends-in-group';
import { useModal } from '@/shared/lib/hooks/use-modal';
import { EModalRoutes } from '@/shared/model/types/routes.enum';
import { EGroupVisibility } from '../model/types/group-visibility.enum';
import { Group } from '../model/types/group.type';
import { GroupAvatar } from './avatar';
import { FriendsStack } from './friends';

type Props = {
  data: Group;
};

export const GroupCell = ({ data }: Props) => {
  const [t] = useTranslation();
  const { setModal } = useModal();
  const { setFriendsInModal } = useFriendsInModal();

  const handleClickFriendslist = () => {
    setFriendsInModal(data.friends);
    setModal(EModalRoutes.GROUP_FRIENDS);
  };

  const isClosedGroup = data.closed;

  const groupVisibilityType = isClosedGroup
    ? EGroupVisibility.PRIVATE
    : EGroupVisibility.PUBLIC;

  const groupVisibility = t(`groups.visibility.${groupVisibilityType}`);

  const subscribers = t('groups.members.t', { count: data.members_count });

  return (
    <RichCell
      before={<GroupAvatar color={data.avatar_color} />}
      caption={subscribers}
      afterCaption={groupVisibility}
      bottom={
        data.friends && (
          <FriendsStack
            friends={data.friends}
            onClick={handleClickFriendslist}
          />
        )
      }
    >
      {data.name}
    </RichCell>
  );
};
