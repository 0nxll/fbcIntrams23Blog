const lining = document.querySelector('.lining');
const navLink = document.querySelector('.nav__link');

lining.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
