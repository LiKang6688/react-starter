import reactLogo from "@/assets/react.svg";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { increment } from "./CounterSlice";

function Counter() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-3xl font-bold underline">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Counter;
