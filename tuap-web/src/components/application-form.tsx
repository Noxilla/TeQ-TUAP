"use client";

import Link from "next/link";
import { useId, useState, type ReactNode } from "react";
import { departments, institutions } from "@/data/tuap";
import { toneClasses } from "@/lib/tones";
import { useStoredState } from "@/lib/use-stored-state";

type Draft = {
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  course: string;
  level: string;
  departments: string[];
  motivation: string;
  experience: string;
  hours: string;
  heardFrom: string;
  portfolio: string;
  prepared: boolean;
  confirmed: boolean;
};

const EMPTY_DRAFT: Draft = {
  fullName: "",
  email: "",
  phone: "",
  institution: "",
  course: "",
  level: "",
  departments: [],
  motivation: "",
  experience: "",
  hours: "",
  heardFrom: "",
  portfolio: "",
  prepared: false,
  confirmed: false,
};

const steps = [
  { id: "you", label: "About you", icon: "👋" },
  { id: "school", label: "School", icon: "🎓" },
  { id: "department", label: "Department", icon: "🏛️" },
  { id: "motivation", label: "Motivation", icon: "💬" },
  { id: "review", label: "Review", icon: "✓" },
] as const;

const levels = ["100 level", "200 level", "300 level", "400 level", "500 level", "600 level", "Postgraduate", "Aspiring student"];
const hoursOptions = ["1–3 hours a week", "4–6 hours a week", "7–10 hours a week", "10+ hours a week"];
const heardOptions = ["A TeQster referred me", "Instagram", "X (Twitter)", "TikTok", "WhatsApp", "Campus event", "Other"];

type Errors = Partial<Record<keyof Draft, string>>;

function validate(stepIndex: number, d: Draft): Errors {
  const e: Errors = {};
  if (stepIndex === 0) {
    if (d.fullName.trim().length < 2) e.fullName = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(d.email.trim())) e.email = "Please enter a valid email address.";
    if (d.phone.replace(/\D/g, "").length < 10) e.phone = "Please enter a phone number we can reach on WhatsApp.";
  }
  if (stepIndex === 1) {
    if (!d.institution.trim()) e.institution = "Please enter your institution.";
    if (!d.course.trim()) e.course = "Please enter your course of study.";
    if (!d.level) e.level = "Please choose your level.";
  }
  if (stepIndex === 2 && d.departments.length === 0) e.departments = "Choose at least one department.";
  if (stepIndex === 3) {
    if (d.motivation.trim().length < 30) e.motivation = "Tell us a bit more — at least a couple of sentences.";
    if (!d.hours) e.hours = "Please choose how much time you can commit.";
    if (d.portfolio && !/^https?:\/\/\S+\.\S+/.test(d.portfolio.trim())) e.portfolio = "Links should start with https://";
  }
  if (stepIndex === 4) {
    if (!d.prepared) e.prepared = "Please confirm you've read the preparation material.";
    if (!d.confirmed) e.confirmed = "Please confirm your details are correct.";
  }
  return e;
}

