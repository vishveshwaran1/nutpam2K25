import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

interface GameData {
  name: string;
  difficulty: string;
  Events: string[];
  suit: string;
}

interface PhoneUIProps {
  selectedGame: GameData | null;
  timer: boolean | null;
}

const PhoneUI = ({ selectedGame, timer }: PhoneUIProps) => {
  return (
    <div className="relative w-full max-w-sm mx-auto xl:sticky xl:top-8 xl:h-fit  xl:max-h-[calc(100vh-4rem)]">
      {/* Phone Frame */}
      <div className="w-full max-w-80 h-[600px]  sm:h-[650px] xl:h-[calc(100vh-8rem)]  xl:max-h-[700px] bg-card/80 backdrop-blur-md border-2 border-border rounded-[3rem] p-3 sm:p-4 xl:p-6 flex flex-col shadow-cyber-strong mx-auto hover:shadow-cyber-pulse transition-all duration-300">
        {/* Phone Screen */}
        <div className="flex-1 bg-background border border-border rounded-2xl p-2 sm:p-3 xl:p-4 overflow-hidden min-h-0 ">
          {selectedGame ? (
            /* Selected Event Details */
            <div className="space-y-2 sm:space-y-3 xl:space-y-4 h-full overflow-y-auto pr-1 scrollbar-hide scroll">
              <div className="text-center border-b border-border pb-2">
                <h3 className="font-cyber text-xs text-primary tracking-wider mb-1">
                  EVENT DETAILS
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
                  EVENTS
                </h3>
                <ul className="font-cyber text-sm text-muted-foreground leading-relaxed">
                  {selectedGame.Events.map((event, index) => (
                    <li key={index}>{event}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : timer ? (
            /* Default Countdown */
            <div className="flex justify-center items-center h-full">
              <CountdownTimer />
            </div>
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
