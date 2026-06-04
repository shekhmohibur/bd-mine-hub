import { formatNumber } from "@/utils/formatNumber";
import { useTranslation } from "react-i18next";
export default function TopVoterRow({
  voter,
  index,
}) {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="w-4 text-zinc-500">
          {index + 1}
        </span>

        <img
          src={`https://mc-heads.net/avatar/${voter.username}`}
          alt={voter.username}
          className="h-8 w-8 rounded-md"
        />

        <div>
          <h4 className="font-semibold">
            {voter.username}
          </h4>

          <p className="text-xs text-zinc-500">
            {formatNumber(voter.votes, i18n.language)} {t("network.votes")}
          </p>
        </div>
      </div>

      <span className="rounded bg-emerald-500/10 px-2 py-1 text-xs font-bold text-emerald-400">
        #{index + 1}
      </span>
    </div>
  );
}