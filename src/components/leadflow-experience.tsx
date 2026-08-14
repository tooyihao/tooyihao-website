"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BarChart3, Bell, Check, ChevronDown, CirclePlay, Database, LayoutDashboard, LoaderCircle, MessageSquareText, Search, Send, Settings, Sparkles, Users, Zap } from "lucide-react";
import { useI18n } from "@/i18n/provider";

export function LiveAICanvas(){
  const {locale}=useI18n(); const zh=locale==="zh"; const [elapsed,setElapsed]=useState(0);
  useEffect(()=>{const started=performance.now();const timer=window.setInterval(()=>setElapsed((performance.now()-started)%8200),40);return()=>window.clearInterval(timer)},[]);
  const t=elapsed;
  const score=t<3000?0:Math.min(94,Math.round((t-3000)/1700*94));
  return <div className={`ai-canvas ${t>=7100?'is-resetting':''}`} aria-label={zh?"AI 分析客户消息并识别高优先级线索":"AI analyzes a customer message and identifies a high-priority lead"}>
    <div className="canvas-top"><div><span className="canvas-logo"><Sparkles size={14}/></span><b>AI LeadFlow</b></div><span className="canvas-live"><i/>{zh?"实时运行":"LIVE"}</span></div>
    <div className="canvas-content">
      <div className="teaser-flow">
        <div className="canvas-message"><span><MessageSquareText size={13}/>{zh?"客户消息":"CUSTOMER MESSAGE"}</span><p>{zh?"你好，我想了解你们的价格。":"Hi, I’d like to know your pricing."}</p><small>Sarah Chen · Acme Studio <em>{zh?"刚刚":"Just now"}</em></small></div>
        <span className={`teaser-arrow ${t>=1300?'visible':''}`} aria-hidden="true">↓</span>
        <div className={`teaser-thinking ${t>=1500?'visible':''}`}><span><Sparkles size={17}/></span><p><b>{zh?"AI 思考中…":"AI Thinking..."}</b><small>{zh?"正在识别购买意向":"Reading buying intent"}</small></p><i/><i/><i/></div>
        <span className={`teaser-arrow ${t>=2750?'visible':''}`} aria-hidden="true">↓</span>
        <div className={`teaser-score ${t>=2900?'visible':''}`}><span>{zh?"线索评分":"LEAD SCORE"}</span><strong>{score}</strong><div><i style={{width:`${score}%`}}/></div></div>
        <span className={`teaser-arrow ${t>=4750?'visible':''}`} aria-hidden="true">↓</span>
        <div className={`teaser-priority ${t>=4900?'visible':''}`}><i/><span>{zh?"高优先级":"High Priority"}</span></div>
      </div>
    </div>
  </div>
}

export function LeadflowDashboard(){const leads=[['Sarah Chen','Acme Studio','94','Qualified'],['Marcus Reid','Northstar','81','Nurture'],['Elena Rossi','Forma Labs','76','Engaged'],['David Kim','Kinetic','62','New']];return <div className="dashboard-shell"><div className="browser-bar"><i/><i/><i/><span>app.aileadflow.ai</span></div><div className="dashboard-body"><aside className="dash-side"><div className="dash-logo"><Sparkles size={15}/></div>{[LayoutDashboard,Users,BarChart3,Settings].map((I,i)=><div className={`dash-nav ${i===0?'active':''}`} key={i}><I size={17}/></div>)}</aside><div className="dash-main"><div className="dash-top"><div><small>OVERVIEW</small><h3>Good morning, Alex</h3></div><div className="flex items-center gap-2"><button><Search size={16}/></button><button><Bell size={16}/></button><div className="avatar">AK</div></div></div><div className="metric-grid">{[['Qualified leads','184','+24%'],['Meetings booked','68','+18%'],['Avg. response','18 sec','−42%'],['Pipeline value','$284k','+31%']].map((m,i)=><div className="dash-metric" key={m[0]}><div className="flex justify-between"><small>{m[0]}</small><span>{m[2]}</span></div><strong>{m[1]}</strong><div className={`spark spark-${i}`}/></div>)}</div><div className="dash-lower"><div className="lead-table"><div className="table-title"><div><b>Lead intelligence</b><small>Live activity across your pipeline</small></div><button>View all <ArrowUpRight size={12}/></button></div><div className="table-head"><span>LEAD</span><span>SCORE</span><span>STATUS</span></div>{leads.map((l,i)=><div className="table-row" key={l[0]}><div><i>{l[0].split(' ').map(x=>x[0]).join('')}</i><p><b>{l[0]}</b><small>{l[1]}</small></p></div><strong>{l[2]}</strong><span className={`status s${i}`}>{l[3]}</span></div>)}</div><div className="activity"><b>AI activity</b><small>Happening now</small>{[['SC','Sarah reached 94 intent','just now'],['MR','Follow-up sent to Marcus','2m'],['ER','Elena viewed pricing','5m']].map((a,i)=><div className="activity-row" key={a[1]}><i>{a[0]}</i><p>{a[1]}<small>{a[2]}</small></p>{i===0&&<em/>}</div>)}</div></div></div></div><div className="dashboard-float"><span><Sparkles size={13}/> AI INSIGHT</span><b>3 high-intent leads need attention</b><small>Potential pipeline value · $48,000</small></div></div>}

