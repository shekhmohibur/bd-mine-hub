import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  User,
  ChevronDown,
  LogOut,
} from "lucide-react";

import { navLinks, userLinks } from "@/data/navbarData";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const { data: user, isLoading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);
  
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setDropdownOpen(false);
    }
  };

  document.addEventListener(
    "mousedown",
    handleClickOutside
  );

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-[#0B0B0B]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <span className="text-xl font-black text-emerald-400">
              BD
            </span>

            <span className="font-bold tracking-wide text-white">
              MINE HUB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-emerald-400"
                      : "text-zinc-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-emerald-400"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden items-center gap-3 lg:flex">
            {isLoading ? (
              <div className="h-10 w-24 animate-pulse rounded-lg bg-zinc-800" />
            ) : !user ? (
              <>
                <Link
                  to="/login"
                  className="rounded-lg border border-sky-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-sky-500/10"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="rounded-lg bg-emerald-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-emerald-300"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() =>
                    setDropdownOpen(
                      !dropdownOpen
                    )
                  }
                  className="flex items-center gap-2"
                >
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-emerald-500/40"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">
                      <User size={18} />
                    </div>
                  )}

                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      dropdownOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
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
                      className="absolute right-0 top-14 w-64 rounded-2xl border border-white/10 bg-[#111111] p-2 shadow-2xl"
                    >
                      <div className="border-b border-white/10 p-3">
                        <h4 className="font-semibold">
                          {user.username}
                        </h4>

                        {user.role && (
                          <p className="text-xs text-emerald-400">
                            {user.role}
                          </p>
                        )}
                      </div>

                      {userLinks.map((item) => {
                        const Icon =
                          item.icon;

                        return (
                          <NavLink
                            key={item.path}
                            to={item.path}
                            className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-800"
                          >
                            <Icon size={16} />
                            {item.name}
                          </NavLink>
                        );
                      })}

                      <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-red-400 hover:bg-red-500/10">
                        <LogOut size={16} />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMobileOpen(true)
            }
            className="lg:hidden"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setMobileOpen(false)
              }
              className="fixed inset-0 z-60 bg-black/70 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 220,
              }}
              className="fixed right-0 top-0 z-70 h-screen w-[85%] max-w-sm border-l border-white/10 bg-[#0B0B0B]"
            >
              <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
                <h2 className="font-bold">
                  BD MINE HUB
                </h2>

                <button
                  onClick={() =>
                    setMobileOpen(false)
                  }
                >
                  <X />
                </button>
              </div>

              <div className="flex h-[calc(100%-64px)] flex-col">
                {/* User Section */}
                <div className="border-b border-white/10 p-5">
                  {user ? (
                    <div className="flex items-center gap-3">
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          alt=""
                          className="h-14 w-14 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-800">
                          <User />
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold">
                          {user.username}
                        </h4>

                        {user.role && (
                          <p className="text-xs text-emerald-400">
                            {user.role}
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Link
                        to="/login"
                        className="rounded-xl border border-sky-500 py-3 text-center"
                      >
                        Login
                      </Link>

                      <Link
                        to="/register"
                        className="rounded-xl bg-emerald-400 py-3 text-center font-semibold text-black"
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto p-4">
                  <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Navigation
                  </p>

                  {navLinks.map((item) => {
                    const Icon =
                      item.icon;

                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          `mb-1 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                            isActive
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "text-zinc-300 hover:bg-zinc-900"
                          }`
                        }
                      >
                        <Icon size={18} />
                        {item.name}
                      </NavLink>
                    );
                  })}

                  {user && (
                    <>
                      <p className="mb-3 mt-6 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Account
                      </p>

                      {userLinks.map(
                        (item) => {
                          const Icon =
                            item.icon;

                          return (
                            <NavLink
                              key={item.path}
                              to={item.path}
                              className="mb-1 flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-900"
                            >
                              <Icon
                                size={18}
                              />
                              {item.name}
                            </NavLink>
                          );
                        }
                      )}

                      <button className="mt-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 hover:bg-red-500/10">
                        <LogOut
                          size={18}
                        />
                        Logout
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}