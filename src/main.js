const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener('click', (e) => {
    menu.classList.toggle("active")
})