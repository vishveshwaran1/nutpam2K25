import PhoneUI from "./PhoneUI";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-cyber">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Content */}
          <div className="space-y-6">
            <h2 className="font-cyber text-4xl font-bold cyber-glow mb-8">
              About NuTPAM 2k25
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
              <p>
                Welcome to NuTPAM 2k25 - a convergence of minds where the boundaries between 
                reality and digital prowess dissolve. You are not merely participants; you are 
                <span className="text-primary font-semibold"> players </span> 
                in an intricate system of challenges designed to test every facet of your capabilities.
              </p>
              
              <p>
                Each game has been meticulously crafted to evaluate different aspects of human 
                potential - from raw technical skill and innovative thinking to psychological 
                resilience and team dynamics. The rules are simple: 
                <span className="text-primary font-semibold"> survive the challenges, prove your worth </span>.
              </p>

              <p>
                Time is running out. The games begin soon, and only those who register will 
                have the opportunity to demonstrate their mastery. Are you ready to face the unknown?
              </p>
            </div>
          </div>

          {/* Right Column - Phone UI */}
          <div className="flex justify-center">
            <PhoneUI selectedEvent={null} timer={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;