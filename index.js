// document.getElementById("myFotos").addEventListener("scroll", myFunction);
let scrollElement= document.querySelector(".right-img");
let divTop=document.querySelector(".float-container");
window.addEventListener("scroll", myFunction);
function myFunction() {
    elementTop=divTop.getBoundingClientRect().top;
    console.log(elementTop);
    console.log(window.innerHeight);
    if(elementTop <= window.innerHeight) {
        scrollElement.classList.add("scrolled");
    }else{
        scrollElement.classList.remove("scrolled");
    }
}