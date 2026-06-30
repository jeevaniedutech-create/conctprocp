import { Compass, Target, Flag, CheckCircle2, Users2 } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="container-prose pt-20 md:pt-28 pb-12">
        <div className="text-xs uppercase tracking-[0.2em] text-brass mb-4">About the Association</div>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl">
          A united community for psychology, mental health & social development.
        </h1>
      </section>

      <section className="container-prose pb-20">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Who We Are
          </div>
          <div className="md:col-span-8 space-y-5 text-lg text-foreground/80 leading-relaxed">
            <p>
              The Counselling Psychological Association, Kerala (CPA Kerala) is a professional
              association established to unite psychology professionals under a common platform
              for collaboration, learning, advocacy and professional growth.
            </p>
            <p>
              We believe that strengthening psychology professionals ultimately strengthens mental
              health services and benefits society as a whole — and we organize our work around
              that conviction.
            </p>
          </div>
        </div>
      </section>

      <div className="hairline container-prose" />

      {/* Vision / Mission */}
      <section className="container-prose py-20 grid md:grid-cols-2 gap-10">
        <div className="p-10 rounded-3xl border border-border bg-cream/60">
          <Compass className="w-7 h-7 text-brass mb-5" />
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Our Vision
          </div>
          <p className="font-display text-2xl md:text-3xl leading-snug">
            To create a strong and united community of psychology professionals committed to
            promoting mental health, psychological well-being and social development.
          </p>
        </div>
        <div className="p-10 rounded-3xl border border-border bg-cream/60">
          <Target className="w-7 h-7 text-brass mb-5" />
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Our Mission
          </div>
          <ul className="space-y-3 text-foreground/85">
            {[
              "Unite psychology professionals under a common platform.",
              "Promote ethical standards and professional excellence in practice.",
              "Organize training programs, workshops, seminars and conferences.",
              "Create awareness about mental health and psychological well-being.",
              "Support research, education and innovation in psychology.",
              "Advocate for the interests and welfare of psychology practitioners.",
              "Contribute to community mental health and social development.",
            ].map((m) => (
              <li key={m} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <Flag className="w-7 h-7 text-brass mb-5" />
              <div className="text-xs uppercase tracking-[0.2em] text-brass mb-3">
                Objectives
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                What we set out to do.
              </h2>
            </div>
            <ol className="md:col-span-8 divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
              {[
                "Strengthen the psychology profession in Kerala.",
                "Create networking opportunities among professionals.",
                "Facilitate continuous professional development.",
                "Promote evidence-based counselling and psychological interventions.",
                "Support mental health awareness campaigns.",
                "Encourage collaboration among educational institutions, healthcare providers and mental health organizations.",
                "Represent and address the needs and concerns of psychology professionals.",
              ].map((o, i) => (
                <li key={o} className="py-5 flex gap-5">
                  <span className="font-display text-brass tabular-nums w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-primary-foreground/90">{o}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Leadership / Collaboration */}
      <section className="container-prose py-24">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <Users2 className="w-7 h-7 text-brass mb-5" />
            <div className="text-xs uppercase tracking-[0.2em] text-brass mb-3">
              Leadership & Collaboration
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              We welcome every voice in the field.
            </h2>
            <p className="mt-5 text-foreground/75 text-lg">
              CPA Kerala encourages active participation and collaboration to strengthen the
              profession and serve society effectively.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
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
                <div key={r} className="bg-background p-6">
                  <div className="font-display text-lg">{r}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Together We Can */}
      <section className="container-prose pb-28">
        <div className="rounded-3xl bg-cream border border-border p-12 md:p-16 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-brass mb-4">
            Together We Can
          </div>
          <p className="font-display text-3xl md:text-4xl leading-snug max-w-3xl mx-auto">
            Together, we can make psychology more accessible, impactful and beneficial to
            society — while creating a stronger professional community dedicated to mental
            health and well-being.
          </p>
        </div>
      </section>
    </>
  );
}
