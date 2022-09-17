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
  }
});

// Modal Search
const toggleSearch = document.querySelector(".navbar__option-search");
const modalSearch = document.querySelector(".navbar__search-modal");
const contentSearch = modalSearch.querySelector(".search-modal__content");

toggleSearch.addEventListener("click", function (e) {
  modalSearch.classList.toggle("is-show");
});

window.addEventListener("click", function (e) {
  if (e.target.matches(".search-modal__close")) {
    modalSearch.classList.remove("is-show");
  } else if (!contentSearch.contains(e.target) && e.target !== toggleSearch) {
    modalSearch.classList.remove("is-show");
  }
});

// Modal User
const userToggle = document.querySelector(".user__custom");
const userModal = document.querySelector(".user-modal");
const userModalContent = userModal.querySelector(".user-modal__content");

userToggle.addEventListener("click", function (e) {
  userModal.classList.toggle("is-show");
});

window.addEventListener("click", function (e) {
  if (!userModalContent.contains(e.target) && e.target !== userToggle) {
    userModal.classList.toggle("is-show");
  } else if (e.target.matches(".choose-login")) {
    e.target.classList.add("active");
  }
});
