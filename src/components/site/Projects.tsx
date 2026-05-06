import mixer from "@/assets/proj-concrete-mixer.jpg";
import pool from "@/assets/proj-pool-villa.jpg";
import team from "@/assets/proj-team-uniform.jpg";
import meeting from "@/assets/proj-site-meeting-market.jpg";
import clipboard from "@/assets/proj-clipboard-review.jpg";
import director from "@/assets/proj-director-visit.jpg";

const projects = [
  { img: mixer, tag: "Infraestrutura", title: "Betonagem & drenagem", loc: "Luanda" },
  { img: pool, tag: "Construção Civil", title: "Reabilitação de moradia", loc: "Luanda" },
  { img: team, tag: "Equipa Técnica", title: "Engenharia & fiscalização", loc: "Luanda" },
  { img: meeting, tag: "Consultoria", title: "Coordenação em obra", loc: "Bengo" },
  { img: clipboard, tag: "Fiscalização", title: "Controlo de qualidade", loc: "Luanda" },
  { img: director, tag: "Direcção", title: "Visita institucional", loc: "Luanda" },
];

export const Projects = () => {
  return (
    <section id="projectos" className="py-28 md:py-36 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="gold-line text-xs uppercase tracking-[0.35em] text-primary/70 mb-6">Portfólio</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary leading-tight text-balance max-w-2xl">
              Projectos que <em className="not-italic text-accent">marcam</em> território.
            </h2>
          </div>
          <p className="md:max-w-sm text-muted-foreground leading-relaxed">
            Uma selecção de intervenções recentes — fiscalização, construção civil e obras públicas
            executadas pela nossa equipa em campo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group relative aspect-[4/5] overflow-hidden bg-ink shadow-card cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{p.tag}</div>
                <h3 className="font-display text-2xl text-ink-foreground">{p.title}</h3>
                <div className="text-sm text-ink-foreground/60 mt-1">{p.loc}</div>
                <div className="mt-4 h-px w-10 bg-gold transition-all duration-500 group-hover:w-24" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
