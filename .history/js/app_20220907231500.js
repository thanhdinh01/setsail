// Sidebar menu toggle
const toggleSidebar = document.querySelector(".navbar__option-menu");
const menuSidebar = document.querySelector(".navbar__sidebar-wrap");
const closeSidebar = document.querySelector(".navbar__sidebar--toggle");

toggleSidebar.addEventListener("click", function (e) {
  menuSidebar.classList.toggle("is-show");
});

closeSidebar.addEventListener("click", function (e) {
  menuSidebar.classList.toggle("is-show");
});

window.addEventListener("click", function (e) {
  if (!menuSidebar.contains(e.target) && e.target !== toggleSidebar) {
    menuSidebar.classList.remove("is-show");
    console.log("oke");
  }
});

// Modal Search
const toggleSearch = document.querySelector(".navbar__option-search");
const modalSearch = document.querySelector(".navbar__search-modal");

toggleSearch.addEventListener("click", function (e) {
  modalSearch.classList.toggle("is-show");
});

window.addEventListener("click", function(e){
    if(e.target.matches(".search-modal__close"){
        modalSearch.classList.remove("is-show")
    })
})
