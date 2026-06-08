import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
export default function Hero() {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();
  const serverAddress = "mc.trivora.top:25647";
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(serverAddress);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };
  const players = [
    {
      username: "Mohib",
      rank: "Prime",
      votes: 156,
    },

    {
      username: "Najatul",
      rank: "Player",
      votes: 98,
    },

    {
      username: "Alex",
      rank: "Mythic",
      votes: 201,
    },

    {
      username: "Steve",
      rank: "Legendary",
      votes: 312,
    },
  ];

  const filteredPlayers = players.filter((player) =>
    player.username.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBa3rnBZ1A4Ys_P0h9yAwD8xoLnKnOUsIuHcw6gE8O3qE2kQH3eF0jX5KRAQKjbWfzZbGYP4n5t7Y4qjqzXfqRUxVm62PXocCpdNBI_oZv6bflUyyEkOGB1q-SrAib2N08pUnLKIEb2MAww193bPQCwBo3b_gtAWeiIe7NiBK5wINcHnHhhX1PNp4m4ftB0_1jOZ1TMaiI1jqJYsm3c5VXxbz5OZjVAKWsJ5uW3Rktpm3PTDLNN7zBt1R7RGoKudXgZWc2gDwocI8e')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className={`text-4xl font-black uppercase tracking-tight text-emerald-400 sm:text-5xl md:text-6xl lg:text-7xl ${t("hero.titleHalf1") !== "SURVIVE." && "leading-normal"}`}
        >
          {t("hero.titleHalf")}
          <br />
          {t("hero.titleHalf1")}
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg"
        >
          {t("hero.description")}
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.7,
          }}
          className="relative mt-8 w-full max-w-xl"
        >
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder={t("hero.searchPlayer")}
              className="
        h-14
        w-full
        rounded-xl
        border
        border-white/10
        bg-black/40
        pl-12
        pr-4
        text-white
        backdrop-blur-md
        outline-none
        transition
        focus:border-emerald-400
      "
            />
          </div>

          {showSuggestions && query && filteredPlayers.length > 0 && (
            <div
              className="
          absolute
          top-full
          z-50
          mt-2
          w-full
          overflow-hidden
          rounded-xl
          border
          border-white/10
          bg-[#151D2D]
          shadow-2xl
        "
            >
              {filteredPlayers.map((player) => (
                <button
                  key={player.username}
                  onClick={() => navigate(`/players/${player.username}`)}
                  className="
                flex
                w-full
                items-center
                justify-between
                px-4
                py-3
                text-left
                transition
                hover:bg-white/5
              "
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://mc-heads.net/avatar/${player.username}`}
                      alt={player.username}
                      className="h-10 w-10 rounded-lg"
                    />

                    <div>
                      <p className="font-semibold text-white">
                        {player.username}
                      </p>

                      <p className="text-xs text-zinc-400">{player.rank}</p>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-emerald-400">
                    {player.votes}
                  </span>
                </button>
              ))}
            </div>
          )}
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <button className="rounded-lg bg-emerald-400 px-8 py-3 font-semibold text-black transition hover:bg-emerald-300">
            {t("hero.join")}
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md transition hover:border-emerald-400/40"
          >
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Server Address
              </p>

              <p className="font-medium text-white">{serverAddress}</p>
            </div>

            {copied ? (
              <Check size={18} className="text-emerald-400" />
            ) : (
              <Copy size={18} className="text-zinc-400" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Bottom linear */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-[#090909] to-transparent" />
    </section>
  );
}
