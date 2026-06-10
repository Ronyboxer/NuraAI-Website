import { Flame } from "lucide-react";
import { footer } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-white py-14">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Wordmark + tagline */}
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-warm-gradient">
                <Flame className="h-4 w-4 text-white" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-semibold text-stone-900">
                {footer.brand}
              </span>
            </div>
            <p className="mt-3 text-sm text-stone-600">
              {footer.brand} — {footer.tagline}
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-stone-600">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded transition-colors hover:text-stone-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Small print */}
        <div className="mt-10 border-t border-stone-200 pt-6 text-sm text-stone-500">
          <p className="text-pretty">
            {footer.disclaimer} &middot; &copy; {year} {footer.brand}.{" "}
            {footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
