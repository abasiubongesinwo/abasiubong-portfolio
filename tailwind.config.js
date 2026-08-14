export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				page: "#0d1117",
				surface: "#16213e",
				primary: "#0ea5e9",
				accent: "#f59e0b",
				text: "#94a3b8",
				soft: "#1f2937",
			},
			boxShadow: {
				glow: "0 20px 60px rgba(14, 165, 233, 0.18)",
			},
			backgroundImage: {
				"hero-glow":
					"radial-gradient(circle at top, rgba(14, 165, 233, 0.15), transparent 35%)",
			},
		},
	},
	plugins: [],
};
