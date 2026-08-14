import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const links = [
	{
		href: "https://github.com/codewithesinwo",
		label: "GitHub",
		icon: FaGithub,
	},
	{
		href: "https://www.linkedin.com/in/abasiubongesinwo-6238312a6/",
		label: "LinkedIn",
		icon: FaLinkedin,
	},
	{ href: "https://wa.me/2347045559667", label: "WhatsApp", icon: FaWhatsapp },
];

export default function SocialLinks({ className = "" }) {
	return (
		<div className={`flex flex-wrap items-center gap-3 ${className}`.trim()}>
			{links.map((item) => {
				const Icon = item.icon;
				return (
					<a
						key={item.href}
						href={item.href}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-300 transition hover:border-primary hover:text-white">
						<Icon className="h-4 w-4" />
						{item.label}
					</a>
				);
			})}
		</div>
	);
}
