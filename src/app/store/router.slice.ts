import { createSlice } from '@reduxjs/toolkit';
import { EPanelRoutes } from '@/shared/model/types/routes.enum';

const initialState = {
  activePanel: EPanelRoutes.GROUPS,
  activeModal: null,
};

const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    setActivePanel: (state, { payload }) => {
      state.activePanel = payload;
    },
    setActiveModal: (state, { payload }) => {
      state.activeModal = payload;
    },
  },
});

export const { reducer: routerReducer } = routerSlice;
