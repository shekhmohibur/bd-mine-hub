import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
export default function GameModeCard({
  title,
  description,
  image,
  badge,
  badgeIcon: BadgeIcon,
  badgeColor = "emerald",
  href,
}) {
  const { t } = useTranslation();
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111827]"
    >
      {/* Image */}
      <div className="relative h-105 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        {/* Badge */}
        <div
          className={`
            mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold backdrop-blur-md
            ${
              badgeColor === "emerald"
                ? "bg-emerald-500/20 text-emerald-300"
                : badgeColor === "blue"
                  ? "bg-sky-500/20 text-sky-300"
                  : "bg-red-500/20 text-red-300"
            }
          `}
        >
          <BadgeIcon size={16} />
          {badge}
        </div>

        <h3 className="text-3xl font-black text-white">{title}</h3>

        <p className="mt-3 line-clamp-3 text-zinc-300">{description}</p>

        <Link
          to={href}
          className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white transition hover:border-emerald-400 hover:bg-emerald-400 hover:text-black"
        >
           {t("gamemodes.enterRealm")}
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.article>
  );
}
