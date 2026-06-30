import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/verify", label: "Verify Member" },
];

export function Layout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
        <div className="container-prose flex items-center justify-between h-18 py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-semibold text-lg shadow-sm ring-1 ring-brass/30">
              ψ
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold tracking-tight">CPA Kerala</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Reg. Tsr/Tc/164/2024
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground/70 hover:text-foreground hover:bg-secondary",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/60 bg-background/95">
            <div className="container-prose py-3 flex flex-col gap-1">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-2.5 rounded-lg text-sm font-medium",
                      isActive ? "bg-primary text-primary-foreground" : "hover:bg-secondary",
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-24 border-t border-border/60 bg-cream/60">
        <div className="container-prose py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-semibold">
                ψ
              </div>
              <div className="font-display text-lg font-semibold">CPA Kerala</div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Counselling Psychological Association, Kerala — a registered professional body
              dedicated to advancing psychology and mental health in Kerala.
            </p>
            <p className="text-xs text-muted-foreground mt-3">Reg. No: Tsr/Tc/164/2024</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
              Contact
            </div>
            <address className="not-italic text-sm leading-relaxed text-foreground/80">
              Second Floor, Fabis Arcade,<br />
              Kuriachira, Thrissur,<br />
              Kerala, India
            </address>
            <div className="text-sm mt-3 space-y-1">
              <a href="tel:+919446040593" className="block hover:text-primary">
                +91 94460 40593
              </a>
              <a href="mailto:cpakeralapsy@gmail.com" className="block hover:text-primary">
                cpakeralapsy@gmail.com
              </a>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
              Navigate
            </div>
            <ul className="space-y-1.5 text-sm">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary">About the Association</Link></li>
              <li><Link to="/verify" className="hover:text-primary">Verify Membership</Link></li>
              <li>
                <a
                  href="https://forms.gle/qPPq5Lig8PxXUK536"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  Registration Form ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="container-prose py-5 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 justify-between">
            <span>© {new Date().getFullYear()} Counselling Psychological Association, Kerala.</span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
