import crane from "@/assets/crane.jpg";

export const Director = () => {
  return (
    <section className="relative py-28 md:py-36 bg-ink text-ink-foreground overflow-hidden">
      <div className="container grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <p className="gold-line text-xs uppercase tracking-[0.35em] text-gold mb-6">Mensagem do Director</p>
          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl leading-snug text-ink-foreground/95">
            “Cada projecto é uma promessa de <em className="not-italic text-gold">impacto</em> e
            <em className="not-italic text-gold"> excelência</em> — entregue com a confiança de quem
            constrói para gerações.”
          </blockquote>
          <div className="mt-10 flex items-center gap-5">
            <div className="h-px w-16 bg-gold" />
            <div>
              <div className="font-display text-xl">Luís Chetequela Epé</div>
              <div className="text-sm uppercase tracking-[0.25em] text-ink-foreground/60 mt-1">Director Geral</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img src={crane} alt="Grua em obra Utchileza" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-gold/30" />
          </div>
        </div>
      </div>
    </section>
  );
};
