import { User } from '@/shared/model/types/user.type';

export interface Group {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: EAvatarColor;
  members_count: number;
  friends?: User[];
}

export enum EAvatarColor {
  RED = 'red',
  GREEN = 'green',
  YELLOW = 'yellow',
  BLUE = 'blue',
  PURPLE = 'purple',
  WHITE = 'white',
  UNDEFINED = 'undefined',
}
