import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function NotificationSettings() {
  const { t } = useTranslation();

  const [voteReminder, setVoteReminder] =
    useState(true);

  const [news, setNews] =
    useState(true);

  const [events, setEvents] =
    useState(false);

  const Toggle = ({
    label,
    value,
    onChange,
  }) => (
    <div className="flex items-center justify-between rounded-xl bg-[#171E2E] p-4">
      <span>{label}</span>

      <button
        onClick={() =>
          onChange(!value)
        }
        className={`
          h-6
          w-12
          rounded-full
          transition

          ${
            value
              ? "bg-emerald-400"
              : "bg-zinc-700"
          }
        `}
      />
    </div>
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-[#151D2D] p-6">
      <h3 className="mb-6 text-xl font-bold">
        {t(
          "settings.notifications"
        )}
      </h3>

      <div className="space-y-3">
        <Toggle
          label={t(
            "settings.voteReminder"
          )}
          value={voteReminder}
          onChange={
            setVoteReminder
          }
        />

        <Toggle
          label={t(
            "settings.newsUpdates"
          )}
          value={news}
          onChange={setNews}
        />

        <Toggle
          label={t(
            "settings.eventAnnouncements"
          )}
          value={events}
          onChange={setEvents}
        />
      </div>
    </div>
  );
}