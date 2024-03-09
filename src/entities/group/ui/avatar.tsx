import { Avatar } from '@vkontakte/vkui';

type Props = {
  color: string | undefined;
};

export const GroupAvatar = ({ color }: Props) => {
  return (
    <Avatar
      size={100}
      gradientColor='custom'
      style={{ background: `${color}` }}
    />
  );
};
