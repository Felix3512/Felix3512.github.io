console.log ("dfdfdf")

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function() {
  navLinks.classList.toggle("open");
});


const colors = ["#f9c74f", "#90be6d", "#43aa8b", "#577590", "#f94144", "#f3722c"];

function changeColor() {
  const random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];}