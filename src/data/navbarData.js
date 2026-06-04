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
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "Game Modes",
    path: "/gamemodes",
    icon: Swords,
  },
  {
    name: "Vote",
    path: "/vote",
    icon: CheckCheck,
  },
  {
    name: "Store",
    path: "/store",
    icon: ShoppingBag,
  },
  {
    name: "Community",
    path: "/community",
    icon: Users,
  },
];

export const userLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: Shield,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    name: "Vote Rewards",
    path: "/vote-rewards",
    icon: Trophy,
  },
  {
    name: "Support",
    path: "/support",
    icon: Ticket,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];