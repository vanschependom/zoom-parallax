const images = document.querySelectorAll(".image-wrapper img");

images.forEach((img) => {
	scroll(
		({ y }) => {
			const rect = img.parentElement.getBoundingClientRect();
			const elementTop = rect.top + window.scrollY;

			// Calculate scroll progress
			const scale = transform.interpolate(
				[elementTop - window.innerHeight, elementTop + rect.height],
				[1.25, 1]
			)(y.get());

			// Apply transform
			img.style.transform = `scale(${scale})`;
		},
		{
			target: document.documentElement,
		}
	);
});
