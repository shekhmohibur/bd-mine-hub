import TicketStatusBadge from "./TicketStatusBadge";

export default function SupportTicketCard({
  ticket,
}) {
  return (
    <div className="rounded-xl bg-[#171E2E] p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold">
          {ticket.title}
        </h3>

        <TicketStatusBadge
          status={ticket.status}
        />
      </div>

      <p className="mt-2 text-sm text-zinc-400">
        {ticket.createdAt}
      </p>
    </div>
  );
}