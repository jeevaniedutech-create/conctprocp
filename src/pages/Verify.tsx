import { useState } from "react";
import { supabase, type Member } from "@/lib/supabase";
import { BadgeCheck, ShieldAlert, Loader2, ScanLine } from "lucide-react";

type Result =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "verified"; member: Member }
  | { status: "invalid" }
  | { status: "paused" }
  | { status: "error"; message: string };

export default function Verify() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<Result>({ status: "idle" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = code.trim();
    if (!trimmed) return;
    setResult({ status: "loading" });
    try {
      const { data, error } = await supabase
        .from("members")
        .select("*")
        .eq("code", trimmed)
        .maybeSingle();
      if (error) throw error;
      if (!data) return setResult({ status: "invalid" });
      if ((data as Member).status === "paused") return setResult({ status: "paused" });
      setResult({ status: "verified", member: data as Member });
    } catch (err) {
      setResult({
        status: "error",
        message: err instanceof Error ? err.message : "Verification failed",
      });
    }
  };

  return (
    <section className="container-prose pt-20 md:pt-28 pb-24">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-brass mb-4">
          Membership Verification
        </div>
        <h1 className="font-display text-5xl md:text-6xl leading-[1.05]">
          Verify a CPA Kerala member.
        </h1>
        <p className="mt-5 text-lg text-foreground/75">
          Enter a verification code below to confirm an individual's official membership status
          with the Counselling Psychological Association, Kerala.
        </p>
      </div>

      <form onSubmit={onSubmit} className="mt-12 max-w-2xl">
        <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Verification Code
        </label>
        <div className="mt-3 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <ScanLine className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              autoFocus
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="e.g. CPA-0001"
              className="w-full pl-12 pr-4 py-4 rounded-full border border-input bg-background font-mono tracking-wider text-base focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            disabled={result.status === "loading" || !code.trim()}
            className="px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition disabled:opacity-50 inline-flex items-center justify-center gap-2"
          >
            {result.status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Checking…
              </>
            ) : (
              "Verify"
            )}
          </button>
        </div>
      </form>

      <div className="mt-10 max-w-2xl">
        {result.status === "verified" && (
          <div className="rounded-3xl border border-border bg-cream overflow-hidden shadow-sm">
            <div className="bg-primary text-primary-foreground px-8 py-5 flex items-center gap-3">
              <BadgeCheck className="w-6 h-6 text-brass" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-brass">
                  Verified Member
                </div>
                <div className="font-display text-lg">Counselling Psychological Association, Kerala</div>
              </div>
            </div>
            <div className="p-8">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Name on record
              </div>
              <div className="font-display text-4xl md:text-5xl mt-2 text-primary">
                {result.member.name}
              </div>
              <div className="mt-6 flex flex-wrap gap-6 text-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Membership Code
                  </div>
                  <div className="font-mono tracking-wider mt-1">{result.member.code}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Status
                  </div>
                  <div className="mt-1 inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    Active
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Reg. No.
                  </div>
                  <div className="mt-1">Tsr/Tc/164/2024</div>
                </div>
              </div>
            </div>
          </div>
        )}
        {(result.status === "invalid" || result.status === "paused") && (
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-7 flex gap-4 items-start">
            <ShieldAlert className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
            <div>
              <div className="font-display text-xl text-destructive">Member not found</div>
              <p className="text-sm text-foreground/70 mt-1">
                {result.status === "paused"
                  ? "This code is not currently active. Please contact CPA Kerala for assistance."
                  : "No active membership matches this verification code. Please re-check the code and try again."}
              </p>
            </div>
          </div>
        )}
        {result.status === "error" && (
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-destructive">
            {result.message}
          </div>
        )}
      </div>
    </section>
  );
}
