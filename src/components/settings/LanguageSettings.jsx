import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../common/LanguageSwitcher";


export default function LanguageSettings() {
  const { t } = useTranslation();

  return (
    <div className="rounded-2xl border border-white/10 bg-[#151D2D] p-6">
      <h3 className="mb-4 text-xl font-bold">
        {t("settings.language")}
      </h3>

      <p className="mb-6 text-zinc-400">
        {t(
          "settings.languageDescription"
        )}
      </p>

      <LanguageSwitcher />
    </div>
  );
}