import handshake from "@/assets/handshake.jpg";
import skyscraper from "@/assets/skyscraper.jpg";

export const About = () => {
  return (
    <section id="sobre" className="py-28 md:py-36 bg-background">
      <div className="container grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden shadow-elegant">
            <img src={skyscraper} alt="Construção em altura" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-12 -right-6 md:-right-12 w-2/3 aspect-[4/3] overflow-hidden shadow-elegant border-8 border-background">
            <img src={handshake} alt="Parceria com clientes" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-6 -left-6 hidden md:block">
            <div className="font-display text-[8rem] leading-none text-gold/20 select-none">U</div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-12">
          <p className="gold-line text-xs uppercase tracking-[0.35em] text-primary/70 mb-6">Sobre nós</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight text-balance">
            Uma empresa angolana ao serviço do <em className="not-italic text-accent">progresso nacional</em>.
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              A Utchileza actua nos sectores de Engenharia, Construção Civil e Obras Públicas,
              oferecendo soluções modernas, sustentáveis e de alto padrão de qualidade.
            </p>
            <p>
              Com uma equipa multidisciplinar e comprometida, contribuímos activamente para o
              desenvolvimento de Angola, participando na edificação de infraestruturas que
              impulsionam o crescimento económico e social do país.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-8 border-t border-border pt-10">
            {[
              { t: "Missão", d: "Excelência, segurança e inovação em cada projecto entregue." },
              { t: "Visão", d: "Ser referência nacional e internacional no sector da construção." },
              { t: "Valores", d: "Qualidade, inovação, segurança e responsabilidade social." },
            ].map((b) => (
              <div key={b.t}>
                <div className="text-xs uppercase tracking-[0.25em] text-accent mb-2">{b.t}</div>
                <p className="text-sm text-foreground/80 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
