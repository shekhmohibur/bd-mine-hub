import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PasswordInput({
  label,
  name,
  register,
  error,
  placeholder,
}) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
        {label}
      </label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          {...register(name)}
          className={`
            h-12
            w-full
            rounded-xl
            border
            bg-[#0F1720]
            px-4
            pr-12
            outline-none
            transition

            ${
              error
                ? "border-red-500"
                : "border-white/10 focus:border-emerald-400"
            }
          `}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {error && <p className="mt-1 text-xs text-red-400">{error.message}</p>}
    </div>
  );
}
