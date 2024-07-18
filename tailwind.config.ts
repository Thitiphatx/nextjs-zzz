import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            'body': ["comfortaa", "kanit"]
        },
        extend: {
            colors: {
                primary: 'white',
                secondary: 'blue',
            },
            animation: {
                'bg-color-loop': 'backgroundColorLoop 2s linear infinite',
                'text-color-loop' : 'textColorLoop 2s linear infinite',
                'active-tab-loop' : 'activeTabLoop 2s ease infinite',
                'active-btn-loop' : 'activeButtonLoop 2s ease infinite'
            },
            keyframes: {
                backgroundColorLoop: {
                    '0%': { backgroundColor: '#a5cc00'},
                    '25%': { backgroundColor: '#eeaa00'},
                    '50%': { backgroundColor: '#ee3399'},
                    '75%': { backgroundColor: '#6644cc'},
                    '100%': { backgroundColor: '#a5cc00'}
                },
                textColorLoop: {
                    '0%': { color: '#a5cc00'},
                    '25%': { color: '#eeaa00'},
                    '50%': { color: '#ee3399'},
                    '75%': { color: '#6644cc'},
                    '100%': { color: '#a5cc00'}
                },
                activeTabLoop: {
                    '0%': { backgroundColor: '#a5cc00', transform: 'scale(1.4) skew(-15deg)'},
                    '25%': { backgroundColor: '#eeaa00', transform: 'scale(1.5) skew(-15deg)'},
                    '50%': { backgroundColor: '#ee3399', transform: 'scale(1.5) skew(-15deg)'},
                    '75%': { backgroundColor: '#6644cc', transform: 'scale(1.5) skew(-15deg)'},
                    '100%': { backgroundColor: '#a5cc00', transform: 'scale(1.4) skew(-15deg)'}
                },
                activeButtonLoop: {
                    '0%': { backgroundColor: '#a5cc00', transform: 'scale(1.4)', color: 'black'},
                    '25%': { backgroundColor: '#eeaa00', transform: 'scale(1.5)', color: 'black'},
                    '50%': { backgroundColor: '#ee3399', transform: 'scale(1.5)', color: 'black'},
                    '75%': { backgroundColor: '#6644cc', transform: 'scale(1.5)', color: 'black'},
                    '100%': { backgroundColor: '#a5cc00', transform: 'scale(1.4)', color: 'black'}
                },
            },  
        },
    },
    plugins: [],
};
export default config;
