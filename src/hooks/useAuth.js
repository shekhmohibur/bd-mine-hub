import { useQuery } from "@tanstack/react-query";

export const useAuth = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      // replace with api call later

      return {
        id: 1,
        username: "Najatul_Dev",
        avatar:
          "https://mc-heads.net/avatar/Najatul_Dev",
        role: "Prime",
      };

      // return null for guest
    },
  });
};