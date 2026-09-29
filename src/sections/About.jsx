import { motion } from "framer-motion";

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.15,
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
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export default function About() {
	return (
		<section id="about" className="relative py-24">
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				className="grid gap-12 lg:grid-cols-2 lg:items-center">
				{/* Left side */}
				<motion.div variants={item}>
					<p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
						About Me
					</p>

					<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
						Learning, building,
						<span className="block text-slate-400">and getting better.</span>
					</h2>
				</motion.div>

				{/* Right side */}
				<motion.div
					variants={item}
					className="space-y-5 text-base leading-8 text-slate-400 sm:text-lg text-justify">
					<p>
						I'm Abasiubong Esinwo, an aspiring web developer based in Lagos,
						Nigeria. I'm currently learning frontend and full-stack web
						development through coding classes, self-directed learning, and
						practical projects.
					</p>

					<p>
						I enjoy turning ideas into websites and experimenting with
						technologies such as JavaScript, React, Tailwind CSS, and Node.js.
						Building projects helps me understand what I'm learning and identify
						the areas where I need to improve.
					</p>

					<p>
						I'm currently looking for an internship or entry-level opportunity
						where I can learn from experienced developers, contribute to real
						projects, collaborate with a team, and continue growing as a
						developer.
					</p>
				</motion.div>
			</motion.div>

			{/* Quick facts */}
			<motion.div
				initial={{ opacity: 0, y: 25 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="mt-14 grid gap-4 sm:grid-cols-3">
				<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-sky-400/30 hover:bg-white/[0.05]">
					<p className="text-sm text-slate-500">Based in</p>

					<p className="mt-2 font-semibold text-white">Lagos, Nigeria</p>
				</div>

				<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-sky-400/30 hover:bg-white/[0.05]">
					<p className="text-sm text-slate-500">Focus</p>

					<p className="mt-2 font-semibold text-white">Web Development</p>
				</div>

				<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-sky-400/30 hover:bg-white/[0.05]">
					<p className="text-sm text-slate-500">Open to</p>

					<p className="mt-2 font-semibold text-white">
						Internship Opportunities
					</p>
				</div>
			</motion.div>
		</section>
	);
}
