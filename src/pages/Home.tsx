import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Award,
  Users,
  HeartHandshake,
  GraduationCap,
  Network,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  BookOpen,
  Compass,
  Scale,
  Feather,
  Building2,
  Quote,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ──────────────────────────────── HERO ──────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* editorial side rail */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden lg:flex flex-col items-center justify-between py-10 px-6 text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
          <span className="rotate-180 [writing-mode:vertical-rl]">Est. 2024 · Thrissur · Kerala</span>
          <span className="rotate-180 [writing-mode:vertical-rl]">Reg. No. Tsr/Tc/164/2024</span>
        </div>

        <div className="container-prose pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-border text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" />
                A Registered Professional Association
              </div>
              <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-medium leading-[0.98] tracking-tight">
                Counselling
                <br />
                Psychological{" "}
                <span className="italic text-brass font-light">Association,</span>
                <br />
                Kerala.
              </h1>
              <p className="mt-10 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl">
                A professional home for psychologists, counsellors, educators, researchers and
                students — committed to ethical practice, continuous learning and the mental
                well-being of every community in Kerala.
              </p>
              <div className="mt-12 flex flex-wrap gap-3">
                <a
                  href="https://forms.gle/qPPq5Lig8PxXUK536"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-sm"
                >
                  Become a Member <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/verify"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-background/60 hover:bg-secondary transition font-medium"
                >
                  Verify Membership
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-foreground/70 hover:text-foreground transition font-medium"
                >
                  About the Association <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* hero meta card */}
            <aside className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-border">
              <div className="text-[10px] uppercase tracking-[0.22em] text-brass mb-4">
                The Association
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Empowering Psychology Professionals · Strengthening Mental Health Services ·
                Building a Better Society.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Founded</dt>
                  <dd className="font-display text-2xl text-primary mt-1">2024</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Registration</dt>
                  <dd className="font-mono text-xs mt-2">Tsr/Tc/164/2024</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Headquarters</dt>
                  <dd className="mt-1">Thrissur, Kerala</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Membership</dt>
                  <dd className="mt-1">Open to professionals & students</dd>
                </div>
              </dl>
            </aside>
          </div>

          {/* metric strip */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 border-t border-border pt-12">
            {[
              { k: "01", v: "United Profession", s: "One state-wide voice for psychology" },
              { k: "07+", v: "Member Categories", s: "From students to senior practitioners" },
              { k: "∞", v: "Professional Network", s: "Statewide peers, mentors & institutions" },
              { k: "₹1,000", v: "Annual Registration", s: "All-inclusive membership fee" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-4xl md:text-5xl text-primary tabular-nums">
                  {s.k}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-brass mt-3">
                  {s.v}
                </div>
                <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────── MARQUEE STRIP ──────────────────────────────── */}
      <div className="border-y border-border bg-primary text-primary-foreground overflow-hidden">
        <div className="container-prose py-5 flex items-center gap-10 text-[11px] uppercase tracking-[0.28em] whitespace-nowrap overflow-hidden">
          {[
            "Empowering Psychology Professionals",
            "Strengthening Mental Health Services",
            "Building a Better Society",
            "Ethical Practice",
            "Lifelong Learning",
            "Community Service",
          ].map((t, i) => (
            <span key={t} className="flex items-center gap-10 opacity-80">
              {t}
              {i < 5 && <span className="text-brass">✦</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ──────────────────────────────── WELCOME / EDITORIAL ──────────────────────────────── */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-brass mb-4">
              01 — Welcome
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              A professional <em className="text-brass not-italic font-light">home</em> for
              psychology in Kerala.
            </h2>
            <div className="hairline mt-10 max-w-[8rem]" />
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground mt-8">
              An invitation from the Association
            </p>
          </div>
          <div className="md:col-span-8 space-y-6 text-foreground/80 text-lg leading-relaxed">
            <p className="first-letter:font-display first-letter:text-7xl first-letter:font-medium first-letter:leading-none first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-primary">
              The Counselling Psychological Association, Kerala — known to colleagues simply
              as <strong className="font-semibold text-foreground">CPA Kerala</strong> — is a
              professional organisation that brings together psychologists, counsellors,
              mental health professionals, educators, researchers and students working in the
              field of psychology across the state.
            </p>
            <p>
              We exist to strengthen the profession from within: to set a shared standard of
              ethical practice, to create generous opportunities for growth, and to ensure that
              the people who care for the mental well-being of others are themselves seen,
              supported and respected.
            </p>
            <p>
              Our conviction is simple. When psychology professionals are strong, mental health
              services are strong — and society as a whole becomes more humane, more attentive
              and more able to hold one another through difficulty.
            </p>
            <div className="pt-6 flex flex-wrap gap-x-10 gap-y-4 text-sm uppercase tracking-[0.18em] text-muted-foreground border-t border-border mt-8">
              <span>Practice</span>
              <span className="text-brass">·</span>
              <span>Research</span>
              <span className="text-brass">·</span>
              <span>Education</span>
              <span className="text-brass">·</span>
              <span>Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────── PILLARS ──────────────────────────────── */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
            <div className="md:col-span-7">
              <div className="text-[10px] uppercase tracking-[0.22em] text-brass mb-4">
                02 — Our Pillars
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02]">
                Three pillars that hold the work together.
              </h2>
            </div>
            <p className="md:col-span-5 text-primary-foreground/75 text-lg leading-relaxed">
              Every decision the Association takes — from the seminars we host to the standards
              we hold ourselves to — is anchored in these three commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/15 border border-primary-foreground/15 rounded-3xl overflow-hidden">
            {[
              {
                n: "I",
                icon: Compass,
                t: "Empowering Professionals",
                d: "We invest in the practitioners themselves — through professional development, mentorship, recognition and a community of peers who understand the work.",
              },
              {
                n: "II",
                icon: HeartHandshake,
                t: "Strengthening Services",
                d: "Stronger professionals lead to stronger services. We work to raise the quality, ethics and accessibility of mental health care across Kerala.",
              },
              {
                n: "III",
                icon: Sparkles,
                t: "Building a Better Society",
                d: "Mental health is not a private matter. We contribute to public understanding, school and community programmes, and a culture of care.",
              },
            ].map(({ n, icon: Icon, t, d }) => (
              <div key={t} className="bg-primary p-10 relative">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-display text-2xl text-brass italic">{n}</span>
                  <Icon className="w-5 h-5 text-brass" />
                </div>
                <h3 className="font-display text-2xl leading-tight mb-4">{t}</h3>
                <p className="text-primary-foreground/70 leading-relaxed text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────── WHY JOIN ──────────────────────────────── */}
      <section className="container-prose py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] uppercase tracking-[0.22em] text-brass mb-4">
            03 — Why Join
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02]">
            Be part of a professional movement that is finally taking shape.
          </h2>
          <p className="mt-6 text-foreground/75 text-lg leading-relaxed">
            By becoming a member, you join a network committed to elevating the practice and
            perception of psychology across Kerala — a network where your work is recognised
            and your growth is supported.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {[
            { icon: Sparkles, t: "Advancing Psychology", d: "Push the field forward through ethical, evidence-informed practice and shared standards." },
            { icon: HeartHandshake, t: "Better Mental Health Services", d: "Raise the standard of care available to individuals, families and communities across the state." },
            { icon: Award, t: "Professional Excellence", d: "Champion accountability and the lifelong pursuit of mastery within the profession." },
            { icon: Users, t: "Community Support", d: "Build community systems that hold people through grief, illness, transitions and crisis." },
            { icon: GraduationCap, t: "Learning & Collaboration", d: "Workshops, seminars, conferences and ongoing professional development designed by practitioners." },
            { icon: Network, t: "A Real Network", d: "Connect with peers, mentors, supervisors and institutions across Kerala and beyond." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-background p-8 hover:bg-cream/60 transition group">
              <Icon className="w-6 h-6 text-brass mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl mb-2.5">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────── BENEFITS ──────────────────────────────── */}
      <section className="bg-cream/70 border-y border-border/60">
        <div className="container-prose py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-brass mb-4">
                04 — Membership Benefits
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02]">
                What you receive as a member.
              </h2>
              <p className="mt-6 text-foreground/75 text-lg leading-relaxed">
                Every member of CPA Kerala receives tangible recognition and access to a
                curated programme of professional opportunities — issued by the Association
                under its registered authority.
              </p>

              <div className="mt-10 p-8 rounded-3xl border border-border bg-background relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-brass/10 blur-2xl" />
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Annual Registration Fee
                </div>
                <div className="font-display text-6xl text-primary mt-2 tracking-tight">
                  ₹1,000
                </div>
                <div className="text-sm text-muted-foreground mt-3">
                  One-time annual contribution. Includes ID card, certificate and full
                  member access.
                </div>
                <a
                  href="https://forms.gle/qPPq5Lig8PxXUK536"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Open the registration form <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-7">
              <ul className="divide-y divide-border border-y border-border">
                {[
                  { t: "Official Membership ID Card", d: "Issued in the name of the Association, recognising your professional standing." },
                  { t: "Membership Certificate", d: "A formal certificate of association, signed and registered for your records." },
                  { t: "Professional Networking Opportunities", d: "Direct access to a state-wide community of psychology professionals." },
                  { t: "Workshops, Seminars & Conferences", d: "Priority participation in events curated for continuous professional development." },
                  { t: "Community Mental Health Projects", d: "Opportunities to contribute to public-good initiatives across Kerala." },
                  { t: "Professional Recognition & Growth", d: "Visibility within the Association's directory and developmental pathways." },
                  { t: "Regular Updates & Communications", d: "Stay informed on Association activities, events, advocacy and opportunities." },
                ].map((b, i) => (
                  <li key={b.t} className="flex items-start gap-6 py-6">
                    <span className="font-display text-brass text-sm tabular-nums w-8 mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <BadgeCheck className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">{b.t}</div>
                      <div className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {b.d}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────── PRINCIPLES ──────────────────────────────── */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.22em] text-brass mb-4">
              05 — Our Principles
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02]">
              The standards we hold ourselves to.
            </h2>
          </div>
          <p className="md:col-span-7 text-foreground/75 text-lg leading-relaxed self-end">
            CPA Kerala is built on principles that define how we practice, how we relate to one
            another and how we serve the public. These are not aspirations — they are the
            working agreements of the Association.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {[
            {
              icon: ShieldCheck,
              t: "Ethical Practice",
              d: "Member conduct is guided by professional ethics — confidentiality, informed consent, respect for the dignity and autonomy of every person we work with.",
            },
            {
              icon: Scale,
              t: "Professional Accountability",
              d: "Members hold themselves accountable to one another and to the public, working within the limits of their training and seeking supervision when needed.",
            },
            {
              icon: BookOpen,
              t: "Evidence-Informed Work",
              d: "We commit to keeping pace with research, integrating evidence into practice, and being honest about what psychology can and cannot yet offer.",
            },
            {
              icon: Feather,
              t: "Care for the Carer",
              d: "Sustainable practice requires care for the practitioner. The Association exists, in part, to make sure no professional has to do this work alone.",
            },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-5">
              <div className="w-12 h-12 rounded-2xl bg-cream border border-border flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-brass" />
              </div>
              <div>
                <h3 className="font-display text-2xl leading-tight mb-2">{t}</h3>
                <p className="text-foreground/70 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────── WHO IT'S FOR ──────────────────────────────── */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "24px 24px" }}
        />
        <div className="container-prose py-24 md:py-32 relative">
          <div className="text-[10px] uppercase tracking-[0.22em] text-brass mb-4">
            06 — Who it's for
          </div>
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.02]">
            CPA Kerala welcomes <em className="text-brass not-italic font-light">all</em>{" "}
            psychology professionals.
          </h2>
          <p className="mt-6 max-w-2xl text-primary-foreground/75 text-lg leading-relaxed">
            Whatever your specialisation, whatever your stage of practice — if your work is
            anchored in psychology and care for human well-being, the Association is for you.
          </p>

          <div className="mt-14 flex flex-wrap gap-2.5">
            {[
              "Counselling Psychologists",
              "Clinical Psychologists",
              "School Counsellors",
              "Mental Health Professionals",
              "Psychiatric Social Workers",
              "Psychology Educators",
              "Researchers & Academics",
              "Psychology Students",
              "Trainee Counsellors",
              "Community Mental Health Workers",
            ].map((r) => (
              <span
                key={r}
                className="px-4 py-2 rounded-full border border-primary-foreground/25 text-sm hover:bg-primary-foreground/10 transition cursor-default"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────── A WORD FROM THE ASSOCIATION ──────────────────────────────── */}
      <section className="container-prose py-24 md:py-32">
        <div className="max-w-4xl">
          <Quote className="w-10 h-10 text-brass mb-8" />
          <blockquote className="font-display text-3xl md:text-5xl leading-[1.15] tracking-tight text-foreground">
            “When the people who care for others are themselves cared for — through community,
            ethics and continuous learning — the quality of mental health care across an
            entire state begins to change.”
          </blockquote>
          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-px bg-brass" />
            <div>
              <div className="text-sm font-medium">The Association</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                CPA Kerala · Thrissur
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────── MEMBER JOURNEY ──────────────────────────────── */}
      <section className="bg-cream/70 border-y border-border/60">
        <div className="container-prose py-24 md:py-32">
          <div className="text-[10px] uppercase tracking-[0.22em] text-brass mb-4">
            07 — How to Join
          </div>
          <h2 className="font-display text-4xl md:text-6xl max-w-2xl leading-[1.02]">
            Becoming a member is a deliberate, straightforward process.
          </h2>

          <ol className="mt-16 grid md:grid-cols-4 gap-px bg-border border border-border rounded-3xl overflow-hidden">
            {[
              { n: "01", t: "Review", d: "Read the Association's purpose, principles and member categories." },
              { n: "02", t: "Register", d: "Complete the official registration form and submit the ₹1,000 fee." },
              { n: "03", t: "Verification", d: "The Association issues your membership code, certificate and ID card." },
              { n: "04", t: "Participate", d: "Join events, programmes and the wider professional community." },
            ].map((s) => (
              <li key={s.n} className="bg-background p-8">
                <div className="font-display text-3xl text-brass">{s.n}</div>
                <div className="mt-5 font-display text-xl">{s.t}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="https://forms.gle/qPPq5Lig8PxXUK536"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-sm"
            >
              Open Registration Form <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/verify"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-background hover:bg-secondary transition font-medium"
            >
              Verify an Existing Member
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────── FAQ ──────────────────────────────── */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-brass mb-4">
              08 — Common Questions
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              Questions, answered with care.
            </h2>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              If your question is not addressed here, please write to the Association directly —
              we respond personally.
            </p>
          </div>
          <div className="md:col-span-8">
            <dl className="divide-y divide-border border-y border-border">
              {[
                {
                  q: "Who can become a member of CPA Kerala?",
                  a: "Any psychology professional, counsellor, mental health worker, educator, researcher or psychology student is welcome to apply, subject to the Association's member categories.",
                },
                {
                  q: "How much is the registration fee?",
                  a: "₹1,000 as the annual registration contribution. This covers the official membership ID card, certificate and full member access for the membership period.",
                },
                {
                  q: "How do I prove that I am a member?",
                  a: "Each member is issued a unique verification code by the Association. Anyone can confirm your membership in seconds using the public verification page.",
                },
                {
                  q: "Is the Association officially registered?",
                  a: "Yes. CPA Kerala is a registered professional association — Reg. No. Tsr/Tc/164/2024 — operating from Thrissur, Kerala.",
                },
                {
                  q: "What happens after I register?",
                  a: "The Association reviews your application, issues your membership code, certificate and ID card, and welcomes you into the member community and its programmes.",
                },
              ].map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="font-display text-xl text-foreground">{f.q}</dt>
                  <dd className="mt-3 text-foreground/70 leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────── CTA + CONTACT ──────────────────────────────── */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="p-10 md:p-12 rounded-3xl bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-brass/20 blur-3xl" />
            <div className="text-[10px] uppercase tracking-[0.22em] text-brass mb-4 relative">
              Join us
            </div>
            <h3 className="font-display text-4xl leading-[1.05] relative">
              Become a member of a growing network of dedicated psychology professionals.
            </h3>
            <p className="mt-5 text-primary-foreground/75 relative leading-relaxed">
              Registration is open. Complete the official form to begin your membership with
              CPA Kerala — and step into a profession that is finally organising itself.
            </p>
            <a
              href="https://forms.gle/qPPq5Lig8PxXUK536"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brass text-primary font-medium hover:opacity-90 transition relative"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="p-10 md:p-12 rounded-3xl border border-border bg-cream/60">
            <div className="text-[10px] uppercase tracking-[0.22em] text-brass mb-4">
              Contact
            </div>
            <h3 className="font-display text-4xl leading-[1.05]">Reach the Association.</h3>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              Write, call or visit. We respond to every enquiry from prospective members,
              institutions and the public.
            </p>

            <div className="mt-9 space-y-5 text-foreground/85">
              <div className="flex gap-4">
                <Building2 className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Registered Office
                  </div>
                  <div className="mt-1">
                    Second Floor, Fabis Arcade, Kuriachira, Thrissur, Kerala, India
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Reg. No.
                  </div>
                  <div className="mt-1 font-mono text-sm">Tsr/Tc/164/2024</div>
                </div>
              </div>
              <a href="tel:+919446040593" className="flex gap-4 hover:text-primary transition">
                <Phone className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Phone
                  </div>
                  <div className="mt-1">+91 94460 40593</div>
                </div>
              </a>
              <a
                href="mailto:cpakeralapsy@gmail.com"
                className="flex gap-4 hover:text-primary transition"
              >
                <Mail className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </div>
                  <div className="mt-1">cpakeralapsy@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
