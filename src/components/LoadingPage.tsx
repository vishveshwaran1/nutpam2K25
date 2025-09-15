import React, { useEffect, useState } from "react";

const LoadingPage: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 2;
        clearInterval(interval);
        return 100;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col items-center justify-center overflow-hidden">
      <h1 className="font-nuptam text-5xl md:text-7xl font-black mb-10 drop-shadow-lg text-primary z-10">
        NuTPAM 2k25
      </h1>
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center pb-8">
        <div className="w-full max-w-xl relative h-16 flex items-center justify-center">
          <img
            src="JOKER.png"
            alt="Joker Running"
            className="w-20 h-20 absolute"
            style={{
              left: `calc(${progress}% - 32px)`,
              top: "-70px",
              transition: "left 0.04s linear",
              zIndex: 2,
            }}
          />
          <div className="w-full h-6 bg-card rounded-full overflow-hidden relative border border-border">
            <div
              className="h-full bg-gradient-to-r from-primary via-accent to-destructive rounded-full transition-all duration-75 shadow-lg"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="text-foreground text-lg font-bold tracking-widest font-nuptam z-10 mt-4">
          Loading... {progress}%
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-transparent to-black/80 z-0" />
    </div>
  );
};

export default LoadingPage;
