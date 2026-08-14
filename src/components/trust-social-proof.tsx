"use client";

import { ArrowDown, BriefcaseBusiness, Building2, Check, GraduationCap, HeartPulse, Home, Megaphone, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/i18n/provider";

const brands = ["Google", "Gmail", "HubSpot", "Calendly", "Slack", "WhatsApp", "Meta Ads", "stripe"];
const businessIcons = [Megaphone, BriefcaseBusiness, GraduationCap, HeartPulse, Home, Building2];

export function TrustSocialProof() {
  const { locale } = useI18n();
  const zh = locale === "zh";
  const businesses = zh ? ["营销机构", "咨询服务", "教育", "医疗健康", "房地产", "专业服务"] : ["Marketing Agencies", "Consulting", "Education", "Healthcare", "Real Estate", "Professional Services"];
  const before = zh ? ["回复慢", "手动跟进", "客户流失", "不知道谁最可能成交"] : ["Slow responses", "Manual follow-up", "Leads slip away", "No visibility into who will convert"];
  const after = zh ? ["30 秒内回应", "自动持续跟进", "AI 自动筛选客户", "销售只联系值得成交的人"] : ["Respond in 30 seconds", "Continuous automated follow-up", "AI qualifies every lead", "Sales only contacts leads worth closing"];

  return <section className="trust-proof" aria-label={zh ? "信任与客户成果" : "Trust and customer outcomes"}><Container>
    <Reveal><div className="trust-heading"><h2>{zh ? "无缝接入你已经在使用的工具" : "Works with the tools you already use"}</h2><p>{zh ? <>无需迁移<br/>无需复杂部署<br/>连接即可开始</> : <>No migration.<br/>No complicated setup.<br/>Just connect and start.</>}</p></div></Reveal>
    <Reveal delay={.08} className="logo-cloud">{brands.map((brand,index)=><div className={`integration-logo integration-logo-${index}`} key={brand} aria-label={brand}><span aria-hidden="true">{["G","M","✣","C","#","◉","∞","S"][index]}</span><b>{brand}</b></div>)}</Reveal>
    <div className="trust-divider"/>
    <Reveal><h2 className="trust-subtitle">{zh ? "专为成长中的团队打造" : "Built for growing businesses"}</h2></Reveal>
    <div className="business-grid">{businesses.map((business,index)=>{const Icon=businessIcons[index];return <Reveal key={business} delay={index*.04}><article className="business-card"><span><Icon size={21} strokeWidth={1.65}/></span><h3>{business}</h3></article></Reveal>})}</div>
    <div className="trust-divider"/>
    <Reveal><div className="transformation-title"><span>{zh ? "使用前" : "Before AI LeadFlow"}</span><ArrowDown aria-hidden="true"/><span>{zh ? "使用后" : "After AI LeadFlow"}</span></div></Reveal>
    <Reveal delay={.08} className="trust-comparison"><div className="trust-before"><p>{zh ? "使用前" : "Before"}</p><ul>{before.map(item=><li key={item}><i><X size={13}/></i>{item}</li>)}</ul></div><div className="trust-after"><p>{zh ? "使用后" : "After"}</p><ul>{after.map(item=><li key={item}><i><Check size={14}/></i>{item}</li>)}</ul></div></Reveal>
  </Container></section>;
}
