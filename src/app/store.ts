import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import SwitcherStateSlice from "./actions/switcherHandler";

export const store = configureStore({
  reducer: {
    SwitcherR: SwitcherStateSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
