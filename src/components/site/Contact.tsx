import { company, social, phoneLinks } from "@/lib/company";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contacto" className="py-28 md:py-36 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="gold-line text-xs uppercase tracking-[0.35em] text-primary/70 mb-6">Contacto</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight text-balance">
              Estamos à sua <em className="not-italic text-accent">inteira disposição</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Fale com a equipa Utchileza para orçamentos, parcerias ou consultoria técnica.
              Respondemos em horário comercial.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {social.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={name}
                  className="w-12 h-12 inline-flex items-center justify-center border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border">
            {/* Tiles */}
            <ContactTile
              Icon={Phone}
              label="Telefones"
              lines={phoneLinks.map((p) => ({ text: p.label, href: p.href }))}
            />
            <ContactTile
              Icon={Mail}
              label="Emails"
              lines={[
                { text: company.emails.geral, href: `mailto:${company.emails.geral}` },
                { text: company.emails.construcoes, href: `mailto:${company.emails.construcoes}` },
                { text: company.emails.vendas, href: `mailto:${company.emails.vendas}` },
              ]}
            />
            <ContactTile
              Icon={Globe}
              label="Website"
              lines={[{ text: company.website, href: `https://${company.website}` }]}
            />
            <ContactTile
              Icon={MapPin}
              label="Endereço"
              lines={[{ text: company.address }]}
            />
          </div>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-16 group flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-ink text-ink-foreground p-10 md:p-14 shadow-elegant hover:shadow-gold transition-shadow"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">WhatsApp directo</div>
            <div className="font-display text-3xl md:text-4xl">+244 923 978 800</div>
          </div>
          <span className="inline-flex items-center gap-3 bg-gold text-ink px-8 py-4 text-sm uppercase tracking-[0.25em] group-hover:bg-ink-foreground transition-colors">
            Iniciar conversa →
          </span>
        </a>
      </div>
    </section>
  );
};

const ContactTile = ({
  Icon,
  label,
  lines,
}: {
  Icon: typeof Phone;
  label: string;
  lines: { text: string; href?: string }[];
}) => (
  <div className="bg-background p-8 min-h-[180px]">
    <Icon className="w-6 h-6 text-accent mb-5" strokeWidth={1.5} />
    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">{label}</div>
    <ul className="space-y-1.5">
      {lines.map((l, i) => (
        <li key={i}>
          {l.href ? (
            <a href={l.href} className="text-foreground hover:text-accent transition-colors break-words">
              {l.text}
            </a>
          ) : (
            <span className="text-foreground break-words">{l.text}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);
