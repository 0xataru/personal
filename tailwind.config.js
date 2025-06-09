/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
    extend: {
        screens: {
            'xs': '430px',
            '3xl': '1600px',
        },
        colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
        },
        fontFamily: {
            sans: ["var(--font-geist-sans)"],
            mono: ["var(--font-geist-mono)"],
            inter: ["var(--font-inter)"],
        },
        fontSize: {
            'xxs': '0.625rem',
        },
        spacing: {
            '18': '4.5rem',
            '88': '22rem',
        },
    },
};
export const plugins = []; 