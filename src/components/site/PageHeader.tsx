import hero from "@/assets/hero-architecture.jpg";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
}

export const PageHeader = ({ eyebrow, title, description, image }: PageHeaderProps) => {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-ink overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image || hero}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
      </div>
      <div className="relative container">
        <p className="gold-line text-xs uppercase tracking-[0.35em] text-gold mb-6">{eyebrow}</p>
        <h1 className="font-display text-5xl md:text-7xl text-ink-foreground leading-[1.02] text-balance max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-ink-foreground/75 leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
};
