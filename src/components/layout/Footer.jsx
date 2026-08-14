import { Github, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
	const year = new Date().getFullYear();

	const scrollToHome = () => {
		document.getElementById("home")?.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<footer className="border-t border-white/10">
			<div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-10 md:px-8">
				<div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
					<div>
						<button
							type="button"
							onClick={scrollToHome}
							className="flex items-center"
							aria-label="Go to home">
							<img
								src="/ablogo.png"
								alt="AE Logo"
								className="h-10 w-10 object-contain"
							/>
						</button>

						<p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
							Aspiring web developer building, learning, and improving one
							project at a time.
						</p>
					</div>

					<div className="flex items-center gap-3">
						<a
							href="https://github.com/abasiubongesinwo"
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
							className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-sky-400/40 hover:text-sky-400">
							<Github size={18} />
						</a>

						<a
							href="mailto:abasiubongesinwo@gmail.com"
							aria-label="Email"
							className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-sky-400/40 hover:text-sky-400">
							<Mail size={18} />
						</a>

						<button
							type="button"
							onClick={scrollToHome}
							aria-label="Back to top"
							className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-sky-400/40 hover:text-sky-400">
							<ArrowUp size={18} />
						</button>
					</div>
				</div>

				<div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row">
					<p>© {year} Abasiubong Esinwo. All rights reserved.</p>

					<p>Built with React, Tailwind CSS & Framer Motion.</p>
				</div>
			</div>
		</footer>
	);
}
