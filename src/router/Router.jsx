import { createBrowserRouter } from "react-router";

import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home";
import GameModes from "@/pages/GameModes";
import Vote from "@/pages/Vote";
import Store from "@/pages/Store";
import Community from "@/pages/Community";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import PublicRoute from "@/components/auth/PublicRoute";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardLayout from "@/layouts/DashboardLayout";
import Dashboard from "@/components/pages/Dashboard";
import Profile from "@/components/pages/Profile";
import VoteHistory from "@/components/pages/VoteHistory";
import Settings from "@/components/pages/Settings";
import Support from "@/components/pages/Support";

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
      {
        path:'/',
        Component: AuthLayout,
        children:[
            {
                path:'login',
                element:<PublicRoute><Login /></PublicRoute>
            },
            {
                path:'register',
                element:<PublicRoute><Register /></PublicRoute>
            },
            {
                path:'forgot-password',
                element:<PublicRoute><ForgotPassword /></PublicRoute>
            }
        ]
      }
    ],
  },
  {
  path: "/dashboard",
  element: (
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      index: true,
      Component:Dashboard,
    },
    {
      path: "profile",
      Component:Profile,
    },
    {
      path: "vote-history",
      Component:VoteHistory,
    },
    {
      path: "settings",
      Component:Settings,
    },
    {
      path: "support",
      Component:Support,
    },
  ],
}
]);

export default router;