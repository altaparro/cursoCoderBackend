let productos = [];

class Producto {
    constructor(info) {
        this.id = info.id;
        this.nombre = info.nombre;
        this.precio = info.precio;
        this.cantidad = info.cantidad;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    cargarProductosDelLocalStorage();
    mostrarProductosEnFront();
});

function agregar() {
    let idInput = document.getElementById("id").value;
    let nombreInput = document.getElementById("nombre").value;
    let precioInput = document.getElementById("precio").value;
    let cantidadInput = document.getElementById("cantidad").value;

    if (idInput == "" || nombreInput == "" || precioInput == "" || cantidadInput == "") {
        alertaErr();
    } else {
        let nuevoProducto = new Producto({
            id: idInput,
            nombre: nombreInput,
            precio: precioInput,
            cantidad: cantidadInput,
        });

        productos.push(nuevoProducto);

        guardarProductosEnLocalStorage();
        limpiarCampos();
        alertaOk();
        mostrarProductosEnFront();
    }
}

function listarProductos() {
    console.log("Lista de productos:");
    productos.forEach(function (producto) {
        console.log("ID: " + producto.id);
        console.log("Nombre: " + producto.nombre);
        console.log("Precio: " + producto.precio);
        console.log("Cantidad: " + producto.cantidad);
    });
}

function productosEnStock() {
    console.log("Productos en stock:");
    let i = 0;
    while (i < productos.length) {
        if (productos[i].cantidad > 0) {
            console.log("ID: " + productos[i].id);
            console.log("Nombre: " + productos[i].nombre);
            console.log("Precio: " + productos[i].precio);
            console.log("Cantidad: " + productos[i].cantidad);
        }
        i++;
    }
}

function guardarProductosEnLocalStorage() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosDelLocalStorage() {
    const productosLocalStorage = localStorage.getItem("productos");

    if (productosLocalStorage) {
        productos = JSON.parse(productosLocalStorage);
    }
}

function limpiarCampos() {
    document.getElementById("id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
}

function alertaOk() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "El producto se ha agregado con éxito!",
        showConfirmButton: false,
        timer: 1500,
    });
}

function alertaErr() {
    Swal.fire({
        position: "center",
        icon: "error",
        title: "Complete todos los campos",
        showConfirmButton: false,
        timer: 1500,
    });
}

function mostrarProductosEnFront() {
    const productosContainer = document.getElementById("productos-container");
    productosContainer.innerHTML = "";

    productos.forEach(function (producto) {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");

        productoDiv.innerHTML = `
            <p>ID: ${producto.id}</p>
            <p>Nombre: ${producto.nombre}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <button onclick="agregarAlCarrito('${producto.id}')">Agregar al Carrito</button>
        `;

        productosContainer.appendChild(productoDiv);
    });
}

function agregarAlCarrito(id) {
    const productoEncontrado = productos.find(producto => producto.id === id);

    if (productoEncontrado) {
        let carrito = obtenerCarritoDesdeLocalStorage();
        const productoEnCarrito = carrito.find(item => item.id === id && !item.carritoId);

        if (productoEnCarrito) {
            productoEnCarrito.cantidad += 1;
        } else {
            carrito.push({ ...productoEncontrado, cantidad: 1, carritoId: generarCarritoId() });
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));

        console.log("Producto agregado al carrito:", productoEncontrado);
    } else {
        console.log("Producto no encontrado");
    }
}

function obtenerCarritoDesdeLocalStorage() {
    const carritoLocalStorage = localStorage.getItem("carrito");

    return carritoLocalStorage ? JSON.parse(carritoLocalStorage) : [];
}

function generarCarritoId() {
    return Math.random().toString(36).substr(2, 9);
}