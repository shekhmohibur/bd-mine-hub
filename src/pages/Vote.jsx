import { Trophy, Gift } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import VoteSiteCard from "@/components/shared/VoteSiteCard";
import VoteRewardTier from "@/components/shared/VoteRewardTier";
import TopVoterRow from "@/components/shared/TopVoterRow";
import { voteSites } from "@/data/voteSites";
import { voteRewardTiers } from "@/data/voteRewardTiers";
import { useTopVoters } from "@/hooks/useTopVoters";
import { formatNumber } from "@/utils/formatNumber";
import CountUp from "@/components/ui/CountUp";

export default function Vote() {
  const { t, i18n } = useTranslation();

  const { data: topVoters = [] } = useTopVoters();
  const voteGoal = {
    current: 1234,
    target: 1500,
  };

  const progress = (voteGoal.current / voteGoal.target) * 100;

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[50px_50px]" />

      <div className="relative z-10 mx-auto max-w-350 px-4">
        <h2 className="text-4xl font-black lg:text-6xl">{t("vote.title")}</h2>

        <p className="mt-3 max-w-2xl text-zinc-400">{t("vote.description")}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* LEFT */}
          <div className="grid gap-4 md:grid-cols-2">
            {voteSites.map((site) => (
              <VoteSiteCard key={site.id} site={site} />
            ))}
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            {/* Rewards */}
            <div className="rounded-xl border border-white/10 bg-[#151D2D] p-5">
              <div className="mb-4 flex items-center gap-2">
                <Gift size={18} className="text-yellow-400" />
                <h3 className="font-bold">{t("vote.activeRewards")}</h3>
              </div>

              <div className="space-y-2">
                {voteRewardTiers.map((reward) => (
                  <VoteRewardTier key={reward.key} reward={reward} />
                ))}
              </div>
            </div>

            {/* Goal */}
            <div className="rounded-xl border border-white/10 bg-[#151D2D] p-5">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-400">
                {t("vote.serverGoal")}
              </h3>
              <div className="mb-2 flex justify-between">
                <CountUp
                  from={0}
                  to={voteGoal.current}
                  locale={i18n.language === "bn" ? "bn-BD" : "en-US"}
                  duration={2}
                />

                <CountUp
                  from={0}
                  to={voteGoal.target}
                  locale={i18n.language === "bn" ? "bn-BD" : "en-US"}
                  duration={2}
                />
              </div>
              <div className="h-2 rounded-full bg-zinc-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${progress}%`,
                  }}
                  className="h-full rounded-full bg-emerald-400"
                />
              </div>
              <p className="mt-2 text-right text-xs text-zinc-500">
                {formatNumber(Math.round(progress), i18n.language)}%
              </p>
            </div>

            {/* Top Voters */}
            <div className="rounded-xl border border-white/10 bg-[#151D2D] p-5">
              <div className="mb-5 flex items-center gap-2">
                <Trophy size={18} className="text-emerald-400" />

                <h3 className="font-bold">{t("vote.topVoters")}</h3>
              </div>

              <div className="space-y-4">
                {topVoters.map((voter, index) => (
                  <TopVoterRow
                    key={voter.username}
                    voter={voter}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Guide */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-300">
              <p>{t("vote.guide.step1")}</p>
              <p>{t("vote.guide.step2")}</p>
              <p>{t("vote.guide.step3")}</p>
              <p>{t("vote.guide.step4")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
