const burger = document.querySelector('.header__burger');
const close = document.querySelector('.header__nav-close');
const nav = document.querySelector('.header__nav');
const headerUl = document.querySelector('.header__ul');

burger.onclick = () => {
  nav.classList.add('header__nav_active');
}

close.onclick = () => {
  nav.classList.remove('header__nav_active');
}

headerUl.childNodes.forEach((item) => {
  item.onclick = () => {
    nav.classList.remove('header__nav_active');
  }
});
