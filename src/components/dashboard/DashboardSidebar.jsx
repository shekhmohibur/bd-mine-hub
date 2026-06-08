import {
  ChevronLeft,
  ChevronRight,
  LogOut,
  Home,
  Trophy,
  Gift,
} from "lucide-react";

import { Link, NavLink } from "react-router";
import { useTranslation } from "react-i18next";

import useLogout from "@/hooks/useLogout";
import { getDashboardLinks } from "@/data/dashboardLinks";
import useProfile from "@/hooks/useProfile";

export default function DashboardSidebar({
  collapsed = false,
  setCollapsed,
  mobile = false,
  setOpen,
}) {
  const { t } = useTranslation();

  const logout = useLogout();

  const { data: profile } =
    useProfile();

  const role =
    profile?.role?.toLowerCase() ||
    "player";

  const links =
    getDashboardLinks(role);

  return (
    <aside
      className={`
        h-screen
        border-r
        border-white/10
        bg-[#0B0B0B]
        z-50

        ${
          mobile
            ? "w-72"
            : collapsed
              ? "fixed w-20"
              : "fixed w-72"
        }
      `}
    >
      <div className="flex h-full overflow-auto scrollbar-none flex-col p-4">
        {/* Collapse */}
        {!mobile && (
          <button
            onClick={() =>
              setCollapsed(
                (prev) => !prev
              )
            }
            className="mb-4 ml-auto rounded-lg p-2 hover:bg-white/5"
          >
            {collapsed ? (
              <ChevronRight />
            ) : (
              <ChevronLeft />
            )}
          </button>
        )}

        {/* Branding */}
        {!collapsed && (
          <Link
            to="/"
            className="mb-4 rounded-2xl border border-white/10 bg-[#151D2D] p-4"
          >
            <h2 className="font-black text-emerald-400">
              BD MINE HUB
            </h2>

            <p className="text-xs text-zinc-400">
              Bangladesh Network
            </p>
          </Link>
        )}

        {/* Navigation */}
        <div className="mt-6 flex-1">
          {!collapsed && (
            <p className="mb-3 px-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
              Navigation
            </p>
          )}

          <div className="space-y-1">
            {links.map((item) => {
              const Icon =
                item.icon;

              return (
                <NavLink
                  key={item.key}
                  to={item.path}
                  onClick={() =>
                    setOpen?.(false)
                  }
                  className={({
                    isActive,
                  }) =>
                    `
                    group
                    relative
                    flex
                    items-center
                    ${
                      collapsed
                        ? "justify-center"
                        : "gap-3"
                    }
                    rounded-xl
                    px-4
                    py-3
                    transition

                    ${
                      isActive
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }
                  `
                    }
                >
                  <Icon size={18} />

                  {!collapsed &&
                    t(
                      `dashboard.${item.key}`
                    )}
                </NavLink>
              );
            })}
          </div>

          {/* Quick Actions */}
          {!collapsed && (
            <>
              <p className="mb-3 mt-6 px-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
                Quick Actions
              </p>

              <div className="space-y-2">
                <Link
                  to="/vote"
                  className="flex items-center gap-3 rounded-xl bg-[#151D2D] p-3 hover:bg-emerald-500/10"
                >
                  <Trophy size={18} />
                  Vote Now
                </Link>

                <Link
                  to="/store"
                  className="flex items-center gap-3 rounded-xl bg-[#151D2D] p-3 hover:bg-white/5"
                >
                  <Gift size={18} />
                  Store
                </Link>
              </div>
            </>
          )}

          {/* Network Status */}
          {!collapsed && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#151D2D] p-4">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500">
                Network Status
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>
                    🟢 Survival
                  </span>
                  <span>127</span>
                </div>

                <div className="flex justify-between">
                  <span>
                    🟢 BedWars
                  </span>
                  <span>42</span>
                </div>

                <div className="flex justify-between">
                  <span>🟢 PvP</span>
                  <span>17</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-4">
          <Link
            to="/"
            className={`
              flex
              items-center
              ${
                collapsed
                  ? "justify-center"
                  : "gap-3"
              }
              rounded-xl
              px-4
              py-3
              text-zinc-400
              hover:bg-white/5
              hover:text-white
            `}
          >
            <Home size={18} />

            {!collapsed &&
              t("dashboard.home")}
          </Link>

          <button
            onClick={logout}
            className={`
              mt-2
              flex
              w-full
              items-center
              ${
                collapsed
                  ? "justify-center"
                  : "gap-3"
              }
              rounded-xl
              px-4
              py-3
              text-red-400
              hover:bg-red-500/10
            `}
          >
            <LogOut size={18} />

            {!collapsed &&
              t("dashboard.logout")}
          </button>
        </div>
      </div>
    </aside>
  );
}