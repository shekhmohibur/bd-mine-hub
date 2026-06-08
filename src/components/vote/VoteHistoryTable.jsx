import VoteHistoryRow from "./VoteHistoryRow";

export default function VoteHistoryTable({
  votes,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10 text-left text-zinc-400">
            <th className="pb-4">
              Site
            </th>

            <th className="pb-4">
              Reward
            </th>

            <th className="pb-4">
              Date
            </th>

            <th className="pb-4">
              Rarity
            </th>
          </tr>
        </thead>

        <tbody>
          {votes.map((vote) => (
            <VoteHistoryRow
              key={vote.id}
              vote={vote}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}