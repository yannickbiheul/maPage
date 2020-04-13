/* MENU DE NAVIGATION */
let bouton = document.querySelector(".nav-button");
let menu = document.querySelector(".menu");

bouton.addEventListener("click", function() {
    menu.classList.toggle("menu-open");
})