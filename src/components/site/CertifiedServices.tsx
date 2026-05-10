import { Award, ShieldCheck, FileCheck, Droplets, Package, Sparkles, Leaf, Stethoscope, Anchor, HardHat, Building2 } from "lucide-react";

const certificates = [
  {
    category: "Alvará da 7ª Classe",
    badge: "Alvará",
    items: [
      { Icon: Building2, title: "Engenharia e Construção Civil", detail: "Alvará da 7ª Classe" },
      { Icon: HardHat, title: "Fiscalização de Obras", detail: "Alvará da 7ª Classe" },
    ],
  },
  {
    category: "Certificado ANPG",
    badge: "ANPG",
    items: [
      { Icon: Package, title: "Fornecimento de material informático", detail: "Certif. ANPG" },
      { Icon: Droplets, title: "Fornecimento de água potável / mineral", detail: "Certif. ANPG" },
      { Icon: Sparkles, title: "Fornecimento de produtos higiênicos", detail: "Certif. ANPG" },
      { Icon: ShieldCheck, title: "Serviços de limpezas", detail: "Certif. ANPG" },
      { Icon: Leaf, title: "Serviços de jardinagem", detail: "Certif. ANPG" },
      { Icon: Anchor, title: "Uniformes e material de navegação marítima", detail: "Certif. ANPG / MIREMPET / AMN" },
    ],
  },
  {
    category: "Certificado MINSA",
    badge: "MINSA",
    items: [
      { Icon: Stethoscope, title: "Fornecimento de materiais hospitalares", detail: "Certif. MINSA" },
    ],
  },
];

export const CertifiedServices = () => {
  return (
    <section id="certificados" className="relative py-28 md:py-36 bg-background overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-7">
            <p className="gold-line text-xs uppercase tracking-[0.35em] text-primary/70 mb-6">Credenciais</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary leading-tight text-balance">
              Serviços <em className="not-italic text-accent">certificados</em>.
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
            A Utchileza opera com todas as certificações e alvarás exigidos pelas entidades
            reguladoras angolanas, garantindo total conformidade legal e técnica.
          </p>
        </div>

        <div className="space-y-14">
          {certificates.map((cert) => (
            <div key={cert.category}>
              <div className="flex items-center gap-4 mb-8">
                <Award className="w-6 h-6 text-accent" strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                  {cert.category}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cert.items.map(({ Icon, title, detail }) => (
                  <article
                    key={title}
                    className="group relative flex items-start gap-5 p-6 bg-card border border-border/60 rounded-sm hover:border-accent/30 hover:shadow-card transition-all duration-500"
                  >
                    <div className="mt-1 p-2.5 bg-primary/5 rounded-sm">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg text-primary leading-snug mb-1.5">
                        {title}
                      </h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-2">
                        <FileCheck className="w-3.5 h-3.5 text-accent" strokeWidth={2} />
                        {detail}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full rounded-full" />
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
