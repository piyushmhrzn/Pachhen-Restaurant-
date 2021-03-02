const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-list');
const bar1 = document.querySelector('.line.top');
const bar2 = document.querySelector('.line.middle');
const bar3 = document.querySelector('.line.bottom');
// const links = document.querySelector('.list-group li');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    bar1.classList.toggle("active1");
    bar2.classList.toggle("active2");
    bar3.classList.toggle("active3");
    hamburger.classList.toggle("burgerBG");
});