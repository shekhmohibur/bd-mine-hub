import { Menu } from "lucide-react";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../common/LanguageSwitcher";
import DashboardUserDropdown from "./DashboardUserDropdown";
export default function DashboardTopbar({ setMobileOpen }) {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const titleMap = {
    "/dashboard": t("dashboard.dashboard"),

    "/dashboard/profile": t("dashboard.profile"),

    "/dashboard/vote-history": t("dashboard.voteHistory"),

    "/dashboard/settings": t("dashboard.settings"),
  };

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0B0B0B]/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <button onClick={() => setMobileOpen(true)} className="lg:hidden">
            <Menu />
          </button>

          <h2 className="text-xl font-bold">{titleMap[pathname]}</h2>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <DashboardUserDropdown />
        </div>
      </div>
    </header>
  );
}
