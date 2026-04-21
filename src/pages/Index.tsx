import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Differentials } from "@/components/site/Differentials";
import { Projects } from "@/components/site/Projects";
import { Director } from "@/components/site/Director";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Projects />
      <Director />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
