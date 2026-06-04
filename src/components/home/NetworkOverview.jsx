import { motion } from "framer-motion";
import { Trophy, User } from "lucide-react";
import { useNetworkStats } from "@/hooks/useNetworkStats";
import { useTopVoters } from "@/hooks/useTopVoters";
import { useTranslation } from "react-i18next";

export default function NetworkOverview() {
  const { data: stats } = useNetworkStats();
  const { data: voters = [] } = useTopVoters();
  const { t } = useTranslation();
  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-[350px_1fr]">
          {/* Network Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-emerald-500/20 bg-[#121826]/90 p-6 backdrop-blur-sm"
          >
            <div className="mb-10 flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                Network Status
              </h3>

              <div className="flex items-center gap-2 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-sm font-semibold">
                  LIVE
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-emerald-400">
                {stats?.onlinePlayers?.toLocaleString() ??
                  "0"}
              </h2>

              <p className="mt-2 text-lg text-zinc-300">
                Players Online Now
              </p>
            </div>

            <div className="mt-12 h-2 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${Math.min(
                    ((stats?.onlinePlayers || 0) /
                      (stats?.maxPlayers || 5000)) *
                      100,
                    100
                  )}%`,
                }}
                transition={{
                  duration: 1.5,
                }}
                className="h-full bg-linear-to-r from-cyan-400 to-emerald-400"
              />
            </div>
          </motion.div>

          {/* Top Voters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-emerald-500/20 bg-[#121826]/90 p-6 backdrop-blur-sm"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Trophy
                  size={20}
                  className="text-yellow-400"
                />

                <h3 className="text-3xl font-bold">
                  Top Voters
                </h3>
              </div>

              <button className="font-semibold text-emerald-400 transition hover:text-emerald-300">
                View All
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {voters.map((voter) => (
                <motion.div
                  key={voter.id}
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-xl bg-[#171E2E] p-5 text-center transition"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#20283A]">
                    {voter.avatar ? (
                      <img
                        src={voter.avatar}
                        alt={voter.username}
                        className="h-full w-full rounded-lg object-cover"
                      />
                    ) : (
                      <User
                        size={22}
                        className="text-emerald-400"
                      />
                    )}
                  </div>

                  <h4 className="font-bold text-white">
                    {voter.username}
                  </h4>

                  <p className="mt-1 font-semibold text-yellow-400">
                    {voter.votes} Votes
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