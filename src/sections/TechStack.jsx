import { motion } from "framer-motion";
import {
	SiExpress,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiMongodb,
	SiNodedotjs,
	SiReact,
	SiTailwindcss,
} from "react-icons/si";

const technologyGroups = [
	{
		name: "Frontend",
		items: [
			{ name: "HTML5", icon: SiHtml5 },
			{ name: "CSS3" },
			{ name: "JavaScript", icon: SiJavascript },
			{ name: "React", icon: SiReact },
			{ name: "Tailwind CSS", icon: SiTailwindcss },
		],
	},
	{
		name: "Backend & data",
		items: [
			{ name: "Node.js", icon: SiNodedotjs },
			{ name: "Express", icon: SiExpress },
			{ name: "MongoDB", icon: SiMongodb },
		],
	},
	{
		name: "Tools & platforms",
		items: [
			{ name: "Git", icon: SiGit },
			{ name: "GitHub", icon: SiGithub },
			{ name: "Vercel" },
			{ name: "Vite" },
		],
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

export default function TechStack() {
	return (
		<section id="stack" className="py-24">
			<div className="mb-12">
				<p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
					Tech Stack
				</p>

				<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
					Tools behind the work
				</h2>

				<p className="mt-4 max-w-2xl text-slate-400">
					A practical stack for building responsive interfaces, API-backed
					applications, and deployable web experiences.
				</p>
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.15 }}
				className="grid gap-5 lg:grid-cols-3">
				{technologyGroups.map((group) => (
					<motion.article
						key={group.name}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
						className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
						<h3 className="text-lg font-semibold text-white">{group.name}</h3>
						<div className="mt-5 flex flex-wrap gap-2.5">
							{group.items.map(({ name, icon: Icon }) => (
								<span
									key={name}
									className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 text-sm text-slate-300 transition-colors hover:border-sky-400/30 hover:text-sky-200">
									{Icon && <Icon aria-hidden="true" size={15} />}
									{name}
								</span>
							))}
						</div>
					</motion.article>
				))}
			</motion.div>
		</section>
	);
}
