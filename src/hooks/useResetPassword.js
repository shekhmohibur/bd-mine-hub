import { useMutation } from "@tanstack/react-query";
import { sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";

import { auth } from "@/firebase/firebase.config";

export default function useResetPassword() {
  return useMutation({
    mutationFn: async (email) => {
      return await sendPasswordResetEmail(
        auth,
        email
      );
    },

    onSuccess: () => {
      toast.success(
        "Password reset email sent"
      );
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
}