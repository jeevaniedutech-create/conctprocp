import { createClient } from "@supabase/supabase-js";

// Publishable (anon) credentials are safe to ship to the browser. Env vars win when
// present; the fallbacks keep static builds (e.g. GitHub Pages without secrets)
// from crashing at startup with a blank screen.
const FALLBACK_URL = "https://yvuonfvysdejmmiemajv.supabase.co";
const FALLBACK_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2dW9uZnZ5c2Rlam1taWVtYWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4Mjg2OTAsImV4cCI6MjA5ODQwNDY5MH0.xHcm-txpVoeD-Xge5zbJWeEvn9YHZh6DLmHZrfwTEHI";

const url = (import.meta.env.VITE_SUPABASE_URL as string) || FALLBACK_URL;
const anonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || FALLBACK_ANON_KEY;

export const supabase = createClient(url, anonKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});


export type Member = {
  id: string;
  code: string;
  name: string;
  status: "active" | "paused";
  created_at: string;
};

export const MAX_MEMBERS = 250;
