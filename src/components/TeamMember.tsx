import React from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  socialLinks,
}) => {
  return (
    <div className="flex flex-col items-center p-2">
      {/* Card frame with premium Vantablack metal finish and red accents */}
      <div className="relative w-[170px] h-[230px] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.95)] hover:shadow-[0_0_25px_rgba(220,38,38,0.7)] transition-all duration-500 bg-black border border-zinc-900 rounded-[1rem] pt-16 pb-6 px-4 group overflow-hidden">
        {/* Enhanced Vantablack metallic effect - inspired by playing card */}
        <div className="absolute inset-0 bg-[#030303] z-0"></div>
        
        {/* Metallic base with slight texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 opacity-80 z-0"></div>
        
        {/* Diagonal metallic highlights - like playing card metallic finish */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(60,60,60,0.15)_20%,rgba(30,30,30,0.2)_40%,transparent_60%)] z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(80,80,80,0.1)_50%,transparent_70%)] z-0"></div>
        
        {/* Horizontal light sweep effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700/10 to-transparent opacity-30 group-hover:opacity-40 group-hover:translate-x-1 transition-all duration-700 ease-in-out z-0"></div>
        
        {/* Subtle metallic texture overlay */}
        <div className="absolute inset-0 bg-[url('/subtle-metal-texture.png')] bg-cover opacity-5 mix-blend-overlay z-0"></div>
        
        {/* Edge highlight for raised card appearance */}
        <div className="absolute inset-0 shadow-[inset_0_0_30px_10px_rgba(0,0,0,0.8)] z-0"></div>
        
        {/* Premium red metallic border - like in the card image */}
          <div className="absolute inset-[1px] rounded-[0.95rem] border border-zinc-700/20 group-hover:border-red-900/30 transition-colors duration-500 z-0"></div>
          <div className="absolute inset-[2px] rounded-[0.9rem] border border-zinc-800/20 shadow-[inset_0_0_8px_rgba(0,0,0,0.8)] group-hover:shadow-[inset_0_0_15px_rgba(220,38,38,0.2)] transition-shadow duration-500 z-0"></div>

        {/* Card corners with metallic finish */}
        <div className="text-2xl font-bold text-red-600/80 absolute top-2 left-3 z-10 drop-shadow-[0_0_1px_rgba(220,38,38,0.3)] group-hover:text-red-500 transition-colors duration-500">
          𝐊
        </div>
        <div className="text-2xl font-bold text-red-600/80 absolute bottom-2 right-3 rotate-180 z-10 drop-shadow-[0_0_1px_rgba(220,38,38,0.3)] group-hover:text-red-500 transition-colors duration-500">
          𝐊
        </div>

        {/* Circular metal-framed photo with premium shaded styling */}
        <div
          className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[110px] h-[110px] overflow-hidden rounded-full z-10 
                      bg-gradient-to-br from-zinc-900 to-black
                      border border-zinc-800/50 group-hover:border-red-900/40 
                      transition-all duration-500
                      shadow-[0_0_15px_rgba(0,0,0,0.9)] group-hover:shadow-[0_0_20px_rgba(0,0,0,0.95)]"
        >
          {/* Circular metal ring around photo */}
          <div className="absolute inset-0 rounded-full border-[3px] border-black/50 z-30 pointer-events-none"></div>
          <div
            className="absolute inset-[3px] rounded-full border border-zinc-800/20 group-hover:border-red-950/30 
                          transition-colors duration-500 z-30 pointer-events-none"
          ></div>

          {/* Inner shadow for depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_20px_8px_rgba(0,0,0,0.7)] rounded-full z-30 pointer-events-none"></div>

          {/* Radial lighting effect for spherical appearance */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.8)_100%)] opacity-60 z-20 pointer-events-none"></div>

          {/* Image container */}
          <div className="w-full h-full relative overflow-hidden">
            {/* Image with treatment */}
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover 
                         filter contrast-[1.05] brightness-[0.92] saturate-[0.97] grayscale-[15%] 
                         group-hover:contrast-[1.08] group-hover:brightness-[0.94] group-hover:saturate-[1.02] group-hover:grayscale-[10%]
                         transition-all duration-500"
            />

            {/* Circular vignette effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.6)_100%)] z-20"></div>

            {/* Subtle metal tint overlay */}
            <div className="absolute inset-0 bg-red-950/10 mix-blend-color z-20 pointer-events-none opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

            {/* Lighting highlight - simulates light hitting sphere from top left */}
            <div className="absolute -top-5 -left-5 w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(150,150,150,0.05)_0%,transparent_80%)] rounded-full blur-md z-20 pointer-events-none"></div>
          </div>
        </div>

        {/* Name with metallic red finish - adjusted for circular photo */}
        <div className="absolute bottom-[30px] left-0 w-full text-center z-10">
          <span className="font-nuptam text-lg font-bold bg-clip-text text-transparent bg-gradient-to-b from-red-500/90 to-red-700/90 group-hover:from-red-400/90 group-hover:to-red-600/90 transition-colors duration-500 drop-shadow-[0_0_2px_rgba(0,0,0,0.9)]">
            {name}
          </span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-2 mt-2">{role}</p>
      {socialLinks && (
        <div className="flex space-x-2 mt-1">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
            >
              {/* GitHub SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
            >
              {/* LinkedIn SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
                <path d="M8 9h4v3a4 4 0 0 1-4 4v-7z" />
              </svg>
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
            >
              {/* Twitter SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default TeamMember;
