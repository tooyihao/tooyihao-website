import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = { href: string; children: React.ReactNode; variant?: "primary" | "secondary"; className?: string };

export function Button({ href, children, variant = "primary", className }: Props) {
  return (
    <a href={href} className={cn("group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent", variant === "primary" ? "bg-accent text-white shadow-[0_8px_24px_rgba(0,113,227,.2)] hover:bg-[#0077ed] hover:-translate-y-0.5" : "border border-line bg-white text-ink hover:border-[#c9c9cc] hover:-translate-y-0.5", className)}>
      {children}<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
    </a>
  );
}
