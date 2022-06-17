/* ASINCRONISMO */

/* PETICIONES HTTP => GET, POST & DELETE */

/*
    Peticion => mandado
    Ej. Código => Desayuno
*/

const getData =  async (url) => {
    try {

// 1. Obtener datos > fetch > async / await

        const respuesta = await fetch( url ); // forma cool

// 2. Resolver promesa (await) > json().

        const datos = await respuesta.json(); // JSON.parse()

// 3. Manipular datos.
        return datos;

    } catch (error) {

        console.log(error);
    }

}
 
export default getData;