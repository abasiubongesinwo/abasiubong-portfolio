import { motion } from "framer-motion";

const skillGroups = [
	{
		name: "Frontend engineering",
		items: ["React", "JavaScript", "TypeScript", "Responsive UI", "Component architecture"],
	},
	{
		name: "Product execution",
		items: ["Accessibility", "Performance optimization", "API integration", "UX thinking", "Clean, maintainable code"],
	},
	{
		name: "Interface system design",
		items: ["Tailwind CSS", "Design consistency", "Component systems", "Interactive UI", "Modern frontend patterns"],
	},
	{
		name: "Workflow & delivery",
		items: ["Git", "GitHub", "Vercel", "Figma-to-code workflow", "Collaboration"],
	},
];

export default function Skills() {
	return (
		<section id="skills" className="py-24">
			<div className="mb-10 max-w-3xl">
				<p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">Capabilities</p>
				<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
					What I bring to a product or team
				</h2>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				{skillGroups.map((group) => (
					<motion.div
						key={group.name}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
						className="rounded-3xl border border-slate-800 bg-white/[0.03] p-6">
						<h3 className="text-lg font-semibold text-white">{group.name}</h3>
						<ul className="mt-4 flex flex-wrap gap-x-4 gap-y-3 text-slate-400">
							{group.items.map((skill) => (
								<li key={skill} className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-sm">
									{skill}
								</li>
							))}
						</ul>
					</motion.div>
				))}
			</div>
		</section>
	);
}
