import { useTranslation } from "react-i18next";

export default function VoteRewardTier({
  reward,
}) {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
      <span className={reward.color}>
        {t(`vote.rarities.${reward.key}`)}
      </span>

      <span className="font-bold text-white">
        {reward.chance}
      </span>
    </div>
  );
}