import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";

import useProfile from "@/hooks/useProfile";

export default function AccountSettings() {
  const { t } = useTranslation();

  const { data: profile } =
    useProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      username:
        profile?.username || "",
      email: profile?.email || "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#151D2D] p-6">
      <h3 className="mb-6 text-xl font-bold">
        {t("settings.account")}
      </h3>

      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="space-y-4"
      >
        <Input
          label={t(
            "settings.username"
          )}
          name="username"
          register={register}
          error={errors.username}
        />

        <Input
          label={t(
            "settings.email"
          )}
          name="email"
          register={register}
          error={errors.email}
        />

        <Button type="submit">
          {t("settings.save")}
        </Button>
      </form>
    </div>
  );
}