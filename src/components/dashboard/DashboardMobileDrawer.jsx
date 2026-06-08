import {
  AnimatePresence,
  motion,
} from "framer-motion";

import DashboardSidebar from "./DashboardSidebar";

export default function DashboardMobileDrawer({
  open,
  setOpen,
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setOpen(false)
            }
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="fixed left-0 top-0 z-50 h-full w-72"
          >
            <DashboardSidebar
              mobile
              setOpen={setOpen}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}