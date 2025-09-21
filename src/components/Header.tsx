import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (item: { label: string; id: string }) => {
    if (item.label === "Events") {
      navigate("/events");  
    } else {
      if (item.label === "Team") {
        navigate("/team");
        return;
      }
      // For other sections, scroll to them if we're on the home page
      if (location.pathname === "/") {
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home page first, then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(item.id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <header
      className={`fixed  top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}

          <div
            className="font-cyber text-xl font-bold cyber-glow flex items-center gap-2"
            onClick={() => {
              const element = document.getElementById("hero");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <img src="/logo.png" alt="logo" className="h-8 w-8" />
            NuTPAM 2k25
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: "Home", id: "hero" },
              { label: "About", id: "about" },
              { label: "Events", id: "events" },
              { label: "Team", id: "team" },
              { label: "Sponsors", id: "sponsors" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-inter font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
          {/* {Mobile Menu} */}
          <div
            id="mobile-menu"
            className={`${
              mobileMenu ? "flex" : "hidden"
            } absolute right-4 top-16 md:hidden flex-col bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg p-4 space-y-4`}
          >
            {[
              { label: "Home", id: "hero" },
              { label: "About", id: "about" },
              { label: "Events", id: "events" },
              { label: "Team", id: "team" },
              { label: "Sponsors", id: "sponsors" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  handleNavigation(item);
                  setMobileMenu(false);
                }}
                className="text-foreground hover:text-primary transition-colors duration-300 font-inter font-medium text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
          {/* Mobile Menu Button */}

          <button
            className="md:hidden text-foreground hover:text-primary"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            {mobileMenu ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
