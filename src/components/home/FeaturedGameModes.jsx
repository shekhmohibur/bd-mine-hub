import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import GameModeCard from "@/components/shared/GameModeCard";
import { gameModes } from "@/data/gameModes";
console.log(gameModes);
export default function FeaturedGameModes() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 mx-auto max-w-350 px-4">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-emerald-400">
              {t("gamemodes.tag")}
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              {t("gamemodes.title")}
            </h2>
          </div>

          <p className="max-w-md text-zinc-400">{t("gamemodes.description")}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {gameModes.map((mode, index) => ( 
            <motion.div
              key={mode.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
            >
<GameModeCard
  title={t(`gamemodes.${mode.key}.title`)}
  description={t(`gamemodes.${mode.key}.description`)}
  badge={t(`gamemodes.${mode.key}.badge`)}
  image={mode.image}
  href={mode.href}
  badgeIcon={mode.badgeIcon}
  badgeColor={mode.badgeColor}
/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
