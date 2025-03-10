import { scroll } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

document.addEventListener("DOMContentLoaded", () => {
	const container = document.querySelector(".container");
	const elements = document.querySelectorAll(".el");

	// Create scroll-linked animations for each element
	elements.forEach((el) => {
		const scale = parseFloat(el.dataset.scale);

		// Create a scroll-linked animation
		scroll(
			({ y }) => {
				const containerRect = container.getBoundingClientRect();
				const containerHeight = containerRect.height;
				const containerTop = containerRect.top;
				const windowHeight = window.innerHeight;

				// Calculate how far we've scrolled through the container
				const progress =
					Math.abs(containerTop) / (containerHeight - windowHeight);
				const clampedProgress = Math.max(0, Math.min(1, progress));

				// Apply the scale transform
				el.style.transform = `scale(${
					1 + (scale - 1) * clampedProgress
				})`;
			},
			{
				target: container,
				offset: ["start start", "end end"],
			}
		);
	});
});
