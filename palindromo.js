'use strict'
/* como comprobar una palabra si es palindromo, que se lee igual de atras para adelante */

// Palabra a conprobar
let nombre = 'julio';


// separa '' en array
console.log(nombre.split('')); 
// invierte
console.log(nombre.split('').reverse('')); 
// une
console.log(nombre.split('').reverse().join('')); 

// guardamos
let inver = nombre.split('').reverse().join('');

// comparamos
console.log(inver === nombre);


/* funcion palindromo */
const palindromo = texto => {
	let invertir = texto
					.split('')
					.reverse('')
					.join('');

	return (invertir === texto);
}


console.log(palindromo(nombre));