// Types for team data
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  category: "design" | "development" | "coordination";
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

// Sample team data
export const teamMembers: TeamMember[] = [
  // Design Team
  {
    id: "d1",
    name: "Aishwarya Singh",
    role: "Lead Designer",
    image: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc1LWppci0wMzE2LXBvbV8yLnBuZw.png", // Replace with actual image path
    category: "design",
    socialLinks: {
      linkedin: "https://linkedin.com/in/aishwarya-singh",
      twitter: "https://twitter.com/aishwarya_design",
    },
  },
    {
    id: "d1",
    name: "Aishwarya Singh",
    role: "Lead Designer",
    image: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczc1LWppci0wMzE2LXBvbV8yLnBuZw.png", // Replace with actual image path
    category: "design",
    socialLinks: {
      linkedin: "https://linkedin.com/in/aishwarya-singh",
      twitter: "https://twitter.com/aishwarya_design",
    },
  },
  {
    id: "d2",
    name: "Priya Sharma",
    role: "UI/UX Designer",
    image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8yN19yZWFsaXN0aWNfcGhvdG9fb2Zfc21pbGluZ19oYW5kc29tZV95b3VuZ19pbl8xNWExMTE1ZC0xZTBiLTQ4YjAtOGEyNi01ZDE1ZmE3Njg2MzYucG5n.png", // Replace with actual image path
    category: "design",
    socialLinks: {
      linkedin: "https://linkedin.com/in/priya-sharma",
    },
  },
  {
    id: "d3",
    name: "Rahul Verma",
    role: "Graphic Designer",
    image: "/placeholder.svg", // Replace with actual image path
    category: "design",
    socialLinks: {
      twitter: "https://twitter.com/rahul_designs",
    },
  },

  // Development Team
  {
    id: "dev1",
    name: "Vikram Patel",
    role: "Lead Developer",
    image: "/placeholder.svg", // Replace with actual image path
    category: "development",
    socialLinks: {
      github: "https://github.com/vikrampatel",
      linkedin: "https://linkedin.com/in/vikram-patel",
    },
  },
  {
    id: "dev2",
    name: "Neha Gupta",
    role: "Frontend Developer",
    image: "/placeholder.svg", // Replace with actual image path
    category: "development",
    socialLinks: {
      github: "https://github.com/nehagupta",
      linkedin: "https://linkedin.com/in/neha-gupta",
    },
  },
  {
    id: "dev3",
    name: "Arjun Kumar",
    role: "Backend Developer",
    image: "/placeholder.svg", // Replace with actual image path
    category: "development",
    socialLinks: {
      github: "https://github.com/arjunkumar",
    },
  },
  {
    id: "dev4",
    name: "Divya Reddy",
    role: "Full Stack Developer",
    image: "/placeholder.svg", // Replace with actual image path
    category: "development",
    socialLinks: {
      github: "https://github.com/divyareddy",
      linkedin: "https://linkedin.com/in/divya-reddy",
    },
  },

  // Coordination Team
  {
    id: "c1",
    name: "Ananya Desai",
    role: "Event Coordinator",
    image: "/placeholder.svg", // Replace with actual image path
    category: "coordination",
    socialLinks: {
      linkedin: "https://linkedin.com/in/ananya-desai",
    },
  },
  {
    id: "c2",
    name: "Rajesh Khanna",
    role: "Logistics Coordinator",
    image: "/placeholder.svg", // Replace with actual image path
    category: "coordination",
  },
  {
    id: "c3",
    name: "Sneha Joshi",
    role: "PR Coordinator",
    image: "/placeholder.svg", // Replace with actual image path
    category: "coordination",
    socialLinks: {
      linkedin: "https://linkedin.com/in/sneha-joshi",
      twitter: "https://twitter.com/sneha_joshi",
    },
  },
];

// Function to get team members by category
export const getTeamByCategory = (
  category: "design" | "development" | "coordination"
) => {
  return teamMembers.filter((member) => member.category === category);
};
