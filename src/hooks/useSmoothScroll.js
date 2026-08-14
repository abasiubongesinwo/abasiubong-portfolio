export function useSmoothScroll() {
	function scrollToSection(target) {
		const element = document.querySelector(target);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}

	return { scrollToSection };
}
