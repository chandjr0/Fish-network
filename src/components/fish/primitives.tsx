import { Link } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------- Logo ---------------- */

export function FishMark({ className }: { className?: string }) {
  return (
    <img
      src="/brand/logo.png"
      alt=""
      width={40}
      height={40}
      decoding="async"
      className={cn("h-7 w-7 shrink-0 object-contain", className)}
      aria-hidden="true"
    />
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <FishMark />
      <span className="text-[0.95rem] font-semibold tracking-[0.16em] uppercase">Fish Network</span>
    </span>
  );
}

/* ---------------- Reveal ---------------- */

export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, delay, ease: [0.16, 0.8, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Section scaffolding ---------------- */

export function Section({
  id,
  children,
  className,
  aurora = false,
  headerOffset = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  aurora?: boolean;
  headerOffset?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("beat overflow-hidden", className)}
      style={headerOffset ? { paddingTop: "7.75rem" } : undefined}
    >
      {aurora && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="aurora drift absolute inset-[-20%] opacity-45" />
        </div>
      )}
      <div className="shell relative">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  as = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}) {
  const Title = as;
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Title className="text-gradient text-balance text-[clamp(1.85rem,3.3vw,2.9rem)] leading-[1.08] font-semibold tracking-tight">
        {title}
      </Title>
      {lead && (
        <p className="text-muted-foreground mt-5 text-[0.98rem] leading-relaxed sm:text-base">
          {lead}
        </p>
      )}
    </Reveal>
  );
}

export function SectionRule() {
  return <div className="hairline h-px w-full opacity-60" />;
}

/* ---------------- Buttons ---------------- */

const base =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full text-[0.83rem] font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]";

export function CtaLink({
  href,
  children,
  variant = "solid",
  size = "md",
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
}) {
  const sizes = size === "lg" ? "h-12 px-7 text-[0.9rem]" : "h-11 px-6";
  const variants = {
    solid:
      "text-primary-foreground [background-image:var(--gradient-cta)] bg-[length:200%_100%] bg-left hover:bg-right shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-blue)]",
    outline:
      "border border-border text-foreground hover:border-violet/60 hover:text-lavender hover:shadow-[var(--shadow-glow)]",
    ghost: "text-muted-foreground hover:text-lavender",
  }[variant];

  const classNames = cn(base, sizes, variants, className);
  const externalProps = external ? { target: "_blank" as const, rel: "noreferrer noopener" } : {};

  if (!external && href.startsWith("/")) {
    return (
      <Link to={href as "/"} className={classNames}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classNames} {...externalProps}>
      {children}
    </a>
  );
}

export function SiteLink({
  href,
  external,
  className,
  children,
  onClick,
  active,
  "aria-label": ariaLabel,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
  "aria-label"?: string;
}) {
  const isRemote = Boolean(external) || href.startsWith("http");
  if (!isRemote && (href.startsWith("/") || href.startsWith("#"))) {
    if (href.startsWith("#")) {
      return (
        <a href={href} className={className} onClick={onClick} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    return (
      <Link
        to={href as "/"}
        className={className}
        onClick={onClick}
        aria-label={ariaLabel}
        aria-current={active ? "page" : undefined}
        data-status={active ? "active" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      {...(isRemote ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
    </a>
  );
}

/* ---------------- Cards ---------------- */

export function GlassCard({
  children,
  className,
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div className={cn("glass p-6", interactive && "glass-hover", className)}>{children}</div>
  );
}

export function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="border-border bg-secondary/60 text-lavender group-hover:border-violet/50 group-hover:text-foreground inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-300">
      {children}
    </span>
  );
}
