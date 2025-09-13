interface GameCardProps {
  symbol: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
  symbolColor: "spade" | "diamond" | "club" | "heart";
}

const GameCard = ({ symbol, title, isActive, onClick, symbolColor }: GameCardProps) => {
  const colorClass = `text-game-${symbolColor}`;
  
  return (
    <div 
      onClick={onClick}
      className={`
        relative group cursor-pointer p-6 border-2 rounded-lg transition-all duration-300
        ${isActive 
          ? "border-primary bg-primary/10 shadow-cyber-strong" 
          : "border-border hover:border-primary/50 hover:bg-primary/5"
        }
      `}
    >
      {/* Card Content */}
      <div className="text-center">
        <div className={`text-4xl mb-4 ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
          {symbol}
        </div>

        <h3 className="font-cyber text-sm font-semibold leading-tight max-sm:hidden sm:hidden md:block lg:block">
          {title}
        </h3>
      </div>

      {/* Hover Glow Effect */}
      <div className={`
        absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
        ${isActive ? "opacity-20" : ""}
        ${symbolColor === 'diamond' || symbolColor === 'heart' 
          ? "bg-gradient-to-br from-primary/20 to-primary/5" 
          : "bg-gradient-to-br from-foreground/10 to-foreground/5"
        }
      `}></div>
    </div>
  );
};

export default GameCard;