import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container-prose py-32 text-center">
      <div className="font-display text-7xl text-primary">404</div>
      <h1 className="font-display text-3xl mt-4">Page not found</h1>
      <p className="text-muted-foreground mt-3">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="inline-flex mt-8 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90"
      >
        Go home
      </Link>
    </section>
  );
}
