import { History } from "lucide-react";
import { useTranslation } from "react-i18next";

import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import DashboardSectionCard from "@/components/dashboard/DashboardSectionCard";

import VoteHistoryTable from "@/components/vote/VoteHistoryTable";

import useVoteHistory from "@/hooks/useVoteHistory";

export default function VoteHistory() {
  const { t } = useTranslation();

  const { data: votes = [] } =
    useVoteHistory();

  return (
    <>
      <DashboardPageHeader
        title={t(
          "voteHistory.title"
        )}
        description={t(
          "voteHistory.description"
        )}
      />

      <DashboardSectionCard
        title={t(
          "voteHistory.recentVotes"
        )}
      >
        <VoteHistoryTable
          votes={votes}
        />
      </DashboardSectionCard>
    </>
  );
}