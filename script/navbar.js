//catching the hamburger button
const navButton= document.querySelector(".ham-button");

//catching the icon div
const iconDiv= document.querySelector(".icon-div");

//catching the nav bar
const navBar= document.querySelector(".nav-bar");

//catching icons
const iconAnchor= document.querySelectorAll(".icon-anchor")

//catching the 3 icon lines
const line1= document.querySelector(".ham-line-one");
const line2= document.querySelector(".ham-line-two");
const line3= document.querySelector(".ham-line-three");


//flag for the open and close anim
let animeFlag= false;

//adding the click function
navButton.addEventListener("click", () =>{
    if(animeFlag === true){
        iconDiv.classList.remove("close-anim");
        iconDiv.classList.add("open-anim");

        navBar.classList.remove("close-anim");
        navBar.classList.add("open-anim");
        navBar.style.display="flex";

        line1.classList.remove("x-top");
        line2.classList.remove("dissapear");
        line3.classList.remove("x-bottom");
        
        animeFlag= false;
    } else {
        iconDiv.classList.remove("open-anim");
        iconDiv.classList.add("close-anim");
        
        navBar.classList.remove("open-anim");
        navBar.classList.add("close-anim");
        navBar.style.display="none";

        line1.classList.add("x-top");
        line2.classList.add("dissapear");
        line3.classList.add("x-bottom");

        animeFlag= true;
    }
});

//closing navbar when clicked on icon
for(let i = 0; i < iconAnchor.length; i++){
    iconAnchor[i].addEventListener("click", () => {
        redLine.classList.remove("open-anim");
        redLine.classList.add("close-anim");
    
        iconDiv.classList.remove("open-anim");
        iconDiv.classList.add("close-anim");
    
        navBar.classList.remove("open-anim");
        navBar.classList.add("close-anim");
        animeFlag= true;
    });
}