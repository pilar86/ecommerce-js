const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const finalizarCompraButton = document.getElementById('finalizar-compra');
const vaciarCarritoButton = document.getElementById('vaciar-carrito');
const mensajeCarritoVacio = document.getElementById('mensaje-carrito-vacio');
const precioTotalElement = document.getElementById('precioTotal');
const totalCompraElement = document.getElementById('totalCompra');


let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito();
    }

});


finalizarCompraButton.addEventListener('click', () => {
    if (carrito.length === 0) {
        // Si el carrito está vacío, se muestra un mensaje indicando que no hay productos para comprar
        Swal.fire({
            icon: 'warning',
            title: '¡Carrito vacío!',
            text: 'Agrega productos al carrito antes de finalizar la compra.',
        });
    } else {
        // Si hay productos en el carrito, muestra un mensaje de compra exitosa
        Swal.fire({
            icon: 'success',
            title: '¡Compra exitosa!',
            text: 'Gracias por tu compra. ¡Disfruta de tus productos!',
        });

        // Se vacía el carrito después de la compra exitosa
             carrito = [];
            actualizarCarrito();
        }
    });

    const actualizarCarrito = () => {
        contenedorCarrito.innerHTML = "";
    
        if (carrito.length === 0) {
            // Si el carrito está vacío, muestra el mensaje correspondiente
            mensajeCarritoVacio.style.display = 'block';
            finalizarCompraButton.style.display = 'none';
            vaciarCarritoButton.style.display = 'none';
            precioTotalElement.style.display = 'none';      
        } else {
            mensajeCarritoVacio.style.display = 'none';
    
    
            carrito.forEach((prod) => {
                const div = document.createElement('div')
                div.className = ('productoEnCarrito')
                div.innerHTML = `
                    <img src="${prod.img}" alt="${prod.nombre}">                 
                    <p class="texto-carrito">${prod.nombre}</p>
                    <p class="precio">Precio:$${prod.precio}</p>
                    <p class="cantidad">Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
                    <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    
                `;
    
            contenedorCarrito.appendChild(div);
        });

        const totalCompra = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
        totalCompraElement.innerText = totalCompra;
        precioTotalElement.style.display = 'block';
        totalCompraElement.style.display = 'block';
        finalizarCompraButton.style.display = 'block';
        vaciarCarritoButton.style.display = 'block';
    }      
            
        contadorCarrito.innerText = carrito.length;
        localStorage.setItem('carrito', JSON.stringify(carrito));
    
    };

        botonVaciar.addEventListener('click', () => {
        carrito.length = 0
        actualizarCarrito();
        });


        stockProductos.forEach((producto) => {
            const div = document.createElement('div')
            div.classList.add('producto')
            div.innerHTML = `
                    <img src=${producto.img} alt= "">
                    <h5>${producto.nombre}</h5>
                    <p class="precioProducto">Precio:$ ${producto.precio}</p>
                    <div class="center">
                    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                    </div>
                    </button>`;
        
            contenedorProductos.appendChild(div)

            const boton = document.getElementById(`agregar${producto.id}`)

            boton.addEventListener('click', () => {
                agregarAlCarrito(producto.id);
            });

        });


    const agregarAlCarrito = (prodId) => {
        const existe = carrito.some (prod => prod.id === prodId) 
        if (existe){ 
            carrito = carrito.map (prod => { 
                if (prod.id === prodId){
                    prod.cantidad++;
            }
            return prod;
        });
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId);
        carrito.push({ ...item, cantidad: 1 });
    }
    
        actualizarCarrito(); 
    };


    const eliminarDelCarrito = (prodId) => {
        const item = carrito.find((prod) => prod.id === prodId);
        const indice = carrito.indexOf(item); 
        carrito.splice(indice, 1);
        actualizarCarrito();
    };


