import { RichCell } from '@vkontakte/vkui';
import { useTranslation } from 'react-i18next';
import { getGroupVisibility } from '../lib/get-group-visibility';
import { Group } from '../model/types/group.type';
import { GroupAvatar } from './avatar';
import { FriendsStack } from './friends';

type Props = {
  data: Group;
};

export const GroupCell = ({ data }: Props) => {
  const [t] = useTranslation();

  const groupVisibilityType = getGroupVisibility(data.closed);
  const groupVisibility = t(`groups.visibility.${groupVisibilityType}`);

  const subscribers = t('groups.members.t', { count: data.members_count });

  return (
    <RichCell
      before={<GroupAvatar color={data.avatar_color} />}
      caption={subscribers}
      afterCaption={groupVisibility}
      bottom={data.friends && <FriendsStack friends={data.friends} />}
    >
      {data.name}
    </RichCell>
  );
};
