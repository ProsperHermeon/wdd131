// Footer Copyright Year and Last Modified Date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger Menu Toggle Functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle menu visibility
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking on a link (mobile view)
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Close menu when clicking outside (mobile view)
document.addEventListener('click', (e) => {
  const isClickInsideNav = navMenu.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);
  
  if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

