"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BarChart3, Bell, Check, ChevronDown, CirclePlay, Database, LayoutDashboard, LoaderCircle, MessageSquareText, Search, Send, Settings, Sparkles, Users } from "lucide-react";
import { useI18n } from "@/i18n/provider";

export function LeadflowDashboard(){const leads=[['Sarah Chen','Acme Studio','94','Qualified'],['Marcus Reid','Northstar','81','Nurture'],['Elena Rossi','Forma Labs','76','Engaged'],['David Kim','Kinetic','62','New']];return <div className="dashboard-shell"><div className="browser-bar"><i/><i/><i/><span>app.aileadflow.ai</span></div><div className="dashboard-body"><aside className="dash-side"><div className="dash-logo"><Sparkles size={15}/></div>{[LayoutDashboard,Users,BarChart3,Settings].map((I,i)=><div className={`dash-nav ${i===0?'active':''}`} key={i}><I size={17}/></div>)}</aside><div className="dash-main"><div className="dash-top"><div><small>OVERVIEW</small><h3>Good morning, Alex</h3></div><div className="flex items-center gap-2"><button><Search size={16}/></button><button><Bell size={16}/></button><div className="avatar">AK</div></div></div><div className="metric-grid">{[['Qualified leads','184','+24%'],['Meetings booked','68','+18%'],['Avg. response','18 sec','−42%'],['Pipeline value','$284k','+31%']].map((m,i)=><div className="dash-metric" key={m[0]}><div className="flex justify-between"><small>{m[0]}</small><span>{m[2]}</span></div><strong>{m[1]}</strong><div className={`spark spark-${i}`}/></div>)}</div><div className="dash-lower"><div className="lead-table"><div className="table-title"><div><b>Lead intelligence</b><small>Live activity across your pipeline</small></div><button>View all <ArrowUpRight size={12}/></button></div><div className="table-head"><span>LEAD</span><span>SCORE</span><span>STATUS</span></div>{leads.map((l,i)=><div className="table-row" key={l[0]}><div><i>{l[0].split(' ').map(x=>x[0]).join('')}</i><p><b>{l[0]}</b><small>{l[1]}</small></p></div><strong>{l[2]}</strong><span className={`status s${i}`}>{l[3]}</span></div>)}</div><div className="activity"><b>AI activity</b><small>Happening now</small>{[['SC','Sarah reached 94 intent','just now'],['MR','Follow-up sent to Marcus','2m'],['ER','Elena viewed pricing','5m']].map((a,i)=><div className="activity-row" key={a[1]}><i>{a[0]}</i><p>{a[1]}<small>{a[2]}</small></p>{i===0&&<em/>}</div>)}</div></div></div></div><div className="dashboard-float"><span><Sparkles size={13}/> AI INSIGHT</span><b>3 high-intent leads need attention</b><small>Potential pipeline value · $48,000</small></div></div>}

