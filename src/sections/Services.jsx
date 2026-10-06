import { motion } from "framer-motion";
import {
	BriefcaseBusiness,
	Globe,
	LayoutTemplate,
	MonitorSmartphone,
	Palette,
	Rocket,
} from "lucide-react";

const services = [
	{
		title: "Business Websites",
		description:
			"Modern, conversion-focused websites for startups, founders, agencies, and personal brands that need a professional online presence.",
		icon: Globe,
	},
	{
		title: "Landing Pages",
		description:
			"High-impact landing pages designed to communicate value clearly, improve UX, and guide visitors toward action.",
		icon: Rocket,
	},
	{
		title: "Fullstack Web Applications",
		description:
			"Interactive web applications that connect responsive React interfaces with Node.js, Express, APIs, and MongoDB-backed features.",
		icon: LayoutTemplate,
	},
	{
		title: "API & Backend Integration",
		description:
			"Connect web interfaces to backend services and data with clear API integration and maintainable application structure.",
		icon: BriefcaseBusiness,
	},
	{
		title: "Frontend Development",
		description:
			"Responsive, accessible, polished interfaces from design files, concepts, or product requirements.",
		icon: MonitorSmartphone,
	},
	{
		title: "Website Redesigns",
		description:
			"Modernizing outdated websites with stronger visual direction, better responsiveness, and better performance.",
		icon: Palette,
	},
	{
		title: "Custom Digital Products",
		description:
			"Custom web experiences built to solve real business problems and turn ideas into usable digital products.",
		icon: BriefcaseBusiness,
	},
];

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const card = {
	hidden: { opacity: 0, y: 26 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export default function Services() {
	return (
		<section id="services" className="relative py-24">
			<div className="mb-12 max-w-3xl">
				<p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
					Services
				</p>
				<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
					What I build for clients and teams
				</h2>
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.15 }}
				className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
				{services.map(({ title, description, icon: Icon }) => (
					<motion.article
						key={title}
						variants={card}
						whileHover={{ y: -6, scale: 1.01 }}
						className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-sky-400/30 hover:bg-white/[0.05]">
						<div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl transition-all duration-500 group-hover:bg-sky-400/15" />
						<div className="relative z-10">
							<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
								<Icon size={22} />
							</div>
							<h3 className="text-2xl font-semibold text-white">{title}</h3>
							<p className="mt-4 text-base leading-7 text-slate-400">
								{description}
							</p>
						</div>
					</motion.article>
				))}
			</motion.div>
		</section>
	);
}
