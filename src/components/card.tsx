import React from "react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  description: string;
  symbol: string;
  registerLink: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, symbol, registerLink }) => {
  return (
    <div className="group [perspective:1000px] w-full sm:w-72 h-96">
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 bg-black text-white border border-red-600 flex flex-col justify-between p-6 [backface-visibility:hidden]">
          <span className="text-red-500 text-2xl">{symbol}</span>
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
          </div>
          <span className="text-red-500 text-2xl self-end">{symbol}</span>
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-red-600 text-black border border-white flex flex-col justify-between p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-black text-2xl">{symbol}</span>
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <p className="text-sm sm:text-base text-black mb-6">{description}</p>
            <Button
              variant="cyber"
              size="lg"
              onClick={() => window.open(registerLink, "_blank")}
              className="font-cyber text-lg px-6 py-3 bg-black text-white hover:bg-gray-800"
            >
              Register Now
            </Button>
          </div>
          <span className="text-black text-2xl self-end">{symbol}</span>
        </div>
      </div>
    </div>
  );
};

const EventCards: React.FC = () => {
  const events = [
    {
      title: "Survival Syntax",
      description: "Coding Challenge: Every line of code is a step closer to survival. Mind games, DSA challenges, and debugging battles await.",
      symbol: "♠",
      registerLink: "https://forms.gle/zPMruSAg3WHt6BYk8"
    },
    {
      title: "Design Labyrinth",
      description: "UI/UX Challenge: Story-driven design challenge testing creativity & usability. Create innovative solutions on-the-spot.",
      symbol: "♦",
      registerLink: "https://docs.google.com/forms/d/10hlIUukKF6uH1y0IMvs4ykgUlLoxLlaEVeL6UGPQav4/edit"
    },
    {
      title: "Final Gambit",
      description: "Killer Games: Survival/deduction role game. Use your wits and strategy to be the last one standing.",
      symbol: "♣",
      registerLink: "https://forms.gle/euxbZ9F7BCBXv5kV7"
    },
    {
      title: "Ctrl+Escape",
      description: "Cyber Challenge: Navigate through 4 levels of digital puzzles. From ciphers to code, data to final escape.",
      symbol: "♥",
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfGoC8XTz6013uHey6XqCWFukQTHq0r9P8GXzDxwG7l4FP5LQ/viewform"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
      {events.map((event, idx) => (
        <EventCard key={idx} {...event} />
      ))}
    </div>
  );
};

export default EventCards;