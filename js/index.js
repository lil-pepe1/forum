const burgerMenu = document.querySelector(".header__burger-menu");
const toggleMenu = document.querySelector(".header__img");

toggleMenu.addEventListener("click", () => {
  const visibility = burgerMenu.getAttribute("data-visible");

  if (visibility === "false") {
    burgerMenu.setAttribute("data-visible", true);
  } else if (visibility === "true") {
    burgerMenu.setAttribute("data-visible", false);
  }
});
