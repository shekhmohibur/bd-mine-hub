import {
  Home,
  Swords,
  CheckCheck,
  ShoppingBag,
  Users,
  User,
  Shield,
  Trophy,
  Settings,
  Ticket,
} from "lucide-react";

export const navLinks = [
  {
    key: "home",
    path: "/",
    icon: Home,
  },
  {
    key: "gamemodes",
    path: "/gamemodes",
    icon: Swords,
  },
  {
    key: "vote",
    path: "/vote",
    icon: CheckCheck,
  },
  {
    key: "store",
    path: "/store",
    icon: ShoppingBag,
  },
  {
    key: "community",
    path: "/community",
    icon: Users,
  },
];

export const userLinks = [
  {
    key: "dashboard",
    path: "/dashboard",
    icon: Shield,
  },
  {
    key: "profile",
    path: "dashboard/profile",
    icon: User,
  },
  {
    key: "voteRewards",
    path: "dashboard/vote-rewards",
    icon: Trophy,
  },
  {
    key: "support",
    path: "dashboard/support",
    icon: Ticket,
  },
  {
    key: "settings",
    path: "dashboard/settings",
    icon: Settings,
  },
];