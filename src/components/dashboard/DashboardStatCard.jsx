import { motion } from "framer-motion";

export default function DashboardStatCard({
  icon: Icon,
  title,
  value,
  color = "emerald",
}) {
    
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-[#151D2D]
        p-6
      "
    >
      <div className="mb-4 flex items-center justify-between">
        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            ${
              color === "cyan"
                ? "bg-cyan-500/10 text-cyan-400"
                : color === "yellow"
                  ? "bg-yellow-500/10 text-yellow-400"
                  : "bg-emerald-500/10 text-emerald-400"
            }
          `}
        >
          <Icon size={22} />
        </div>
      </div>

      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-black">
        {value}
      </h3>
    </motion.div>
  );
}