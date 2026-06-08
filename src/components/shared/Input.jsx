export default function Input({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`
          h-12
          w-full
          rounded-xl
          border
          bg-[#0F1720]
          px-4
          outline-none
          transition

          ${
            error
              ? "border-red-500"
              : "border-white/10 focus:border-emerald-400"
          }
        `}
      />

      {error && (
        <p className="mt-1 text-xs text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
}