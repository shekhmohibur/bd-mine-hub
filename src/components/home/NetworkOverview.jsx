import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import CountUp from "../ui/CountUp";
import { useTranslation } from "react-i18next";
import { useNetworkStats } from "@/hooks/useNetworkStats";
import { useTopVoters } from "@/hooks/useTopVoters";
import { formatNumber } from "@/utils/formatNumber";
export default function NetworkOverview() {
  const { data: stats } = useNetworkStats();
  const { data: voters = [] } = useTopVoters();
  const { t, i18n } = useTranslation();

  const rankStyles = [
    "ring-2 ring-yellow-400/70",
    "ring-2 ring-zinc-300/70",
    "ring-2 ring-amber-700/70",
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[50px_50px]" />

      <div className="relative z-10 mx-auto max-w-350 px-4">
        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          {/* Network Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-emerald-500/20 bg-linear-to-br from-[#121826] to-[#0F1420] p-6 backdrop-blur-xl"
          >
            <div className="mb-10 flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
                {t("network.status")}
              </h3>

              <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
                <div className="relative">
                  <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <span className="text-xs font-bold tracking-wider text-emerald-400">
                  {t("network.live")}
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-5xl font-black text-emerald-400">
                <CountUp
                  key={i18n.language}
                  from={0}
                  to={stats?.onlinePlayers || 0}
                  locale={i18n.language === "bn" ? "bn-BD" : "en-US"}
                  duration={2}
                />
              </h2>

              <p className="mt-3 text-lg text-zinc-300">
                {t("network.playersOnline")}
              </p>

              <p>
                {formatNumber(stats?.onlinePlayers || 0, i18n.language)}
                {" / "}
                {formatNumber(stats?.maxPlayers || 0, i18n.language)}
              </p>
            </div>

            <div className="mt-10 h-3 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${Math.min(
                    ((stats?.onlinePlayers || 0) /
                      (stats?.maxPlayers || 5000)) *
                      100,
                    100,
                  )}%`,
                }}
                transition={{
                  duration: 1.8,
                }}
                className="h-full bg-linear-to-r from-cyan-400 via-emerald-400 to-green-400"
              />
            </div>
          </motion.div>

          {/* Top Voters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-3xl border border-emerald-500/20 bg-linear-to-br from-[#121826] to-[#0F1420] p-6 backdrop-blur-xl"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Trophy size={22} className="text-yellow-400" />

                <h3 className="text-2xl font-bold md:text-3xl">
                  {t("network.topVoters")}
                </h3>
              </div>

              <button className="text-sm font-semibold text-emerald-400 transition hover:text-emerald-300">
                {t("network.viewAll")}
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {voters.map((voter, index) => (
                <motion.div
                  key={voter.id}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className={`
                    relative
                    rounded-2xl
                    bg-[#171E2E]
                    p-5
                    text-center
                    shadow-lg
                    transition-all
                    duration-300
                    hover:bg-[#1B2436]
                    hover:shadow-emerald-500/10
                    ${rankStyles[index] || ""}
                  `}
                >
                  {index < 3 && (
                    <div className="absolute right-3 top-3 rounded-full bg-yellow-400 px-2 py-1 text-xs font-bold text-black">
                      #{index + 1}
                    </div>
                  )}

                  <div className="mx-auto mb-4 h-16 w-16 overflow-hidden rounded-xl">
                    <img
                      src={`https://mc-heads.net/avatar/${voter.username}`}
                      alt={voter.username}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h4 className="truncate font-bold text-white">
                    {voter.username}
                  </h4>

                  <p className="mt-2 text-sm font-semibold text-yellow-400">
                    {formatNumber(voter.votes, i18n.language)}{" "}
                    {t("network.votes")}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
