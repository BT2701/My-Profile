const menu=document.querySelector(".nav-links")
const menuButton=document.querySelector(".nav-icons")
const overlay=document.querySelector("#overlay")
const view_more=document.querySelector(".banner-btn")
const view_value=document.querySelector(".view-more")
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
view_more.addEventListener('click',(event)=>{
    view_value.classList.toggle("visible");
    event.preventDefault();
})