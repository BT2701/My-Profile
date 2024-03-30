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

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollTopButton = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
