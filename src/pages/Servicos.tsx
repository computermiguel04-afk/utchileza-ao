import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { CertifiedServices } from "@/components/site/CertifiedServices";
import heavy from "@/assets/heavy-machinery.jpg";

const Servicos = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <PageHeader
      eyebrow="O que fazemos"
      title="Serviços certificados de engenharia, construção e fornecimento."
      description="Soluções integradas para o sector público e privado, com alvará da 7ª Classe e certificações ANPG, MINSA, MIREMPET e AMN."
      image={heavy}
    />
    <Services />
    <CertifiedServices />
    <Footer />
    <WhatsAppFab />
  </main>
);

export default Servicos;
