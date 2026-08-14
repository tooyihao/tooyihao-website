export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="max-w-2xl"><p className="mb-5 text-sm font-semibold tracking-[.14em] text-accent uppercase">{eyebrow}</p><h2 className="text-balance text-4xl font-semibold tracking-[-.045em] text-ink sm:text-5xl lg:text-[56px] lg:leading-[1.06]">{title}</h2>{copy && <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{copy}</p>}</div>;
}
