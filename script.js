"use strict";
const logo = document.querySelector(".logo");
const homeMin = document.querySelector(".homeMin");
const slogan = document.querySelector(".home-slogan");
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const burgerIcon = burger.querySelector(".material-symbols-outlined");
const overlay = document.querySelector(".overlay");
const reveals = document.querySelectorAll(".reveal");

//HOMEPAGE
window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    // Aparece logo del navbar
    logo.classList.add("show");

    // Desaparece todo el título del homepage
    homeMin.classList.add("hide");

    // El slogan crece y ocupa el espacio del título
    slogan.classList.add("expand");
  } else {
    // Desaparece logo del navbar
    logo.classList.remove("show");

    // Aparece título del homepage
    homeMin.classList.remove("hide");

    // El slogan vuelve a su posición y tamaño original
    slogan.classList.remove("expand");
  }
});

// MENU DE BURGER, responsive
burger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    burgerIcon.textContent = "close";
    burger.setAttribute("aria-label", "Cerrar menú");
  } else {
    burgerIcon.textContent = "menu";
    burger.setAttribute("aria-label", "Abrir menú");
  }
});

// ANIMACION EN TODA LA PAGINA
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

reveals.forEach((element) => {
  observer.observe(element);
});
