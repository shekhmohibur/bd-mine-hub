import { useQuery } from "@tanstack/react-query";

export const useNetworkStats = () => {
  return useQuery({
    queryKey: ["network-stats"],
    queryFn: async () => {
      return {
        onlinePlayers: 1,
        maxPlayers: 100,
      };
    },
  });
};