
import CountdownTimer from "./CountdownTimer";
import { Button } from "@/components/ui/button";

interface EventDetail {
  name: string;
  overview: string;
  format?: string;
  teamSize: string;
  rules: string[];
  coordinators: string[];
  registerLink: string;
}

interface GameData {
  name: string;
  difficulty: string;
  Events: EventDetail[];
  suit: string;
}

interface PhoneUIProps {
  selectedEvent?: EventDetail | null;
  timer: boolean | null;
}

const PhoneUI = ({ selectedEvent, timer }: PhoneUIProps) => {
  return (
    <div className="relative w-full max-w-sm mx-auto xl:sticky xl:top-8 xl:h-fit xl:max-h-[calc(100vh-4rem)]">
      {/* Phone Frame */}
      <div className="w-full max-w-80 h-[600px] sm:h-[650px] xl:h-[calc(100vh-8rem)] xl:max-h-[700px] bg-card/80 backdrop-blur-md border-2 border-border rounded-[3rem] p-3 sm:p-4 xl:p-6 flex flex-col shadow-cyber-strong mx-auto hover:shadow-cyber-pulse transition-all duration-300">
        {/* Phone Screen */}
        <div className="flex-1 bg-background border border-border rounded-2xl p-2 sm:p-3 xl:p-4 overflow-hidden min-h-0 scroll" >
          {selectedEvent ? (
            /* Selected Event Details */
            <div className="space-y-2 sm:space-y-3 xl:space-y-4 h-full overflow-y-auto scrollbar-hide scroll">
              <div className="text-center border-b border-border pb-2">
                <h3 className="font-cyber text-xs text-primary tracking-wider mb-1">
                  EVENT DETAILS
                </h3>
                <h2 className="font-cyber text-xs sm:text-sm font-bold text-foreground leading-tight">
                  {selectedEvent.name}
                </h2>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="bg-primary/5 rounded-lg p-2">
                  <p className="font-inter text-xs text-primary font-semibold mb-1">Overview</p>
                  <p className="font-inter text-xs text-muted-foreground leading-relaxed">
                    {selectedEvent.overview}
                  </p>
                </div>

                {selectedEvent.format && (
                  <div className="bg-card/50 rounded-lg p-2">
                    <p className="font-inter text-xs text-primary font-semibold mb-1">Format</p>
                    <p className="font-inter text-xs text-foreground leading-relaxed">
                      {selectedEvent.format}
                    </p>
                  </div>
                )}

                <div className="bg-card/50 rounded-lg p-2">
                  <p className="font-inter text-xs text-primary font-semibold mb-1">Team Size</p>
                  <p className="font-inter text-xs text-foreground font-medium">
                    {selectedEvent.teamSize}
                  </p>
                </div>

                <div className="bg-card/50 rounded-lg p-2">
                  <p className="font-inter text-xs text-primary font-semibold mb-1">Rules</p>
                  <ul className="font-inter text-xs text-muted-foreground space-y-0.5">
                    {selectedEvent.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        <span className="leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card/50 rounded-lg p-2">
                  <p className="font-inter text-xs text-primary font-semibold mb-1">Coordinators</p>
                  <div className="font-inter text-xs text-muted-foreground space-y-0.5">
                    {selectedEvent.coordinators.map((coordinator, coordIndex) => (
                      <p key={coordIndex} className="leading-relaxed">{coordinator}</p>
                    ))}
                  </div>
                </div>

                <Button
                  variant="cyber"
                  size="sm"
                  onClick={() => window.open(selectedEvent.registerLink, "_blank")}
                  className="w-full font-cyber text-xs mt-2 py-2 hover:scale-105 transition-transform duration-200"
                >
                  Register Now
                </Button>
              </div>
            </div>
          ) : timer ? (
            /* Default Countdown */
           <div className="flex justify-center items-center h-full">
            <CountdownTimer />
           </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <h1 className="font-cyber text-lg text-primary tracking-wider text-center">
                Select an Event
              </h1>
            </div>
          )}
        </div>

        {/* Phone Home Indicator */}
        <div className="flex justify-center mt-2 sm:mt-3 xl:mt-4">
          <div className="w-32 h-1 bg-border rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneUI;
