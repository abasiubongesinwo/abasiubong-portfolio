import { useState } from "react";
import { Menu, X, Github, Mail } from "lucide-react";

const navItems = [
	{ label: "Home", id: "home" },
	{ label: "About", id: "about" },
	{ label: "Skills", id: "skills" },
	{ label: "Projects", id: "projects" },
	{ label: "Contact", id: "contact" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => {
		setIsOpen(false);
	};

	const scrollToSection = (id) => {
		const section = document.getElementById(id);

		if (section) {
			section.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}

		closeMenu();
	};

	return (
		<header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
			<nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 md:px-8">
				{/* Logo */}
				<button
					type="button"
					onClick={() => scrollToSection("home")}
					className="flex items-center"
					aria-label="Go to home">
					<img
						src="/ablogo.png"
						alt="AE Logo"
						className="h-10 w-10 object-contain"
					/>
				</button>

				{/* Desktop navigation */}
				<div className="hidden items-center gap-8 md:flex">
					{navItems.map((item) => (
						<button
							key={item.id}
							type="button"
							onClick={() => scrollToSection(item.id)}
							className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white">
							{item.label}
						</button>
					))}
				</div>

				{/* Desktop actions */}
				<div className="hidden items-center gap-3 md:flex">
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
				</div>

				{/* Mobile menu button */}
				<button
					type="button"
					onClick={() => setIsOpen((prev) => !prev)}
					aria-label={isOpen ? "Close menu" : "Open menu"}
					className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-sky-400/40 hover:text-sky-400 md:hidden">
					{isOpen ?
						<X size={20} />
					:	<Menu size={20} />}
				</button>
			</nav>

			{/* Mobile navigation */}
			{isOpen && (
				<div className="border-t border-white/10 bg-[#050505]/95 px-5 py-5 backdrop-blur-xl md:hidden">
					<div className="flex flex-col gap-2">
						{navItems.map((item) => (
							<button
								key={item.id}
								type="button"
								onClick={() => scrollToSection(item.id)}
								className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-400 transition-colors duration-300 hover:bg-white/[0.04] hover:text-white">
								{item.label}
							</button>
						))}
					</div>

					<div className="mt-4 flex gap-3 border-t border-white/10 pt-4">
						<a
							href="https://github.com/abasiubongesinwo"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400 hover:border-sky-400/40 hover:text-sky-400">
							<Github size={16} />
							GitHub
						</a>

						<a
							href="mailto:abasiubongesinwo@gmail.com"
							className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400 hover:border-sky-400/40 hover:text-sky-400">
							<Mail size={16} />
							Email
						</a>
					</div>
				</div>
			)}
		</header>
	);
}
