import { useQuery } from "@tanstack/react-query";

export const useTopVoters = () => {
  return useQuery({
    queryKey: ["top-voters"],
    queryFn: async () => {
      return [
        {
          id: 1,
          username: "Alex Gamer",
          votes: 42,
        },
        {
          id: 2,
          username: "Steve10",
          votes: 38,
        },
        {
          id: 3,
          username: "MineMaster",
          votes: 31,
        },
        {
          id: 4,
          username: "CraftyNet",
          votes: 29,
        },
      ];
    },
  });
};