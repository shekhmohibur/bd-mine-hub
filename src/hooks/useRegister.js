import { useMutation } from "@tanstack/react-query";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import toast from "react-hot-toast";

import { auth } from "@/firebase/firebase.config";

export default function useRegister() {
  return useMutation({
    mutationFn: async ({
      username,
      email,
      password,
    }) => {
      const result =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await updateProfile(result.user, {
        displayName: username,
      });

      return result.user;
    },

    onSuccess: () => {
      toast.success(
        "Welcome to BD Mine Hub!"
      );
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
}