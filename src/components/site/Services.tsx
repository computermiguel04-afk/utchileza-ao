import { Building2, HardHat, Hammer, Map, ClipboardCheck, Sofa, Lightbulb, Compass } from "lucide-react";

const services = [
  { Icon: Compass, title: "Arquitectura e Urbanismo", desc: "Soluções arquitectónicas funcionais, modernas e adaptadas a contextos urbanos e habitacionais." },
  { Icon: Building2, title: "Estrutura Metálica e Betão", desc: "Concepção e execução de estruturas robustas, seguras e duradouras em qualquer escala." },
  { Icon: HardHat, title: "Construção Civil & Obras Públicas", desc: "Edifícios, estradas, pontes e infraestruturas essenciais ao desenvolvimento urbano e rural." },
  { Icon: Map, title: "Croquis de Localização", desc: "Croquis precisos para apoio em processos técnicos, urbanísticos e administrativos." },
  { Icon: ClipboardCheck, title: "Fiscalização de Obras", desc: "Supervisão técnica rigorosa em prazos, qualidade dos materiais e conformidade normativa." },
  { Icon: Sofa, title: "Design de Interiores", desc: "Ambientes funcionais e sofisticados que combinam estética e utilidade." },
  { Icon: Lightbulb, title: "Consultoria Técnica", desc: "Orientação especializada do planeamento à execução, maximizando eficiência e investimento." },
  { Icon: Hammer, title: "Gestão de Projectos", desc: "Coordenação integral assegurando entregas no prazo, no orçamento e na qualidade prometida." },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-28 md:py-36 bg-ink text-ink-foreground grain">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-7">
            <p className="gold-line text-xs uppercase tracking-[0.35em] text-gold mb-6">O que fazemos</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight text-balance">
              Um parceiro estratégico completo, do <em className="not-italic text-gold">conceito</em> à entrega.
            </h2>
          </div>
          <p className="lg:col-span-5 text-ink-foreground/70 leading-relaxed">
            Combinamos criatividade arquitectónica, rigor técnico e responsabilidade social para
            assegurar resultados sólidos e sustentáveis em projectos de qualquer dimensão.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-ink-foreground/10">
          {services.map(({ Icon, title, desc }) => (
            <article
              key={title}
              className="group relative p-8 border-r border-b border-ink-foreground/10 hover:bg-primary-glow/20 transition-colors duration-500"
            >
              <Icon className="w-10 h-10 text-gold mb-8" strokeWidth={1.25} />
              <h3 className="font-display text-2xl mb-3 text-ink-foreground">{title}</h3>
              <p className="text-sm text-ink-foreground/65 leading-relaxed">{desc}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
