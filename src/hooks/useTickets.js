import { useQuery } from "@tanstack/react-query";
import { tickets } from "@/data/mock/tickets";

export default function useTickets() {
  return useQuery({
    queryKey: ["tickets"],

    queryFn: async () => tickets,
  });
}