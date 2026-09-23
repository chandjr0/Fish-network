import { COMPLIANCE_NOTE, CONTACT, LINKS, NAV, SOCIALS } from "@/lib/site";
import { SiteLink, Wordmark } from "./primitives";

const platform = [
  { label: "Launch a Fish School", href: LINKS.onboarding, external: true },
  { label: "Governance", href: `${LINKS.docs}/governance`, external: true },
  { label: "Capital Accounts", href: `${LINKS.docs}/capital-accounts`, external: true },
  { label: "Reputation", href: `${LINKS.docs}/fish-points`, external: true },
  { label: "Docs", href: LINKS.docs, external: true },
  { label: "Blog", href: LINKS.blog, external: true },
  { label: "Brand Assets", href: LINKS.brandAssets, external: true },
];

const legal = [
  { label: "Privacy Policy", href: `${LINKS.docs}/privacy` },
  { label: "Terms", href: `${LINKS.docs}/terms` },
  { label: "Disclaimer", href: `${LINKS.docs}/disclaimer` },
];

const linkCls =
  "footer-link text-muted-foreground hover:text-lavender inline-flex min-h-11 items-center text-[0.83rem] transition-colors duration-300";

const navigate = [...NAV, { label: "FAQ", href: "/faq", external: false }];

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-16 pb-10">
      <div className="hairline absolute inset-x-0 top-0 h-px" />
      <div className="shell">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="text-muted-foreground mt-5 text-sm tracking-[0.16em] uppercase">
              Swim Together, Win Together.
            </p>
            <p className="text-muted-foreground/80 mt-5 max-w-xs font-mono text-[0.72rem] leading-relaxed">
              Infrastructure for member-led investment clubs with verifiable governance and capital
              accounts.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mono-label">Navigate</p>
            <ul className="mt-4 space-y-1">
              {navigate.map((n) => (
                <li key={n.label}>
                  <SiteLink href={n.href} external={n.external} className={linkCls}>
                    {n.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Platform">
            <p className="mono-label">Platform</p>
            <ul className="mt-4 space-y-1">
              {platform.map((n) => (
                <li key={n.label}>
                  <SiteLink href={n.href} external className={linkCls}>
                    {n.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mono-label">Contact</p>
            <ul className="mt-4 space-y-1">
              <li>
                <a href={CONTACT.phoneHref} className={linkCls}>
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className={`${linkCls} break-all`}>
                  {CONTACT.email}
                </a>
              </li>
            </ul>

            <p className="mono-label mt-7">Legal</p>
            <ul className="mt-4 space-y-1">
              {legal.map((n) => (
                <li key={n.label}>
                  <SiteLink href={n.href} external className={linkCls}>
                    {n.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-border mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t pt-7">
          {SOCIALS.map((s) =>
            s.href ? (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Fish Network on ${s.label}`}
                className="mono-label hover:text-lavender focus-visible:ring-ring inline-flex min-h-11 items-center transition-colors duration-300 focus-visible:ring-2 focus-visible:outline-none"
              >
                {s.label}
              </a>
            ) : (
              <span
                key={s.label}
                className="mono-label text-muted-foreground/70 inline-flex min-h-11 items-center"
              >
                {s.label} — add here
              </span>
            ),
          )}
        </div>

        <p className="text-muted-foreground/80 mt-7 max-w-3xl font-mono text-[0.72rem] leading-relaxed">
          {COMPLIANCE_NOTE}
        </p>

        <div className="text-muted-foreground/70 mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[0.7rem]">
          <p>© {new Date().getFullYear()} Fish Network</p>
          <a
            href={LINKS.poweredBy}
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link hover:text-lavender inline-flex min-h-11 items-center transition-colors duration-300"
          >
            Powered by The Innovations
          </a>
        </div>
      </div>
    </footer>
  );
}
