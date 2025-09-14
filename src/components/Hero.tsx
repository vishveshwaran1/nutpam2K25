import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import GradientBlinds from "@/components/GradientBlinds"

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects with GradientBlinds */}
      <div className="absolute inset-0 z-0">
        <GradientBlinds
          gradientColors={["#F50F32", "#1d1d1dff"]}
          angle={130}
          noise={0.15}
          blindCount={36}
          blindMinWidth={80}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-nuptam text-6xl md:text-8xl font-black mb-6 cyber-glow">
          <img
            src="/logo.png"
            alt="logo"
            className="h-64 w-auto mx-auto transition-all duration-300 ease-in-out transform hover:scale-105"
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
          NuTPAM 2k25
        </h1>

        <p className="font-inter text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Welcome, Players. The Game is About to Begin.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* <Button
            variant="cyber"
            size="lg"
            onClick={() => navigate("/events")}
            className="font-cyber text-lg px-8 py-4"
          >
            VIEW EVENTS
          </Button> */}

          <Button
            variant="cyber"
            size="lg"
            onClick={() => navigate("/events")}
            className="font-cyber text-lg px-8 py-4"
          >
            REGISTER NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
