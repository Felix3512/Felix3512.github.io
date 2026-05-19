// console.log ("page loaded")

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function() {
  navLinks.classList.toggle("open");
});


const colors = ["#f9c74f", "#90be6d", "#43aa8b", "#577590", "#f94144", "#f3722c"];

var allText = document.querySelectorAll("p, .nav-title, nav a")
var nav = document.querySelector("nav");
var main = document.querySelector("main");
var hero = document.querySelector(".hero");
var footer = document.querySelector("footer");

var currentMode = "light"

function changeColor() {

  // const random = Math.floor(Math.random() * colors.length);
  // document.body.style.backgroundColor = colors[random];
  // console.log("button pressed")
  
  if(currentMode == "light") {

    allText.forEach((text) => {
      text.style.color = "var(--text-dark)"
    })

    nav.style.backgroundColor = "var(--bg-nav-dark)"
    main.style.backgroundColor = "var(--bg-main-dark)"
    footer.style.backgroundColor = "var(--bg-footer-dark)"
    hero.style.backgroundColor = "var(--bg-hero-dark)"
    
    currentMode = "dark"
    console.log("dark activated")

  }else {

    allText.forEach((text) => {
      text.style.color = "var(--text-light)"
    })

    nav.style.backgroundColor = "var(--bg-nav-light)"
    main.style.backgroundColor = "var(--bg-main-light)"
    footer.style.backgroundColor = "var(--bg-footer-light)"
    hero.style.backgroundColor = "var(--bg-nav-light)"
    
    currentMode = "light"

    
  }

}