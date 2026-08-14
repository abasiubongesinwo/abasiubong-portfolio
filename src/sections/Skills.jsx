import { motion } from "framer-motion";

const skills = [
	{
		name: "HTML5",
		level: "Learning & Practicing",
		description:
			"Building structured and accessible web pages with semantic HTML.",
	},
	{
		name: "CSS3",
		level: "Learning & Practicing",
		description:
			"Creating responsive layouts, styling interfaces, and improving visual presentation.",
	},
	{
		name: "JavaScript",
		level: "Learning & Practicing",
		description:
			"Learning programming fundamentals, DOM manipulation, events, and application logic.",
	},
	{
		name: "React",
		level: "Learning & Practicing",
		description:
			"Building reusable components and interactive user interfaces.",
	},
	{
		name: "Tailwind CSS",
		level: "Learning & Practicing",
		description: "Creating responsive interfaces using utility-based styling.",
	},
	{
		name: "Node.js",
		level: "Learning",
		description:
			"Learning backend development and server-side functionality through projects.",
	},
	{
		name: "Git & GitHub",
		level: "Learning & Practicing",
		description:
			"Managing projects, tracking changes, and maintaining code repositories.",
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

const item = {
	hidden: {
		opacity: 0,
		y: 25,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.55,
			ease: "easeOut",
		},
	},
};

export default function Skills() {
	return (
		<section id="skills-details" className="py-24">
			<div className="mb-12">
				<p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
					Skills
				</p>

				<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
					What I'm working with
				</h2>

				<p className="mt-4 max-w-2xl text-slate-400">
					I'm continuously improving these skills through practical projects,
					coding practice, and hands-on learning.
				</p>
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.15 }}
				className="grid gap-5 md:grid-cols-2">
				{skills.map((skill) => (
					<motion.article
						key={skill.name}
						variants={item}
						className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.05]">
						<div className="flex items-start justify-between gap-4">
							<div>
								<h3 className="text-lg font-semibold text-white">
									{skill.name}
								</h3>

								<p className="mt-1 text-sm text-sky-400">{skill.level}</p>
							</div>

							<span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500">
								Learning
							</span>
						</div>

						<p className="mt-5 text-sm leading-7 text-slate-400">
							{skill.description}
						</p>

						<div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/5">
							<div className="h-full w-1/2 rounded-full bg-sky-400/70 transition-all duration-700 group-hover:w-3/5" />
						</div>
					</motion.article>
				))}
			</motion.div>
		</section>
	);
}
