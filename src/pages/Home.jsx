import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../sections/Hero";
import About from "../sections/About";
import TechStack from "../sections/TechStack";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function Home() {
	return (
		<div className="min-h-screen overflow-hidden bg-[#050505] text-white">
			<Navbar />

			<motion.main
				className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-6 md:px-8"
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.65, ease: "easeOut" }}>
				<Hero />
				<About />
				<TechStack />
				<Skills />
				<Projects />
				<Contact />
			</motion.main>

			<Footer />
		</div>
	);
}
