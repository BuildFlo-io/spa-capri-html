window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 0) {
    nav.classList.add('bg-white', 'shadow-sm');
    nav.classList.remove('bg-transparent');
  } else {
    nav.classList.remove('bg-white', 'shadow-sm');
    nav.classList.add('bg-transparent');
  }
});