export function LiveDemo(){
  const {locale}=useI18n();
  const zh=locale==="zh";
  const [message,setMessage]=useState("");
  const [step,setStep]=useState(-1);
  const running=step>=0&&step<8;
  useEffect(()=>{if(!running)return;const delays=[1050,1050,850,800,1100,800,800,850];const timer=window.setTimeout(()=>setStep(current=>current+1),delays[step]);return()=>window.clearTimeout(timer)},[step,running]);
  const reset=()=>{setStep(-1);setMessage("")};
  const milestones=[
    {label:zh?"正在读取消息…":"Reading message…",icon:MessageSquareText},
    {label:zh?"正在分析意向…":"Analyzing intent…",icon:Sparkles},
    {label:zh?"线索评分":"Lead Score",icon:BarChart3},
    {label:zh?"优先级":"Priority",icon:Zap},
    {label:zh?"建议回复":"Suggested Reply",icon:MessageSquareText},
    {label:zh?"CRM 已创建":"CRM Created",icon:Database},
    {label:zh?"邮件已生成":"Email Generated",icon:Send},
    {label:zh?"销售已通知":"Sales Notified",icon:Bell},
  ];
  return <div className="leadflow-lab">
    <div className="lab-toolbar"><div><span className="lab-mark"><Sparkles size={15}/></span><p><b>AI LeadFlow</b><small>{zh?"智能线索工作台":"Intelligent lead workspace"}</small></p></div><span className="lab-live"><i/>{zh?"系统在线":"SYSTEM ONLINE"}</span></div>
    <div className="lab-grid">
      <form className="lab-form" onSubmit={e=>{e.preventDefault();setStep(0)}}>
        <div className="lab-form-title"><span>01</span><div><h3>{zh?"输入客户咨询":"Paste a customer message"}</h3><p>{zh?"看看 AI 如何从第一句话开始接手。":"Watch AI take it from the very first word."}</p></div></div>
        <label>{zh?"客户消息":"Customer Message"}<textarea autoFocus value={message} onChange={e=>setMessage(e.target.value.slice(0,500))} placeholder={zh?"你好，\n我想了解你们的服务和报价。":"Hi,\nI'd like to know more about your services..."} required disabled={running}/><span className="character-count">{message.length}/500</span></label>
        <button className="lab-analyze" disabled={running||!message.trim()}>{running?<><LoaderCircle className="lab-spinner" size={17}/>{zh?"AI 正在工作…":"AI is working…"}</>:<><Sparkles size={17}/>{zh?"立即体验":"Watch AI Work"}<ArrowRight size={16}/></>}</button>
        <p className="lab-note"><span>✦</span>{zh?"这是模拟体验，不会保存或发送任何数据。":"Interactive demo only. No data is saved or sent."}</p>
      </form>
      <div className={`lab-results ${step<0?'is-empty':''}`} aria-live="polite">
        {step<0?<div className="lab-empty"><div><Sparkles/></div><h3>{zh?"AI 已准备就绪":"AI is ready"}</h3><p>{zh?"输入客户咨询并点击“立即体验”，观看完整流程。":"Paste a message and click Watch AI Work to see the full workflow."}</p><div className="empty-lines"><i/><i/><i/></div></div>:<>
          <div className="result-head"><div><span className={running?"processing":"complete"}>{running?<LoaderCircle size={12}/>:<Check size={12}/>} {running?(zh?"AI 正在工作":"AI WORKING"):(zh?"流程完成":"WORKFLOW COMPLETE")}</span><h3>{zh?"实时工作流":"Live workflow"}</h3></div><span className="result-time">00:{String(Math.min(step+1,8)).padStart(2,"0")}</span></div>
          <div className="workflow-track">{milestones.map((item,i)=>{const Icon=item.icon;const active=i<=step;return <motion.div className={`workflow-row ${active?'active':''}`} initial={{opacity:.25}} animate={{opacity:active?1:.25,x:i===step?[0,3,0]:0}} transition={{duration:.35}} key={item.label}><span className="workflow-icon">{active&&i<step?<Check size={14}/>:i===step&&running?<LoaderCircle className="lab-spinner" size={14}/>:<Icon size={14}/>}</span><p>{item.label}</p>{i<step&&<small>{zh?"完成":"Done"}</small>}</motion.div>})}</div>
          <AnimatePresence>{step>=2&&<motion.div className="result-summary" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}><div className="score-card"><span>{zh?"线索评分":"LEAD SCORE"}</span><strong>92<small>/100</small></strong><div className="score-bar"><i/></div></div>{step>=3&&<motion.div className="priority-card" initial={{opacity:0,x:8}} animate={{opacity:1,x:0}}><span>{zh?"优先级":"PRIORITY"}</span><strong><i/>{zh?"高优先级":"High priority"}</strong><small>{zh?"建议 5 分钟内跟进":"Follow up within 5 min"}</small></motion.div>}</motion.div>}</AnimatePresence>
          <AnimatePresence>{step>=4&&<motion.div className="reply-card" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}><span><MessageSquareText size={13}/>{zh?"建议回复":"SUGGESTED REPLY"}</span><p>{zh?"您好！感谢您的咨询。我们很乐意向您介绍适合您需求的服务和报价。方便告诉我您的团队规模和主要目标吗？":"Hi! Thanks for reaching out. I’d be happy to walk you through our services and pricing. Could you share a little about your team and what you’d like to achieve?"}</p><small>{zh?"语气：专业、友好":"Tone: Professional · Friendly"}</small></motion.div>}</AnimatePresence>
          {step===8&&<motion.div className="result-success" initial={{opacity:0,scale:.98}} animate={{opacity:1,scale:1}}><span><Check size={14}/></span><p><b>{zh?"工作流程完成":"Workflow complete"}</b><small>{zh?"CRM 已创建 · 邮件已生成 · 销售已通知":"CRM created · Email generated · Sales notified"}</small></p><button type="button" onClick={reset}>{zh?"再试一次":"Try again"}</button></motion.div>}
        </>}
      </div>
    </div>
  </div>
}

