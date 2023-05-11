/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: "tw-",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#54439C",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};