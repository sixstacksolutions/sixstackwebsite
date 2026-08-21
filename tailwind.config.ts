import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#080B12",
          soft: "#1B2432",
        },
        // Primary accent — premium blue
        brand: {
          50: "#F3F7FF",
          100: "#E1ECFF",
          200: "#C3D8FF",
          300: "#94BAFF",
          400: "#5B93FB",
          500: "#2E7DF7",
          600: "#1677FF",
          700: "#0F65DD",
          800: "#0E4FA8",
          900: "#0F3E7E",
        },
        // Deep navy — footer + strong dark sections
        navy: {
          DEFAULT: "#071A33",
          800: "#0A2244",
          700: "#0E2C57",
        },
        // aliases kept so legacy `teal-*` utilities resolve to blue
        teal: {
          400: "#5B93FB",
          500: "#2E7DF7",
          600: "#1677FF",
          700: "#0F65DD",
        },
        slate: {
          muted: "#6B7688",
          body: "#4B5563",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          50: "#F8FAFF",
          100: "#F3F7FF",
          200: "#E9F1FF",
        },
        line: {
          DEFAULT: "#E5EAF2",
          strong: "#D5DEEA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.25rem, 8vw, 7rem)", { lineHeight: "0.94", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.9rem, 3.2vw, 2.9rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16, 23, 41, 0.04), 0 8px 24px -12px rgba(16, 23, 41, 0.12)",
        card: "0 1px 3px rgba(16, 23, 41, 0.05), 0 18px 40px -24px rgba(16, 23, 41, 0.22)",
        lift: "0 2px 6px rgba(8, 11, 18, 0.06), 0 30px 60px -28px rgba(22, 119, 255, 0.28)",
        glow: "0 0 0 1px rgba(22, 119, 255, 0.12), 0 20px 50px -20px rgba(22, 119, 255, 0.35)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #0F65DD 0%, #1677FF 50%, #5B93FB 100%)",
        "brand-gradient-soft": "linear-gradient(120deg, #F3F7FF 0%, #E1ECFF 100%)",
        "grid-fade": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(22,119,255,0.10), transparent 70%)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
