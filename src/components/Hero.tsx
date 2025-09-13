import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-cyber">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-red"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-glow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className=" font-nuptam text-6xl md:text-8xl font-black mb-6 cyber-glow">
          NuTPAM 2k25
        </h1>

        <p className="font-inter text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Welcome, Players. The Game is About to Begin.
        </p>

        <Button
          variant="cyber"
          size="lg"
          onClick={() => window.open("#register", "_blank")}
          className="font-cyber text-lg px-8 py-4"
        >
          REGISTER NOW
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
