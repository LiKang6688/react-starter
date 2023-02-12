import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import coinsReducer from "./feature/Coins/CoinsSlice";
import counterReducer from "./feature/Counter/CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    coins: coinsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

