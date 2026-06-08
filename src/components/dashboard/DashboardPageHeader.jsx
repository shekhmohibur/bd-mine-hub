import { motion } from "framer-motion";

export default function DashboardPageHeader({
  title,
  description,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="mb-8"
    >
      <h1 className="text-4xl font-black">
        {title}
      </h1>

      {description && (
        <p className="mt-2 text-zinc-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}