console.log('jacs script inseter')
const nav_bar = document.getElementById("account--nav-bar");
const nav_item = nav_bar.querySelectorAll(".nav-item");
let active_item = nav_bar.querySelector('.active')
let active_page = document.querySelector('.show')
let page = document.querySelectorAll(".page");

const overlay = document.querySelector(".overlay");
const menu_btn = document.getElementById("menu-btn");
const close_btn = document.getElementById("close-btn");
console.log(overlay);
const card = document.getElementById('profile-update--card');

Array.from(nav_item).forEach((item,i)=>{
    item.addEventListener("click",()=>{
        active_item.classList.remove('active');
        item.classList.add('active');
        active_item = item

        if(page[i]){
            active_page.classList.remove("show");
            page[i].classList.add('show');
            active_page = page[i];
        }
        
    })
})

window.addEventListener("DOMContentLoaded",()=>{
    
     menu_btn.addEventListener('click',()=>{
         overlay.classList.add("show-nav");
     })
     close_btn.addEventListener('click',()=>{
         overlay.classList.remove("show-nav")
     })
})


// scripts for update picture card

let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let err_msg = document.getElementById("err-msg");

window.addEventListener("DOMContentLoaded", () => {
  uploadButton.addEventListener("change", uploadImg);
  function uploadImg() {
    let render = new FileReader();
    render.readAsDataURL(uploadButton.files[0]);
    
    var img_size = uploadButton.files[0].size;

    render.addEventListener("load", () => {
      
      if (img_size < 10 * 10000) {
        chosenImage.setAttribute("src", render.result);
      } else {
        err_msg.style.color = "red";
        err_msg.textContent = "Your File size is more than 10 mb";
      }
    });
    
  }
});

const update_card = document.getElementById("profile-update--card");
const closebtn = document.getElementById("close-card");
console.log(update_card)

closebtn.addEventListener("click",()=>{
    // update_card.style.display='none';
    card.classList.remove('show-card');
})






const update_img = document.querySelector(".profile-img-box");
console.log(update_img);
update_img.addEventListener('click',()=>{

  card.classList.add('show-card');
})


// fucntion to cover overlay for portfolio detail card

const a = document.querySelectorAll('.portfolio-detail-card');
const b = document.querySelectorAll('.portfolio-item');

Array.from(b).forEach((item,index)=>{
    item.addEventListener(('click'),()=>{
       
       a[index].classList.add("show-portfolio-detail-card");
       disableScroll()
    })
})

function disableScroll() {
 // Get the current page scroll position in the vertical direction
  scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
      
      
 // Get the current page scroll position in the horizontal direction 

 scrollLeft =
  window.pageXOffset || document.documentElement.scrollLeft;
 
 
 // if any scroll is attempted,
 // set this to the previous value
 window.onscroll = function() {
 window.scrollTo(scrollLeft, scrollTop);
 };
 }


const x = document.querySelectorAll('.svg_close');

Array.from(x).forEach((item,index)=>{
  item.addEventListener(('click'),()=>{
     
    a[index].classList.remove("show-portfolio-detail-card");
    enableScroll()
     
  })
})

function enableScroll() {
  window.onscroll = function() {};
}
