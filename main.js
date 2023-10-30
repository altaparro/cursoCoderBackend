let productos = [];

class Producto {
  constructor(info) {
    this.id = info.id;
    this.nombre = info.nombre;
    this.precio = info.precio;
    this.cantidad = info.cantidad;
  }
}

function agregar() {
 
  let idInput = document.getElementById("id").value;
  let nombreInput = document.getElementById("nombre").value;
  let precioInput = document.getElementById("precio").value;
  let cantidadInput = document.getElementById("cantidad").value;
  let nuevoProducto = new Producto({
    id: idInput,
    nombre: nombreInput,
    precio: precioInput,
    cantidad: cantidadInput,
  });

  productos.push(nuevoProducto);

  id.value = "";
  nombre.value = "";
  precio.value = "";
  cantidad.value = "";
 
}

function listarProductos() {
    // Mostrar los productos en la consola
    console.log("Lista de productos:");
    productos.forEach(function (producto) {
        console.log("ID: " + producto.id);
        console.log("Nombre: " + producto.nombre);
        console.log("Precio: " + producto.precio);
        console.log("Cantidad: " + producto.cantidad);
    });
}


function productosEnStock(){
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
