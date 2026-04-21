import road from "@/assets/road-works.jpg";
import machinery from "@/assets/heavy-machinery.jpg";
import worker from "@/assets/team-worker.jpg";
import board from "@/assets/project-board.jpg";
import meeting from "@/assets/site-meeting.jpg";
import roadTeam from "@/assets/road-team.jpg";

const projects = [
  { img: road, tag: "Obras Públicas", title: "Pavimentação urbana", loc: "Luanda" },
  { img: machinery, tag: "Infraestrutura", title: "Movimentação de terras", loc: "Luanda" },
  { img: worker, tag: "Fiscalização", title: "Acompanhamento técnico", loc: "Bengo" },
  { img: meeting, tag: "Consultoria", title: "Visita de obra", loc: "Luanda" },
  { img: board, tag: "Gestão", title: "Implantação de obra", loc: "Bengo" },
  { img: roadTeam, tag: "Equipa", title: "Operação de campo", loc: "Luanda" },
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
