import { useEffect, useMemo, useState } from "react";
import { supabase, type Member, MAX_MEMBERS } from "@/lib/supabase";
import { Lock, LogOut, Plus, Pause, Play, Search, Loader2, Users } from "lucide-react";
import { toast } from "sonner";

const ADMIN_USER = "cpaadmin";
const ADMIN_PASS = "cpaadmin";
const SESSION_KEY = "cpa_admin_session_v1";

export default function Admin() {
  const [authed, setAuthed] = useState<boolean>(
    () => typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "1",
  );
  return authed ? (
    <Panel onLogout={() => {
      sessionStorage.removeItem(SESSION_KEY);
      setAuthed(false);
    }} />
  ) : (
    <Login onSuccess={() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setAuthed(true);
    }} />
  );
}

function Login({ onSuccess }: { onSuccess: () => void }) {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (u.trim() === ADMIN_USER && p === ADMIN_PASS) {
      setErr("");
      onSuccess();
    } else {
      setErr("Invalid username or password.");
    }
  };

  return (
    <section className="container-prose py-24 max-w-md">
      <div className="text-xs uppercase tracking-[0.2em] text-brass mb-4">Admin Panel</div>
      <h1 className="font-display text-4xl">Sign in</h1>
      <p className="mt-3 text-muted-foreground">
        Restricted to authorized CPA Kerala administrators.
      </p>
      <form onSubmit={submit} className="mt-10 space-y-5">
        <div>
          <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Username
          </label>
          <input
            value={u}
            onChange={(e) => setU(e.target.value)}
            className="mt-2 w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            autoFocus
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Password
          </label>
          <input
            type="password"
            value={p}
            onChange={(e) => setP(e.target.value)}
            className="mt-2 w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        {err && <div className="text-sm text-destructive">{err}</div>}
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
        >
          <Lock className="w-4 h-4" /> Sign in
        </button>
      </form>
    </section>
  );
}

function Panel({ onLogout }: { onLogout: () => void }) {
  const [members, setMembers] = useState<Member[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("members")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast.error(error.message);
      setMembers([]);
    } else {
      setMembers((data ?? []) as Member[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    if (!members) return [];
    const s = q.trim().toLowerCase();
    if (!s) return members;
    return members.filter(
      (m) => m.name.toLowerCase().includes(s) || m.code.toLowerCase().includes(s),
    );
  }, [members, q]);

  const total = members?.length ?? 0;
  const active = members?.filter((m) => m.status === "active").length ?? 0;
  const paused = total - active;

  const add = async (e: React.FormEvent) => {
    e.preventDefault();
    const c = code.trim();
    const n = name.trim();
    if (!c || !n) return;
    if (total >= MAX_MEMBERS) {
      toast.error(`Maximum of ${MAX_MEMBERS} members reached.`);
      return;
    }
    setBusy(true);
    const { error } = await supabase.from("members").insert({ code: c, name: n });
    setBusy(false);
    if (error) {
      toast.error(
        error.code === "23505" ? "That membership code already exists." : error.message,
      );
      return;
    }
    toast.success("Member added");
    setCode("");
    setName("");
    load();
  };

  const toggle = async (m: Member) => {
    const newStatus = m.status === "active" ? "paused" : "active";
    const { error } = await supabase
      .from("members")
      .update({ status: newStatus })
      .eq("id", m.id);
    if (error) return toast.error(error.message);
    toast.success(newStatus === "paused" ? "Member paused" : "Member reactivated");
    setMembers((prev) =>
      prev ? prev.map((x) => (x.id === m.id ? { ...x, status: newStatus } : x)) : prev,
    );
  };

  return (
    <section className="container-prose py-12 md:py-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-brass mb-2">Admin Panel</div>
          <h1 className="font-display text-4xl md:text-5xl">Members Registry</h1>
          <p className="text-muted-foreground mt-2">
            Add new members and manage verification status. Limit: {MAX_MEMBERS} members.
          </p>
        </div>
        <button
          onClick={onLogout}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-secondary text-sm"
        >
          <LogOut className="w-4 h-4" /> Sign out
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <Stat label="Total" value={total} cap={MAX_MEMBERS} />
        <Stat label="Active" value={active} />
        <Stat label="Paused" value={paused} />
      </div>

      {/* Add form */}
      <form onSubmit={add} className="mt-8 p-6 rounded-2xl border border-border bg-cream/60 grid md:grid-cols-[1fr_1fr_auto] gap-3">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Membership Code (e.g. CPA-0001)"
          className="px-4 py-3 rounded-xl border border-input bg-background font-mono"
          required
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="px-4 py-3 rounded-xl border border-input bg-background"
          required
        />
        <button
          type="submit"
          disabled={busy || total >= MAX_MEMBERS}
          className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition disabled:opacity-50 inline-flex items-center justify-center gap-2"
        >
          {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
          Add Member
        </button>
      </form>

      {/* Search */}
      <div className="mt-8 relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name or code…"
          className="w-full pl-11 pr-4 py-3 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Table */}
      <div className="mt-6 rounded-2xl border border-border overflow-hidden bg-background">
        <div className="grid grid-cols-[1.2fr_2fr_1fr_auto] px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground border-b border-border bg-cream/60">
          <div>Code</div>
          <div>Name</div>
          <div>Status</div>
          <div className="text-right">Action</div>
        </div>
        {loading ? (
          <div className="p-10 text-center text-muted-foreground">
            <Loader2 className="w-5 h-5 animate-spin inline" /> Loading…
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground">
            <Users className="w-6 h-6 mx-auto mb-3 opacity-50" />
            {members && members.length === 0
              ? "No members yet. Add the first one above."
              : "No members match your search."}
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {filtered.map((m) => (
              <li
                key={m.id}
                className="grid grid-cols-[1.2fr_2fr_1fr_auto] items-center px-5 py-4 hover:bg-cream/40 transition"
              >
                <div className="font-mono text-sm tracking-wider">{m.code}</div>
                <div className="font-medium">{m.name}</div>
                <div>
                  <span
                    className={
                      "inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full " +
                      (m.status === "active"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-900")
                    }
                  >
                    <span
                      className={
                        "w-1.5 h-1.5 rounded-full " +
                        (m.status === "active" ? "bg-emerald-600" : "bg-amber-600")
                      }
                    />
                    {m.status === "active" ? "Active" : "Paused"}
                  </span>
                </div>
                <div className="text-right">
                  <button
                    onClick={() => toggle(m)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs hover:bg-secondary"
                  >
                    {m.status === "active" ? (
                      <>
                        <Pause className="w-3.5 h-3.5" /> Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" /> Activate
                      </>
                    )}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function Stat({ label, value, cap }: { label: string; value: number; cap?: number }) {
  return (
    <div className="p-5 rounded-2xl border border-border bg-background">
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
      <div className="font-display text-3xl mt-1 text-primary">
        {value}
        {cap !== undefined && (
          <span className="text-base text-muted-foreground font-sans"> / {cap}</span>
        )}
      </div>
    </div>
  );
}
