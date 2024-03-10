import { configureStore } from '@reduxjs/toolkit';
import { routerReducer } from './router.slice';

export const store = configureStore({
  reducer: {
    router: routerReducer,
  },
});
