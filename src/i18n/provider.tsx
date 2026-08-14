"use client";
import {createContext,useContext,useEffect,useState} from "react";
import {Locale,messages} from "./messages";
const Context=createContext({locale:"en" as Locale,setLocale:()=>{},messages:messages.en as (typeof messages)[Locale]});
export function I18nProvider({children}:{children:React.ReactNode}){const[locale,setLocale]=useState<Locale>("en");useEffect(()=>{const x=localStorage.getItem("locale") as Locale|null;if(x&&x in messages)setLocale(x)},[]);useEffect(()=>{document.documentElement.lang=locale==="zh"?"zh-CN":"en";localStorage.setItem("locale",locale)},[locale]);return <Context.Provider value={{locale,setLocale,messages:messages[locale]}}>{children}</Context.Provider>}
export const useI18n=()=>useContext(Context);
