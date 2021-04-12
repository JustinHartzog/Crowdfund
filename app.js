const navToggle = document.querySelector('.nav__toggle');
var bodyHight = document.querySelector('body').clientHeight;
const overlay = document.querySelector('.overlay')
const pledge = document.querySelector('.pledge-container')
const exit = document.getElementById('exit');
const gotIt = document.getElementById('gotIt');
const select = document.querySelectorAll('#select');
const btn = document.querySelectorAll('#continue');
const thanks = document.querySelector(".thanks");


overlay.style.height = bodyHight + "px";

/*
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});
*/

exit.addEventListener('click', () => {
  pledge.style.display = "none";
  overlay.style.display = "none";
});

gotIt.addEventListener('click', () => {
  thanks.style.display = "none";
  overlay.style.display = "none";
});

for (let i = 0; i < select.length; i++) {
  select[i].addEventListener('click', () => {
    pledge.style.display = "block";
    overlay.style.display = "block";
  });
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    pledge.style.display = "none";
    thanks.style.display = "block";
  });
}




