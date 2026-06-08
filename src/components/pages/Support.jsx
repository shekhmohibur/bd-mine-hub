import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";;

import useTickets from "@/hooks/useTickets";
import DashboardPageHeader from "../dashboard/DashboardPageHeader";
import DashboardSectionCard from "../dashboard/DashboardSectionCard";
import SupportTicketCard from "../support/SupportTicketCard";

export default function Support() {
  const { t } = useTranslation();

  const { data: tickets = [] } =
    useTickets();

  return (
    <>
      <DashboardPageHeader
        title={t("support.title")}
        description={t(
          "support.description"
        )}
      />

      <DashboardSectionCard
        title={t("support.myTickets")}
        action={
          <button className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-black">
            <Plus size={16} />
            {t("support.newTicket")}
          </button>
        }
      >
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <SupportTicketCard
              key={ticket.id}
              ticket={ticket}
            />
          ))}
        </div>
      </DashboardSectionCard>
    </>
  );
}