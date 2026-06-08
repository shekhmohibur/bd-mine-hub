import { motion } from "framer-motion";

export default function ProfileStatCard({
  icon: Icon,
  label,
  value,
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-[#151D2D]
        p-5
      "
    >
      <Icon
        size={20}
        className="mb-3 text-emerald-400"
      />

      <p className="text-sm text-zinc-400">
        {label}
      </p>

      <h3 className="mt-1 text-2xl font-black">
        {value}
      </h3>
    </motion.div>
  );
}