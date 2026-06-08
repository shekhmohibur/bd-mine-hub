import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

export default function useProfile() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["profile", user?.uid],

    enabled: !!user,

    queryFn: async () => ({
      uid: user.uid,

      username:
        user.displayName || "Player",

      email: user.email,

      role: "Player",

      totalVotes: 156,

      voteKeys: 24,

      rank: "#42",

      avatar:
        user.photoURL ||
        `https://mc-heads.net/avatar/${
          user.displayName || "Steve"
        }`,
    }),
  });
}