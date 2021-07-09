let carrito = {}

class CarritoCompras {
  constructor(titulo,id,precio) {
    this.titulo = titulo;
    this.id = id;
    this.precio = precio;
  }
}
let cantidadArticulo = {
  cantidad:0
}
const buscaArticulo = (id) => {
  if ( carrito.hasOwnProperty(id)) {
    return true;
  } else {
    return false;
  }
}
/*
const nuevoArticulo = (titulo,id,precio) => {
  if(buscaArticulo(id)) {
    carrtio[id] = new carrito(titulo,id,precio)
    cantidadArticulo.cantidad++;
  }else{
    carrtio[id] = new carrito(titulo,id,precio)
    cantidadArticulo.cantidad = 1;

  }
}
*/
const nuevoArticulo = (objeto) => {
  console.log(objeto)
}

const borrarArticulo = id => {
  delete carrito[id];
}

module.exports = {
  carrito,
  nuevoArticulo,
  buscaArticulo,
  borrarArticulo
}