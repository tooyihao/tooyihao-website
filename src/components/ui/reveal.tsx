"use client";
import { motion, useReducedMotion } from "framer-motion";

export function Reveal({ children, className, delay = 0 }: React.PropsWithChildren<{ className?: string; delay?: number }>) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .7, delay, ease: [.2,.8,.2,1] }}>{children}</motion.div>;
}
