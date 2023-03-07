import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./app/App";
import Bpp from "./app/Bpp";
import store from "./app/store";
import "./main.css";

if (process.env.NODE_ENV === "development") {
  if (typeof process !== "undefined") {
    // run in node
    const module = await import("./mocks/node");
    const server = module.default;
    server.listen();
  } else {
    // run in browser
    const module = await import("./mocks/browser");
    const worker = module.default;
    worker.start();
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bpp",
    element: <Bpp />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
