import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const staffCoordinators = ["Mr J Pathmanaban", "Ms Roopa D"];

  const studentCoordinators = [
    "Sai Krithika M - +91 9445269399",
    "Aravind Krishna R - +91 86103 48957",
    "Arvind M - +91 6379 501 681",
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
                <h4 className="font-cyber text-foreground font-semibold mb-2">
                  Staff Coordinators
                </h4>
                <ul className="space-y-1 text-muted-foreground font-inter">
                  {staffCoordinators.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-cyber text-foreground font-semibold mb-2">
                  Student Coordinators
                </h4>
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
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0"  />
              <div>
                <p className="text-foreground font-semibold">Contact</p>
                <a
                  className="text-muted-foreground"
                  href="mailto:nutpam@sairamit.edu.in"
                >
                  nutpam@sairamit.edu.in
                  <br />
                  {/* +1 (555) 123-4567 */}
                </a>
              </div>
            </div>
            <div className="space-y-4 text-sm font-inter">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />

                <div>
                  <p className="text-foreground font-semibold">Location</p>
                  <a
                    className="text-muted-foreground"
                    href="https://maps.app.goo.gl/xeKnFUemydcaDeNk7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sri Sairam Institute of Technology
                    <br />
                    Sai Leo Nagar
                    <br />
                    West Tambaram, Chennai - 600044
                    <br />
                  </a>
                </div>
              </div>
              <div className="col-span-3 max-sm:w-1/2 sm:w-1/2 md:w-full m-0 border-red-600 backdrop-blur-md border-2 border-border rounded-[1rem] p-2 sm:p-4 xl:p-2 flex flex-col shadow-cyber-strong  hover:shadow-cyber-pulse transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5315.864346367261!2d80.05065221183084!3d12.960647087300968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f51f638ddfbb%3A0xf3aef7ec7c8979ba!2sSri%20Sairam%20Institute%20of%20Technology!5e1!3m2!1sen!2sin!4v1757862618908!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-[0.7rem]"
                ></iframe>
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
                {
                  icon: Twitter,
                  href: "https://x.com/nutpam2k24?s=11",
                  label: "Twitter",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/nutpam_2025?igsh=cWg3cW1raGF1b2Jz",
                  label: "Instagram",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/share/17Lyj2HWdk/?mibextid=wwXIfr",
                  label: "Facebook",
                },
                {
                  icon: Mail,
                  href: "mailto:nutpam@sairamit.edu.in",
                  label: "Email",
                },
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
              <p className="text-xs">© 2025 NuTPAM. All rights reserved.</p>
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
