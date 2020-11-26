const hamburguer = document.querySelector('.hamburguer');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const pageName = document.querySelector('.page-name');

hamburguer.addEventListener("click",()=>{
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
    
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    pageName.classList.add('hide');
  } else {
    pageName.classList.remove('hide');
  }
}