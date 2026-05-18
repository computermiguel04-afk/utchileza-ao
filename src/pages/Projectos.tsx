import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { PageHeader } from "@/components/site/PageHeader";
import { Projects } from "@/components/site/Projects";
import crane from "@/assets/crane.jpg";

const Projectos = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <PageHeader
      eyebrow="Portfólio"
      title="Projectos que marcam território."
      description="Uma selecção das nossas intervenções recentes em fiscalização, construção civil e obras públicas."
      image={crane}
    />
    <Projects />
    <Footer />
    <WhatsAppFab />
  </main>
);

export default Projectos;
