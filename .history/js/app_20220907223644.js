// Sidebar menu toggle
const toggleSidebar = document.querySelector(".navbar__option-menu");
const menuSidebar = document.querySelector(".navbar__sidebar-wrap");
const closeSidebar = document.querySelector(".navbar__sidebar--toggle");

toggleSidebar.addEventListener("click", function (e) {
  console.log(e.target);
  menuSidebar.classList.toggle("is-show");
});

closeSidebar.addEventListener("click", function (e) {
  menuSidebar.classList.toggle("is-show");
});
