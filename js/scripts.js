// *Mobile navbar handlers
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('#navbarNav');
const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)');
const logo = document.querySelector('.navbar-brand');
const body = document.body;

navbarToggler.addEventListener('click', () => {
  body.classList.toggle('disable-scroll');
})

if (window.matchMedia("(max-width: 768px)").matches) {
  
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // Close navbar on link click
      navbarNav.classList.remove('show');
      // Change toggler icon
      navbarToggler.ariaExpanded = 'false';
      // Enable body scroll
      body.classList.remove('disable-scroll')
    })
  });
  // Close navbar on logo click
  logo.addEventListener('click', () => {
    navbarNav.classList.remove('show');
    // Change toggler icon
    navbarToggler.ariaExpanded = 'false';
     // Enable body scroll
     body.classList.remove('disable-scroll')
  })
} 

window.addEventListener('resize', () =>{
  if(window.innerWidth > 768) {
    navbarNav.classList.remove('show');
    navbarToggler.ariaExpanded = 'false';
  }
});

// *Scroll to top button
// const scrollTop = document.querySelector('.scroll-top');

// scrollTop.addEventListener('click', () => {
//   window.scroll({ top: 0, left: 0, behavior: 'smooth' });
// });

