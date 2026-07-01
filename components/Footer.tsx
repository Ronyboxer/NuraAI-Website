import { footer } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-canvas py-14">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Wordmark + tagline */}
          <div>
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/nura-mark.svg"
                alt=""
                aria-hidden="true"
                className="h-8 w-8 rounded-full"
              />
              <span className="font-display text-xl font-semibold text-ink">
                {footer.brand}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate">
              {footer.brand} — {footer.tagline}
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded transition-colors hover:text-sky"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Small print */}
        <div className="mt-10 border-t border-line pt-6 text-sm text-slate/80">
          <p className="text-pretty">
            {footer.disclaimer} &middot; &copy; {year} {footer.brand}.{" "}
            {footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
