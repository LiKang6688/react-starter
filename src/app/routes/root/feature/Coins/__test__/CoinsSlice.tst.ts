import store from "../../../../../store";
import { addNewCoin } from "../CoinsSlice";

test("Adds a new coin", () => {
  let state = store.getState().coins;
  const initialCoinsCount = state.coins.length;

  store.dispatch(addNewCoin({ name: "Tester", website: "Testers manual" }));
  state = store.getState().coins;
  const newlyAddedCoin = state.coins.find((coin) => coin.id === 1);
  expect(newlyAddedCoin?.name).toBe("Tester");
  expect(newlyAddedCoin?.website).toBe("Testers manual");
  expect(state.coins.length).toBeGreaterThan(initialCoinsCount);
});
