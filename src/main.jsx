import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { queryClient } from "./lib/queryClient";
import Router from "./router/Router";
import { QueryClientProvider } from "@tanstack/react-query";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router}></RouterProvider>
    </QueryClientProvider>
  </StrictMode>,
);
