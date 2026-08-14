"use client";
import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, Check, Database, Mail, UserRound } from "lucide-react";

const steps=[
 {icon:UserRound,label:"New lead",meta:"Acme Studio"},
 {icon:BrainCircuit,label:"AI qualification",meta:"Intent detected"},
 {icon:Database,label:"CRM routing",meta:"Score · 92"},
 {icon:Mail,label:"Follow-up",meta:"Personalized"},
];
export function Workflow(){const reduced=useReducedMotion();return <div className="relative mx-auto max-w-[500px] rounded-[32px] border border-white bg-white/90 p-4 shadow-[0_35px_100px_rgba(29,29,31,.12)] sm:p-6">
 <div className="flex items-center justify-between border-b border-line px-2 pb-5"><div><p className="text-xs font-medium text-muted">AUTOMATION</p><p className="mt-1 font-semibold text-ink">Lead qualification</p></div><span className="flex items-center gap-2 rounded-full bg-[#eaf6ee] px-3 py-1.5 text-xs font-medium text-[#287a3d]"><span className="h-1.5 w-1.5 rounded-full bg-[#34a853]"/>Live</span></div>
 <div className="relative space-y-3 pt-5"><div className="absolute bottom-8 left-[27px] top-8 w-px bg-line"/>{steps.map((s,i)=><motion.div key={s.label} initial={reduced?false:{opacity:0,x:15}} animate={reduced?undefined:{opacity:1,x:0}} transition={{delay:.35+i*.13,duration:.55}} className="relative flex items-center gap-4 rounded-2xl border border-line bg-white p-3.5 shadow-[0_6px_20px_rgba(0,0,0,.035)]"><div className="z-10 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f5f5f7] text-accent"><s.icon size={19}/></div><div className="min-w-0 flex-1"><p className="text-sm font-semibold text-ink">{s.label}</p><p className="mt-0.5 text-xs text-muted">{s.meta}</p></div><span className="grid h-6 w-6 place-items-center rounded-full bg-[#eaf6ee] text-[#287a3d]"><Check size={13}/></span></motion.div>)}</div>
 <div className="mt-4 flex items-center justify-between rounded-2xl bg-ink px-5 py-4 text-white"><div><p className="text-xs text-white/55">WORKFLOW STATUS</p><p className="mt-1 text-lg font-semibold">Ready to route</p></div><div className="flex h-8 items-end gap-1" aria-hidden="true">{[12,19,15,25,21,30].map((h,i)=><span key={i} className="w-1 rounded-full bg-accent" style={{height:h}}/>)}</div></div>
 </div>}
