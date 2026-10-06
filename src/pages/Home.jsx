import { MotionConfig, motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import TechStack from "../sections/TechStack";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function Home() {
	return (
		<MotionConfig reducedMotion="user">
			<div className="min-h-screen overflow-hidden bg-[#050816] text-slate-100">
				<div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.1),_transparent_24%)]" />
				<Navbar />

				<motion.main
					className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-6 md:px-8"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65, ease: "easeOut" }}>
					<Hero />
					<About />
					<Services />
					<TechStack />
					<Skills />
					<Projects />
					<Contact />
				</motion.main>

				<Footer />
			</div>
		</MotionConfig>
	);
}
