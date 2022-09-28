const menuBars = document.querySelector("#menu");
const menuBarsDesplegado = document.querySelector(".mobile-menu");

menuBars.addEventListener("click", toggleMenuBars);

function toggleMenuBars(){
    menuBarsDesplegado.classList.toggle("inactive")
}