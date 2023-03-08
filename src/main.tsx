import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Bpp from "./app/routes/bpp/Bpp";
import Root from "./app/routes/root/Root";
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/bpp",
    element: <Bpp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient} contextSharing>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
