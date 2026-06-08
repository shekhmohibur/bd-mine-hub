import { useQuery } from "@tanstack/react-query";

import { voteHistory } from "@/data/mock/voteHistory";

export default function useVoteHistory() {
  return useQuery({
    queryKey: ["vote-history"],

    queryFn: async () => voteHistory,
  });
}