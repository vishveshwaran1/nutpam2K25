import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Events />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
