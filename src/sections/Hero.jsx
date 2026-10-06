import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Button from "../components/ui/Button";

const fadeUp = {
	hidden: {
		opacity: 0,
		y: 35,
		filter: "blur(8px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.8,
			ease: [0.16, 1, 0.3, 1],
		},
	},
};

const scrollToSection = (id) => {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start",
	});
};

export default function Hero() {
	return (
		<section
			id="home"
			className="relative flex min-h-[90vh] items-center overflow-hidden py-24 sm:py-28 lg:min-h-screen">
			{/* Ambient background */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-sky-500/[0.10] blur-[120px]" />

				<div className="absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500/[0.08] blur-[140px]" />

				<div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]" />

				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.07),transparent_60%)]" />

				{/* Subtle grid */}
				<div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:80px_80px]" />
			</div>

			{/* Floating ambient particles */}
			<motion.div
				animate={{
					y: [0, -20, 0],
					opacity: [0.3, 0.7, 0.3],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="pointer-events-none absolute left-[12%] top-[25%] h-1.5 w-1.5 rounded-full bg-sky-400"
			/>

			<motion.div
				animate={{
					y: [0, 25, 0],
					opacity: [0.2, 0.6, 0.2],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1,
				}}
				className="pointer-events-none absolute right-[18%] top-[22%] h-1 w-1 rounded-full bg-cyan-300"
			/>

			<div className="relative z-10 grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
				{/* LEFT CONTENT */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {},
						visible: {
							transition: {
								staggerChildren: 0.12,
							},
						},
					}}
					className="max-w-4xl">
					{/* Label */}
					{/* <motion.p
						variants={fadeUp}
						className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
						Abasiubong Esinwo · Fullstack Engineer
					</motion.p> */}

					{/* Main heading */}
					<motion.h1
						variants={fadeUp}
						className="mt-5 max-w-4xl text-5xl font-bold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
						I build modern
						<span className="block bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
							web products end to end.
						</span>
					</motion.h1>

					{/* Description */}
					<motion.p
						variants={fadeUp}
						className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
						I build responsive web applications and digital experiences across
						the frontend and backend, from polished interfaces and APIs to
						data-backed features for businesses, startups, and product teams.
					</motion.p>

					{/* CTAs */}
					<motion.div
						variants={fadeUp}
						className="mt-9 flex flex-col gap-3 sm:flex-row">
						<Button
							variant="primary"
							onClick={() => scrollToSection("projects")}>
							View My Work
							<ArrowUpRight size={17} />
						</Button>

						<Button
							variant="secondary"
							onClick={() => scrollToSection("contact")}>
							Let&apos;s Work Together
						</Button>
					</motion.div>

					{/* Capability tags */}
					<motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
						{[
							"React",
							"Node.js · Express",
							"MongoDB",
							"Responsive Design",
							"API-driven Apps",
						].map((skill) => (
							<span
								key={skill}
								className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3.5 py-2 text-xs text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-sky-400/20 hover:bg-sky-400/[0.05] hover:text-sky-300">
								{skill}
							</span>
						))}
					</motion.div>
				</motion.div>

				{/* RIGHT VISUAL */}
				<motion.div
					initial={{
						opacity: 0,
						x: 60,
						scale: 0.9,
					}}
					animate={{
						opacity: 1,
						x: 0,
						scale: 1,
					}}
					transition={{
						duration: 1.1,
						delay: 0.25,
						ease: [0.16, 1, 0.3, 1],
					}}
					className="flex items-center justify-center lg:justify-end">
					<div className="relative flex h-[390px] w-[320px] items-center justify-center sm:h-[480px] sm:w-[390px]">
						{/* Outer orbit */}
						<motion.div
							animate={{ rotate: 360 }}
							transition={{
								duration: 30,
								repeat: Infinity,
								ease: "linear",
							}}
							className="absolute inset-0 rounded-full border border-sky-400/[0.12]">
							<div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />
						</motion.div>

						{/* Inner orbit */}
						<motion.div
							animate={{ rotate: -360 }}
							transition={{
								duration: 20,
								repeat: Infinity,
								ease: "linear",
							}}
							className="absolute inset-10 rounded-full border border-dashed border-cyan-400/[0.16]">
							<div className="absolute right-5 top-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.8)]" />
						</motion.div>

						{/* Glow */}
						<motion.div
							animate={{
								scale: [1, 1.08, 1],
								opacity: [0.4, 0.7, 0.4],
							}}
							transition={{
								duration: 5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="absolute inset-16 rounded-full bg-sky-500/20 blur-[70px]"
						/>

						{/* Main card */}
						<motion.div
							animate={{
								y: [0, -8, 0],
								rotateX: [0, 1.5, 0],
								rotateY: [0, -1.5, 0],
							}}
							transition={{
								duration: 7,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="relative h-[360px] w-[280px] overflow-hidden rounded-[2rem] border border-white/[0.1] bg-slate-900/80 p-2 shadow-[0_40px_120px_rgba(14,165,233,0.18)] backdrop-blur-xl sm:h-[430px] sm:w-[330px]">
							<div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-blue-500/10" />

							<img
								src="/ubphoto.png"
								alt="Abasiubong Esinwo"
								className="relative h-full w-full rounded-[1.6rem] object-cover object-top grayscale-[5%]"
							/>

							{/* Image gradient */}
							<div className="pointer-events-none absolute inset-x-2 bottom-2 h-40 rounded-b-[1.6rem] bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent" />

							{/* Name */}
							<div className="absolute bottom-7 left-7">
								<p className="text-[10px] font-medium uppercase tracking-[0.25em] text-sky-300">
									Fullstack Engineer
								</p>

								<p className="mt-1 text-lg font-semibold text-white">
									Abasiubong Esinwo
								</p>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>

			{/* Scroll indicator */}
			<motion.button
				onClick={() => scrollToSection("about")}
				animate={{ y: [0, 7, 0] }}
				transition={{
					duration: 2,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition-colors hover:text-sky-400 lg:flex"
				aria-label="Scroll to about section">
				<span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
				<ArrowDown size={15} />
			</motion.button>
		</section>
	);
}
