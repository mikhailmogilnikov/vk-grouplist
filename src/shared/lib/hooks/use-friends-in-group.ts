import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../model/types/user.type';

export const useFriendsInModal = () => {
  const dispatch = useDispatch();

  const friends = useSelector(
    (state: RootState) => state.grouplist.friendsInModal,
  );

  const setFriendsInModal = (friends: User[]) => {
    dispatch({
      type: 'grouplist/setFriendsInModal',
      payload: friends,
    });
  };

  return {
    friends,
    setFriendsInModal,
  };
};
