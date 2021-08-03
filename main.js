const menuBtn = document.getElementById("menu-btn")
const menu = document.getElementById("menu")
const closeMenu =document.getElementById("close-menu")
console.log(
    closeMenu
);
menuBtn.addEventListener("click",() =>{
    menu.style.top= "0"
})
closeMenu.addEventListener("click",() =>{
    menu.style.top= "-100%"
})