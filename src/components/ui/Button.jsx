export default function Button({
	children,
	href,
	variant = "primary",
	className = "",
	...props
}) {
	const baseStyles =
		"inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400";

	const variants = {
		primary:
			"bg-sky-400 text-slate-950 shadow-[0_20px_50px_rgba(56,189,248,0.28)] hover:-translate-y-0.5 hover:bg-sky-300",
		secondary:
			"border border-slate-700 bg-slate-900/80 text-slate-100 hover:-translate-y-0.5 hover:border-sky-400/50 hover:text-white",
		ghost: "text-slate-300 hover:text-white",
	};

	const styles = `${baseStyles} ${variants[variant]} ${className}`.trim();

	if (href) {
		return (
			<a
				href={href}
				className={styles}
				aria-label={typeof children === "string" ? children : undefined}
				{...props}>
				{children}
			</a>
		);
	}

	return (
		<button type="button" className={styles} {...props}>
			{children}
		</button>
	);
}
