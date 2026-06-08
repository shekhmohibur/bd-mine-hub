export default function VoteHistoryRow({
  vote,
}) {
  const rarityColors = {
    Common:
      "bg-zinc-500/10 text-zinc-300",

    Uncommon:
      "bg-emerald-500/10 text-emerald-400",

    Epic:
      "bg-purple-500/10 text-purple-400",

    Mythic:
      "bg-pink-500/10 text-pink-400",

    Legendary:
      "bg-yellow-500/10 text-yellow-400",
  };

  return (
    <tr className="border-b border-white/5">
      <td className="py-4">
        {vote.site}
      </td>

      <td>{vote.reward}</td>

      <td>{vote.date}</td>

      <td>
        <span
          className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-bold
            ${
              rarityColors[
                vote.rarity
              ]
            }
          `}
        >
          {vote.rarity}
        </span>
      </td>
    </tr>
  );
}