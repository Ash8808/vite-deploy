// Entry JavaScript for the project
console.log('assets/js/main.js loaded');

// Build a 10x10 grid of clickable squares that toggle black/white
(function createGrid(){
	const grid = document.getElementById('grid');
	if (!grid) return;

	for (let i = 0; i < 100; i++) {
		const cell = document.createElement('div');
		cell.className = 'cell';
		cell.setAttribute('role', 'button');
		cell.setAttribute('tabindex', '0');
		// Toggle on click
		cell.addEventListener('click', () => cell.classList.toggle('black'));


		grid.appendChild(cell);
	}
})();


