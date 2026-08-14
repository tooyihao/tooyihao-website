"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

export function Navigation() {
 const [open,setOpen]=useState(false);
 useEffect(() => {
  const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
  window.addEventListener("keydown", close);
  return () => window.removeEventListener("keydown", close);
 }, []);
 return <header className="fixed inset-x-0 top-0 z-50 pt-3"><Container><nav aria-label="Main navigation" className="relative flex h-14 items-center justify-between rounded-2xl border border-white/80 bg-white/75 px-5 shadow-[0_8px_30px_rgba(20,30,60,.07)] backdrop-blur-2xl">
  <a href="#home" className="flex items-center gap-2 text-[13px] font-bold tracking-[.12em] text-ink"><span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[#1685f8] to-[#765bea] text-xs text-white">T</span> TOO YI HAO</a>
  <div className="hidden items-center gap-7 md:flex">{navigation.map(x=><a key={x.href} href={x.href} className="text-xs text-muted transition-colors hover:text-ink">{x.label}</a>)}</div>
  <a href={siteConfig.bookingHref} className="hidden rounded-full bg-ink px-5 py-2.5 text-xs font-medium text-white transition-transform hover:-translate-y-0.5 md:block">Book a demo</a>
  <button className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={18}/>:<Menu size={18}/>}</button>
  {open && <div className="absolute left-0 right-0 top-[72px] rounded-2xl border border-line bg-white p-4 shadow-soft md:hidden">{navigation.map(x=><a key={x.href} href={x.href} onClick={()=>setOpen(false)} className="block rounded-xl px-4 py-3 text-base text-ink hover:bg-[#f5f5f7]">{x.label}</a>)}<a href={siteConfig.bookingHref} onClick={()=>setOpen(false)} className="mt-2 block rounded-xl bg-ink px-4 py-3 text-center text-white">Book Demo</a></div>}
 </nav></Container></header>
}
