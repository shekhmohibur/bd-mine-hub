import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import AuthCard from "@/components/auth/AuthCard";
import Input from "@/components/shared/Input";
import PasswordInput from "@/components/shared/PasswordInput";
import Button from "@/components/shared/Button";
import GoogleButton from "@/components/shared/GoogleButton";

import useRegister from "@/hooks/useRegister";
import useGoogleLogin from "@/hooks/useGoogleLogin";

import { registerSchema } from "@/schemas/registerSchema";

export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const registerMutation = useRegister();
  const googleMutation = useGoogleLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    registerMutation.mutate({
      username: data.username,
      email: data.email,
      password: data.password,
    });
  };

  useEffect(() => {
    if (registerMutation.isSuccess) {
      navigate("/dashboard");
    }
  }, [registerMutation.isSuccess, navigate]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[150px]" />

      <AuthCard>
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black text-emerald-400">
            BD MINE HUB
          </h1>

          <p className="mt-3 text-zinc-400">
            {t("auth.createAccount")}
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <Input
            label={t("auth.minecraftUsername")}
            name="username"
            placeholder="Steve"
            register={register}
            error={errors.username}
          />

          <Input
            label={t("auth.email")}
            name="email"
            type="email"
            placeholder={t("auth.emailPlaceholder")}
            register={register}
            error={errors.email}
          />

          <PasswordInput
            label={t("auth.password")}
            name="password"
            placeholder={t("auth.passwordPlaceholder")}
            register={register}
            error={errors.password}
          />

          <PasswordInput
            label={t("auth.confirmPassword")}
            name="confirmPassword"
            placeholder={t("auth.confirmPassword")}
            register={register}
            error={errors.confirmPassword}
          />

          <Button
            type="submit"
            loading={registerMutation.isPending}
          >
            {t("auth.createAccount")}
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-zinc-500">
            OR
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <GoogleButton
          loading={googleMutation.isPending}
          onClick={() => googleMutation.mutate()}
        />

        <p className="mt-8 text-center text-sm text-zinc-400">
          {t("auth.alreadyHaveAccount")}{" "}
          <Link
            to="/login"
            className="font-semibold text-emerald-400"
          >
            {t("auth.login")}
          </Link>
        </p>
      </AuthCard>
    </section>
  );
}