import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { queryClient } from "./lib/queryClient";
import Router from "./router/Router";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "./i18n";
import SocketProvider from "./provider/SocketProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SocketProvider>
        <RouterProvider router={Router}></RouterProvider>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </SocketProvider>
    </QueryClientProvider>
  </StrictMode>,
);
