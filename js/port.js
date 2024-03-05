const menu=document.querySelector(".nav-links")
const menuButton=document.querySelector(".nav-icons")
const overlay=document.querySelector("#overlay")
menuButton.addEventListener('click', ()=>{
    menu.classList.toggle("nav-open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
})
overlay.addEventListener('click',()=>{
    menu.classList.toggle("nav-open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
})