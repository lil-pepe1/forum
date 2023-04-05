const burgerMenu = document.querySelector(".header__burger-menu");
const openMenu = document.querySelector(".header__img-open");
const closeMenu = document.querySelector(".header__img-close");

openMenu.addEventListener("click", () => {
  const visibility = burgerMenu.getAttribute("data-visible");

  if (visibility === "false") {
    burgerMenu.setAttribute("data-visible", true);
    openMenu.style.display = "none";
  }
});

closeMenu.addEventListener("click", () => {
  const visibility = burgerMenu.getAttribute("data-visible");

  if (visibility === "true") {
    burgerMenu.setAttribute("data-visible", false);
    openMenu.style.display = "flex";
  }
});

const openSearch = document.getElementById("search");
const closeSearch = document.querySelector(".search-modal__btn");
const searchModalOverlay = document.querySelector(".search-modal-overlay");

openSearch.addEventListener("click", () => {
  searchModalOverlay.style.display = "flex";
});

closeSearch.addEventListener("click", () => {
  searchModalOverlay.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == searchModalOverlay) {
    searchModalOverlay.style.display = "none";
  }
});
