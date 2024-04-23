const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

hamburger.addEventListener("click", ()=>{
    navlinks.classList.toggle("navlinks-active");
    hamburger.classList.toggle("cross");
})