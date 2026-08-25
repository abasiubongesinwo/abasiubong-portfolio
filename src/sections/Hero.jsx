import { motion } from "framer-motion";
import Button from "../components/ui/Button";

const fadeUp = {
	hidden: {
		opacity: 0,
		y: 30,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: "easeOut",
		},
	},
};

const scrollToProjects = () => {
	document.getElementById("projects")?.scrollIntoView({
		behavior: "smooth",
	});
};

const scrollToContact = () => {
	document.getElementById("contact")?.scrollIntoView({
		behavior: "smooth",
	});
};

export default function Hero() {
	return (
		<section
			id="home"
			className="relative flex min-h-[90vh] items-center overflow-hidden py-20">
			{/* Background glow */}
			<div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

			<div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

			<div className="relative z-10 grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
				{/* Content */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {},
						visible: {
							transition: {
								staggerChildren: 0.15,
							},
						},
					}}>
					<motion.p
						variants={fadeUp}
						className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
						Aspiring Web Developer
					</motion.p>

					<motion.h1
						variants={fadeUp}
						className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
						Hi, I'm <span className="text-sky-400">Abasiubong Esinwo</span>
					</motion.h1>

					<motion.h2
						variants={fadeUp}
						className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
						I build and learn through real projects.
					</motion.h2>

					<motion.p
						variants={fadeUp}
						className="my-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
						I'm an aspiring web developer currently learning frontend and
						full-stack development. I enjoy building responsive websites and
						improving my skills through practical projects.
					</motion.p>

					<motion.div
						variants={fadeUp}
						className="mt-9 flex flex-col gap-4 sm:flex-row">
						<Button variant="primary" onClick={scrollToProjects}>
							View My Projects
						</Button>

						<Button variant="secondary" onClick={scrollToContact}>
							Contact Me
						</Button>
					</motion.div>
				</motion.div>

				{/* Visual */}
				<motion.div
					initial={{ opacity: 0, x: 40, scale: 0.9 }}
					animate={{ opacity: 1, x: 0, scale: 1 }}
					transition={{ duration: 0.9, delay: 0.25 }}
					className="hidden lg:flex items-center justify-center">
					<div className="relative flex h-[420px] w-[420px] items-center justify-center">
						{/* Soft background glow */}
						<div className="absolute h-72 w-72 rounded-full bg-sky-500/20 blur-[100px]" />

						{/* Outer decorative ring */}
						<motion.div
							animate={{ rotate: 360 }}
							transition={{
								duration: 25,
								repeat: Infinity,
								ease: "linear",
							}}
							className="absolute inset-4 rounded-full border border-sky-400/20"
						/>

						{/* Dashed orbit */}
						<motion.div
							animate={{ rotate: -360 }}
							transition={{
								duration: 18,
								repeat: Infinity,
								ease: "linear",
							}}
							className="absolute inset-12 rounded-full border border-dashed border-sky-400/20"
						/>

						{/* Main image container */}
						<div className="relative h-64 w-64">
							{/* Gradient border */}
							<div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-600 opacity-80 blur-[1px]" />

							{/* Image */}
							<div className="relative h-full w-full overflow-hidden rounded-full border-4 border-slate-950 bg-slate-900 shadow-[0_0_70px_rgba(14,165,233,0.25)]">
								<img
									src="/profile.png"
									alt="Abasiubong Esinwo"
									className="h-full w-full object-cover object-top grayscale-[15%] transition duration-700 hover:scale-105"
								/>

								{/* Image overlay */}
								<div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
							</div>

							{/* Status indicator */}
							<div className="absolute bottom-5 right-3 flex h-7 w-7 items-center justify-center rounded-full border-4 border-slate-950 bg-emerald-400">
								<div className="h-2 w-2 rounded-full bg-white" />
							</div>
						</div>

						{/* Floating top badge */}
						<motion.div
							animate={{ y: [0, -8, 0] }}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="absolute right-0 top-16 rounded-xl border border-sky-400/20 bg-slate-900/80 px-4 py-2 shadow-xl backdrop-blur-md">
							<p className="text-xs font-medium text-sky-400">
								Full-Stack Developer
							</p>
						</motion.div>

						{/* Floating bottom badge */}
						<motion.div
							animate={{ y: [0, 8, 0] }}
							transition={{
								duration: 4.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="absolute bottom-14 left-0 rounded-xl border border-slate-700/70 bg-slate-900/80 px-4 py-2 shadow-xl backdrop-blur-md">
							<p className="text-xs text-slate-400">
								<span className="mr-2 text-emerald-400">●</span>
								Available to learn & build
							</p>
						</motion.div>

						{/* Orbit dots */}
						<span className="absolute left-10 top-20 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.9)]" />

						<span className="absolute right-14 top-10 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />

						<span className="absolute bottom-20 right-7 h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.9)]" />
					</div>
				</motion.div>
			</div>
		</section>
	);
}
