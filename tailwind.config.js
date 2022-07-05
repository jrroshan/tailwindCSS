/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens:{
            sm:'480px',
            md:'768px',
            lg:'976px',
            xl:'1440px'
        },
        extend: {
            colors:{
                brightRed:'#ff0000',
                brightGreen:'#00ff00',
                brightBlue:'#0000ff',
                darkBlue:'#000080',
                darkGrayishBlue:'#00008b',
            }
        },
    },
    plugins: [],
};
