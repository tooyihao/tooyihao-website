import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter=Inter({subsets:["latin"],display:"swap",variable:"--font-inter"});
export const metadata:Metadata={
 metadataBase:new URL(siteConfig.url), title:siteConfig.title, description:siteConfig.description,
 alternates:{canonical:"/"},
 openGraph:{type:"website",url:"/",siteName:siteConfig.name,title:siteConfig.title,description:siteConfig.description,locale:"en_US"},
 twitter:{card:"summary_large_image",title:siteConfig.title,description:siteConfig.description},
 applicationName:siteConfig.name,
 authors:[{name:siteConfig.name,url:siteConfig.url}],
 creator:siteConfig.name,
 publisher:siteConfig.name,
 robots:{index:true,follow:true},
 manifest:"/manifest.webmanifest",
 category:"technology",
};
export const viewport:Viewport={themeColor:"#ffffff",colorScheme:"light"};
export default function RootLayout({children}:{children:React.ReactNode}){const jsonLd={"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":`${siteConfig.url}/#organization`,name:siteConfig.name,url:siteConfig.url,email:siteConfig.email,description:siteConfig.description},{"@type":"WebSite","@id":`${siteConfig.url}/#website`,url:siteConfig.url,name:siteConfig.name,publisher:{"@id":`${siteConfig.url}/#organization`}},{"@type":"Service",name:"AI Automation Systems",provider:{"@id":`${siteConfig.url}/#organization`},description:siteConfig.description,areaServed:"Worldwide"}]};return <html lang="en" className={inter.variable}><body className="font-[var(--font-inter)]"><a href="#main-content" className="skip-link">Skip to content</a><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>{children}</body></html>}
