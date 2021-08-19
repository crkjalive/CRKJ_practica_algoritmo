'use strict'

const links = document.querySelector('#ul');
links.className = 'display_show';

const menu_imagen = document.querySelector('.menu_img');
menu_imagen.addEventListener('click', () => {
 if(links.className == 'display_show'){
  links.className = 'display_none';
  menu_imagen.style.rotate = '90deg';
  menu_imagen.style.transition = '200ms ease-out';
 }else{
  links.className = 'display_show';
  menu_imagen.style.rotate = '0deg';
 }
})


















let js="textContent createElement value appendChild append innerHTML style className getElementsByClassName getElementsByTagName querySelectorAll querySelector document.write backgroundColor padding textAlign border color fontSize textTransform createTextNode window location open url href innerHeight innerWidth screen height width click blur change focus mouseover mouseout onclick keydown keypress keyup String.fromCharCode(event.keyCode) setInterval setTimeout clearInterval"




