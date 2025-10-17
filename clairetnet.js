function toggleMenu () {  
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    
    burger.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    });    
    // bonus
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', (e) => {    
        navbar.classList.toggle('show-nav');
      }); 
    })
     
  }
  toggleMenu();

document.addEventListener('DOMContentLoaded', function() {
  const home = document.getElementById('home');
  const wiper = document.querySelector('.wiper');
  if (home && wiper) {
    wiper.addEventListener('animationend', function() {
      home.classList.add('clean');
    });
  }
});