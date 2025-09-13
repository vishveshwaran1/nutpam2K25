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

        {/* Logo on top */}
        <img
          src="/logo.png"
          alt="logo"
          className="h-40 w-auto mx-auto transition-all duration-300 ease-in-out transform hover:scale-105 cyber-glow animate-flicker"
          style={{
            filter:
              "drop-shadow(0 0 6px rgba(239,68,68,0.8)) drop-shadow(0 0 14px rgba(239,68,68,0.4))",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.filter =
              "drop-shadow(0 0 12px rgba(239,68,68,1)) drop-shadow(0 0 28px rgba(239,68,68,0.7)) drop-shadow(0 0 48px rgba(239,68,68,0.4))")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.filter =
              "drop-shadow(0 0 6px rgba(239,68,68,0.8)) drop-shadow(0 0 14px rgba(239,68,68,0.4))")
          }
        />

        {/* Text and Button */}
        <div className="text-center mt-8 md:mt-12 px-4">
          <h1 className="font-nuptam text-5xl sm:text-6xl md:text-7xl lg:text-8xl cyber-glow animate-flicker">
            NuTPAM 2k25
          </h1>
          <h2 className="font-cyber text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-diamond cyber-glow mt-6 animate-glitch">
            Welcome, Players. The Game is About to Begin.
          </h2>
          <button className="mt-8 px-6 py-3 bg-red-600 text-white font-cyber uppercase tracking-wider hover:shadow-[0_0_20px_rgba(255,0,0,0.8)] transition-shadow">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
