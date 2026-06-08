import { useState } from "react";
import { motion } from "framer-motion";
import { User, Languages, Bell } from "lucide-react";
import { useTranslation } from "react-i18next";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import DashboardSectionCard from "@/components/dashboard/DashboardSectionCard";

import AccountSettings from "@/components/settings/AccountSettings";
import LanguageSettings from "@/components/settings/LanguageSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";

export default function Settings() {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] =
    useState("account");

  const tabs = [
    {
      key: "account",
      label: t("settings.account"),
      icon: User,
    },
    {
      key: "language",
      label: t("settings.language"),
      icon: Languages,
    },
    {
      key: "notifications",
      label: t("settings.notifications"),
      icon: Bell,
    },
  ];

  return (
    <>
      <DashboardPageHeader
        title={t("settings.title")}
        description={t(
          "settings.description"
        )}
      />

      <div className="grid gap-6 lg:grid-cols-[250px_1fr]">
        {/* Sidebar */}
        <DashboardSectionCard>
          <div className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.key}
                  onClick={() =>
                    setActiveTab(tab.key)
                  }
                  className={`
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    transition

                    ${
                      activeTab === tab.key
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  <Icon size={18} />

                  {tab.label}
                </button>
              );
            })}
          </div>
        </DashboardSectionCard>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          {activeTab === "account" && (
            <AccountSettings />
          )}

          {activeTab === "language" && (
            <LanguageSettings />
          )}

          {activeTab ===
            "notifications" && (
            <NotificationSettings />
          )}
        </motion.div>
      </div>
    </>
  );
}