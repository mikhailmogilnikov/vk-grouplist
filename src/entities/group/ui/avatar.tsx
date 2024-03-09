import { Icon56Users3Outline } from '@vkontakte/icons';
import { Avatar } from '@vkontakte/vkui';

type Props = {
  color: string | undefined;
};

export const GroupAvatar = ({ color }: Props) => {
  const fallback = color ? undefined : (
    <Icon56Users3Outline style={{ opacity: 0.5 }} />
  );

  return (
    <Avatar
      size={100}
      gradientColor='custom'
      fallbackIcon={fallback}
      style={{ background: `${color}` }}
    />
  );
};
