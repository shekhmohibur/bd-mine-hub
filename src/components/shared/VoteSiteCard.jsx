import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function VoteSiteCard({ site }) {
  const { t } = useTranslation();

  const Icon = site.icon;

  const buttonStyles = {
    green:
      "bg-emerald-400 text-black hover:bg-emerald-300",
    blue:
      "border border-sky-400 text-sky-300 hover:bg-sky-400/10",
    yellow:
      "border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10",
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-xl border border-white/10 bg-[#151D2D] p-5"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="rounded-lg bg-white/5 p-3">
          <Icon size={18} />
        </div>

        <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400">
          {site.cooldown} {t("vote.cooldown")}
        </div>
      </div>

      <h3 className="text-2xl font-bold">
        {t(`vote.sites.${site.key}.name`)}
      </h3>

      <p className="mt-2 text-zinc-400">
        {t(`vote.sites.${site.key}.description`)}
      </p>

      <a
        href={site.url}
        target="_blank"
        rel="noreferrer"
        className={`mt-6 flex justify-center rounded-lg px-4 py-3 font-bold transition ${buttonStyles[site.color]}`}
      >
        {t("vote.voteNow")}
      </a>
    </motion.div>
  );
}