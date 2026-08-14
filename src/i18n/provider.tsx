"use client";
import {createContext,useContext,useEffect,useState,type Dispatch,type ReactNode,type SetStateAction} from "react";
import {Locale,messages} from "./messages";

type I18nContextValue = {
 locale: Locale;
 setLocale: Dispatch<SetStateAction<Locale>>;
 messages: (typeof messages)[Locale];
};

const Context=createContext<I18nContextValue|null>(null);

export function I18nProvider({children}:{children:ReactNode}){const[locale,setLocale]=useState<Locale>("en");useEffect(()=>{const x=localStorage.getItem("locale") as Locale|null;if(x&&x in messages)setLocale(x)},[]);useEffect(()=>{document.documentElement.lang=locale==="zh"?"zh-CN":"en";localStorage.setItem("locale",locale)},[locale]);return <Context.Provider value={{locale,setLocale,messages:messages[locale]}}>{children}</Context.Provider>}

export const useI18n=()=>{const context=useContext(Context);if(!context)throw new Error("useI18n must be used within an I18nProvider");return context};
