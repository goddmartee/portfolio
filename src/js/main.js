import "../scss/main.scss"
import "bootstrap/js/dist/button"
import "bootstrap/js/dist/collapse"
import "bootstrap/js/dist/dropdown"
import "bootstrap/js/dist/scrollspy"

const iconMenu = document.querySelector("#iconMenu")
const menu = document.querySelector("#menu")
const nav = document.querySelector("#nav")

menu.addEventListener("show.bs.collapse", e => {
	iconMenu.classList.replace("bi-list", "bi-x-lg")
	nav.classList.remove("menu")
})

menu.addEventListener("hide.bs.collapse", e => {
	iconMenu.classList.replace("bi-x-lg", "bi-list")
	nav.classList.add("menu")
})