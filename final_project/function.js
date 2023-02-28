/*const menuToggle = document.querySelector('#menu_toggle');
console.log(menuToggle);
const menuContainer = document.querySelector('#menu_container');

menuToggle.addEventListener('click', () => {
    console.log('Toggle button clicked!');
  menuContainer.classList.toggle('show_menu');
  console.log(menuContainer.classList.contains('show_menu'));
});*/

const menuToggle = document.querySelector('#menu_toggle');
const navbar = document.querySelector('#navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('show_menu');
});
