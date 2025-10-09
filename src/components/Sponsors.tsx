const Sponsors = () => {
  // Sponsor data with actual logos
  const sponsors = [
    { name: "EcoPuls", logo: "/ecopuls-logo.jpg" },
    { name: "Caddam Software Solutions", logo: "/caddam-logo.jpg" }, 
    
  ];

  return (
    <section id="sponsors" className="py-20 bg-gradient-cyber">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl font-bold cyber-glow mb-4">
            Sponsors & Partners
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Powered by industry leaders who believe in pushing the boundaries of innovation.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:bg-primary/5"
            >

        {/* Sponsors Grid */}
              {/* Sponsor Logo */}
              
                <img 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} logo`}
                  className="w-full h-full object-contain p-2"
                />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;