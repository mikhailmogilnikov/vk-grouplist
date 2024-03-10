import { configureStore } from '@reduxjs/toolkit';
import { grouplistReducer } from '@/widgets/grouplist/model/grouplist.slice';
import { routerReducer } from './router.slice';

export const store = configureStore({
  reducer: {
    router: routerReducer,
    grouplist: grouplistReducer,
  },
});
