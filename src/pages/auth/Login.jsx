import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import AuthCard from "@/components/auth/AuthCard";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import GoogleButton from "@/components/shared/GoogleButton";

import useLogin from "@/hooks/useLogin";
import useGoogleLogin from "@/hooks/useGoogleLogin";

export default function Login() {
  const { t } = useTranslation();

  const [showPassword, setShowPassword] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginMutation = useLogin();
  const googleMutation = useGoogleLogin();

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[50px_50px]" />
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[150px]" />

      <AuthCard>
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black text-white">
            <span className="text-emerald-400">BD</span> MINE HUB
          </h1>

          <p className="mt-3 text-zinc-400">
            {t("auth.subtitle")}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <Input
            label={t("auth.email")}
            name="email"
            type="email"
            placeholder={t(
              "auth.emailPlaceholder"
            )}
            register={register}
            error={errors.email}
          />

          {/* Password */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {t("auth.password")}
            </label>

            <div className="relative">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder={t(
                  "auth.passwordPlaceholder"
                )}
                {...register("password")}
                className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#0F1720]
                  px-4
                  pr-12
                  outline-none
                  transition
                  focus:border-emerald-400
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                "
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="
                text-sm
                text-emerald-400
                hover:text-emerald-300
              "
            >
              {t("auth.forgotPassword")}
            </Link>
          </div>

          <Button
            type="submit"
            loading={loginMutation.isPending}
          >
            {t("auth.login")}
          </Button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />

          <span className="text-xs text-zinc-500">
            OR
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Google Login */}
        <GoogleButton
          loading={googleMutation.isPending}
          onClick={() =>
            googleMutation.mutate()
          }
        />

        {/* Register */}
        <p className="mt-8 text-center text-sm text-zinc-400">
          {t("auth.dontHaveAccount")}{" "}
          <Link
            to="/register"
            className="font-semibold text-emerald-400"
          >
            {t("auth.signup")}
          </Link>
        </p>
      </AuthCard>
    </section>
  );
}