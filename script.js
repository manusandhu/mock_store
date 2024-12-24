// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav');

mobileMenuButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
