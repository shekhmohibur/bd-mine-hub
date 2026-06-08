import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

import { auth } from "@/firebase/firebase.config";

export default function useLogout() {
  const logout = async () => {
    try {
      await signOut(auth);

      localStorage.removeItem("access-token");

      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return logout;
}
