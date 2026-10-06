import { motion } from "framer-motion";
import {
	Mail,
	MapPin,
	Github,
	Linkedin,
	MessageCircle,
	Instagram,
	ArrowUpRight,
	CheckCircle2,
} from "lucide-react";

function XIcon({ size = 18 }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true">
			<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
		</svg>
	);
}

const contactLinks = [
	{
		label: "Email",
		value: "abasiubongesinwo@gmail.com",
		href: "mailto:abasiubongesinwo@gmail.com",
		icon: Mail,
		external: false,
	},
	{
		label: "WhatsApp",
		value: "07045559667",
		href: "https://wa.me/2347045559667",
		icon: MessageCircle,
		external: true,
	},
	{
		label: "GitHub",
		value: "github.com/abasiubongesinwo",
		href: "https://github.com/abasiubongesinwo",
		icon: Github,
		external: true,
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/abasiubongesinwo/",
		href: "https://www.linkedin.com/in/abasiubongesinwo/",
		icon: Linkedin,
		external: true,
	},
	{
		label: "Instagram",
		value: "@abasiubongesinwo",
		href: "https://www.instagram.com/abasiubongesinwo/",
		icon: Instagram,
		external: true,
	},
	{
		label: "X",
		value: "@abasiubongesi",
		href: "https://x.com/abasiubongesi",
		icon: XIcon,
		external: true,
	},
];

const opportunities = [
	"Fullstack web applications",
	"Business websites",
	"Landing pages",
	"API integrations",
	"Database-backed features",
	"Website redesigns",
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
		y: 35,
		filter: "blur(8px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.7,
			ease: [0.16, 1, 0.3, 1],
		},
	},
};