export function ProductVideo(){const {locale}=useI18n();const zh=locale==="zh";const [playing,setPlaying]=useState(false);return <button aria-label={zh?"播放 AI LeadFlow 产品介绍":"Play AI LeadFlow product overview"} onClick={()=>setPlaying(!playing)} className={`video-stage ${playing?'playing':''}`}><div className="video-grid"/><div className="video-ui"><div className="video-side"/><div className="video-chart"><span>Qualified pipeline</span><strong>$284,000</strong><div className="chart-bars">{[30,45,38,58,65,61,82,94].map((h,i)=><i style={{height:`${h}%`}} key={i}/>)}</div></div><div className="video-leads">{['Sarah Chen · 94','Marcus Reid · 81','Elena Rossi · 76'].map(x=><p key={x}>{x}<Check size={13}/></p>)}</div></div><div className="video-overlay"><span className="play-button">{playing?<span className="pause">Ⅱ</span>:<CirclePlay/>}</span><p>{playing?(zh?'正在播放产品介绍':'Product tour playing'):(zh?'看看 AI LeadFlow 如何工作':'See AI LeadFlow in action')}</p><small>1:30</small></div></button>}

const faqsEn=[['Will this replace my sales team?','No. LeadFlow removes repetitive qualification and follow-up so your team can spend more time on conversations that require a human.'],['Does it work with our existing CRM?','Yes. LeadFlow is designed to connect with modern CRMs, forms, calendars and email tools. We map the integration during onboarding.'],['How quickly can we launch?','Most teams can launch an initial workflow in days, depending on integrations and qualification complexity.'],['Will the AI sound like our brand?','Yes. We configure tone, messaging, guardrails and escalation rules around your brand and sales process.'],['How is pricing determined?','Pricing reflects lead volume, integrations and workflow complexity. Book a demo and we’ll provide a clear, tailored quote.']];
const faqsZh=[['会取代销售团队吗','不会 LeadFlow 接手重复的识别和跟进 让销售专注判断 关系和成交'],['现有 CRM 还能继续用吗','当然 主流 CRM 表单 日历和邮件工具都可接入 上线前我们会一起完成配置'],['多久能够上线','多数团队几天即可启用首个流程 实际时间取决于接入范围和意向规则'],['说话方式像我们的品牌吗','会 我们将品牌语气 销售话术 服务边界和人工接管规则逐一配置'],['如何确定方案','根据线索量 接入范围和流程复杂度灵活设计 演示后你会收到一份清晰方案']];
export function FAQ(){const {locale}=useI18n();const [open,setOpen]=useState(0);const faqs=locale==="zh"?faqsZh:faqsEn;return <div className="faq-list">{faqs.map((f,i)=><div className="faq-item" key={f[0]}><button aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}><span>{f[0]}</span><ChevronDown className={open===i?'rotate':''}/></button>{open===i&&<motion.p initial={{opacity:0,y:-5}} animate={{opacity:1,y:0}}>{f[1]}</motion.p>}</div>)}</div>}
