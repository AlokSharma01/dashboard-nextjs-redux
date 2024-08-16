import { configureStore } from '@reduxjs/toolkit';
import widgetsReducer from './slices/widgetsSlice';

const store = configureStore({
  reducer: {
    widgets: widgetsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
