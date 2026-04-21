import hero from "@/assets/hero-architecture.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Edifício moderno construído pela Utchileza"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      <div className="relative container min-h-screen flex flex-col justify-end pb-20 pt-32">
        <div className="max-w-3xl animate-fade-up">
          <p className="gold-line text-xs uppercase tracking-[0.35em] text-gold mb-8">
            Portfólio 2025 — Luanda, Angola
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-ink-foreground leading-[1.02] text-balance">
            Construímos as <em className="text-gold not-italic font-medium">infraestruturas</em> que impulsionam Angola.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-ink-foreground/75 leading-relaxed">
            Engenharia, construção civil e obras públicas executadas com excelência,
            segurança e inovação — do projecto à entrega final.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#servicos"
              className="group inline-flex items-center justify-center gap-3 bg-gold text-ink px-8 py-4 text-sm uppercase tracking-[0.25em] hover:bg-gold/90 transition-all shadow-gold"
            >
              Os nossos serviços
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-3 border border-ink-foreground/30 text-ink-foreground px-8 py-4 text-sm uppercase tracking-[0.25em] hover:border-gold hover:text-gold transition-colors"
            >
              Falar com a equipa
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-ink-foreground/15 pt-10">
          {[
            ["100%", "Compromisso técnico"],
            ["10+", "Anos de experiência"],
            ["50+", "Projectos entregues"],
            ["24/7", "Apoio ao cliente"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl md:text-4xl text-gold">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-ink-foreground/60">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
