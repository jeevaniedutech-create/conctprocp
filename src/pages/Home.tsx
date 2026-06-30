import { Link } from "react-router-dom";
import {
  ArrowRight,
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
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-prose pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-border text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brass" />
              Registered Association · Reg. No. Tsr/Tc/164/2024
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight">
              Counselling Psychological{" "}
              <span className="italic text-brass">Association,</span> Kerala
            </h1>
            <p className="mt-8 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl">
              Empowering psychology professionals, strengthening mental health services and
              building a better society — together.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://forms.gle/qPPq5Lig8PxXUK536"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-sm"
              >
                Become a Member <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/verify"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background/60 hover:bg-secondary transition font-medium"
              >
                Verify Membership
              </Link>
            </div>
          </div>

          {/* Decorative numbers */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            {[
              { k: "1", v: "United Profession" },
              { k: "7+", v: "Member Categories" },
              { k: "∞", v: "Networking" },
              { k: "₹1,000", v: "Registration Fee" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-4xl md:text-5xl text-primary">{s.k}</div>
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-2">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hairline container-prose" />

      {/* WELCOME */}
      <section className="container-prose py-24">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-brass mb-3">01 — Welcome</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              A professional home for psychology in Kerala.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-foreground/80 text-lg leading-relaxed">
            <p>
              The Counselling Psychological Association, Kerala (CPA Kerala) is a professional
              organization dedicated to bringing together psychologists, counsellors, mental
              health professionals, educators, researchers and students working in the field of
              psychology.
            </p>
            <p>
              Our association aims to strengthen the psychology profession, promote ethical and
              professional practices, create opportunities for professional growth, and
              contribute meaningfully to the mental well-being of society.
            </p>
            <p>
              We believe that strengthening psychology professionals ultimately strengthens
              mental health services — and benefits society as a whole.
            </p>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="bg-cream/70 border-y border-border/60">
        <div className="container-prose py-24">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-brass mb-3">
              02 — Why Join
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Be part of a professional movement.
            </h2>
            <p className="mt-5 text-foreground/75 text-lg">
              By becoming a member, you join a network committed to elevating the practice and
              perception of psychology across Kerala.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {[
              { icon: Sparkles, t: "Advancing Psychology", d: "Push the field forward through ethical, evidence-based practice." },
              { icon: HeartHandshake, t: "Improving Mental Health Services", d: "Raise the standard of care available across the state." },
              { icon: Award, t: "Enhancing Standards", d: "Champion professional excellence and accountability." },
              { icon: Users, t: "Stronger Community Support", d: "Build community systems that hold people through hard times." },
              { icon: GraduationCap, t: "Learning & Collaboration", d: "Workshops, seminars and ongoing professional development." },
              { icon: Network, t: "Professional Networking", d: "Connect with peers, mentors and institutions across Kerala." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-background p-8">
                <Icon className="w-6 h-6 text-brass mb-5" />
                <h3 className="font-display text-xl mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container-prose py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-brass mb-3">
              03 — Membership Benefits
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              What you receive as a member.
            </h2>
            <p className="mt-5 text-foreground/75 text-lg">
              Every member of CPA Kerala receives tangible recognition and access to a curated
              programme of professional opportunities.
            </p>
            <div className="mt-8 p-6 rounded-2xl border border-border bg-cream/60">
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Registration Fee
              </div>
              <div className="font-display text-5xl text-primary mt-1">₹1,000</div>
              <a
                href="https://forms.gle/qPPq5Lig8PxXUK536"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Open the registration form <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {[
                "Official Membership ID Card",
                "Membership Certificate",
                "Professional Networking Opportunities",
                "Participation in Workshops, Seminars & Conferences",
                "Access to Community Mental Health Projects",
                "Professional Recognition & Development Opportunities",
                "Regular Updates on Association Activities & Events",
              ].map((b, i) => (
                <li key={b} className="flex items-start gap-5 py-5">
                  <span className="font-display text-brass text-sm tabular-nums w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <BadgeCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-brass mb-3">
            04 — Who it's for
          </div>
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl leading-tight">
            CPA Kerala welcomes all psychology professionals.
          </h2>
          <div className="mt-12 flex flex-wrap gap-2">
            {[
              "Counselling Psychologists",
              "Clinical Psychologists",
              "School Counsellors",
              "Mental Health Professionals",
              "Social Workers",
              "Psychology Educators",
              "Researchers",
              "Psychology Students",
            ].map((r) => (
              <span
                key={r}
                className="px-4 py-2 rounded-full border border-primary-foreground/25 text-sm hover:bg-primary-foreground/10 transition"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + CONTACT */}
      <section className="container-prose py-24">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div className="p-10 rounded-3xl bg-cream border border-border">
            <div className="text-xs uppercase tracking-[0.2em] text-brass mb-3">Join us</div>
            <h3 className="font-display text-3xl leading-tight">
              Become a member of a growing network of dedicated psychology professionals.
            </h3>
            <p className="mt-4 text-foreground/70">
              Registration is open. Complete the official form to begin your membership with
              CPA Kerala.
            </p>
            <a
              href="https://forms.gle/qPPq5Lig8PxXUK536"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="p-10 rounded-3xl border border-border">
            <div className="text-xs uppercase tracking-[0.2em] text-brass mb-3">Contact</div>
            <h3 className="font-display text-3xl leading-tight">Reach the association.</h3>
            <div className="mt-7 space-y-4 text-foreground/85">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                <span>Second Floor, Fabis Arcade, Kuriachira, Thrissur, Kerala, India</span>
              </div>
              <a href="tel:+919446040593" className="flex gap-3 hover:text-primary">
                <Phone className="w-5 h-5 text-brass shrink-0 mt-0.5" /> +91 94460 40593
              </a>
              <a href="mailto:cpakeralapsy@gmail.com" className="flex gap-3 hover:text-primary">
                <Mail className="w-5 h-5 text-brass shrink-0 mt-0.5" /> cpakeralapsy@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
