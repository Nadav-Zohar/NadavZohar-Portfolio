//catching the body element
const bodyEl= document.querySelector("body");

//adding the span to the body and styling it
bodyEl.addEventListener("mousemove", (event)=>{
    //getting the position of the mouse
    const xPos= event.offsetX;
    const yPos= event.offsetY;

    //creating a random number
    const size= Math.random() * 80;

    //creating the span
    const spanEl= document.createElement("span");
    
    //styling the span to be where the mouse is
    spanEl.style.left= xPos + "px";
    spanEl.style.top= yPos + "px";
    
    //sizing the span to be at the same size as the random number
    spanEl.style.width= size + "px";
    spanEl.style.height= size + "px";
    
    //adding the span to the body
    bodyEl.appendChild(spanEl);
    
    //deleting the span after 4 sec
    setTimeout(()=>{
        spanEl.remove();
    }, 4000)
});