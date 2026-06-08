import { useQuery } from "@tanstack/react-query";
import axiosPublic from "@/lib/axiosPublic";

export default function useCurrentUser() {
  return useQuery({
    queryKey: ["current-user"],

    queryFn: async () => {
      const token =
        localStorage.getItem("access-token");

      if (!token) return null;

      const { data } =
        await axiosPublic.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

      return data;
    },

    retry: false,
  });
}