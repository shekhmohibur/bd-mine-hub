import useProfile from "@/hooks/useProfile";

export default function DashboardUserCard({
  collapsed,
}) {
  const { data: profile } =
    useProfile();

  if (!profile) return null;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#151D2D] p-4">
      <div
        className={`flex items-center ${
          collapsed
            ? "justify-center"
            : "gap-3"
        }`}
      >
        <img
          src={profile.avatar}
          alt={profile.username}
          className="h-12 w-12 rounded-xl"
        />

        {!collapsed && (
          <div>
            <h3 className="font-bold">
              {profile.username}
            </h3>

            <p className="text-sm text-zinc-400">
              {profile.role}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}