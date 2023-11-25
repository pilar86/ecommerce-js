const retornoCardProducto = (contenido)=> {
    const {img, nombre, precio, id} = contenido
    return `<main id="contenedor-productos">
            </main>  
                    <img src=${img} alt= "">
                    <h5>${nombre}</h5>
                    <p class="precioProducto">Precio:$ ${precio}</p>
                    <button id="agregar${id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                    `
}

const obtenerContenido = (URL)=> {
    let cardsProductos = ""
        fetch(URL)
        .then((response)=> response.json())
        .then((data)=> {
            for (contenido of data) {
                cardsProductos += retornoCardProducto(contenido)
            }
            contenidoDom.innerHTML = cardsProductos
        })
}