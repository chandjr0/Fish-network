import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LINKS, NAV } from "@/lib/site";
import { CtaLink, SiteLink, Wordmark } from "./primitives";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const next = window.scrollY > 24;
        setSolid((current) => (current === next ? current : next));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (wasOpen.current && !open) buttonRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const elevated = solid || pathname !== "/";

  return (
    <header
      className={cn(
        "safe-top fixed inset-x-0 top-0 z-50 transition-all duration-500",
        elevated ? "glass-header py-3" : "py-5",
      )}
    >
      <div className="shell flex items-center justify-between gap-4">
        <SiteLink href="/" className="text-foreground shrink-0" aria-label="Fish Network home">
          <Wordmark />
        </SiteLink>

        <nav className="hidden items-center gap-7 xl:gap-9 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <SiteLink
              key={item.label}
              href={item.href}
              external={item.external}
              active={pathname === item.href}
              className={cn(
                "nav-underline text-[0.83rem] transition-colors duration-300",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </SiteLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaLink href={LINKS.onboarding} external>
            Launch a Fish School <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </CtaLink>
        </div>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="border-border text-foreground hover:border-violet/60 focus-visible:ring-ring inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:outline-none lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && <MobileNav pathname={pathname} onClose={() => setOpen(false)} />}
    </header>
  );
}

function MobileNav({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  const primary = [
    { label: "Launch a Fish School", href: LINKS.onboarding, external: true },
    { label: "Read the Docs", href: LINKS.docs, external: true },
    { label: "Contact", href: "/contact", external: false },
    { label: "Partnerships", href: "/partnerships", external: false },
  ];

  return (
    <div
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="bg-background/97 animate-fade-in fixed inset-0 top-0 z-40 flex flex-col overflow-y-auto pt-24 pb-12 backdrop-blur-xl lg:hidden"
    >
      <div className="shell flex flex-col gap-3">
        <p className="eyebrow mb-1">Get started</p>
        {primary.map((item, i) => (
          <SiteLink
            key={item.label}
            href={item.href}
            external={item.external}
            onClick={onClose}
            className={cn(
              "glass glass-hover flex min-h-12 items-center justify-between px-5 py-4 text-[0.95rem] font-medium",
              i === 0 && "text-primary-foreground [background-image:var(--gradient-cta)]",
            )}
          >
            {item.label}
            <ArrowUpRight className="h-4 w-4 opacity-70" aria-hidden="true" />
          </SiteLink>
        ))}

        <div className="hairline mt-6 h-px w-full" />

        <nav className="mt-4 flex flex-col gap-1" aria-label="Mobile">
          {NAV.map((item) => (
            <SiteLink
              key={item.label}
              href={item.href}
              external={item.external}
              active={pathname === item.href}
              onClick={onClose}
              className={cn(
                "hover:text-foreground min-h-11 py-2.5 text-[0.9rem] transition-colors",
                pathname === item.href ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {item.label}
            </SiteLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
