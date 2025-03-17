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
  const isHomePage = document.body.classList.contains('home') ||
    window.location.pathname === '/' ||
    window.location.pathname === '/index.html' ||
    window.location.pathname === '/index.php';

  if (window.scrollY > 0) {
    nav.classList.add('bg-white', 'shadow-lg');
    nav.classList.remove('bg-transparent');

    if (window.innerWidth <= 767) { // Mobile breakpoint
      nav.classList.remove('fixed');
      nav.classList.add('sticky', 'top-0');
    } else {
      nav.classList.add('fixed');
      nav.classList.remove('sticky', 'top-0');
    }
  } else {
    if (!isHomePage) {
      nav.classList.add('shadow-lg');
    } else {
      nav.classList.remove('bg-white', 'shadow-lg');
      nav.classList.add('bg-transparent');
    }

    if (window.innerWidth <= 767) { // Mobile breakpoint
      nav.classList.add('fixed');
      nav.classList.remove('sticky', 'top-0');
    } else {
      nav.classList.remove('fixed');
      nav.classList.add('sticky', 'top-0');
    }
  }
});
