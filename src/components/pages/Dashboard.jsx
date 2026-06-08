import {
  Trophy,
  Gift,
  BarChart3,
} from "lucide-react";

import { useTranslation } from "react-i18next";
import DashboardPageHeader from "../dashboard/DashboardPageHeader";
import DashboardStatCard from "../dashboard/DashboardStatCard";
import DashboardSectionCard from "../dashboard/DashboardSectionCard";

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <>
      <DashboardPageHeader
        title={t("dashboard.title")}
        description={t(
          "dashboard.subtitle"
        )}
      />

      <div className="grid gap-4 md:grid-cols-3">
        <DashboardStatCard
          icon={Trophy}
          title={t(
            "dashboard.totalVotes"
          )}
          value="156"
        />

        <DashboardStatCard
          icon={Gift}
          title={t(
            "dashboard.voteKeys"
          )}
          value="24"
          color="yellow"
        />

        <DashboardStatCard
          icon={BarChart3}
          title={t("dashboard.rank")}
          value="#42"
          color="cyan"
        />
      </div>

      <DashboardSectionCard className="mt-6">
        <h3 className="mb-4 text-xl font-bold">
          {t(
            "dashboard.recentActivity"
          )}
        </h3>

        <div className="space-y-3">
          <div className="rounded-xl bg-[#171E2E] p-4">
            Received Vote Key
          </div>

          <div className="rounded-xl bg-[#171E2E] p-4">
            Voted on Minecraft MP
          </div>

          <div className="rounded-xl bg-[#171E2E] p-4">
            Opened Vote Machine
          </div>
        </div>
      </DashboardSectionCard>
    </>
  );
}