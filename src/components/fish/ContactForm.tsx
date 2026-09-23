import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { CONTACT, SMS_CONSENT } from "@/lib/site";
import { GlassCard, Reveal, Section, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

const roles = [
  "Investor community organizer",
  "Emerging manager",
  "Angel investor",
  "Founder network",
  "University-community group",
  "Partner",
  "Other",
];

const interests = [
  "Launching a Fish School",
  "Partnerships",
  "Docs / platform demo",
  "Governance infrastructure",
  "Capital account workflows",
  "General inquiry",
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(30).optional(),
  role: z.string().trim().min(1, "Select an option"),
  interest: z.string().trim().min(1, "Select an option"),
  message: z.string().trim().min(1, "Message is required").max(1000),
  consent: z.boolean(),
});

const field =
  "min-h-11 w-full rounded-lg border border-input bg-secondary/40 px-4 py-3 text-[0.88rem] text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-violet/60 focus:outline-none focus:ring-2 focus:ring-ring";

export function ContactForm({
  titleAs = "h2",
  headerOffset = false,
}: {
  titleAs?: "h1" | "h2";
  headerOffset?: boolean;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      role: String(fd.get("role") ?? ""),
      interest: String(fd.get("interest") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please review the highlighted fields.");
      return;
    }

    setErrors({});
    e.currentTarget.reset();
    toast.success("Inquiry received", {
      description: "We'll follow up from the Fish Network team shortly.",
    });
  };

  return (
    <Section id="join-us" headerOffset={headerOffset}>
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            as={titleAs}
            eyebrow="Contact / join us"
            title="Ready to Launch or Partner?"
            lead="Tell us about your community and what you're trying to coordinate. We'll point you to the right path."
          />

          <div className="mt-9 grid gap-3">
            <a
              href={CONTACT.phoneHref}
              className="focus-visible:ring-ring block rounded-xl focus-visible:ring-2 focus-visible:outline-none"
            >
              <GlassCard className="flex items-center gap-4 p-5">
                <Phone className="text-lavender h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <p className="mono-label">Phone</p>
                  <p className="mt-1 text-[0.92rem]">{CONTACT.phone}</p>
                </div>
              </GlassCard>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="focus-visible:ring-ring block rounded-xl focus-visible:ring-2 focus-visible:outline-none"
            >
              <GlassCard className="flex items-center gap-4 p-5">
                <Mail className="text-lavender h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <p className="mono-label">Email</p>
                  <p className="mt-1 text-[0.92rem] break-all">{CONTACT.email}</p>
                </div>
              </GlassCard>
            </a>
          </div>
        </div>

        <Reveal delay={0.12}>
          <GlassCard interactive={false} className="p-6 sm:p-8">
            <form onSubmit={onSubmit} noValidate className="grid gap-5" aria-label="Contact Fish Network">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors["name"]}>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={Boolean(errors["name"])}
                    aria-describedby={errors["name"] ? "name-error" : undefined}
                    className={field}
                    placeholder="Full name"
                    maxLength={100}
                  />
                </Field>
                <Field id="email" label="Email" error={errors["email"]}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={Boolean(errors["email"])}
                    aria-describedby={errors["email"] ? "email-error" : undefined}
                    className={field}
                    placeholder="you@community.com"
                    maxLength={255}
                  />
                </Field>
                <Field id="phone" label="Phone" error={errors["phone"]}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors["phone"])}
                    aria-describedby={errors["phone"] ? "phone-error" : undefined}
                    className={field}
                    placeholder="+1 555 000 0000"
                    maxLength={30}
                  />
                </Field>
                <Field id="role" label="I am a" error={errors["role"]}>
                  <select
                    id="role"
                    name="role"
                    defaultValue=""
                    aria-required="true"
                    aria-invalid={Boolean(errors["role"])}
                    aria-describedby={errors["role"] ? "role-error" : undefined}
                    className={cn(field, "field-select appearance-none")}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {roles.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field id="interest" label="Interested in" error={errors["interest"]}>
                <select
                  id="interest"
                  name="interest"
                  defaultValue=""
                  aria-required="true"
                  aria-invalid={Boolean(errors["interest"])}
                  aria-describedby={errors["interest"] ? "interest-error" : undefined}
                  className={cn(field, "field-select appearance-none")}
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {interests.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </Field>

              <Field id="message" label="Message" error={errors["message"]}>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  aria-required="true"
                  aria-invalid={Boolean(errors["message"])}
                  aria-describedby={errors["message"] ? "message-error" : undefined}
                  className={cn(field, "resize-none")}
                  placeholder="Tell us about your club, community, or partnership idea."
                />
              </Field>

              <label className="text-muted-foreground flex min-h-11 items-start gap-3 text-[0.75rem] leading-relaxed">
                <input
                  id="consent"
                  type="checkbox"
                  name="consent"
                  className="accent-violet mt-0.5 h-5 w-5 shrink-0 rounded"
                />
                <span>{SMS_CONSENT}</span>
              </label>

              <button
                type="submit"
                className="text-primary-foreground shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-blue)] focus-visible:ring-ring inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[length:200%_100%] bg-left text-[0.9rem] font-medium tracking-wide transition-all duration-300 [background-image:var(--gradient-cta)] hover:bg-right focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none active:scale-[0.98]"
              >
                <Send className="h-4 w-4" aria-hidden="true" /> Send Inquiry
              </button>
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mono-label mb-2 block">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-destructive mt-1.5 font-mono text-[0.68rem]">
          {error}
        </p>
      )}
    </div>
  );
}
