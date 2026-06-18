import useServerStatus from "@/hooks/useServerStatus";

/* Navbar Version */
export function ServerStatusMini() {
  const status =
    useServerStatus();

  return (
    <div
      className="
        flex
        items-center
        gap-2
        rounded-full
        border
        border-emerald-500/20
        bg-emerald-500/10
        px-3
        py-1.5
      "
    >
      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

      <span className="text-xs font-medium text-emerald-400">
        {status?.online ?? 0}
      </span>

      <span className="text-xs text-zinc-500">
        /
      </span>

      <span className="text-xs text-zinc-400">
        {status?.max ?? 0}
      </span>
    </div>
  );
}

/* Button Version */
export function ServerStatusButton() {
  const status =
    useServerStatus();

  return (
    <button
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/10
        bg-[#151D2D]/50
        backdrop-blur-sm
        px-4
        py-2
        transition
        hover:border-emerald-500/30
      "
    >
      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

      <div className="text-left">
        <p className="text-[10px] uppercase tracking-wider text-zinc-500">
          Online
        </p>

        <p className="text-sm font-semibold">
          {status?.online ?? 0}
          /
          {status?.max ?? 0}
        </p>
      </div>
    </button>
  );
}