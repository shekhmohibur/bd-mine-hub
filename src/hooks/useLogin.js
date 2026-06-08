import { useMutation } from "@tanstack/react-query";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

import { auth } from "@/firebase/firebase.config";

export default function useLogin() {
  return useMutation({
    mutationFn: async ({
      email,
      password,
    }) => {
      const result =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      return result.user;
    },

    onSuccess: () => {
      toast.success("Welcome back to BD Mine Hub!");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
}