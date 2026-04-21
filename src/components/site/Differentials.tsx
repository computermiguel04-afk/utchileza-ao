import surveying from "@/assets/surveying.jpg";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Equipa técnica altamente qualificada",
  "Cumprimento rigoroso de prazos e orçamentos",
  "Tecnologia e métodos construtivos modernos",
  "Compromisso com a sustentabilidade ambiental",
  "Foco na satisfação do cliente e parceiro",
  "Transparência em todas as fases do projecto",
];

export const Differentials = () => {
  return (
    <section id="diferenciais" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={surveying} alt="Equipa Utchileza em campo" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink/85" />
      </div>

      <div className="relative container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="gold-line text-xs uppercase tracking-[0.35em] text-gold mb-6">Diferenciais</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink-foreground leading-tight text-balance">
            Por que escolher a <em className="not-italic text-gold">Utchileza</em>.
          </h2>
          <p className="mt-6 text-ink-foreground/70 leading-relaxed">
            Estamos prontos para assumir novos desafios e entregar obras que sejam verdadeiros
            marcos de qualidade e confiança em Angola.
          </p>
        </div>

        <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-6 self-center">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-4 border-b border-ink-foreground/10 pb-5">
              <CheckCircle2 className="w-5 h-5 text-gold mt-1 flex-shrink-0" strokeWidth={1.5} />
              <span className="text-ink-foreground/90 leading-snug">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
