// importeer motion
import { scroll } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

// add event listener to the document load
document.addEventListener("DOMContentLoaded", () => {
	// select the container and the elements
	const container = document.querySelector(".container");
	const elements = container.querySelectorAll(".el");

	// Create scroll-linked animations for each element
	elements.forEach((el) => {
		const scale = parseFloat(el.dataset.scale);

		// Create a scroll-linked animation
		scroll(
			() => {
				const containerRect = container.getBoundingClientRect();
				const containerHeight = containerRect.height;
				const containerTop = containerRect.top;
				const windowHeight = window.innerHeight;

				// Only start animation when container is in view
				if (containerTop <= 0) {
					// Calculate how far we've scrolled through the container
					const progress =
						Math.abs(containerTop) /
						(containerHeight - windowHeight);
					const clampedProgress = Math.max(0, Math.min(1, progress));

					// Apply the scale transform
					el.style.transform = `scale(${
						1 + (scale - 1) * clampedProgress
					})`;
				} else {
					// Reset scale when not in view
					el.style.transform = "scale(1)";
				}
			},
			{
				target: container,
				offset: ["start start", "end end"],
			}
		);
	});
});
