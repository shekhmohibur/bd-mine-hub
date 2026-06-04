import { motion } from "framer-motion";
import { MessageSquareMore, ShieldCheck, BadgeCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CommunityCTA() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[50px_50px]" />

      <div className="relative z-10 mx-auto max-w-350 px-4">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-linear-to-r from-[#181818] via-[#1B1B1B] to-[#1F2420]">
          <div className="grid gap-10 p-8 lg:grid-cols-[1fr_340px] lg:p-12">
            {/* Left */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-black md:text-5xl"
              >
                {t("community.title")}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-5 max-w-2xl text-lg text-zinc-400"
              >
                {t("community.description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="https://discord.gg/muE9Z5xF2X"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400"
                >
                  <MessageSquareMore size={18} />
                  {t("community.joinDiscord")}
                </a>

                <a
                  href="/support"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-6 py-3 font-semibold transition hover:bg-white/5"
                >
                  <ShieldCheck size={18} />
                  {t("community.supportCenter")}
                </a>
              </motion.div>
            </div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, rotate: 4, x: 40 }}
              whileInView={{ opacity: 1, rotate: 3, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-emerald-500/10 bg-[#18212F] p-6 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/10 p-3">
                  <BadgeCheck className="text-emerald-400" size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-300">
                    {t("community.memberOfMonth")}
                  </p>

                  <p className="font-bold text-emerald-400">
                    {t("community.memberName")}
                  </p>
                </div>
              </div>

              <p className="mt-5 italic leading-relaxed text-zinc-400">
                "{t("community.testimonial")}"
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
