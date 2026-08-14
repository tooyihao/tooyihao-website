import { ArrowRight, Check, Clock3, Gauge, Play, Sparkles, Users, Zap } from "lucide-react";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { LeadflowDashboard, LiveDemo, ProductVideo, FAQ } from "@/components/leadflow-experience";
import { siteConfig } from "@/config/site";

const booking = siteConfig.bookingHref;
const problems = [
  { icon: Clock3, stat: "5+ hrs", title: "Leads wait too long", copy: "High-intent prospects go cold while your team is busy doing everything else." },
  { icon: Users, stat: "42%", title: "Follow-ups get missed", copy: "Manual handoffs and scattered inboxes make consistent follow-up nearly impossible." },
  { icon: Gauge, stat: "No signal", title: "Every lead looks equal", copy: "Your best opportunities are buried in a queue with everyone else." },
];
const steps = [
  ["01", "Connect", "Plug in your forms, calendar and CRM. No migration. No new process to learn."],
  ["02", "Qualify", "AI engages every lead instantly, asks the right questions and scores intent."],
  ["03", "Convert", "Sales-ready opportunities are routed to your team with context and next steps."],
];

export default function Home() { return <><Navigation/><main id="main-content">
  <section id="home" className="hero-grid relative overflow-hidden pb-20 pt-36 sm:pt-44 lg:pb-28">
    <div className="hero-orb"/><Container className="relative text-center">
      <Reveal><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-semibold text-[#3c3c43] shadow-sm backdrop-blur-xl"><Sparkles size={14} className="text-accent"/> Meet AI LeadFlow <span className="text-[#aaa]">•</span> Built for revenue teams</div>
      <h1 className="mx-auto max-w-5xl text-balance text-[54px] font-semibold leading-[.94] tracking-[-.065em] text-ink sm:text-7xl lg:text-[96px]">Turn every lead into<br/><span className="gradient-text">your next customer.</span></h1>
      <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-8 text-muted sm:text-[22px]">AI LeadFlow qualifies, scores and follows up with every lead—instantly. So your team only speaks to people ready to buy.</p>
      <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"><a className="cta-primary" href={booking}>Book your free demo <ArrowRight size={17}/></a><a className="cta-secondary" href="#video"><Play size={15} fill="currentColor"/> Watch 90 sec overview</a></div>
      <p className="mt-5 text-xs text-[#86868b]">No commitment · Set up in days · Works with your CRM</p></Reveal>
      <Reveal delay={.12} className="mx-auto mt-16 max-w-6xl"><LeadflowDashboard/></Reveal>
    </Container>
  </section>

  <section id="product" className="py-28 lg:py-44"><Container><Reveal><div className="mx-auto max-w-4xl text-center"><p className="eyebrow">One intelligent pipeline</p><h2 className="section-title">Your best salesperson<br/>never sleeps.</h2><p className="section-copy mx-auto">AI LeadFlow sits between interest and action—responding in seconds, learning what matters, and moving qualified buyers forward.</p></div></Reveal>
  <Reveal className="mt-20"><div className="feature-stage"><div className="feature-copy"><span className="signal-dot">Live intelligence</span><h3>Know who’s ready.<br/>Before they tell you.</h3><p>Every answer, click and signal becomes a clear intent score your team can act on.</p><div className="mt-8 space-y-4">{["Real-time qualification","Lead intent scoring","Automatic CRM enrichment"].map(x=><div className="flex items-center gap-3 text-sm font-medium" key={x}><span className="check"><Check size={13}/></span>{x}</div>)}</div></div><div className="intent-card"><div className="flex items-center justify-between"><div><p className="text-xs text-muted">Lead intent</p><p className="mt-1 font-semibold">Sarah Chen · Acme</p></div><span className="hot-pill">HOT</span></div><div className="score-ring"><span>94</span><small>intent score</small></div><div className="grid grid-cols-3 gap-2">{[["Budget","Confirmed"],["Timing","This month"],["Fit","Excellent"]].map(x=><div className="mini-metric" key={x[0]}><small>{x[0]}</small><b>{x[1]}</b></div>)}</div></div></div></Reveal></Container></section>

  <section id="problems" className="bg-[#f5f5f7] py-28 lg:py-40"><Container><Reveal><p className="eyebrow">The hidden revenue leak</p><h2 className="section-title max-w-3xl">Your leads aren’t the problem.<br/>Your response time is.</h2></Reveal><div className="mt-16 grid gap-4 md:grid-cols-3">{problems.map((p,i)=><Reveal key={p.title} delay={i*.07}><article className="problem-card"><div className="problem-icon"><p.icon size={21}/></div><p className="mt-10 text-4xl font-semibold tracking-[-.05em]">{p.stat}</p><h3 className="mt-6 text-xl font-semibold">{p.title}</h3><p className="mt-3 text-[15px] leading-6 text-muted">{p.copy}</p></article></Reveal>)}</div></Container></section>

  <section id="results" className="py-28 lg:py-44"><Container><Reveal><div className="text-center"><p className="eyebrow">Before / After</p><h2 className="section-title">Less chasing. More closing.</h2></div></Reveal><Reveal className="mt-16"><div className="comparison"><div className="compare-side before"><span>WITHOUT LEADFLOW</span><h3>Manual. Slow. Unclear.</h3>{["Replies after 5+ hours","Leads lost in spreadsheets","Reps qualify every inquiry","Follow-up depends on memory"].map(x=><p key={x}><i>×</i>{x}</p>)}</div><div className="compare-arrow"><ArrowRight/></div><div className="compare-side after"><span>WITH AI LEADFLOW</span><h3>Instant. Focused. Predictable.</h3>{["Replies in under 30 seconds","Every lead tracked automatically","AI surfaces the best opportunities","Every follow-up arrives on time"].map(x=><p key={x}><i><Check size={13}/></i>{x}</p>)}</div></div></Reveal></Container></section>

  <section id="how" className="dark-section py-28 lg:py-44"><Container><Reveal><div className="max-w-3xl"><p className="eyebrow text-[#7dbbff]">How it works</p><h2 className="section-title text-white">From new lead to<br/>qualified meeting.</h2><p className="section-copy text-[#a1a1aa]">One effortless flow. Built around the tools your team already uses.</p></div></Reveal><div className="mt-20 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-3">{steps.map((s,i)=><Reveal className="bg-[#0d0d10]" delay={i*.08} key={s[0]}><article className="step-card"><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p></article></Reveal>)}</div></Container></section>

  <section id="demo" className="bg-[#f5f5f7] py-28 lg:py-44"><Container><Reveal><div className="text-center"><p className="eyebrow">Interactive demo</p><h2 className="section-title">Watch a lead qualify itself.</h2><p className="section-copy mx-auto">Choose an answer and see AI LeadFlow update the opportunity in real time.</p></div></Reveal><Reveal className="mt-16"><LiveDemo/></Reveal></Container></section>

  <section id="video" className="py-28 lg:py-44"><Container><Reveal><div className="text-center"><p className="eyebrow">See the full picture</p><h2 className="section-title">90 seconds to a smarter pipeline.</h2></div></Reveal><Reveal className="mt-14"><ProductVideo/></Reveal></Container></section>

  <section id="pricing" className="bg-[#f5f5f7] py-28 lg:py-44"><Container><Reveal><div className="text-center"><p className="eyebrow">Simple pricing</p><h2 className="section-title">Start focused. Scale freely.</h2><p className="section-copy mx-auto">Every LeadFlow workspace is configured around your funnel—not a generic template.</p></div></Reveal><Reveal className="mx-auto mt-16 max-w-4xl"><div className="pricing-card"><div><span className="best-fit">MOST POPULAR</span><h3 className="mt-6 text-3xl font-semibold tracking-[-.04em]">AI LeadFlow</h3><p className="mt-3 max-w-md text-muted">A complete AI qualification and follow-up system, tailored to your business.</p><p className="mt-8 text-sm text-muted">Starting from</p><p className="mt-1 text-5xl font-semibold tracking-[-.06em]">Custom <span className="text-base font-normal tracking-normal text-muted">/ month</span></p></div><div className="pricing-list">{["AI lead qualification & scoring","Automated email follow-up","CRM and calendar integrations","Custom qualification logic","Analytics dashboard","Dedicated onboarding"].map(x=><p key={x}><span className="check"><Check size={13}/></span>{x}</p>)}<a className="cta-primary mt-5 justify-center" href={booking}>Get a tailored quote <ArrowRight size={17}/></a></div></div></Reveal></Container></section>

  <section id="faq" className="py-28 lg:py-40"><Container className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]"><Reveal><p className="eyebrow">FAQ</p><h2 className="section-title">Questions,<br/>answered.</h2><p className="mt-6 text-muted">Still curious? <a className="text-accent" href={booking}>Talk to us directly →</a></p></Reveal><Reveal><FAQ/></Reveal></Container></section>

  <section id="book" className="px-4 pb-4"><div className="book-panel"><div className="book-glow"/><Container className="relative py-24 text-center lg:py-36"><Reveal><Zap className="mx-auto text-[#73b7ff]"/><p className="eyebrow mt-8 text-[#73b7ff]">Your next customer is waiting</p><h2 className="mx-auto mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[.98] tracking-[-.06em] text-white sm:text-7xl">See what AI LeadFlow<br/>can do for your pipeline.</h2><p className="mx-auto mt-7 max-w-xl text-lg text-[#a8a8b3]">A focused 30-minute walkthrough, configured around your actual sales process.</p><a className="cta-white mt-9" href={booking}>Book your free demo <ArrowRight size={17}/></a><p className="mt-5 text-xs text-[#777781]">No pitch deck. Just your workflow, transformed.</p></Reveal></Container></div></section>
  </main><Footer/></> }
