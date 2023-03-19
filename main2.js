const overlay = document.querySelector(".overlay");
const menu_btn = document.getElementById("menu-btn");
const close_btn = document.getElementById("close-btn");
console.log(overlay);

window.addEventListener("DOMContentLoaded",()=>{
    
    menu_btn.addEventListener('click',()=>{
        overlay.classList.add("show-nav");
    })
    close_btn.addEventListener('click',()=>{
        overlay.classList.remove("show-nav")
    })
})
