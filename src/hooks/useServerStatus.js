import {
  useEffect,
  useState,
} from "react";

import { socket } from "@/lib/socket";

export default function useServerStatus() {
  const [status, setStatus] =
    useState(null);

  useEffect(() => {
    socket.on(
      "serverStatus",
      (data) => {
        setStatus(data);
      }
    );

    return () => {
      socket.off(
        "serverStatus"
      );
    };
  }, []);

  return status;
}