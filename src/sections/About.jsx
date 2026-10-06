import { motion } from "framer-motion";

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.12 },
	},
};

const item = {
	hidden: { opacity: 0, y: 25 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const strengths = [
	{ label: "Frontend engineering", value: "React, modern UI systems, responsive interfaces" },
	{ label: "Product thinking", value: "Clear UX, clean architecture, business-focused execution" },
	{ label: "Delivery", value: "Performance, accessibility, maintainable code, API-driven builds" },
];

export default function About() {
	return (
		<section id="about" className="relative py-24">
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
				<motion.div variants={item}>
					<p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">About</p>
					<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
						Developer + Problem Solver + Builder.
					</h2>
				</motion.div>

				<motion.div variants={item} className="space-y-5 text-base leading-8 text-slate-400 sm:text-lg">
					<p>
						I’m Abasiubong Esinwo, a frontend-focused developer building polished digital experiences that help brands and products stand out online.
					</p>
					<p>
						My work sits at the intersection of design, performance, and product thinking. I build responsive websites and modern web applications that are fast, accessible, and built to solve real user and business needs.
					</p>
					<p>
						I focus on clean frontend architecture, maintainable code, and thoughtful interfaces that make products feel premium without sacrificing usability.
					</p>
				</motion.div>
			</motion.div>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.25 }}
				className="mt-12 grid gap-4 md:grid-cols-3">
				{strengths.map(({ label, value }) => (
					<motion.div
						key={label}
						variants={item}
						className="rounded-2xl border border-slate-800 bg-white/[0.03] p-5"
					>
						<p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
						<p className="mt-3 text-base leading-7 text-slate-300">{value}</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
