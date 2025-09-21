import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        cyber: ["Orbitron", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Cyberpunk theme extensions
        cyber: {
          glow: "hsl(var(--cyber-glow))",
          "glow-soft": "hsl(var(--cyber-glow-soft))",
        },
        game: {
          spade: "hsl(var(--game-spade))",
          diamond: "hsl(var(--game-diamond))",
          club: "hsl(var(--game-club))",
          heart: "hsl(var(--game-heart))",
        },
      },
      backgroundImage: {
        "gradient-cyber": "var(--gradient-cyber)",
        "gradient-red": "var(--gradient-red)",
      },
      boxShadow: {
        glow: "var(--gradient-glow)",
        cyber: "0 0 20px hsl(var(--cyber-glow) / 0.3)",
        "cyber-strong": "0 0 40px hsl(var(--cyber-glow) / 0.5)",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        "pulse-red": "pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        wave: "wave 16s ease-in-out infinite",
        "roll-up": "roll-up 16s ease-in-out infinite",
        "shadow-change": "shadow-change 16s ease-in-out infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px hsl(var(--cyber-glow) / 0.2)" },
          "100%": {
            boxShadow:
              "0 0 20px hsl(var(--cyber-glow) / 0.6), 0 0 30px hsl(var(--cyber-glow) / 0.4)",
          },
        },
        "pulse-red": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "cyber-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        wave: {
          "0%": {
            height: "calc(100% - 10px)",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
          },
          "20%": {
            height: "60px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.15)",
          },
          "25%": {
            height: "50px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
          },
          "30%, 100%": {
            height: "20px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
          },
        },
        "roll-up": {
          "0%": {
            height: "20px",
            bottom: "0",
            borderRadius: "10px",
          },
          "20%": {
            height: "30px",
            bottom: "calc(100% - 60px)",
            borderRadius: "15px",
          },
          "25%": {
            height: "40px",
            bottom: "calc(100% - 50px)",
            borderRadius: "20px",
          },
          "30%, 100%": {
            height: "30px",
            bottom: "calc(100% - 30px)",
            borderRadius: "15px",
          },
        },
        "shadow-change": {
          "0%": {
            opacity: "0.2",
            width: "80%",
            filter: "blur(5px)",
          },
          "20%": {
            opacity: "0.3",
            width: "40%",
            filter: "blur(7px)",
          },
          "25%": {
            opacity: "0.4",
            width: "30%",
            filter: "blur(8px)",
          },
          "30%, 100%": {
            opacity: "0.1",
            width: "20%",
            filter: "blur(10px)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
