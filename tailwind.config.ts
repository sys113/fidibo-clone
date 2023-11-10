import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.tsx",
    "./containers/**/*.tsx",
    "./app/**/*.tsx",
    "./assets/**/*.svg",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        "c-success": "var(--color-success)",
        "c-warning": "var(--color-warning)",
        "c-danger": "var(--color-danger)",
        "c-info": "var(--color-info)",
        "c-primary": "var(--color-primary)",
        "c-secondary": "var(--color-secondary)",
      },
      backgroundColor: {
        "c-1": "var(--color-bg-1)",
        "c-2": "var(--color-bg-2)",
      },
      textColor: {
        "c-1": "var(--color-text-1)",
        "c-2": "var(--color-text-2)",
      },
      zIndex: {
        "c-toast": "var(--zindex-toast)",
        "c-header": "var(--zindex-header)",
        "c-modal-box": "var(--zindex-modal-box)",
        "c-modal-overlay": "var(--zindex-modal-overlay)",
      },
      fontSize: {
        "c-2xs": "var(--font-size-2xs)",
        "c-xs": "var(--font-size-xs)",
        "c-sm": "var(--font-size-sm)",
        "c-base": "var(--font-size-base)",
        "c-lg": "var(--font-size-lg)",
        "c-xl": "var(--font-size-xl)",
        "c-2xl": "var(--font-size-2xl)",
        "c-3xl": "var(--font-size-3xl)",
      },
      fontWeight: {
        "c-normal": "var(--font-weight-normal)",
        "c-medium": "var(--font-weight-medium)",
        "c-bold": "var(--font-weight-bold)",
        "c-extra-bold": "var(--font-weight-extra-bold)",
      },
      borderRadius: {
        "c-xs": "var(--border-radius-xs)",
        "c-sm": "var(--border-radius-sm)",
        "c-md": "var(--border-radius-md)",
        "c-lg": "var(--border-radius-lg)",
        "c-xl": "var(--border-radius-xl)",
        "c-2xl": "var(--border-radius-2xl)",
        "c-3xl": "var(--border-radius-3xl)",
        "c-4xl": "var(--border-radius-4xl)",
      },
      borderColor: {
        "c-1": "var(--color-border-1)",
        "c-2": "var(--color-border-2)",
      },
    },
  },
  plugins: [],
};
export default config;
