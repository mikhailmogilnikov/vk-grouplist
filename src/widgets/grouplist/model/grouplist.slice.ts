import { createSlice } from '@reduxjs/toolkit';
import {
  EGroupFilterFriendsInGroup,
  EGroupFilterPrivateType,
} from '@/features/groups/filters-modal/model/filters.enum';
import { EAvatarColor } from '@/entities/group/model/types/group.type';
import { User } from '@/shared/model/types/user.type';

const initialState: {
  friendsInModal: User[] | null;
  filters: {
    privateType: EGroupFilterPrivateType | null;
    avatarColor: EAvatarColor[];
    friendsInGroup: EGroupFilterFriendsInGroup;
  };
} = {
  friendsInModal: null,
  filters: {
    privateType: EGroupFilterPrivateType.ANY,
    avatarColor: [],
    friendsInGroup: EGroupFilterFriendsInGroup.ANY,
  },
};

const grouplistSlice = createSlice({
  name: 'grouplist',
  initialState,
  reducers: {
    setFriendsInModal: (state, { payload }) => {
      state.friendsInModal = payload;
    },
    setFilterPrivateType: (state, { payload }) => {
      state.filters.privateType = payload;
    },
    setFilterAvatarColor: (state, { payload }) => {
      state.filters.avatarColor = payload;
    },
    setFilterFriendsInGroup: (state, { payload }) => {
      state.filters.friendsInGroup = payload;
    },
  },
});

export const { actions, reducer: grouplistReducer } = grouplistSlice;
