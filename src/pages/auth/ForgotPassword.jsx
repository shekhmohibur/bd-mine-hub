import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import AuthCard from "@/components/auth/AuthCard";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";

import useResetPassword from "@/hooks/useResetPassword";

export default function ForgotPassword() {
  const { t } = useTranslation();

  const resetMutation = useResetPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    resetMutation.mutate(data.email);
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[50px_50px]" />
      <AuthCard>
        <h1 className="mb-2 text-center text-3xl font-black">
          {t("auth.forgotPassword")}
        </h1>

        <p className="mb-6 text-center text-zinc-400">
          {t("auth.resetDescription")}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label={t("auth.email")}
            name="email"
            type="email"
            register={register}
            error={errors.email}
            placeholder={t("auth.emailPlaceholder")}
          />

          <Button type="submit" loading={resetMutation.isPending}>
            {t("auth.sendReset")}
          </Button>
        </form>

        <Link to="/login" className="mt-6 block text-center text-emerald-400">
          {t("auth.login")}
        </Link>
      </AuthCard>
    </section>
  );
}
