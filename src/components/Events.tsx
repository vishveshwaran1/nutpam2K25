import { useState } from "react";
import GameCard from "./GameCard";
import PhoneUI from "./PhoneUI";

interface GameData {
  name: string;
  difficulty: string;
  Events: string[];
  suit: string;
}

const gameData: { [key: string]: GameData } = {
  spade: {
    name: "spade: Games of Skill & Endurance",
    difficulty: "♠️ EIGHT OF SPADES",
    Events: [
      "Ditigal Marathon",
      "Virtual Obstacle Course",
      "Endurance Challenge",
      "Skill-Based Mini-Games",
    ],
    suit: "spade",
  },
  diamond: {
    name: "Diamond: Games of Wits & Innovation",
    difficulty: "♦️ SIX OF DIAMONDS",
    Events: ["Puzzle Solving", "Creative Challenges"],
    suit: "diamond",
  },
  club: {
    name: "Club: Games of Teamwork & Balance",
    difficulty: "♣️ FIVE OF CLUBS",
    Events: ["Team Relay", "Collaborative Tasks", "Balance Challenges"],
    suit: "club",
  },
  heart: {
    name: "Heart: Games of Psychology & Deception",
    difficulty: "♥️ SEVEN OF HEARTS",
    Events: [
      "Game of Deception (Cyber-craft)",
      "Psychological Warfare (Mind Games)",
      "The Great Disguise (Stealth Challenge)",
    ],
    suit: "heart",
  },
};

const Events = () => {
  const [selectedGame, setSelectedGame] = useState<GameData | null>(null);

  const handleCardClick = (gameKey: string) => {
    setSelectedGame(gameData[gameKey]);
  };

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-6 flex flex-col justify-center items-center md:block">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl font-bold cyber-glow mb-4">
            Choose Your Game
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Four categories. Four different ways to prove your worth. Select a
            card to reveal the challenges that await.
          </p>
        </div>

        <div className=" flex justify-around items-start max-sm:flex-col sm:flex-col md:flex-row md:space-x-10">
          {/* Left Side - Game Cards */}
          <div className="grid  gap-6 max-sm:grid-cols-4  sm:grid-cols-4 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
            <GameCard
              symbol="♠️"
              title="Spade: Games of Skill & Endurance"
              isActive={selectedGame?.suit === "spade"}
              onClick={() => handleCardClick("spade")}
              symbolColor="spade"
            />

            <GameCard
              symbol="♦️"
              title="Diamond: Games of Wits & Innovation"
              isActive={selectedGame?.suit === "diamond"}
              onClick={() => handleCardClick("diamond")}
              symbolColor="diamond"
            />

            <GameCard
              symbol="♣️"
              title="Club: Games of Teamwork & Balance"
              isActive={selectedGame?.suit === "club"}
              onClick={() => handleCardClick("club")}
              symbolColor="club"
            />

            <GameCard
              symbol="♥️"
              title="Heart: Games of Psychology & Deception"
              isActive={selectedGame?.suit === "heart"}
              onClick={() => handleCardClick("heart")}
              symbolColor="heart"
            />
          </div>

          {/* Right Side - Phone UI */}
          <div className="flex justify-center mt-10 md:mt-10 max-sm:w-full sm:w-full md:w-0 md:mt-0 lg:w-auto">
            <PhoneUI selectedGame={selectedGame} timer={null} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
