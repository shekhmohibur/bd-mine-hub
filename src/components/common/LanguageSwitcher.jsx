import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} />

      <button
        onClick={() => changeLanguage("en")}
        className={`text-sm transition ${
          i18n.language === "en"
            ? "text-emerald-400"
            : "text-zinc-400"
        }`}
      >
        EN
      </button>

      <span className="text-zinc-600">|</span>

      <button
        onClick={() => changeLanguage("bn")}
        className={`text-sm transition ${
          i18n.language === "bn"
            ? "text-emerald-400"
            : "text-zinc-400"
        }`}
      >
        বাংলা
      </button>
    </div>
  );
}