export function ApplicationForm() {
  const [draft, setDraft] = useStoredState<Draft>("tuap:application-draft", EMPTY_DRAFT);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const d = { ...EMPTY_DRAFT, ...draft };

  function update<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft({ ...d, [key]: value });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
  }

  function goTo(index: number) {
    setStep(index);
    setErrors({});
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function next() {
    const e = validate(step, d);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    if (step < steps.length - 1) {
      goTo(step + 1);
      return;
    }
    // Frontend only: nothing is sent yet. Wire this to a form service or API route to receive applications.
    setSubmittedName(d.fullName.trim().split(" ")[0]);
    setDraft(EMPTY_DRAFT);
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function toggleDepartment(slug: string) {
    const selected = d.departments.includes(slug)
      ? d.departments.filter((s) => s !== slug)
      : [...d.departments, slug].slice(-2);
    update("departments", selected);
  }

  if (submittedName !== null) return <Submitted name={submittedName} />;

  return (
    <div id="apply-form" className="grid scroll-mt-24 gap-8 lg:grid-cols-[15rem_1fr]">
      <nav aria-label="Application steps" className="lg:sticky lg:top-24 lg:self-start">
        <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-line lg:hidden" aria-hidden>
          <div className="h-full bg-brand-600 transition-[width]" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>
        <p className="text-sm font-medium text-muted lg:hidden">
          Step {step + 1} of {steps.length} · {steps[step].label}
        </p>
        <ol className="hidden space-y-1 lg:block">
          {steps.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => i < step && goTo(i)}
                disabled={i > step}
                aria-current={i === step ? "step" : undefined}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm ${
                  i === step ? "bg-white font-semibold ring-1 ring-line" : i < step ? "hover:bg-white" : "text-muted"
                }`}
              >
                <span
                  className={`grid size-7 place-items-center rounded-full text-xs ${
                    i < step ? "bg-brand-600 text-white" : i === step ? "bg-brand-50" : "bg-paper ring-1 ring-line"
                  }`}
                  aria-hidden
                >
                  {i < step ? "✓" : s.icon}
                </span>
                {s.label}
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          next();
        }}
        className="rounded-3xl bg-white p-6 ring-1 ring-line sm:p-10"
      >
        {step === 0 && (
          <StepIntro kicker="Your info" title="Hey there, what should we call you? 👋">
            <Field label="Full name" error={errors.fullName}>
              {(p) => (
                <input {...p} autoComplete="name" value={d.fullName} onChange={(e) => update("fullName", e.target.value)} />
              )}
            </Field>
            <Field label="Email address" error={errors.email}>
              {(p) => (
                <input
                  {...p}
                  type="email"
                  autoComplete="email"
                  value={d.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              )}
            </Field>
            <Field label="Phone number (WhatsApp)" hint="We use WhatsApp for community communication." error={errors.phone}>
              {(p) => (
                <input
                  {...p}
                  type="tel"
                  autoComplete="tel"
                  placeholder="+234"
                  value={d.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              )}
            </Field>
          </StepIntro>
        )}

        {step === 1 && (
          <StepIntro kicker="School" title="Where are you studying?">
            <Field label="Institution" error={errors.institution}>
              {(p) => (
                <>
                  <input
                    {...p}
                    list="institutions"
                    placeholder="e.g. Unilag"
                    value={d.institution}
                    onChange={(e) => update("institution", e.target.value)}
                  />
                  <datalist id="institutions">
                    {institutions.map((i) => (
                      <option key={i} value={i} />
                    ))}
                  </datalist>
                </>
              )}
            </Field>
            <Field label="Course of study" error={errors.course}>
              {(p) => <input {...p} value={d.course} onChange={(e) => update("course", e.target.value)} />}
            </Field>
            <Field label="Level" error={errors.level}>
              {(p) => (
                <select {...p} value={d.level} onChange={(e) => update("level", e.target.value)}>
                  <option value="">Choose your level</option>
                  {levels.map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              )}
            </Field>
          </StepIntro>
        )}

        {step === 2 && (
          <StepIntro
            kicker="Department"
            title="Which department fits you best?"
            lead="Pick up to two. Your first choice is marked as your top interest — it becomes your primary learning environment."
          >
            <fieldset>
              <legend className="sr-only">Departments</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {departments.map((dept) => {
                  const index = d.departments.indexOf(dept.slug);
                  const selected = index !== -1;
                  const tone = toneClasses[dept.tone];
                  return (
                    <label
                      key={dept.slug}
                      className={`flex cursor-pointer gap-3 rounded-2xl p-4 ring-1 transition has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-600 ${
                        selected ? `${tone.soft} ring-2 ${tone.ring}` : "ring-line hover:ring-ink/30"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={selected}
                        onChange={() => toggleDepartment(dept.slug)}
                      />
                      <span className={`mt-0.5 size-3 shrink-0 rounded-full ${tone.dot}`} aria-hidden />
                      <span className="flex-1">
                        <span className="block font-display font-bold">{dept.name}</span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted">{dept.tagline}</span>
                        {selected && (
                          <span
                            className={`mt-2 inline-block rounded-full bg-white px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase ${tone.text}`}
                          >
                            {index === 0 ? "Top interest" : "Second choice"}
                          </span>
                        )}
                      </span>
                    </label>
                  );
                })}
              </div>
              {errors.departments && <ErrorText>{errors.departments}</ErrorText>}
            </fieldset>
          </StepIntro>
        )}

        {step === 3 && (
          <StepIntro kicker="Motivation" title="Tell us why you want to join.">
            <Field label="Why do you want to join TUAP?" error={errors.motivation}>
              {(p) => (
                <textarea {...p} rows={5} value={d.motivation} onChange={(e) => update("motivation", e.target.value)} />
              )}
            </Field>
            <Field label="Relevant skills or experience" hint="Optional — projects, roles, anything you've built.">
              {(p) => (
                <textarea {...p} rows={3} value={d.experience} onChange={(e) => update("experience", e.target.value)} />
              )}
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Time you can commit" error={errors.hours}>
                {(p) => (
                  <select {...p} value={d.hours} onChange={(e) => update("hours", e.target.value)}>
                    <option value="">Choose one</option>
                    {hoursOptions.map((h) => (
                      <option key={h}>{h}</option>
                    ))}
                  </select>
                )}
              </Field>
              <Field label="How did you hear about TUAP?" hint="Optional">
                {(p) => (
                  <select {...p} value={d.heardFrom} onChange={(e) => update("heardFrom", e.target.value)}>
                    <option value="">Choose one</option>
                    {heardOptions.map((h) => (
                      <option key={h}>{h}</option>
                    ))}
                  </select>
                )}
              </Field>
            </div>
            <Field label="Portfolio or social link" hint="Optional" error={errors.portfolio}>
              {(p) => (
                <input
                  {...p}
                  type="url"
                  placeholder="https://"
                  value={d.portfolio}
                  onChange={(e) => update("portfolio", e.target.value)}
                />
              )}
            </Field>
          </StepIntro>
        )}

        {step === 4 && (
          <StepIntro kicker="Review" title="Check your application.">
            <dl className="divide-y divide-line rounded-2xl ring-1 ring-line">
              <ReviewRow label="About you" onEdit={() => goTo(0)}>
                {d.fullName} · {d.email} · {d.phone}
              </ReviewRow>
              <ReviewRow label="School" onEdit={() => goTo(1)}>
                {d.institution} · {d.course} · {d.level}
              </ReviewRow>
              <ReviewRow label="Department" onEdit={() => goTo(2)}>
                {d.departments.map((s) => departments.find((x) => x.slug === s)?.name).join(" (top interest), ")}
              </ReviewRow>
              <ReviewRow label="Motivation" onEdit={() => goTo(3)}>
                <span className="line-clamp-3">{d.motivation}</span>
                <span className="mt-1 block text-muted">{d.hours}</span>
              </ReviewRow>
            </dl>
            <div className="space-y-3">
              <CheckRow checked={d.prepared} onChange={(v) => update("prepared", v)} error={errors.prepared}>
                I&apos;ve read the Welcome Note, the role description, and the TeQ Philosophy.
              </CheckRow>
              <CheckRow checked={d.confirmed} onChange={(v) => update("confirmed", v)} error={errors.confirmed}>
                I confirm the information above is correct.
              </CheckRow>
            </div>
          </StepIntro>
        )}

        <div className="mt-10 flex items-center justify-between gap-3 border-t border-line pt-6">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => goTo(step - 1)}
              className="rounded-full px-5 py-2.5 text-sm font-semibold ring-1 ring-line hover:ring-ink/30"
            >
              Back
            </button>
          ) : (
            <span className="text-xs text-muted">Your draft is saved in this browser.</span>
          )}
          <button
            type="submit"
            className="rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {step === steps.length - 1 ? "Submit application" : "Continue"}
          </button>
        </div>
      </form>
    </div>
  );
}

