import { Avatar, RichCell, calcInitialsAvatarColor } from '@vkontakte/vkui';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { User } from '@/shared/model/types/user.type';

type Props = {
  data: User;
};

export const UserCell = ({ data }: Props) => {
  const [gradient, setGradient] = useState(null);

  useEffect(() => {
    const userId = _.uniqueId();
    const avatarColor = calcInitialsAvatarColor(userId);
    setGradient(avatarColor);
  }, []);

  const fullName = `${data.first_name} ${data.last_name}`;
  const initials = `${data.first_name[0]}${data.last_name[0]}`;

  return (
    <RichCell before={<Avatar initials={initials} gradientColor={gradient} />}>
      {fullName}
    </RichCell>
  );
};
