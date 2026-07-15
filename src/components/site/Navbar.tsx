import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoUrl from "@/assets/logo-utchileza.png";

const links = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/projectos", label: "Projectos" },
  { href: "/#contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoAsset.url} alt="Utchileza" width={40} height={40} className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide text-ink-foreground">UTCHILEZA</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Engenharia · Construção</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm uppercase tracking-widest text-ink-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/#contacto"
          className="hidden lg:inline-flex items-center text-xs uppercase tracking-[0.25em] border border-gold/60 text-gold px-5 py-3 hover:bg-gold hover:text-ink transition-colors"
        >
          Solicitar Orçamento
        </Link>

        <button
          aria-label="Menu"
          className="lg:hidden text-ink-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-white/10">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest text-ink-foreground/80 hover:text-gold py-2"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 text-center text-xs uppercase tracking-[0.25em] border border-gold/60 text-gold px-5 py-3"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
