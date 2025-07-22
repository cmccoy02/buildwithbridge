module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'ocr-a': ['OCR-A', 'monospace'],
                'jetbrains-mono': ['JetBrains Mono', 'monospace'],
            },
            colors: {
                'amoled-black': '#000000',
                'gruvbox': {
                    'bg': '#282828',
                    'fg': '#ebdbb2',
                    'red': '#cc241d',
                    'green': '#98971a',
                    'yellow': '#d79921',
                    'blue': '#458588',
                    'purple': '#b16286',
                    'aqua': '#689d6a',
                    'gray': '#928374',
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
} 