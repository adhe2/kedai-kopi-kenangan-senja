// Toggle class active hamburger menu

const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class search active
const searchActive = document.querySelector(".search-form");
const searchIcon = document.querySelector("#search-button");
const searchBox = document.querySelector("#search-box");

searchIcon.addEventListener("click", (e) => {
  searchActive.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
});

// Toggle class shopping cart active
const tombolShop = document.querySelector("#shopping-cart");
const cartShop = document.querySelector(".shopping-cart");

tombolShop.addEventListener("click", (e) => {
  cartShop.classList.toggle("active");
  e.preventDefault();
});

// Klik diluar sidebar untuk menghilangkan navnya

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// klik diluar searchbar untuk menghilangkan searchnya
document.addEventListener("click", function (s) {
  if (!searchActive.contains(s.target) && !searchIcon.contains(s.target)) {
    searchActive.classList.remove("active");
  }
});

// klik diluar shopbar untuk menghilangkan barshopnya
document.addEventListener("click", function (s) {
  if (!tombolShop.contains(s.target) && !cartShop.contains(s.target)) {
    cartShop.classList.remove("active");
  }
});

// Modal Box

const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");
const closeIcon = document.querySelector(".close-icon");

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

closeIcon.addEventListener("click", (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
});

// Klik diluar modal

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
