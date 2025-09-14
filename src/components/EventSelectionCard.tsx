interface EventDetail {
  name: string;
  overview: string;
  format?: string;
  teamSize: string;
  rules: string[];
  coordinators: string[];
  registerLink: string;
}

interface EventSelectionCardProps {
  symbol: string;
  title: string;
  events: EventDetail[];
  selectedEvent: EventDetail | null;
  onEventSelect: (event: EventDetail) => void;
  symbolColor: "spade" | "diamond" | "club" | "heart";
}

const EventSelectionCard = ({
  symbol,
  title,
  events,
  selectedEvent,
  onEventSelect,
  symbolColor,
}: EventSelectionCardProps) => {
  const colorClass = `text-game-${symbolColor}`;

  return (
    <div className="w-full max-w-md mx-auto xl:max-w-none border-2 border-border rounded-xl p-2 sm:p-3 xl:p-4 space-y-2 xl:space-y-3 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 h-[280px] sm:h-[300px] xl:max-h-[calc(50vh-2rem)] xl:overflow-hidden flex flex-col">
      {/* Header */}
      <div className="text-center space-y-1 flex-shrink-0">
        <div
          className={`text-2xl sm:text-3xl xl:text-3xl ${colorClass} drop-shadow-lg`}
        >
          {symbol}
        </div>
        <h3 className="font-cyber text-xs xl:text-xs font-semibold leading-tight text-foreground px-2">
          {title}
        </h3>
        <div className="h-3"></div>
        {events.map((event, index) => (
          <button
            key={index}
            onClick={() => onEventSelect(event)}
            className={`
              w-full text-left p-1.5 sm:p-2 xl:p-2 rounded-lg border-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
              ${
                selectedEvent?.name === event.name
                  ? "border-primary bg-primary/15 shadow-cyber-strong scale-[1.02]"
                  : "border-border hover:border-primary/60 hover:bg-primary/8 hover:shadow-lg"
              }
            `}
          >
            <h4 className="font-cyber text-xs xl:text-xs font-bold text-primary mb-0.5 leading-tight">
              {event.name}
            </h4>
            <p className="font-inter text-xs xl:text-xs text-muted-foreground line-clamp-2 leading-tight">
              {event.overview}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventSelectionCard;
