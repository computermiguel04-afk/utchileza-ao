import { Facebook, Instagram, Linkedin, MessageCircle, Mail, Phone, Globe } from "lucide-react";

export const company = {
  name: "Utchileza",
  tagline: "Engenharia, Construção Civil e Obras Públicas",
  nif: "5001292803",
  address: "Bairro Alvalade, Rua Oliveira Martins, Condomínio Solar do Alvalade, R/C, Sala n.º 6, Luanda — Angola",
  phones: ["+244 923 978 800", "+244 990 978 800"],
  whatsapp: "244923978800",
  emails: {
    geral: "geral@utchileza.ao",
    construcoes: "construcoes@utchileza.ao",
    vendas: "vendas@utchileza.ao",
  },
  website: "www.utchileza.ao",
};

export const social = [
  { name: "Facebook", href: "https://www.facebook.com/utchileza", Icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/utchileza", Icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/utchileza", Icon: Linkedin },
  { name: "WhatsApp", href: `https://wa.me/${company.whatsapp}`, Icon: MessageCircle },
  { name: "Website", href: `https://${company.website}`, Icon: Globe },
  { name: "Email", href: `mailto:${company.emails.geral}`, Icon: Mail },
];

export const phoneLinks = company.phones.map((p) => ({
  label: p,
  href: `tel:${p.replace(/\s/g, "")}`,
  Icon: Phone,
}));
