import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
	{
		label: "Email",
		value: "abasiubongesinwo@gmail.com",
		href: "mailto:abasiubongesinwo@gmail.com",
		icon: Mail,
	},
	{
		label: "GitHub",
		value: "github.com/abasiubongesinwo",
		href: "https://github.com/abasiubongesinwo",
		icon: Github,
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/abasiubongesinwo/",
		href: "https://www.linkedin.com/in/abasiubongesinwo/",
		icon: Linkedin,
	},
	{
		label: "Location",
		value: "Lagos, Nigeria",
		href: "#",
		icon: MapPin,
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

export default function Contact() {
	return (
		<section id="contact" className="relative py-24">
			<div className="absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 bg-sky-500/[0.03] blur-3xl" />

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
				<div className="grid lg:grid-cols-[1.1fr_0.9fr]">
					{/* Main content */}
					<motion.div variants={item} className="p-8 sm:p-12 lg:p-16">
						<p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
							Contact
						</p>

						<h2 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
							Let's build something
							<span className="block text-slate-400">and learn together.</span>
						</h2>

						<p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
							I'm currently looking for frontend internships, junior
							opportunities, and chances to collaborate with other developers.
							If you have an opportunity or simply want to connect, feel free to
							reach out.
						</p>

						<a
							href="mailto:abasiubongesinwo@gmail.com"
							className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-sky-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]">
							Send me an email
							<ArrowUpRight size={17} />
						</a>
					</motion.div>

					{/* Contact details */}
					<motion.div
						variants={item}
						className="border-t border-white/10 bg-black/20 p-8 sm:p-12 lg:border-l lg:border-t-0">
						<p className="text-sm font-medium text-white">Get in touch</p>

						<div className="mt-6 space-y-3">
							{contactLinks.map((link) => {
								const Icon = link.icon;

								return (
									<a
										key={link.label}
										href={link.href}
										className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-sky-400/30 hover:bg-white/[0.04]">
										<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-colors duration-300 group-hover:text-sky-400">
											<Icon size={19} />
										</div>

										<div className="min-w-0">
											<p className="text-xs text-slate-500">{link.label}</p>

											<p className="mt-1 truncate text-sm text-slate-300">
												{link.value}
											</p>
										</div>
									</a>
								);
							})}
						</div>

						<div className="mt-8 border-t border-white/10 pt-6">
							<p className="text-xs uppercase tracking-[0.2em] text-slate-600">
								Currently open to
							</p>

							<div className="mt-4 flex flex-wrap gap-2">
								{[
									"Frontend Internships",
									"Junior Roles",
									"Developer Collaboration",
								].map((item) => (
									<span
										key={item}
										className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400">
										{item}
									</span>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
