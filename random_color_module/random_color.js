import * as fun from './randomColor.js';

const divs = document.querySelectorAll('.random_color');
fun.random_color(divs)


for(let i = 0; i <= divs.length; i++){
	let cooler = fun.color()
	divs[i].style.backgroundColor = cooler;
	divs[i].textContent = cooler;
}





















