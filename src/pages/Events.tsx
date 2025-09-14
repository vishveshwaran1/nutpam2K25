import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Events from "@/components/Events";
import EventCards from "@/components/card";

const EventsPage = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      
      {/* Events Section */}
      <Events />
      
      {/* Event Cards Section */}
     
      
      <Footer />
    </div>
  );
};

export default EventsPage;
