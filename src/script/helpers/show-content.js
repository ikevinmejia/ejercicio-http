import createContent from "./create-content.js"

const showContent = (contenedor, data) => {

    data.forEach((element) => {
        const {imagen, nombre} = element;

        createContent(contenedor, imagen, nombre);

    });

}

/* let arreglo = ['Caitlyn', 'Jinx', 'Soraka', 'Lux' ]

'Génesis'.forEach(element => {
    console.log(element);
}) */

export default showContent;