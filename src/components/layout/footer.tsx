"use client";
import {Container} from "@/components/ui/container";import {useI18n} from "@/i18n/provider";
export function Footer(){const{messages:m}=useI18n();return <footer className="border-t border-line py-10"><Container className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"><p className="font-semibold tracking-[.16em] text-ink">TOO YI HAO</p><p>{m.footer}</p><p>© {new Date().getFullYear()} Too Yi Hao</p></Container></footer>}
