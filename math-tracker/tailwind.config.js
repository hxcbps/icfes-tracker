export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pro: {
                    bg: '#0f172a',    // Dark Slate
                    card: '#1e293b',  // Slate 800
                    accent: '#8b5cf6', // Violet 500
                    success: '#10b981', // Emerald 500
                    text: '#f8fafc',  // Slate 50
                    muted: '#94a3b8'  // Slate 400
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
