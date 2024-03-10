import { useDispatch, useSelector } from 'react-redux';
import { EAvatarColor } from '@/entities/group/model/types/group.type';
import {
  EGroupFilterFriendsInGroup,
  EGroupFilterPrivateType,
} from '../model/filters.enum';

export const useGroupFilters = () => {
  const dispatch = useDispatch();

  const { privateType, avatarColor, friendsInGroup } = useSelector(
    (state: RootState) => state.grouplist.filters,
  );

  const setPrivateType = (
    incomingPrivateType: EGroupFilterPrivateType | null,
  ) => {
    dispatch({
      type: 'grouplist/setFilterPrivateType',
      payload: incomingPrivateType,
    });
  };

  const setAvatarColor = (incomingAvatarColor: EAvatarColor[]) => {
    dispatch({
      type: 'grouplist/setFilterAvatarColor',
      payload: incomingAvatarColor,
    });
  };

  const setFriendsInGroup = (
    incomingFriendsInGroup: EGroupFilterFriendsInGroup,
  ) => {
    dispatch({
      type: 'grouplist/setFilterFriendsInGroup',
      payload: incomingFriendsInGroup,
    });
  };

  return {
    privateType,
    avatarColor,
    friendsInGroup,
    setPrivateType,
    setAvatarColor,
    setFriendsInGroup,
  };
};
