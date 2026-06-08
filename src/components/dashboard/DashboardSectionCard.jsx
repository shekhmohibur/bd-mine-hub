import { motion } from "framer-motion";

export default function DashboardSectionCard({
  children,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={`
        rounded-2xl
        border
        border-white/10
        bg-[#151D2D]
        p-6
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}