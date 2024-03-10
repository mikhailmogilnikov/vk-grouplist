import { useDispatch, useSelector } from 'react-redux';
import { EPanelRoutes } from '../../model/types/routes.enum';

export const usePanel = () => {
  const dispatch = useDispatch();

  const panel = useSelector((state: RootState) => state.router.activePanel);

  const setPanel = (panelRoute: EPanelRoutes) => {
    dispatch({
      type: 'router/setActivePanel',
      payload: panelRoute,
    });
  };

  return {
    panel,
    setPanel,
  };
};
