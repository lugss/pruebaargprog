const menuToggle = document.querySelector('#menu_toggle');
const navbar = document.querySelector('#navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('show_menu');
});
