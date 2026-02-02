import { cn } from "../../utils/helpers";

export function Section({ children, className }) {
  return (
    <section className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </section>
  );
}
