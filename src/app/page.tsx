"use client";

import { ArrowRight, Check, Play, Sparkles } from "lucide-react";
import { TrustSocialProof } from "@/components/trust-social-proof";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ProductVideo, FAQ } from "@/components/leadflow-experience";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/i18n/provider";

export default function Home() {
  const { messages: m, locale } = useI18n();
  const h = m.home;
  const zh = locale === "zh";

  return <>
    <Navigation />
    <main id="main-content" className={zh ? "zh-experience" : "en-experience"}>
      <section id="home" className="hero-grid relative overflow-hidden pb-24 pt-40 sm:pt-48 lg:pb-32">
        <div className="hero-orb" />
        <Container className="relative text-center"><Reveal>
          <div className="hero-product"><Sparkles size={14} />{h.badge}</div>
          <h1 className="hero-title mx-auto max-w-6xl text-balance text-[60px] font-semibold leading-[.94] tracking-[-.065em] sm:text-8xl lg:text-[112px]"><span>{h.title}</span><span className="gradient-text">{h.accent}</span></h1>
          <div className="hero-values" aria-label={zh ? "核心优势" : "Key benefits"}>{h.values.map(value => <span key={value}>{value}</span>)}</div>
          <div className="hero-actions flex flex-col items-center justify-center gap-3 sm:flex-row"><a className="cta-primary" href={siteConfig.bookingHref}>{h.primary}<ArrowRight size={17} /></a><a className="cta-secondary" href="#video"><Play size={15} />{h.secondary}</a></div>
        </Reveal></Container>
      </section>

      <section id="how" className="dark-section py-28 lg:py-44"><Container>
        <Reveal><p className="eyebrow text-[#7dbbff]">{m.common.how}</p><h2 className="section-title max-w-3xl text-white">{h.howTitle}</h2>{h.howCopy && <p className="section-copy text-[#a1a1aa]">{h.howCopy}</p>}</Reveal>
        <div className="mt-20 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-4">{h.steps.map((s, i) => <Reveal className="bg-[#0d0d10]" delay={i * .08} key={s[0]}><article className="step-card"><span>{s[0]}</span><h3>{s[1]}</h3>{s[2] && <p>{s[2]}</p>}</article></Reveal>)}</div>
      </Container></section>

      <section id="video" className="py-28 lg:py-44"><Container>
        <Reveal><div className="text-center"><p className="eyebrow">{zh ? "了解全貌" : "See the full picture"}</p><h2 className="section-title">{h.video}</h2></div></Reveal>
        <Reveal className="mt-14"><ProductVideo /></Reveal>
      </Container></section>

      <TrustSocialProof />

      <section id="pricing" className="bg-[#f5f5f7] py-28 lg:py-44"><Container>
        <Reveal><div className="text-center"><p className="eyebrow">{m.common.pricing}</p><h2 className="section-title">{h.pricingTitle}</h2><p className="section-copy mx-auto">{h.pricingCopy}</p></div></Reveal>
        <Reveal className="mx-auto mt-16 max-w-4xl"><div className="pricing-card"><div><span className="best-fit">{zh ? "最受欢迎" : "MOST POPULAR"}</span><h3 className="mt-6 text-3xl font-semibold">AI LeadFlow</h3><p className="mt-3 text-muted">{h.pipelineCopy}</p></div><div className="pricing-list">{(zh ? ["AI 线索判断与评分", "自动邮件跟进", "CRM 与日历集成", "专属上线支持"] : ["AI lead qualification & scoring", "Automated email follow-up", "CRM and calendar integrations", "Dedicated onboarding"]).map(x => <p key={x}><span className="check"><Check size={13} /></span>{x}</p>)}<a className="cta-primary mt-5" href={siteConfig.bookingHref}>{m.common.book}<ArrowRight size={17} /></a></div></div></Reveal>
      </Container></section>

      <section id="faq" className="py-28 lg:py-40"><Container className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
        <Reveal><p className="eyebrow">{m.common.faq}</p><h2 className="section-title">{h.faqTitle}</h2></Reveal>
        <Reveal><FAQ /></Reveal>
      </Container></section>
    </main>
    <Footer />
  </>;
}
