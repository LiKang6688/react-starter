import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import Coins from "./feature/Coins/Coins";
import Counter from "./feature/Counter/Counter";

if (process.env.NODE_ENV === "development") {
  if (typeof process !== "undefined") {
    // run in node
    const module = await import("../mocks/node");
    const server = module.default;
    server.listen();
  } else {
    // run in browser
    const module = await import("../mocks/browser");
    const worker = module.default;
    worker.start();
  }
}

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Counter />
      <Coins />
    </QueryClientProvider>
  );
}

export default App;
