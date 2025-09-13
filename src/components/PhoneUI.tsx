import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

interface GameData {
  name: string;
  difficulty: string;
  condition: string;
  timeLimit: string;
  suit: string;
}

interface PhoneUIProps {
  selectedGame: GameData | null;
  timer: boolean | null;
}

const PhoneUI = ({ selectedGame, timer }: PhoneUIProps) => {
  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="w-80 h-[600px] bg-card border-2 border-border rounded-[3rem] p-6 flex flex-col shadow-cyber">
        {/* Phone Screen */}
        <div className="flex-1 bg-background border border-border rounded-2xl p-6 flex flex-col justify-center">
          {selectedGame ? (
            /* Game Details */
            <div className="text-center space-y-6">
              <div>
                <h3 className="font-cyber text-sm text-primary tracking-wider mb-2">
                  GAME
                </h3>
                <h2 className="font-cyber text-xl font-bold text-foreground">
                  {selectedGame.name}
                </h2>
              </div>

              <div>
                <h3 className="font-cyber text-sm text-primary tracking-wider mb-2">
                  DIFFICULTY
                </h3>
                <p className="font-cyber text-lg text-foreground">
                  {selectedGame.difficulty}
                </p>
              </div>

              <div>
                <h3 className="font-cyber text-sm text-primary tracking-wider mb-2">
                  CLEAR CONDITION
                </h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  {selectedGame.condition}
                </p>
              </div>

              <div>
                <h3 className="font-cyber text-sm text-primary tracking-wider mb-2">
                  TIME LIMIT
                </h3>
                <p className="font-cyber text-lg text-foreground">
                  {selectedGame.timeLimit}
                </p>
              </div>

              <Button
                variant="cyber"
                className="w-full font-cyber text-sm"
                onClick={() => window.open("#register", "_blank")}
              >
                REGISTER FOR THIS GAME
              </Button>
            </div>
          ) : timer ? (
            /* Default Countdown */
            <CountdownTimer />
          ) : (
            <>
              <div className="flex justify-center items-center h-full">
                <h1 className="font-cyber text-lg text-primary tracking-wider mb-2">
                  Select a Game
                </h1>
              </div>
            </>
          )}
        </div>

        {/* Phone Home Indicator */}
        <div className="flex justify-center mt-4">
          <div className="w-32 h-1 bg-border rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneUI;
