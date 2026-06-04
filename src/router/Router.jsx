import { createBrowserRouter } from "react-router";

import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home";
import GameModes from "@/pages/GameModes";
import Vote from "@/pages/Vote";
import Store from "@/pages/Store";
import Community from "@/pages/Community";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "gamemodes",
        Component: GameModes,
      },
      {
        path: "vote",
        Component: Vote,
      },
      {
        path: "store",
        Component: Store,
      },
      {
        path: "community",
        Component: Community,
      },
    ],
  },
]);

export default router;