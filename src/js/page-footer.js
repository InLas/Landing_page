const footerNavLinks = document.querySelectorAll('.footer-nav__link');


if (footerNavLinks) {

  footerNavLinks.forEach(footerNavLink => {
    footerNavLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      const id = footerNavLink.getAttribute('href');
      footerNavLink.blur();

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}