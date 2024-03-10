import {
  Button,
  Checkbox,
  FormItem,
  FormLayoutGroup,
  Group,
  Radio,
  RadioGroup,
} from '@vkontakte/vkui';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { EAvatarColor } from '@/entities/group/model/types/group.type';
import {
  EGroupFilterFriendsInGroup,
  EGroupFilterNames,
  EGroupFilterPrivateType,
} from '../model/filters.enum';

type Props = {
  onSubmit?: () => void;
  filtersController: {
    privateTypeValue: EGroupFilterPrivateType;
    setPrivateTypeValue: Dispatch<SetStateAction<EGroupFilterPrivateType>>;
    avatarColorValue: EAvatarColor[];
    setAvatarColorValue: Dispatch<SetStateAction<EAvatarColor[]>>;
    friendsInGroupValue: EGroupFilterFriendsInGroup;
    setFriendsInGroupValue: Dispatch<
      SetStateAction<EGroupFilterFriendsInGroup>
    >;
  };
};

export const FiltersModalForm = ({ onSubmit, filtersController }: Props) => {
  const [t] = useTranslation();

  const {
    privateTypeValue,
    setPrivateTypeValue,
    avatarColorValue,
    setAvatarColorValue,
    friendsInGroupValue,
    setFriendsInGroupValue,
  } = filtersController;

  const handleChangeState = (e) => {
    switch (e.target.name) {
      case EGroupFilterNames.PRIVATE_TYPE: {
        setPrivateTypeValue(e.target.value);
        break;
      }
      case EGroupFilterNames.AVATAR_COLOR: {
        if (avatarColorValue.includes(e.target.value)) {
          const newColorCollection = avatarColorValue.filter(
            (color) => color !== e.target.value,
          );
          setAvatarColorValue(newColorCollection);
        } else {
          setAvatarColorValue([...avatarColorValue, e.target.value]);
        }
        break;
      }
      case EGroupFilterNames.FRIENDS_IN_GROUP: {
        setFriendsInGroupValue(e.target.value);
        break;
      }
      default:
        return;
    }
  };

  return (
    <Group>
      <FormLayoutGroup>
        <FormItem top={t('groups.filters.form.private_type.title')}>
          <RadioGroup>
            {Object.values(EGroupFilterPrivateType).map((type) => (
              <Radio
                key={type}
                name={EGroupFilterNames.PRIVATE_TYPE}
                value={type}
                checked={privateTypeValue === type}
                onChange={handleChangeState}
              >
                {t(`groups.filters.form.private_type.${type}`)}
              </Radio>
            ))}
          </RadioGroup>
        </FormItem>
        <FormItem top={t('groups.filters.form.avatar_color.title')}>
          {Object.values(EAvatarColor).map((color) => (
            <Checkbox
              key={color}
              name={EGroupFilterNames.AVATAR_COLOR}
              value={color}
              checked={avatarColorValue.includes(color)}
              onChange={handleChangeState}
            >
              {t(`groups.filters.form.avatar_color.${color}`)}
            </Checkbox>
          ))}
        </FormItem>
        <FormItem top={t('groups.filters.form.friends_in_group.title')}>
          <RadioGroup>
            {Object.values(EGroupFilterFriendsInGroup).map((type) => (
              <Radio
                key={type}
                name={EGroupFilterNames.FRIENDS_IN_GROUP}
                value={type}
                checked={friendsInGroupValue === type}
                onChange={handleChangeState}
              >
                {t(`groups.filters.form.friends_in_group.${type}`)}
              </Radio>
            ))}
          </RadioGroup>
        </FormItem>
        <FormItem>
          <Button onClick={onSubmit} type='submit' size='l' stretched>
            {t('groups.filters.submit_button')}
          </Button>
        </FormItem>
      </FormLayoutGroup>
    </Group>
  );
};
