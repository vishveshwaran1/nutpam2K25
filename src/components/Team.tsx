import React from "react";
import TeamMember from "./TeamMember";
import TeamBanner from "./TeamBanner";
import Banner from "./Banner";

interface TeamMemberData {
  id: string;
  name: string;
  role: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

interface TeamProps {
  title?: string;
  description?: string;
  members: TeamMemberData[];
}

const Team: React.FC<TeamProps> = ({
  title = "Our Team",
  description = "Meet the talented individuals behind our success",
  members,
}) => {
  return (
    <section className="w-full py-12 md:py-24 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          <TeamBanner />
          <Banner img="/OIP.jpg" name="Banner Title" />
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {members.map((member) => (
            <div key={member.id} className="flex justify-center">
              <TeamMember
                name={member.name}
                role={member.role}
                image={member.image}
                socialLinks={member.socialLinks}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
