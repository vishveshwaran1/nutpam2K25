import { Github, Linkedin, Twitter, Mail, MapPin,Facebook,Instagram } from "lucide-react";

const Footer = () => {
  const staffCoordinators = [
    "Dr Roopa D",
    "Mr Pathmanaban J",
    
  ];

  const studentCoordinators = [
    "Sai Krithika M - +91 9445269399",
    "Aravind Krishna R - +91 86103 48957",
    "Arvind M - +91 6379 501 681"
  ];

  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Game Masters & Contact */}
          <div>
            <h3 className="font-cyber text-xl font-bold text-primary mb-6">
              Game Masters & Contact
            </h3>
            
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-cyber text-foreground font-semibold mb-2">Staff Coordinators</h4>
                <ul className="space-y-1 text-muted-foreground font-inter">
                  {staffCoordinators.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-cyber text-foreground font-semibold mb-2">Student Coordinators</h4>
                <ul className="space-y-1 text-muted-foreground font-inter">
                  {studentCoordinators.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Event Information */}
          <div>
            <h3 className="font-cyber text-xl font-bold text-primary mb-6">
              Event Information
            </h3>
            
            <div className="space-y-4 text-sm font-inter">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                
                <div>
                  <p className="text-foreground font-semibold">Location</p>
                  <p className="text-muted-foreground">
                    Sri Sairam Institute of Technology<br />
                    Sai Leo Nagar<br />
                    West Tambaram, Chennai - 600044<br />
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Contact</p>
                  <p className="text-muted-foreground">
                    nutpam@sairamit.edu.in<br />
                    {/* +1 (555) 123-4567 */}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Links */}
          <div>
            <h3 className="font-cyber text-xl font-bold text-primary mb-6">
              Connect With Us
            </h3>
            
            <div className="flex gap-4 mb-6">
              {[
                { icon: Twitter, href: "https://x.com/nutpam2k25?s=11" },
                { icon: Instagram, href: "https://www.instagram.com/nutpam_2025?igsh=cWg3cW1raGF1b2Jz", label: "Instagram" },
                { icon: Facebook, href: "https://www.facebook.com/share/17Lyj2HWdk/?mibextid=wwXIfr", label: "Facebook" },
                { icon: Mail, href: "mailto:nutpam@sairamit.edu.in", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:shadow-cyber"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="text-sm font-inter text-muted-foreground">
              <p className="mb-2">
                Join our community for updates, tips, and exclusive content.
              </p>
              <p className="text-xs">
                © 2025 NuTPAM. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="font-cyber text-sm text-muted-foreground">
            The game is about to begin. Are you ready, player?
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