export default function Contact() {
	return (
		<section id="contact" className="relative overflow-hidden py-28 sm:py-36">
			{/* Ambient background */}
			<div className="pointer-events-none absolute inset-0 -z-20">
				<div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/[0.08] blur-[150px]" />

				<motion.div
					animate={{
						x: [0, 40, -20, 0],
						y: [0, -30, 20, 0],
					}}
					transition={{
						duration: 12,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute left-[10%] top-[20%] h-48 w-48 rounded-full bg-cyan-400/[0.04] blur-3xl"
				/>

				<motion.div
					animate={{
						x: [0, -30, 25, 0],
						y: [0, 25, -20, 0],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute bottom-[5%] right-[8%] h-64 w-64 rounded-full bg-blue-500/[0.05] blur-3xl"
				/>
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.12 }}
				className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] shadow-[0_50px_140px_rgba(0,0,0,0.35)] backdrop-blur-xl">
				{/* Top shine */}
				<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />

				<div className="grid lg:grid-cols-[1.15fr_0.85fr]">
					{/* LEFT */}
					<motion.div variants={item} className="relative p-8 sm:p-12 lg:p-16">
						{/* Eyebrow */}
						<div className="flex items-center gap-3">
							<span className="relative flex h-2.5 w-2.5">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
								<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
							</span>

							<p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">
								Let&apos;s work together
							</p>
						</div>

						{/* Heading */}
						<h2 className="mt-6 max-w-3xl text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
							Have an idea?
							<span className="block bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
								Let&apos;s build it.
							</span>
						</h2>

						{/* Main text */}
						<p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
							Whether you have a business that needs a better website, a startup
							that needs a digital product, or an idea that needs to become a
							real web experience, I&apos;d love to hear about it.
						</p>

						<p className="mt-5 max-w-2xl text-base leading-8 text-slate-500">
							I build responsive interfaces and connect them to APIs and backend
							services, working from an existing design, improving an existing
							website, or shaping a product idea into a usable web experience.
						</p>

						{/* What I can help with */}
						<div className="mt-9">
							<p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
								What I can help you build
							</p>

							<div className="mt-4 grid gap-3 sm:grid-cols-2">
								{opportunities.map((opportunity) => (
									<div
										key={opportunity}
										className="flex items-center gap-2.5 text-sm text-slate-400">
										<CheckCircle2 size={15} className="shrink-0 text-sky-400" />
										<span>{opportunity}</span>
									</div>
								))}
							</div>
						</div>

						{/* CTA */}
						<div className="mt-10 flex flex-wrap gap-3">
							<a
								href="mailto:abasiubongesinwo@gmail.com"
								className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-sky-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-300 hover:shadow-[0_15px_45px_rgba(56,189,248,0.25)]">
								<span className="relative z-10">Start a conversation</span>

								<ArrowUpRight
									size={17}
									className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
								/>

								<div className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
							</a>

							<button
								type="button"
								onClick={() =>
									document
										.getElementById("projects")
										?.scrollIntoView({ behavior: "smooth", block: "start" })
								}
								className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.06]">
								See what I&apos;ve built
								<ArrowUpRight size={16} />
							</button>
						</div>
					</motion.div>

					{/* RIGHT */}
					<motion.div
						variants={item}
						className="border-t border-white/[0.08] bg-black/20 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-12">
						{/* Availability */}
						<div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-5">
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">
									<span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
								</div>

								<div>
									<p className="text-sm font-semibold text-white">
										Currently available
									</p>

									<p className="mt-1 text-xs text-slate-500">
										Open to new opportunities and projects
									</p>
								</div>
							</div>
						</div>

						{/* Contact */}
						<div className="mt-8">
							<p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
								Connect with me
							</p>

							<p className="mt-2 text-sm leading-6 text-slate-500">
								Choose whichever channel works best for you. I&apos;m available
								for professional conversations, project inquiries, and
								opportunities.
							</p>
						</div>

						<div className="mt-6 space-y-3">
							{contactLinks.map((link) => {
								const Icon = link.icon;

								return (
									<motion.a
										key={link.label}
										href={link.href}
										target={link.external ? "_blank" : undefined}
										rel={link.external ? "noopener noreferrer" : undefined}
										whileHover={{ x: 5 }}
										transition={{
											type: "spring",
											stiffness: 400,
											damping: 25,
										}}
										className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-300 hover:border-sky-400/25 hover:bg-sky-400/[0.04]">
										<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-slate-900/80 text-slate-400 transition-all duration-300 group-hover:border-sky-400/20 group-hover:text-sky-400">
											<Icon size={18} />
										</div>

										<div className="min-w-0 flex-1">
											<p className="text-xs text-slate-600">{link.label}</p>

											<p className="mt-1 truncate text-sm text-slate-300 transition-colors group-hover:text-white">
												{link.value}
											</p>
										</div>

										<ArrowUpRight
											size={15}
											className="text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-400"
										/>
									</motion.a>
								);
							})}
						</div>

						{/* Opportunities */}
						<div className="mt-8 border-t border-white/[0.07] pt-7">
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
								Open to
							</p>

							<div className="mt-4 flex flex-wrap gap-2">
								{[
									"Freelance",
									"Internships",
									"Full-time roles",
									"Client projects",
									"Collaborations",
								].map((opportunity) => (
									<span
										key={opportunity}
										className="rounded-full border border-white/[0.07] bg-slate-900/60 px-3.5 py-2 text-xs text-slate-400 transition-colors duration-300 hover:border-sky-400/20 hover:text-sky-300">
										{opportunity}
									</span>
								))}
							</div>
						</div>

						{/* Location */}
						<div className="mt-8 flex items-start gap-3 border-t border-white/[0.07] pt-7">
							<MapPin size={17} className="mt-0.5 shrink-0 text-sky-400" />

							<div>
								<p className="text-xs uppercase tracking-[0.15em] text-slate-600">
									Based in
								</p>

								<p className="mt-1 text-sm text-slate-300">
									Lagos, Nigeria · Available for remote work
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
