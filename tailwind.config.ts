import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1D1D1F",
        muted: "#6E6E73",
        line: "#E5E5E7",
        accent: "#0071E3",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
} satisfies Config;
