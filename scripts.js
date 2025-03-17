document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');

  const isHomePage = document.body.classList.contains('home') ||
    window.location.pathname === '/' ||
    window.location.pathname === '/index.html' ||
    window.location.pathname === '/index.php';

  if (!isHomePage) {
    nav.classList.add('shadow-lg');
  }
});


window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 0) {
    nav.classList.add('bg-white', 'shadow-lg');
    nav.classList.remove('bg-transparent');
  } else {
    nav.classList.remove('bg-white', 'shadow-lg');
    nav.classList.add('bg-transparent');
  }
});
