import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";

import { auth, googleProvider } from "@/firebase/firebase.config";

export default function useGoogleLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const result =
        await signInWithPopup(
          auth,
          googleProvider
        );

      return result.user;
    },

    onSuccess: (user) => {
      queryClient.setQueryData(
        ["auth-user"],
        user
      );

      toast.success(
        "Welcome back to BD Mine Hub"
      );
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
}