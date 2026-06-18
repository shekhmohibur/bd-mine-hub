import { useEffect, useState } from "react";
import api from "@/lib/axios";

const useTopVoters = () => {
  const [voters, setVoters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/top-voters")
      .then((res) => {
        setVoters(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    voters,
    loading,
  };
};

export default useTopVoters;
