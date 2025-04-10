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
            },
        },
    },
    plugins: [],
} 