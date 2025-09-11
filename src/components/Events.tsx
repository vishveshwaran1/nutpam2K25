import { useState } from "react";
import GameCard from "./GameCard";
import PhoneUI from "./PhoneUI";

interface GameData {
  name: string;
  difficulty: string;
  condition: string;
  timeLimit: string;
  suit: string;
}

const gameData: { [key: string]: GameData } = {
  spade: {
    name: "Digital Marathon (Coding)",
    difficulty: "♠️ EIGHT OF SPADES",
    condition: "Solve all problems before the timer expires.",
    timeLimit: "60 Minutes",
    suit: "spade"
  },
  diamond: {
    name: "The Architect's Gambit (UI/UX)",
    difficulty: "♦️ SIX OF DIAMONDS", 
    condition: "Design the most intuitive and logical solution to the user problem.",
    timeLimit: "90 Minutes",
    suit: "diamond"
  },
  club: {
    name: "The Labyrinth of Clues (Treasure Hunt)",
    difficulty: "♣️ FIVE OF CLUBS",
    condition: "Your team must be the first to solve all clues and reach the final destination.",
    timeLimit: "120 Minutes", 
    suit: "club"
  },
  heart: {
    name: "Game of Deception (Cyber-craft)",
    difficulty: "♥️ SEVEN OF HEARTS",
    condition: "Successfully manipulate information to identify the target without being discovered.",
    timeLimit: "45 Minutes",
    suit: "heart"
  }
};

const Events = () => {
  const [selectedGame, setSelectedGame] = useState<GameData | null>(null);

  const handleCardClick = (gameKey: string) => {
    setSelectedGame(gameData[gameKey]);
  };

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl font-bold cyber-glow mb-4">
            Choose Your Game
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Four categories. Four different ways to prove your worth. 
            Select a card to reveal the challenges that await.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Game Cards */}
          <div className="grid grid-cols-2 gap-6">
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
          <div className="flex justify-center lg:justify-end">
            <PhoneUI selectedGame={selectedGame} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;