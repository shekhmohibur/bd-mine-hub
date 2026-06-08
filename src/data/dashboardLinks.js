import {
  LayoutDashboard,
  User,
  Trophy,
  Gift,
  LifeBuoy,
  Settings,
  Crown,
  Shield,
  BarChart3,
} from "lucide-react";

export const getDashboardLinks = (
  role = "player"
) => {
  const playerLinks = [
    {
      key: "dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },

    {
      key: "profile",
      path: "/dashboard/profile",
      icon: User,
    },

    {
      key: "voteHistory",
      path: "/dashboard/vote-history",
      icon: Trophy,
    },

    {
      key: "rewards",
      path: "/dashboard/rewards",
      icon: Gift,
    },

    {
      key: "support",
      path: "/dashboard/support",
      icon: LifeBuoy,
    },
  ];

  if (
    ["admin", "owner"].includes(role)
  ) {
    playerLinks.push({
      key: "analytics",
      path: "/dashboard/analytics",
      icon: BarChart3,
    });

    playerLinks.push({
      key: "staff",
      path: "/dashboard/staff",
      icon: Shield,
    });
  }

  if (role === "owner") {
    playerLinks.push({
      key: "serverManager",
      path: "/dashboard/server-manager",
      icon: Crown,
    });
  }

  playerLinks.push({
    key: "settings",
    path: "/dashboard/settings",
    icon: Settings,
  });

  return playerLinks;
};