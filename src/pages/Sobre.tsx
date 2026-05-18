import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { Director } from "@/components/site/Director";
import { Differentials } from "@/components/site/Differentials";
import skyscraper from "@/assets/skyscraper.jpg";

const Sobre = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <PageHeader
      eyebrow="Quem somos"
      title="Uma empresa angolana ao serviço do progresso nacional."
      description="Engenharia, construção civil e obras públicas com excelência, segurança e inovação — do projecto à entrega."
      image={skyscraper}
    />
    <About />
    <Differentials />
    <Director />
    <Footer />
    <WhatsAppFab />
  </main>
);

export default Sobre;