export function LiveDemo(){
  const {locale}=useI18n();
  const zh=locale==="zh";
  const [company,setCompany]=useState("Northstar Labs");
  const [message,setMessage]=useState(zh?"你好，我们有 35 人的销售团队，每周大约收到 500 条线索。我们想在这个月开始使用。":"Hi, we have a 35-person sales team and receive around 500 leads a week. We’d like to get started this month.");
  const [step,setStep]=useState(-1);
  const running=step>=0&&step<5;

  useEffect(()=>{if(!running)return;const timer=window.setTimeout(()=>setStep(current=>current+1),step===0?1100:700);return()=>window.clearTimeout(timer)},[step,running]);
  const analyze=()=>setStep(0);
  const reset=()=>{setStep(-1);setCompany("");setMessage("")};
  const milestones=[
    {label:zh?"意向与需求已识别":"Intent & needs detected",icon:Sparkles},
    {label:zh?"优先级已计算":"Lead priority calculated",icon:BarChart3},
    {label:zh?"个性化回复已生成":"Personalized reply drafted",icon:MessageSquareText},
    {label:zh?"CRM 联系人已创建":"CRM contact created",icon:Database},
    {label:zh?"销售团队已通知":"Sales team notified",icon:Send},
  ];
  return <div className="leadflow-lab">
    <div className="lab-toolbar"><div><span className="lab-mark"><Sparkles size={15}/></span><p><b>AI LeadFlow</b><small>{zh?"智能线索工作台":"Intelligent lead workspace"}</small></p></div><span className="lab-live"><i/>{zh?"系统在线":"SYSTEM ONLINE"}</span></div>
    <div className="lab-grid">
      <form className="lab-form" onSubmit={e=>{e.preventDefault();analyze()}}>
        <div className="lab-form-title"><span>01</span><div><h3>{zh?"测试一条真实线索":"Test a real lead"}</h3><p>{zh?"输入客户信息，看看 LeadFlow 如何处理。":"Enter a customer inquiry and watch LeadFlow work."}</p></div></div>
        <label>{zh?"公司名称":"Company Name"}<input value={company} onChange={e=>setCompany(e.target.value)} placeholder={zh?"例如：北辰科技":"e.g. Northstar Labs"} required disabled={running}/></label>
        <label>{zh?"客户消息":"Customer Message"}<textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder={zh?"粘贴一条客户咨询…":"Paste a customer inquiry…"} required disabled={running}/><span className="character-count">{message.length}/500</span></label>
        <button className="lab-analyze" disabled={running||!company.trim()||!message.trim()}>{running?<><LoaderCircle className="lab-spinner" size={17}/>{zh?"AI 分析中…":"AI Analyzing…"}</>:<><Sparkles size={17}/>{step===5?(zh?"重新分析":"Analyze again"):(zh?"开始分析":"Analyze")}<ArrowRight size={16}/></>}</button>
        <p className="lab-note"><span>✦</span>{zh?"这是模拟体验，不会保存或发送任何数据。":"Interactive demo only. No data is saved or sent."}</p>
      </form>
      <div className={`lab-results ${step<0?'is-empty':''}`} aria-live="polite">
        {step<0?<div className="lab-empty"><div><Sparkles/></div><h3>{zh?"您的分析结果将在这里出现":"Your analysis will appear here"}</h3><p>{zh?"填写表单并点击“开始分析”，体验完整的 AI 工作流程。":"Complete the form and click Analyze to experience the full AI workflow."}</p><div className="empty-lines"><i/><i/><i/></div></div>:<>
          <div className="result-head"><div><span className={running?"processing":"complete"}>{running?<LoaderCircle size={12}/>:<Check size={12}/>} {running?(zh?"处理中":"PROCESSING"):(zh?"分析完成":"ANALYSIS COMPLETE")}</span><h3>{company}</h3></div><span className="result-time">{running?"00:0"+Math.min(step+1,5):"00:05"}</span></div>
          <div className="workflow-track">{milestones.map((item,i)=>{const Icon=item.icon;const active=i<=step;return <motion.div className={`workflow-row ${active?'active':''}`} initial={{opacity:0.35}} animate={{opacity:active?1:.35}} key={item.label}><span className="workflow-icon">{active&&i<step?<Check size={14}/>:i===step&&running?<LoaderCircle className="lab-spinner" size={14}/>:<Icon size={14}/>}</span><p>{item.label}</p>{i<step&&<small>{zh?"完成":"Done"}</small>}</motion.div>})}</div>
          <AnimatePresence>{step>=1&&<motion.div className="result-summary" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}><div className="score-card"><span>{zh?"线索评分":"LEAD SCORE"}</span><strong>92<small>/100</small></strong><div className="score-bar"><i/></div></div><div className="priority-card"><span>{zh?"优先级":"PRIORITY"}</span><strong><i/>{zh?"高优先级":"High priority"}</strong><small>{zh?"建议 5 分钟内跟进":"Follow up within 5 min"}</small></div></motion.div>}</AnimatePresence>
          <AnimatePresence>{step>=2&&<motion.div className="reply-card" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}><span><MessageSquareText size={13}/>{zh?"建议回复":"SUGGESTED REPLY"}</span><p>{zh?`您好，感谢您联系 ${company}！根据您的团队规模和线索量，AI LeadFlow 可以自动识别高意向客户并即时跟进。很高兴本周为您安排一次简短演示。`:`Hi there — thanks for reaching out! Based on your team size and lead volume, AI LeadFlow can qualify and follow up with every inquiry instantly. I’d be happy to arrange a quick walkthrough this week.`}</p><small>{zh?"语气：专业、友好":"Tone: Professional · Friendly"}</small></motion.div>}</AnimatePresence>
          {step===5&&<motion.div className="result-success" initial={{opacity:0,scale:.98}} animate={{opacity:1,scale:1}}><span><Check size={14}/></span><p><b>{zh?"工作流程完成":"Workflow complete"}</b><small>{zh?"CRM 已创建 · 销售已通知":"CRM created · Sales notified"}</small></p><button onClick={reset}>{zh?"清除":"Clear"}</button></motion.div>}
        </>}
      </div>
    </div>
  </div>
}

