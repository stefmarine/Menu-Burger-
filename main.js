var burger = document.querySelector('.burger');
var nav = document.querySelector('nav');

burger.addEventListener ('click', function (event){
  nav.classList.toggle("visible");
});
