import {
  ChevronDown,
  LayoutDashboard,
  User,
  Settings,
  LifeBuoy,
  LogOut,
  Home,
} from "lucide-react";

import { Link } from "react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import useProfile from "@/hooks/useProfile";
import useLogout from "@/hooks/useLogout";

export default function DashboardUserDropdown() {
  const { t } = useTranslation();

  const { data: profile } = useProfile();

  const logout = useLogout();

  const [open, setOpen] = useState(false);

  if (!profile) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-white/10
          bg-[#151D2D]
          px-3
          py-2
        "
      >
        <img
          src={profile.avatar}
          alt={profile.username}
          className="h-10 w-10 rounded-lg"
        />

        <div className="hidden text-left md:block">
          <p className="font-semibold">{profile.username}</p>

          <p className="text-xs text-zinc-400">{profile.rank}</p>
        </div>

        <ChevronDown size={16} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 10,
            }}
            className="
              absolute
              right-0
              mt-3
              w-64
              rounded-2xl
              border
              border-white/10
              bg-[#151D2D]
              p-2
            "
          >
            <Link
              to="/"
              className="flex items-center gap-3 rounded-xl p-3 hover:bg-white/5"
            >
              <Home size={18} />
              {t("dashboard.home")}
            </Link>

            <hr className="my-2 border-white/10" />
            <Link
              to="/dashboard"
              className="flex items-center gap-3 rounded-xl p-3 hover:bg-white/5"
            >
              <LayoutDashboard size={18} />
              {t("dashboard.dashboard")}
            </Link>

            <Link
              to="/dashboard/profile"
              className="flex items-center gap-3 rounded-xl p-3 hover:bg-white/5"
            >
              <User size={18} />
              {t("dashboard.profile")}
            </Link>

            <Link
              to="/dashboard/settings"
              className="flex items-center gap-3 rounded-xl p-3 hover:bg-white/5"
            >
              <Settings size={18} />
              {t("dashboard.settings")}
            </Link>

            <Link
              to="/dashboard/support"
              className="flex items-center gap-3 rounded-xl p-3 hover:bg-white/5"
            >
              <LifeBuoy size={18} />
              {t("dashboard.support")}
            </Link>

            <hr className="my-2 border-white/10" />

            <button
              onClick={logout}
              className="flex w-full items-center gap-3 rounded-xl p-3 text-red-400 hover:bg-red-500/10"
            >
              <LogOut size={18} />
              {t("dashboard.logout")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
