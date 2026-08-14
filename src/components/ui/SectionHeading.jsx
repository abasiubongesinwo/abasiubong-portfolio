export default function SectionHeading({ title, subtitle }) {
	return (
		<div className="space-y-3">
			<p className="text-sm uppercase tracking-[0.30em] text-sky-400/90">
				{subtitle}
			</p>
			<h2 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
				{title}
			</h2>
		</div>
	);
}
