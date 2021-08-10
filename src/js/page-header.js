const mainNav = document.querySelector('.main-nav');
const navToogle = document.querySelector('.controls__toogle');
const mainNavLinks = document.querySelectorAll('.main-nav__link');


if (mainNav) {
  mainNav.classList.remove('main-nav--no-js');
  navToogle.classList.remove('controls__toogle--no-js');

  navToogle.addEventListener('click', () => {
    navToogle.classList.toggle('controls__toogle--open');
    mainNav.classList.toggle('main-nav--closed');
  });

  mainNavLinks.forEach(mainNavLink => {
    mainNavLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      const id = mainNavLink.getAttribute('href');
      mainNavLink.blur();

      navToogle.classList.remove('controls__toogle--open');
      mainNav.classList.add('main-nav--closed');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}