function StepIntro({ kicker, title, lead, children }: { kicker: string; title: string; lead?: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">{title}</h2>
      {lead && <p className="mt-2 text-muted">{lead}</p>}
      <div className="mt-8 space-y-5">{children}</div>
    </div>
  );
}

const inputClass =
  "block w-full rounded-xl bg-paper px-4 py-3 text-base ring-1 ring-line outline-none transition placeholder:text-muted/60 focus:bg-white focus:ring-2 focus:ring-brand-500 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-[#e5484d]";

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: (props: {
    id: string;
    className: string;
    "aria-invalid": boolean;
    "aria-describedby"?: string;
  }) => ReactNode;
}) {
  const id = useId();
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold">
        {label}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-0.5 text-xs text-muted">
          {hint}
        </p>
      )}
      <div className="mt-2">
        {children({ id, className: inputClass, "aria-invalid": !!error, "aria-describedby": describedBy })}
      </div>
      {error && <ErrorText id={`${id}-error`}>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <p id={id} className="mt-1.5 text-sm font-medium text-[#bb2f33]" role="alert">
      {children}
    </p>
  );
}

function ReviewRow({ label, onEdit, children }: { label: string; onEdit: () => void; children: ReactNode }) {
  return (
    <div className="flex gap-4 p-4">
      <dt className="w-28 shrink-0 text-sm font-semibold">{label}</dt>
      <dd className="min-w-0 flex-1 text-sm break-words text-ink/80">{children}</dd>
      <button type="button" onClick={onEdit} className="shrink-0 text-sm font-semibold text-brand-700 hover:underline">
        Edit
      </button>
    </div>
  );
}

function CheckRow({
  checked,
  onChange,
  error,
  children,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3 text-sm">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 size-5 shrink-0 accent-brand-600"
        />
        <span>{children}</span>
      </label>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function Submitted({ name }: { name: string }) {
  const nextSteps = [
    "We review your application.",
    "You'll be contacted for your intake and department intro.",
    "You start onboarding and become an Active TeQster.",
  ];
  return (
    <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 text-center ring-1 ring-line sm:p-12" role="status">
      <p className="text-5xl" aria-hidden>
        🎉
      </p>
      <h2 className="mt-5 font-display text-3xl font-bold">All submitted{name ? `, ${name}` : ""}!</h2>
      <p className="mt-3 text-muted">We&apos;ve received your application and will be in touch with any updates.</p>
      <ol className="mt-8 space-y-3 text-left">
        {nextSteps.map((s, i) => (
          <li key={s} className="flex items-center gap-3 rounded-2xl bg-paper p-4">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
              {i + 1}
            </span>
            <span className="text-sm">{s}</span>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/onboarding" className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
          Preview onboarding
        </Link>
        <Link href="/" className="rounded-full px-5 py-2.5 text-sm font-semibold ring-1 ring-line hover:ring-ink/30">
          Back to home
        </Link>
      </div>
    </div>
  );
}
