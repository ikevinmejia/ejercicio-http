import createContent from "./create-content.js"

const showContent = (contenedor, data) => {

    data.forEach((element) => {
        const {imagen, nombre} = element;

        createContent(contenedor, imagen, nombre);

    });

}

export default showContent;