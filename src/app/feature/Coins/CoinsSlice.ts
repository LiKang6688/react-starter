import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export interface Coin {
  id?: number;
  name?: string;
  website?: string;
}

interface CoinState {
  coins: Coin[];
}

const initialState: CoinState = {
  coins: [],
};

export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    addNewCoin: (state, action) => {
      state.coins.push({
        id: state.coins.length,
        name: action.payload.name,
        website: action.payload.website,
      });
    },
    // updateCoin:
    // deleteCoin:
  },
});

export const { addNewCoin } = coinsSlice.actions;

export default coinsSlice.reducer;

export const selectCoins = (state: RootState) => state.coins.coins;
