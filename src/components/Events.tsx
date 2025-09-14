import { useState, useRef } from "react";
import EventSelectionCard from "./EventSelectionCard";
import PhoneUI from "./PhoneUI";

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

const gameData: { [key: string]: GameData } = {
  spade: {
    name: "Spade: Games of Skill & Endurance",
    difficulty: "Eight of Spades",
    Events: [
      {
        name: "ClubArena – Paper Presentation",
        overview: "Present innovative ideas & research. On-spot problem statements.",
        format: "30 mins/team | Judging: innovation, clarity, Q&A.",
        teamSize: "2–3 members",
        rules: ["Submit slides/paper in advance", "Strict timing", "No plagiarism"],
        coordinators: ["Thiyanesh R – 86085 83298", "Raja Sri S K – 93633 76779"],
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScywxZmsImPLbaDiqz2yCMy_XrwI8oaZGm4yOAHZAhpMHAdHg/viewform"
      },
      {
        name: "Survival Syntax – Coding Challenge",
        overview: "Every line of code is a step closer to survival.",
        format: "Round 1: Mind Game – Solve coding Qs, 3 lives. Round 2: Visa Challenge – DSA, Debugging, Math, Implementation + Power-ups.",
        teamSize: "2 members",
        rules: ["UG students only", "No internet/help", "Plagiarism = disqualification"],
        coordinators: ["Aswin R – 99409 31205", "Sachein D – 98407 44257", "Divya Sri Dharshini – 81481 49948"],
        registerLink: "https://forms.gle/zPMruSAg3WHt6BYk8"
      },
      {
        name: "The Prompt Arena – Prompt Engineering",
        overview: "3 rounds of AI prompt battles inspired by Alice in Borderland.",
        teamSize: "1–2 members",
        rules: ["Bring laptop", "Original work only", "Plagiarism prohibited", "Formal dress code"],
        coordinators: ["Swetha S – 80725 58445", "Radhika V – 73378 25333"],
        registerLink: "https://forms.gle/ZwvBTEdEGT6tWDtN6"
      }
    ],
    suit: "spade",
  },
  club: {
    name: "Club: Games of Teamwork & Balance",
    difficulty: "Five of Clubs",
    Events: [
      {
        name: "Final Gambit – Killer Games",
        overview: "Survival/deduction role game.",
        teamSize: "Individual play",
        rules: ["Random secret roles", "No phones", "Formal dress code"],
        coordinators: ["Sabareesh C S – 63822 73867", "Hemamaalani S J – 79049 30149"],
        registerLink: "https://forms.gle/euxbZ9F7BCBXv5kV7"
      },
      {
        name: "Last Card Standing – Treasure Hunt",
        overview: "Alice in Borderland-themed campus treasure hunt.",
        teamSize: "2 members",
        rules: ["30–40 mins", "Formal dress code", "Join WhatsApp group after registration"],
        coordinators: ["Thiruvikraman – 88382 24108", "Balaji – 86672 74337"],
        registerLink: "https://forms.gle/wo5qLY1u1RSpKFs18"
      }
    ],
    suit: "club",
  },
  diamond: {
    name: "Diamond: Games of Wits & Innovation",
    difficulty: "Six of Diamonds",
    Events: [
      {
        name: "Design Labyrinth – UI/UX Challenge",
        overview: "Story-driven design challenge testing creativity & usability.",
        teamSize: "1–3 members",
        rules: ["No pre-made templates", "On-spot design only", "Internet for research only", "Formal dress code"],
        coordinators: ["Roshni K – 99520 28659", "Samyuktha J – 70102 80293"],
        registerLink: "https://docs.google.com/forms/d/10hlIUukKF6uH1y0IMvs4ykgUlLoxLlaEVeL6UGPQav4/edit"
      },
      {
        name: "Borderland to Boardroom – Business Pitch",
        overview: "Draw cards → Business domain + crisis → Pitch survival startup idea.",
        format: "15–20 mins prep | 5 min pitch + 2 min Q&A.",
        teamSize: "2–3 members",
        rules: ["Max 4 slides", "AI tools allowed", "Formal dress code"],
        coordinators: ["Srinithi M R – 86374 98316", "Budharaju Vinay – 63012 51669"],
        registerLink: "https://forms.gle/1hEYGn39fojr6S3y7"
      }
    ],
    suit: "diamond",
  },
  heart: {
    name: "Heart: Games of Psychology & Deception",
    difficulty: "Seven of Hearts",
    Events: [
      {
        name: "Ctrl+Escape – Cyber Challenge",
        overview: "4 Levels (Cipher → Code → Data → Final Escape). Winning: Fastest completion or efficient logic.",
        teamSize: "2 members",
        rules: ["Time-bound", "No external devices", "Formal dress code mandatory"],
        coordinators: ["Udhaya Kiran – 95662 38841", "Deepak Kumar – 90259 99838"],
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfGoC8XTz6013uHey6XqCWFukQTHq0r9P8GXzDxwG7l4FP5LQ/viewform"
      },
      {
        name: "Beyond the Borderland – Fun Games",
        overview: "Round 1 – Real & Imposter | Round 2 – The Last Loop | Round 3 – Flip & Defeat",
        teamSize: "2 members",
        rules: ["Follow Game Master", "No cheating/mobiles", "Formal dress code"],
        coordinators: ["Poojasri S – 82485 57415", "Suregavarshini S – 73058 41809"],
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScLNRzBkguIVjdvCWFMIrLq2WPx-OrtsANoiH3TQWer2GObEA/viewform"
      }
    ],
    suit: "heart",
  },
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventDetail | null>(null);
  const phoneUIRef = useRef<HTMLDivElement>(null);

  const handleEventClick = (event: EventDetail) => {
    setSelectedEvent(event);
    
    // Scroll to phone UI on mobile/tablet devices
    if (phoneUIRef.current && window.innerWidth < 1280) { // xl breakpoint is 1280px
      setTimeout(() => {
        phoneUIRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }, 100);
    }
  };

  return (
    <section id="events"className="py-4 sm:py-6 xl:py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:h-full flex flex-col">
        <div className="text-center mb-4 sm:mb-6 xl:mb-8">
          <h2 className="font-cyber text-2xl sm:text-3xl xl:text-4xl font-bold cyber-glow mb-2 sm:mb-3 xl:mb-3">
            Choose Your Game
          </h2>
          <p className="font-inter text-xs sm:text-sm xl:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Four categories. Four different ways to prove your worth. Select an
            event to reveal the challenges that await.
          </p>
        </div>

        <div className="flex-1 flex flex-col xl:flex-row gap-3 sm:gap-4 xl:gap-8 items-start">
          {/* Left Side - Event Selection Cards */}
          <div className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 sm:gap-3 xl:gap-4">
            <EventSelectionCard
              symbol="♠️"
              title="Spade: Games of Skill & Endurance"
              events={gameData.spade.Events}
              selectedEvent={selectedEvent}
              onEventSelect={handleEventClick}
              symbolColor="spade"
            />

            <EventSelectionCard
              symbol="♦️"
              title="Diamond: Games of Wits & Innovation"
              events={gameData.diamond.Events}
              selectedEvent={selectedEvent}
              onEventSelect={handleEventClick}
              symbolColor="diamond"
            />

            <EventSelectionCard
              symbol="♣️"
              title="Club: Games of Teamwork & Balance"
              events={gameData.club.Events}
              selectedEvent={selectedEvent}
              onEventSelect={handleEventClick}
              symbolColor="club"
            />

            <EventSelectionCard
              symbol="♥️"
              title="Heart: Games of Psychology & Deception"
              events={gameData.heart.Events}
              selectedEvent={selectedEvent}
              onEventSelect={handleEventClick}
              symbolColor="heart"
            />
          </div>

          {/* Right Side - Phone UI */}
          <div ref={phoneUIRef} className="w-full xl:w-1/3 flex justify-center xl:justify-start xl:h-full">
            <PhoneUI selectedEvent={selectedEvent} timer={null} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
