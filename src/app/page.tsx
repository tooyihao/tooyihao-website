"use client";

import {Navigation} from "@/components/layout/navigation";
import {Footer} from "@/components/layout/footer";
import {Hero,Vision,Marketplace,FeaturedWorker,InteractiveExperience,PlatformSteps,Integrations,BeforeAfter,Pricing,FAQ,FinalCTA} from "@/components/home/home-sections";
import {useI18n} from "@/i18n/provider";

export default function Home(){
  const {locale}=useI18n();
  return <><Navigation/><main id="main-content" className={`new-home ${locale==="zh"?"home-zh":"home-en"}`}><Hero/><Vision/><Marketplace/><FeaturedWorker/><InteractiveExperience/><PlatformSteps/><Integrations/><BeforeAfter/><Pricing/><FAQ/><FinalCTA/></main><Footer/></>;
}
