import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
	{ label: "Home", id: "home" },
	{ label: "About", id: "about" },
	{ label: "Services", id: "services" },
	{ label: "Projects", id: "projects" },
	{ label: "Stack", id: "stack" },
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
		<header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl">
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

				{/* Primary action */}
				<div className="hidden md:block">
					<button
						type="button"
						onClick={() => scrollToSection("contact")}
						className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-sky-300">
						Let's Work
						<ArrowUpRight size={16} />
					</button>
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
					<button
						type="button"
						onClick={() => scrollToSection("contact")}
						className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-400 px-4 py-3 text-sm font-semibold text-slate-950">
						Let's Work
						<ArrowUpRight size={16} />
					</button>
				</div>
			)}
		</header>
	);
}
