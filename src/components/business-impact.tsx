"use client";

import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/i18n/provider";

export function BusinessImpact() {
  const { messages, locale } = useI18n();
  const impact = messages.home.impact;
  const zh = locale === "zh";

  return (
    <section id="business-impact" className="business-impact" aria-labelledby="business-impact-title">
      <Container>
        <Reveal>
          <header className="impact-heading">
            <h2 id="business-impact-title">{impact.title}</h2>
            <p className="impact-subtitle">{impact.subtitle}</p>
          </header>
        </Reveal>

        <div className="impact-grid">
          {impact.cards.map((card, index) => (
            <Reveal key={card.before} delay={index * 0.07}>
              <article className="impact-card">
                <div className="impact-before">
                  <span>{zh ? "之前" : "Before"}</span>
                  <p>{card.before}</p>
                </div>
                <div className="impact-arrow" aria-hidden="true">
                  <ArrowDown />
                </div>
                <div className="impact-after">
                  <span>{zh ? "之后" : "After"}</span>
                  <p>{card.after}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="impact-summary">
          {impact.summary.map((line) => <p key={line}>{line}</p>)}
        </Reveal>
      </Container>
    </section>
  );
}
