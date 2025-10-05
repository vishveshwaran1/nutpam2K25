import React, { useEffect, useState } from "react";
import { teamMembers, TeamMember as TeamMemberType } from "@/data/team";
import TeamMember from "@/components/TeamMember";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeamBanner from "@/components/TeamBanner";

const Team = () => {
  const designTeam = teamMembers.filter(
    (member) => member.category === "design"
  );
  const developmentTeam = teamMembers.filter(
    (member) => member.category === "development"
  );
  const coordinationTeam = teamMembers.filter(
    (member) => member.category === "coordination"
  );
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    setMobileView(window.innerWidth <= 768); // Example breakpoint for mobile

    window.addEventListener("resize", () => {
      console.log("Resizing window:", window.innerWidth);
      console.log("Is mobile view:", window.innerWidth <= 768);
      setMobileView(window.innerWidth <= 768);
    });
    return () => {
      window.removeEventListener("resize", () => {
        console.log("Removing resize event listener");

        setMobileView(window.innerWidth <= 768);
      });
    };
  }, []);

  return (
    <div className=" w-full relative min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-nuptam font-bold mb-4 text-primary">
            Our Team
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Meet the amazing people behind NuTPAM 2k25 who made this event
            possible through their dedication, creativity, and hard work.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsContent value="all">
            <div className="space-y-12">
              {/* Design Team Section */}
              <div>
                <h2 className="text-2xl font-nuptam font-bold mb-6 text-primary border-b border-border pb-2">
                  Design Team
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 h-screen overflow-y-auto w-[100%] sm:grid-cols-2 max-sm:grid-cols-1">
                  {/* mobile */}
                  {mobileView && (
                    console.log("Rendering mobile view", designTeam),
                    <TeamBanner prop={designTeam} mobile={mobileView} />
                  )}
                  {/* desktop  */}
                  {!mobileView &&
                    designTeam.map((member) => (
                      <React.Fragment key={member.id}>
                        <TeamBanner prop={member} mobile={mobileView} />
                      </React.Fragment>
                    ))}
                </div>
              </div>

              {/* Development Team Section */}
              <div>
                <h2 className="h-full text-2xl font-nuptam font-bold mb-6 text-primary border-b border-border pb-2">
                  Development Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:grid-cols-2 max-sm:grid-cols-1 h-full overflow-y-auto w-[100%]">
                  {developmentTeam.map((member) => (
                    <TeamMember
                      key={member.id}
                      name={member.name}
                      role={member.role}
                      image={member.image}
                      socialLinks={member.socialLinks}
                    />
                  ))}
                </div>
              </div>

              {/* Coordination Team Section */}
              <div>
                <h2 className="text-2xl font-nuptam font-bold mb-6 text-primary border-b border-border pb-2">
                  Coordination Team
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:grid-cols-2 max-sm:grid-cols-1">
                  {coordinationTeam.map((member) => (
                    <TeamMember
                      key={member.id}
                      name={member.name}
                      role={member.role}
                      image={member.image}
                      socialLinks={member.socialLinks}
                    />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="design">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {designTeam.map((member) => (
                <TeamMember
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  socialLinks={member.socialLinks}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="development">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {developmentTeam.map((member) => (
                <TeamMember
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  socialLinks={member.socialLinks}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="coordination">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {coordinationTeam.map((member) => (
                <TeamMember
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  socialLinks={member.socialLinks}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
