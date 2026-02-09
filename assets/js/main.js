// Entry JavaScript for the project
console.log('assets/js/main.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.querySelector('h1');
  if (h1) h1.textContent = h1.textContent.trim();
});
