/*
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
*/
if (localStorage.visitas === undefined) {
  localStorage.setItem('visitas', 1);
}else{
  localStorage.setItem('visitas', parseInt(localStorage.visitas)+1);
}
