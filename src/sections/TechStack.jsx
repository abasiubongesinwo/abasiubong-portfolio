import { motion } from "framer-motion";
import {
	SiHtml5,
	SiJavascript,
	SiReact,
	SiTailwindcss,
	SiNodedotjs,
	SiGit,
	SiGithub,
} from "react-icons/si";

const technologies = [
	{
		name: "HTML5",
		icon: SiHtml5,
		description: "Building structured web pages",
	},
	{
		name: "CSS3",
		icon: null,
		description: "Styling and responsive layouts",
	},
	{
		name: "JavaScript",
		icon: SiJavascript,
		description: "Adding logic and interactivity",
	},
	{
		name: "React",
		icon: SiReact,
		description: "Building component-based interfaces",
	},
	{
		name: "Tailwind CSS",
		icon: SiTailwindcss,
		description: "Creating responsive UI efficiently",
	},
	{
		name: "Node.js",
		icon: SiNodedotjs,
		description: "Learning backend development",
	},
	{
		name: "Git",
		icon: SiGit,
		description: "Tracking and managing code",
	},
	{
		name: "GitHub",
		icon: SiGithub,
		description: "Hosting and managing code",
	},
];

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const card = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

export default function TechStack() {
	return (
		<section id="skills" className="py-24">
			<div className="mb-12">
				<p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
					Tech Stack
				</p>

				<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
					Technologies I'm learning
				</h2>

				<p className="mt-4 max-w-2xl text-slate-400">
					These are the technologies I currently use and practice while building
					personal projects and improving my web development skills.
				</p>
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.15 }}
				className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{technologies.map((tech) => {
					const Icon = tech.icon;

					return (
						<motion.div
							key={tech.name}
							variants={card}
							className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.05]">
							<div className="flex items-center justify-between">
								{Icon ?
									<Icon
										size={30}
										className="text-slate-300 transition-colors duration-300 group-hover:text-sky-400"
									/>
								:	<span className="text-lg font-bold text-slate-300 transition-colors duration-300 group-hover:text-sky-400">
										CSS
									</span>
								}

								<span className="text-xs text-slate-600">
									0{technologies.indexOf(tech) + 1}
								</span>
							</div>

							<h3 className="mt-6 font-semibold text-white">{tech.name}</h3>

							<p className="mt-2 text-sm leading-6 text-slate-500">
								{tech.description}
							</p>
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
}
