export default function Button({
	children,
	href,
	variant = "primary",
	className = "",
	...props
}) {
	const baseStyles =
		"inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400";

	const variants = {
		primary: "bg-sky-500 text-slate-950 shadow-glow hover:bg-sky-400",
		secondary:
			"border border-slate-700 bg-slate-900 text-slate-100 hover:border-sky-500 hover:text-white",
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
