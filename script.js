let bouton = document.querySelector(".bouton");
let menu = document.querySelector(".menu");

let png = document.querySelector("#png");

bouton.addEventListener("click", function() {
    menu.classList.toggle("menu-open");
});