import api from "@/lib/axios";

export const getJWT = async (user) => {
  const { data } =
    await api.post(
      "/auth/jwt",
      {
        email: user.email,
      },
    );

  return data;
};