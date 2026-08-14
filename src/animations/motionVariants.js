export const fadeIn = {
	hidden: { opacity: 0, y: 32 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const stagger = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.14, delayChildren: 0.12 } },
};

export const slideFromRight = {
	hidden: { opacity: 0, x: 40 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.75, ease: "easeOut" },
	},
};
