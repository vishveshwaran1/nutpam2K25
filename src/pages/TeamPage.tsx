import React from "react";
import Team from "../components/Team";

const teamMembers = [
  {
    id: "1",
    name: "John Doe",
    role: "Lead Developer",
    image: "/placeholder.svg",
    socialLinks: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: "/placeholder.svg",
    socialLinks: {
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  {
    id: "3",
    name: "Alex Johnson",
    role: "Project Manager",
    image: "/placeholder.svg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
    },
  },
  {
    id: "4",
    name: "Sam Williams",
    role: "Backend Developer",
    image: "/placeholder.svg",
    socialLinks: {
      github: "https://github.com/samwilliams",
      linkedin: "https://linkedin.com/in/samwilliams",
    },
  },
];

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Meet Our Team
        </h1>

        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Our talented team combines creativity, technical expertise, and
          passion to deliver exceptional results for our gaming community.
        </p>

        <Team
          title="Core Team"
          description="The brilliant minds behind NutPam 2K25"
          members={teamMembers}
        />
      </div>
    </div>
  );
};

export default TeamPage;
