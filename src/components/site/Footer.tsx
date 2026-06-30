import logoAsset from "@/assets/logo-utchileza.png.asset.json";
import { company, social } from "@/lib/company";

export const Footer = () => {
  return (
    <footer className="bg-ink text-ink-foreground border-t border-ink-foreground/10">
      <div className="container py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Utchileza" width={40} height={40} className="h-10 w-10 object-contain" />
            <div>
              <div className="font-display text-xl tracking-wide">UTCHILEZA</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">{company.tagline}</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-ink-foreground/60 max-w-sm leading-relaxed">
            Empresa angolana de engenharia, construção civil e obras públicas. NIF {company.nif}.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Navegar</div>
          <ul className="space-y-2 text-sm text-ink-foreground/75">
            <li><a href="#sobre" className="hover:text-gold">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-gold">Serviços</a></li>
            <li><a href="#projectos" className="hover:text-gold">Projectos</a></li>
            <li><a href="#contacto" className="hover:text-gold">Contacto</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Redes</div>
          <div className="flex flex-wrap gap-2">
            {social.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={name}
                className="w-10 h-10 inline-flex items-center justify-center border border-ink-foreground/20 hover:border-gold hover:text-gold transition-colors"
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-foreground/60">{company.address}</p>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-ink-foreground/50">
          <div>© {new Date().getFullYear()} Utchileza. Todos os direitos reservados.</div>
          <div className="uppercase tracking-[0.25em]">Luanda · Angola</div>
        </div>
      </div>
    </footer>
  );
};
