// 1. Seleccionar template y root

const root = document.querySelector('.root');
const template = document.querySelector('#template').content;

const fragment = document.createDocumentFragment();

// 2. Manipular el contenido.

template.querySelector('.card-img').setAttribute('src', '');
template.querySelector('.card-text').textContent = 'Que pros';

// 3. Clonar el template

const cloneTemplete = document.importNode(template, true);

// 4. Incertar en el DOM
// 4.1 clone > fragment > root

fragment.append(cloneTemplete);
root.append(fragment);

