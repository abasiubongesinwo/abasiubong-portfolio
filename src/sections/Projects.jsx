import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
	{
		title: "UB Restaurant",
		description:
			"A responsive restaurant website built as a practical web development project. It includes a modern interface, responsive layouts, and interactive sections.",
		technologies: ["React", "JavaScript", "Tailwind CSS", "React Icons"],
		liveUrl: "https://ubrestaurant.vercel.app",
		githubUrl: "https://github.com/abasiubongesinwo",
		featured: true,
	},
	{
		title: "UB Todo List",
		description:
			"A responsive task management application built to organize daily tasks efficiently with a clean and modern user interface.",
		technologies: ["React", "JavaScript", "Tailwind CSS"],
		liveUrl: "https://abasiubong-todo-app.vercel.app/",
		githubUrl: "https://github.com/abasiubongesinwo/todo-list",
		featured: false,
	},
];

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
		},
	},
};

const item = {
	hidden: {
		opacity: 0,
		y: 30,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export default function Projects() {
	return (
		<section id="projects" className="py-24">
			<div className="mb-12">
				<p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
					Projects
				</p>

				<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
					Things I've built
				</h2>

				<p className="mt-4 max-w-2xl text-slate-400">
					A selection of projects I've built while learning and practicing web
					development.
				</p>
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.1 }}
				className="grid gap-6 lg:grid-cols-2">
				{projects.map((project, index) => (
					<motion.article
						key={project.title}
						variants={item}
						className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.05] ${
							project.featured ? "lg:col-span-2" : ""
						}`}>
						<div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl transition-all duration-500 group-hover:bg-sky-500/20" />

						<div className="relative z-10">
							<div className="flex items-start justify-between gap-5">
								<div>
									{project.featured && (
										<span className="mb-3 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-400">
											Featured Project
										</span>
									)}

									<h3 className="text-2xl font-bold text-white">
										{project.title}
									</h3>
								</div>

								<span className="text-sm text-slate-600">0{index + 1}</span>
							</div>

							<p className="mt-5 max-w-3xl leading-7 text-slate-400">
								{project.description}
							</p>

							<div className="mt-6 flex flex-wrap gap-2">
								{project.technologies.map((technology) => (
									<span
										key={technology}
										className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400">
										{technology}
									</span>
								))}
							</div>

							<div className="mt-8 flex flex-wrap gap-3">
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-sky-300">
										Live Demo
										<ExternalLink size={16} />
									</a>
								)}

								<a
									href={project.githubUrl}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-sky-400/40 hover:bg-white/[0.06]">
									GitHub
									<Github size={16} />
								</a>
							</div>
						</div>
					</motion.article>
				))}
			</motion.div>
		</section>
	);
}
