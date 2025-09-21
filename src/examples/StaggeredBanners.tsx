import React from "react";
import Banner from "../components/Banner";

interface TeamMember {
  id: number;
  name: string;
  image: string;
  role: string;
}

const StaggeredBanners: React.FC = () => {
  // Example team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Jane Doe",
      image: "/public/placeholder.svg",
      role: "Design Lead",
    },
    {
      id: 2,
      name: "John Smith",
      image: "/public/JOKER.png",
      role: "Developer",
    },
    {
      id: 3,
      name: "Alice Johnson",
      image: "/public/logo.png",
      role: "Marketing",
    },
    {
      id: 4,
      name: "Bob Williams",
      image: "/public/placeholder.svg",
      role: "Product Manager",
    },
    {
      id: 5,
      name: "Eva Green",
      image: "/public/placeholder.svg",
      role: "UX Designer",
    },
    {
      id: 6,
      name: "Mike Brown",
      image: "/public/placeholder.svg",
      role: "Backend Engineer",
    },
  ];

  return (
    <div className="w-full p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Team</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={member.id} className="flex flex-col items-center">
            <Banner
              img={member.image}
              name={`${member.name} - ${member.role}`}
              animationDelay={index * 2} // Stagger animations by 2 seconds
              width="100%"
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaggeredBanners;
