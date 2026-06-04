import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0B0B0B]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div>
          <Link
            to="/"
            className="text-2xl font-black text-emerald-400"
          >
            BD <span className="text-white">MINE HUB</span> 
          </Link>

          <p className="mt-2 text-sm text-zinc-400">
            © {currentYear} BD MINE HUB. {t("footer.disclaimer")}
          </p>
        </div>

        {/* Right */}
        <nav className="flex flex-wrap items-center gap-6 text-sm text-zinc-300">
          <a
            href="https://discord.gg/YOUR_INVITE"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-emerald-400"
          >
            {t("footer.discord")}
          </a>

          <a
            href="https://facebook.com/YOUR_PAGE"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-emerald-400"
          >
            {t("footer.facebook")}
          </a>

          <Link
            to="/terms"
            className="transition hover:text-emerald-400"
          >
            {t("footer.terms")}
          </Link>

          <Link
            to="/privacy"
            className="transition hover:text-emerald-400"
          >
            {t("footer.privacy")}
          </Link>
        </nav>
      </div>
    </footer>
  );
}