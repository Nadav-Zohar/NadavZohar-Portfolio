const contactSubmit= document.querySelector("#contact-submit");
contactSubmit.addEventListener("click", (ev) => {
    ev.preventDefault();
})

const preLoader= document.querySelector(".pre-loader");

setTimeout(() => {
    preLoader.classList.add("begone");
    const body1= document.querySelector("body").style.overflowX= "hidden";
    const body= document.querySelector("body").style.overflowY= "scroll";
}, 2500)