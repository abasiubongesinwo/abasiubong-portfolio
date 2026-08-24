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
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.25 }}
					className="hidden lg:flex justify-center">
					<div className="relative flex h-80 w-80 items-center justify-center">
						{/* Outer ring */}
						<div className="absolute inset-0 rounded-full border border-sky-400/20" />

						{/* Middle ring */}
						<div className="absolute inset-8 rounded-full border border-sky-400/10" />

						{/* Center */}
						<div className="flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border border-sky-400/20 bg-slate-900/80 shadow-[0_0_80px_rgba(14,165,233,0.15)] backdrop-blur-xl">
							<img
								src="/profile.png"
								alt="Abasiubong Esinwo"
								className="h-full w-full object-cover"
							/>
						</div>

						{/* Floating dots */}
						<span className="absolute left-8 top-20 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />

						<span className="absolute bottom-16 right-5 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.8)]" />

						<span className="absolute right-16 top-8 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.8)]" />
					</div>
				</motion.div>
			</div>
		</section>
	);
}
