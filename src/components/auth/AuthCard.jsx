import { motion } from "framer-motion";

export default function AuthCard({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-white/10
        bg-[#111827]/90
        p-8
        backdrop-blur-xl
      "
    >
      {children}
    </motion.div>
  );
}
