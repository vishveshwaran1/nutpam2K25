import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Events from "@/components/Events";
import EventCards from "@/components/card";
import { useEffect } from "react";

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <div className="h-16"></div>
      {/* Events Section */}
      <Events />

      {/* Event Cards Section */}

      <Footer />
    </div>
  );
};

export default EventsPage;
