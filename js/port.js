const menu=document.querySelector(".nav-links")
const menuButton=document.querySelector(".nav-icons")
menuButton.addEventListener('click', ()=>{
    menu.classList.toggle("nav-open");
    menuButton.classList.toggle("open")
})