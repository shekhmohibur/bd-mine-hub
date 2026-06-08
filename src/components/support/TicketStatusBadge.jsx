export default function TicketStatusBadge({
  status,
}) {
  const colors = {
    open: "bg-emerald-500/10 text-emerald-400",

    pending:
      "bg-yellow-500/10 text-yellow-400",

    closed: "bg-red-500/10 text-red-400",
  };

  return (
    <span
      className={`
        rounded-full
        px-3
        py-1
        text-xs
        font-bold
        ${colors[status]}
      `}
    >
      {status}
    </span>
  );
}