export function ProductVideo(){const {locale}=useI18n();const zh=locale==="zh";const [playing,setPlaying]=useState(false);return <button aria-label={zh?"播放 AI LeadFlow 产品介绍":"Play AI LeadFlow product overview"} onClick={()=>setPlaying(!playing)} className={`video-stage ${playing?'playing':''}`}><div className="video-grid"/><div className="video-ui"><div className="video-side"/><div className="video-chart"><span>Qualified pipeline</span><strong>$284,000</strong><div className="chart-bars">{[30,45,38,58,65,61,82,94].map((h,i)=><i style={{height:`${h}%`}} key={i}/>)}</div></div><div className="video-leads">{['Sarah Chen · 94','Marcus Reid · 81','Elena Rossi · 76'].map(x=><p key={x}>{x}<Check size={13}/></p>)}</div></div><div className="video-overlay"><span className="play-button">{playing?<span className="pause">Ⅱ</span>:<CirclePlay/>}</span><p>{playing?(zh?'正在播放产品介绍':'Product tour playing'):(zh?'看看 AI LeadFlow 如何工作':'See AI LeadFlow in action')}</p><small>1:30</small></div></button>}

const faqsEn=[['Will this replace my sales team?','No. LeadFlow removes repetitive qualification and follow-up so your team can spend more time on conversations that require a human.'],['Does it work with our existing CRM?','Yes. LeadFlow is designed to connect with modern CRMs, forms, calendars and email tools. We map the integration during onboarding.'],['How quickly can we launch?','Most teams can launch an initial workflow in days, depending on integrations and qualification complexity.'],['Will the AI sound like our brand?','Yes. We configure tone, messaging, guardrails and escalation rules around your brand and sales process.'],['How is pricing determined?','Pricing reflects lead volume, integrations and workflow complexity. Book a demo and we’ll provide a clear, tailored quote.']];
const faqsZh=[['会取代销售团队吗','不会 LeadFlow 接手重复的识别和跟进 让销售专注判断 关系和成交'],['现有 CRM 还能继续用吗','当然 主流 CRM 表单 日历和邮件工具都可接入 上线前我们会一起完成配置'],['多久能够上线','多数团队几天即可启用首个流程 实际时间取决于接入范围和意向规则'],['说话方式像我们的品牌吗','会 我们将品牌语气 销售话术 服务边界和人工接管规则逐一配置'],['如何确定方案','根据线索量 接入范围和流程复杂度灵活设计 演示后你会收到一份清晰方案']];
export function FAQ(){const {locale}=useI18n();const [open,setOpen]=useState(0);const faqs=locale==="zh"?faqsZh:faqsEn;return <div className="faq-list">{faqs.map((f,i)=><div className="faq-item" key={f[0]}><button aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}><span>{f[0]}</span><ChevronDown className={open===i?'rotate':''}/></button>{open===i&&<motion.p initial={{opacity:0,y:-5}} animate={{opacity:1,y:0}}>{f[1]}</motion.p>}</div>)}</div>}
