import {
  Globe,
  Star,
  TrendingUp,
  ShieldCheck,
  LayoutGrid,
  Earth,
} from "lucide-react";

export const voteSites = [
  {
    id: 1,
    key: "minecraftmp",
    icon: Earth,
    cooldown: "15H",
    color: "green",
    url: "https://minecraft-mp.com/server/358766/vote/",
  },
  {
    id: 2,
    key: "planetminecraft",
    icon: Globe,
    cooldown: "24H",
    color: "blue",
    url: "https://www.planetminecraft.com/server/bd-mine-hub/vote/",
  },
  {
    id: 3,
    key: "craftlist",
    icon: Star,
    cooldown: "12H",
    color: "yellow",
    url: "https://craftlist.org/bdminehub#vote",
  },
  {
    id: 4,
    key: "topg",
    icon: TrendingUp,
    cooldown: "12H",
    color: "green",
    url: "https://topg.org/minecraft-servers/server-682841#vote",
  },
  {
    id: 5,
    key: "minecraftpocketservers",
    icon: LayoutGrid,
    cooldown: "12H",
    color: "blue",
    url: "https://minecraftpocket-servers.com/server/133450/vote/",
  }
];