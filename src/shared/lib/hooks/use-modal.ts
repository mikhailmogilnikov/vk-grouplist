import { useDispatch, useSelector } from 'react-redux';
import { EModalRoutes } from '../../model/types/routes.enum';

export const useModal = () => {
  const dispatch = useDispatch();

  const modal = useSelector((state: RootState) => state.router.activeModal);

  const setModal = (modalRoute: EModalRoutes | null) => {
    dispatch({
      type: 'router/setActiveModal',
      payload: modalRoute,
    });
  };

  return {
    modal,
    setModal,
  };
};
