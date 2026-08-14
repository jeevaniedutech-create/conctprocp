import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Zap, Loader2, CheckCircle2, XCircle } from "lucide-react";

type RunResult = {
  status: "success" | "failed";
  rows_processed: number;
  last_run: string | null;
};

type Phase = "ready" | "processing" | "success" | "failed";

function formatStamp(iso: string | null) {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(d.getDate())}-${p(d.getMonth() + 1)}-${d.getFullYear()} ${p(d.getHours())}:${p(
    d.getMinutes(),
  )}`;
}

export default function SmartSwitch() {
  const [phase, setPhase] = useState<Phase>("ready");
  const [rows, setRows] = useState<number | null>(null);
  const [lastRun, setLastRun] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await supabase.rpc("smart_switch_status");
      if (data) setLastRun(data as string);
    })();
  }, []);

  const run = async () => {
    setPhase("processing");
    setMessage("");
    const { data, error } = await supabase.rpc("smart_switch_run");
    if (error || !data) {
      setPhase("failed");
      setMessage(error?.message ?? "The operation could not be completed.");
      return;
    }
    const res = data as RunResult;
    if (res.status !== "success") {
      setPhase("failed");
      setMessage("The operation could not be completed.");
      return;
    }
    setRows(res.rows_processed);
    setLastRun(res.last_run);
    setPhase("success");
  };

  const statusLabel =
    phase === "processing"
      ? "Processing"
      : phase === "success"
        ? "Run Successful"
        : phase === "failed"
          ? "Failed"
          : "Ready";

  return (
    <section className="container-prose pt-20 md:pt-28 pb-28">
      <div className="max-w-xl mx-auto">
        <div className="text-xs uppercase tracking-[0.2em] text-brass mb-4 text-center">
          Restricted Utility
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-center leading-tight">
          Smart Switch
        </h1>
        <p className="mt-4 text-center text-foreground/70">
          Runs a scheduled backend maintenance operation to keep the service active. No client
          information is accessed or displayed here.
        </p>

        <div className="mt-12 rounded-3xl border border-border bg-cream/60 p-8 md:p-10 shadow-sm">
          <button
            onClick={run}
            disabled={phase === "processing"}
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-primary text-primary-foreground font-semibold text-base tracking-wide hover:opacity-90 transition disabled:opacity-60"
          >
            {phase === "processing" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> PROCESSING…
              </>
            ) : (
              <>
                <Zap className="w-5 h-5 text-brass" /> RUN SMART SWITCH
              </>
            )}
          </button>

          <div className="mt-7 flex items-center justify-between text-sm">
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Status
            </span>
            <span
              className={
                "inline-flex items-center gap-2 font-medium " +
                (phase === "success"
                  ? "text-emerald-700"
                  : phase === "failed"
                    ? "text-destructive"
                    : "text-foreground/80")
              }
            >
              <span
                className={
                  "w-2 h-2 rounded-full " +
                  (phase === "success"
                    ? "bg-emerald-600"
                    : phase === "failed"
                      ? "bg-destructive"
                      : phase === "processing"
                        ? "bg-brass animate-pulse"
                        : "bg-muted-foreground/50")
                }
              />
              {statusLabel}
            </span>
          </div>

          {phase === "success" && (
            <div className="mt-7 pt-7 border-t border-border/70">
              <div className="flex items-center gap-2 text-emerald-700 font-display text-xl">
                <CheckCircle2 className="w-5 h-5" /> Run Successful
              </div>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Rows Processed</dt>
                  <dd className="font-mono">{(rows ?? 0).toLocaleString("en-IN")}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Last Run</dt>
                  <dd className="font-mono">{formatStamp(lastRun)}</dd>
                </div>
              </dl>
            </div>
          )}

          {phase === "failed" && (
            <div className="mt-7 pt-7 border-t border-border/70">
              <div className="flex items-center gap-2 text-destructive font-display text-xl">
                <XCircle className="w-5 h-5" /> Run Failed
              </div>
              <p className="mt-2 text-sm text-foreground/70">{message}</p>
              {lastRun && (
                <p className="mt-3 text-sm">
                  <span className="text-muted-foreground">Last Run: </span>
                  <span className="font-mono">{formatStamp(lastRun)}</span>
                </p>
              )}
            </div>
          )}

          {phase !== "success" && phase !== "failed" && lastRun && (
            <p className="mt-7 pt-7 border-t border-border/70 text-sm">
              <span className="text-muted-foreground">Last Run: </span>
              <span className="font-mono">{formatStamp(lastRun)}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
