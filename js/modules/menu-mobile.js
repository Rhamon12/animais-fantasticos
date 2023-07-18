import outsideClick from './outside-click.js';

function openMenu() {
  const menuList = document.querySelector('[data-menu="list"]');
  menuList.classList.add('active');
  outsideClick(menuList, ['click', 'touchstart'], () => {
    menuList.classList.remove('active');
  });
}
export default function initMenuMobile() {
  const eventos = ['click', 'touchstart'];
  const menuButton = document.querySelector('[data-menu="button"]');
  menuButton.classList.add('active');
  if (menuButton) {
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
