const Sponsors = () => {
  // Placeholder sponsor data - replace with actual sponsors
  const sponsors = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLab", logo: "IL" }, 
    { name: "DigitalForge", logo: "DF" },
    { name: "CyberSystems", logo: "CS" },
    { name: "FutureCode", logo: "FC" },
    { name: "NextGen", logo: "NG" },
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

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:bg-primary/5"
            >
              {/* Placeholder Logo */}
              <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center font-cyber text-sm text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-all duration-300">
                {sponsor.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;