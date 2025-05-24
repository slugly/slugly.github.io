const numStars = 300;
const currentYear = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
	createStars();
	document.querySelector('.copyright').textContent = `© ${currentYear} Slugly. All rights reserved.`;
});

function createStars() {
	const starsContainer = document.getElementById('stars');

	for (let i = 0; i < numStars; i++) {
		const star = document.createElement('div');
		star.classList.add('star');
		star.style.top = `${Math.random() * 150}%`;
		star.style.left = `${Math.random() * 100}%`;

		const size = Math.random() * 2 + 0.5;
		star.style.width = `${size}px`;
		star.style.height = `${size}px`;
		star.style.background = '#ffffff';
		star.style.borderRadius = '50%';

		// Different animation speeds and effects
		const animationType = Math.random();
		if (animationType > 0.7) {
			// Twinkling stars (stationary)
			star.style.animation = `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
		} else {
			// Moving stars
			star.style.animation = `moveUp ${Math.random() * 25 + 15}s linear infinite`;
			star.style.animationDelay = `${Math.random() * 10}s`;
		}

		starsContainer.appendChild(star);

		// Reset the position of moving stars when they reach the top
		if (animationType <= 0.7) {
			star.addEventListener('animationiteration', () => {
				star.style.top = '100%';
				star.style.left = `${Math.random() * 100}%`;
			});
		}
	}
}