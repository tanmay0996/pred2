module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "borders-1": "var(--borders-1)",
        colorsred: "var(--colorsred)",
        "fills-1": "var(--fills-1)",
        "fills-2": "var(--fills-2)",
        fillspressed: "var(--fillspressed)",
        "gray-200": "var(--gray-200)",
        "gray-300": "var(--gray-300)",
        "gray-400": "var(--gray-400)",
        "gray-700": "var(--gray-700)",
        "gray-900": "var(--gray-900)",
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
      },
      fontFamily: {
        "body-1-medium": "var(--body-1-medium-font-family)",
        "body-1-semi-bold": "var(--body-1-semi-bold-font-family)",
        "body-2-medium": "var(--body-2-medium-font-family)",
        "body-2-regular": "var(--body-2-regular-font-family)",
        "body-2-semi-bold": "var(--body-2-semi-bold-font-family)",
        "button-bold": "var(--button-bold-font-family)",
        "label-regular": "var(--label-regular-font-family)",
        "title-2-semi-bold": "var(--title-2-semi-bold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: { "blur-40": "var(--blur-40)", "blur-60": "var(--blur-60)" },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
