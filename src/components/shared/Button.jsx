import { Loader2 } from "lucide-react";

export default function Button({
  children,
  loading,
  className = "",
  ...props
}) {
  return (
    <button
      disabled={loading}
      className={`
        flex h-12 w-full items-center justify-center
        rounded-xl
        bg-emerald-400
        font-semibold
        text-black
        transition
        hover:bg-emerald-300
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <Loader2
          size={18}
          className="animate-spin"
        />
      ) : (
        children
      )}
    </button>
  );
}