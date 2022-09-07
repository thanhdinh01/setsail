// Sidebar menu toggle
const toggleSidebar = document.querySelector(".navbar__option-menu");
const menuSidebar = document.querySelector(".navbar__sidebar-wrap");

toggleSidebar.addEventListener("click", function (e) {
  console.log(e.target);
  menuSidebar.classList.toggle("is-show");
});
