// Slider poster header
$(".silder-poster").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 500,
  fade: true,
  cssEase: "linear",
  arrows: true,
  prevArrow:
    '<span class="prev-arrow slider-poster-arr"><i class="ti-angle-left"></i></span>',
  nextArrow:
    '<span class="next-arrow slider-poster-arr"><i class="ti-angle-right"></i></span>',
});
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
const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");
const formUserFooter = document.querySelector(".form-item__footer");

userToggle.addEventListener("click", function (e) {
  userModal.classList.toggle("is-show");
});

window.addEventListener("click", function (e) {
  if (!userModalContent.contains(e.target) && e.target !== userToggle) {
    userModal.classList.remove("is-show");
  } else if (e.target.matches(".choose-login")) {
    e.target.classList.add("active");
    document.querySelector(".choose-register").classList.remove("active");
    formLogin.style.display = "block";
    formRegister.style.display = "none";
    formUserFooter.style.display = "flex";
  } else if (e.target.matches(".choose-register")) {
    e.target.classList.add("active");
    document.querySelector(".choose-login").classList.remove("active");
    formRegister.style.display = "block";
    formLogin.style.display = "none";
    formUserFooter.style.display = "none";
  }
});

// Selection travel
const selectDate = document.querySelector(".slider-search__date-select");
const selectTravelType = document.querySelector(
  ".slider-search__travel-type-select"
);
const listSelection = document.querySelector(".slider-search__option-list");
console.log(listSelection.dataset.travelselect);

selectDate.addEventListener("click", handleListSelection);
selectTravelType.addEventListener("click", handleListSelection);

function handleListSelection(e) {
  e.preventDefault();

  dataset.classList.toggle("is-show");
}
window.addEventListener("click", function (e) {
  if (
    !listSelection.contains(e.target) &&
    e.target !== selectDate &&
    e.target !== selectTravelType
  ) {
    listSelection.classList.remove("is-show");
  }
});
