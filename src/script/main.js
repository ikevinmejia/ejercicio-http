// El nombre de las funciones hacen referencia a lo que se ejecuta
import getData from "./helpers/getData.js";
import showContent from "./helpers/show-content.js";
import { getUrl } from "./url.js";

const root = document.querySelector('.root');

// const objeto = {
//     nombre : "Pikachu",
//     pokedex : 25
// }

// const numero = 40;

// localStorage.setItem('EjemploValor', numero);

// localStorage.setItem('EjemploObjeto', objeto)

// localStorage.setItem('JsonStringify', JSON.stringify(objeto));

// const ejemplo = JSON.parse(localStorage.getItem('JsonStringify')) ;

// console.warn(ejemplo);

const data =  await getData(getUrl);

console.log(data);
/*  Desestructuración */

// const {nombre, imagen} = data[3];

// console.warn(nombre, imagen);

// 1. contenedor
// 2. imagen
// 3. texto

showContent(root, data);

