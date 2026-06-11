import { Leaf } from "lucide-react";
import { footer } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-cream py-14">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Wordmark + tagline */}
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-[0.7rem] bg-sage-gradient">
                <Leaf className="h-4 w-4 text-white" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-semibold text-forest">
                {footer.brand}
              </span>
            </div>
            <p className="mt-3 text-sm text-ink">
              {footer.brand} — {footer.tagline}
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-forest">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded transition-colors hover:text-sage"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Small print */}
        <div className="mt-10 border-t border-line pt-6 text-sm text-ink/70">
          <p className="text-pretty">
            {footer.disclaimer} &middot; &copy; {year} {footer.brand}.{" "}
            {footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
