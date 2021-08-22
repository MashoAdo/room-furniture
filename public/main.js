// import Data
const data = [
{imageURL : `./images/desktop-image-hero-1.jpg`,
         title :"Discover innovative ways to decorate ",
     content:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
     },
     
    {imageURL : `./images/desktop-image-hero-2.jpg`,
         title :"We are available all across the globe With stores all over the world",
      content:"it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today. "
      },
     
     
    {imageURL : `./images/desktop-image-hero-3.jpg`,
         title :"Manufactured with the best materials",
      content:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
 }]
 
 


const menuBtn = document.getElementById("menu-btn")
const menu = document.getElementById("menu")
const closeMenu =document.getElementById("close-menu")

const fowardBtn = document.getElementById("arrowFoward")
const backwardBtn = document.getElementById("arrowBackward")

const navSection = document.getElementById("nav-section")
const title = document.getElementById("title")
const content = document.getElementById("content")

const body = document.getElementById("nav-section")
console.log(body)

// Add and Remove Menu on Click.
menuBtn.addEventListener("click",(e) =>{
    menu.style.top= "0"
    
})
closeMenu.addEventListener("click",() =>{
    menu.style.top= "-100%"
   

})



// when foward and backward arrows are clicked change the background image of nav section and information contained in the article inforamtion
var index = 0

// foward
fowardBtn.addEventListener("click", foward)

function foward(){
    
    ++index

if (index < 3){
    navSection.setAttribute("style", "background-image: url(" + data[index].imageURL + ")")
    title.innerText = data[index].title
    content.innerText = data[index].content
}else{
    navSection.setAttribute("style", "background-image: url(" + data[0].imageURL + ")")
    title.innerText = data[0].title
    content.innerText = data[0].content
    index = 0
}

}


// backward
backwardBtn.addEventListener("click", backward)

function backward(){
        --index;
    const newIndex = data.length + index
    
if (index >= 0){
    navSection.setAttribute("style", "background-image: url(" + data[index].imageURL + ")")
    title.innerText = data[index].title
    content.innerText = data[index].content
}else{
    if (newIndex > 0){
        navSection.setAttribute("style", "background-image: url(" + data[newIndex].imageURL + ")")
    title.innerText = data[newIndex].title
    content.innerText = data[newIndex].content
    }else{
        navSection.setAttribute("style", "background-image: url(" + data[0].imageURL + ")")
        title.innerText = data[0].title
        content.innerText = data[0].content
        index = 0
        }
}
}


// Change the images depending on the screen size



