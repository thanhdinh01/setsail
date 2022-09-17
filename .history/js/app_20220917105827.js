// Scroll Navigation Header
const navbarHeader = document.querySelector(".navbar");
const contentSetsail = document.querySelector("#content");

window.addEventListener("scroll", function (e) {
  // console.log(window.scrollY);
  let scrollY = window.scrollY;
  const navbarHeight = navbarHeader.offsetHeight;
  // console.log(navbarHeight);
  if (scrollY >= 6 * navbarHeight) {
    navbarHeader.classList.add("is-fixed");
    contentSetsail.style.paddingTop = `${navbarHeight}px`;
  } else {
    navbarHeader.classList.remove("is-fixed");
    contentSetsail.style.paddingTop = `0px`;
  }
});

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
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
      },
    },
  ],
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

// Navbar Mobile
const toggleMobile = document.querySelector(".navbar__menu--mobile i");
const menuMobile = document.querySelector(".navbar__mobile-menu");
const toggleMenuItem = document.querySelectorAll(".navbar__mobile-item a");
toggleMobile.addEventListener("click", function (e) {
  menuMobile.classList.toggle("is-show");
});
toggleMenuItem.forEach((item) =>
  item.addEventListener("click", function (e) {
    console.log(e.target.nextElementSibling.nextElementSibling);
    e.target.nextElementSibling.classList.toggle("rotated");
    e.target.nextElementSibling.nextElementSibling.classList.toggle("is-show");
  })
);

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
// const selectDate = document.querySelector(".slider-search__date-select");
// const selectTravelType = document.querySelector(
//   ".slider-search__travel-type-select"
// );
const selectItem = document.querySelectorAll(".slider-search__item");
const selectName = document.querySelectorAll(".slider-search__item-name");
const listItemDate = document.querySelectorAll(".slider-search__option-date");
const listItemTravel = document.querySelectorAll(
  ".slider-search__option-travel"
);

selectName.forEach((item) =>
  item.addEventListener("click", function (e) {
    e.target.nextElementSibling.classList.toggle("is-show");
  })
);

window.addEventListener("click", function (e) {
  selectItem.forEach((item) => {
    if (!item.contains(e.target)) {
      item.lastElementChild.classList.remove("is-show");
    }
  });
});

listItemDate.forEach((item) =>
  item.addEventListener("click", function (e) {
    listItemDate.forEach((item) => (item.style.color = ""));
    item.style.color = "var(--primary-color)";
    const textList = item.textContent;
    item.parentNode.parentNode.previousElementSibling.textContent = textList;
    item.parentNode.parentNode.classList.remove("is-show");
  })
);

listItemTravel.forEach((item) =>
  item.addEventListener("click", function (e) {
    listItemTravel.forEach((item) => (item.style.color = ""));
    item.style.color = "var(--primary-color)";
    const textList = item.textContent;
    item.parentNode.parentNode.previousElementSibling.textContent = textList;
    item.parentNode.parentNode.classList.remove("is-show");
  })
);

// slider content
$(".section3__body-location-list").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  speed: 1500,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 8000,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

$(".section3__comment-list").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  prevArrow:
    '<span class="prev-arrow slider-comment-arr"><i class="ti-angle-left"></i></span>',
  nextArrow:
    '<span class="next-arrow slider-comment-arr"><i class="ti-angle-right"></i></span>',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        arrows: false,
      },
    },
  ],
});

$(".section5__comment-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        autoplay: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});

$(".section7__slider-list").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  prevArrow:
    '<span class="prev-arrow slider-thumbnail-arrow"><i class="ti-angle-left"></i></span>',
  nextArrow:
    '<span class="next-arrow slider-thumbnail-arrow"><i class="ti-angle-right"></i></span>',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
const section7Link = document.querySelectorAll(".section7__slider-item-link");
section7Link.forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
  })
);
