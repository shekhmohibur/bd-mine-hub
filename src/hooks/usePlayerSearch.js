import { useEffect, useState } from "react";
import api from "@/lib/axios";

export default function usePlayerSearch(query) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (!query.trim()) {
      setPlayers([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const res = await api.get(
          `/player-search?q=${query}`
        );

        setPlayers(res.data);
      } catch (err) {
        console.error(err);
      }
    }, 250);

    return () => clearTimeout(timeout);
  }, [query]);

  return players;
}