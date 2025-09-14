import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";// <-- add this
import EventCards from "@/components/card";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* <BackgroundModel />  */}

      <Header />
      <Hero />
      <About />
      <Events />
      {/* <EventCards /> */}
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
