import {
  Trophy,
  KeyRound,
  Flame,
  Coins,
  Mail,
  Shield,
  Calendar,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import { profile } from "@/data/mock/profile";
import DashboardPageHeader from "../dashboard/DashboardPageHeader";
import DashboardSectionCard from "../dashboard/DashboardSectionCard";
import DashboardStatCard from "../dashboard/DashboardStatCard";

export default function Profile() {
  const { t } = useTranslation();

  return (
    <>
      <DashboardPageHeader
        title={t("profile.title")}
        description={t(
          "profile.description"
        )}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Player Card */}

        <DashboardSectionCard className="lg:col-span-1">
          <div className="flex flex-col items-center text-center">
            <img
              src={profile.avatar}
              alt={profile.username}
              className="mb-4 h-24 w-24 rounded-2xl"
            />

            <h2 className="text-2xl font-black">
              {profile.username}
            </h2>

            <p className="mt-1 text-emerald-400">
              {profile.rank}
            </p>

            <div className="mt-6 w-full space-y-3">
              <div className="flex items-center gap-3 rounded-xl bg-[#171E2E] p-3">
                <Mail size={18} />
                {profile.email}
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-[#171E2E] p-3">
                <Calendar size={18} />
                {profile.joinedAt}
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-[#171E2E] p-3">
                <Shield size={18} />
                {profile.rank}
              </div>
            </div>
          </div>
        </DashboardSectionCard>

        {/* Stats */}

        <div className="grid gap-4 lg:col-span-2 md:grid-cols-2">
          <DashboardStatCard
            icon={Trophy}
            title="Total Votes"
            value={profile.totalVotes}
          />

          <DashboardStatCard
            icon={KeyRound}
            title="Vote Keys"
            value={profile.voteKeys}
            color="yellow"
          />

          <DashboardStatCard
            icon={Flame}
            title="Vote Streak"
            value={profile.voteStreak}
            color="cyan"
          />

          <DashboardStatCard
            icon={Coins}
            title="Eco Coins"
            value={profile.ecoCoins}
          />
        </div>
      </div>

      {/* Reward Statistics */}

      <DashboardSectionCard
        className="mt-6"
        title="Reward Statistics"
      >
        <div className="grid gap-4 md:grid-cols-5">
          {Object.entries(
            profile.rewards
          ).map(([key, value]) => (
            <div
              key={key}
              className="rounded-xl bg-[#171E2E] p-4 text-center"
            >
              <p className="capitalize text-zinc-400">
                {key}
              </p>

              <h3 className="mt-2 text-3xl font-black">
                {value}
              </h3>
            </div>
          ))}
        </div>
      </DashboardSectionCard>

      {/* Activity */}

      <DashboardSectionCard
        className="mt-6"
        title="Recent Activity"
      >
        <div className="space-y-3">
          {profile.recentActivity.map(
            (activity) => (
              <div
                key={activity.id}
                className="rounded-xl bg-[#171E2E] p-4"
              >
                {activity.text}
              </div>
            )
          )}
        </div>
      </DashboardSectionCard>
    </>
  );
}