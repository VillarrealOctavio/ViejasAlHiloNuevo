// arrays----------------------------------------------------------------
let enElCarrito = [];

// Variables-------------------------------------------------------------
let precioFinalCompra = 0;


// CONTENEDORES----------------------------------------------------------------
const contenedorProductos = document.getElementById("contenedorProductos");
const carritoModal = document.querySelector("#cuerpoModal");
const totalPrice = document.querySelector("#precioTotal");

// CONTENEDORES PARA EVENTOS----------------------------------------------------------------
const btn = document.getElementsByClassName(`boton`)
const btnMates = document.querySelector(`#botonMates`)
const btnEstcuhes = document.querySelector(`#botonEstuches`)
const btnLatas = document.querySelector(`#botonLatas`)
const btnBolsos = document.querySelector(`#botonBolsos`)
const btnFinalizar = document.querySelector(`#botonFinalizar`)
/*const filtradoBolsos = document.querySelector("#filtrarBolsos");
const filtradoEstuches = document.querySelector("#filtrarEstuches");
const filtradoLatas = document.querySelector("#filtrarLatas");
const filtradoMates = document.querySelector("#filtrarMates");
const filtrame = document.getElementsByClassName("filtros")*/

// FUNCIONES
function quitarIcono(){
  const div = document.createElement("div")
  div.id=`cargando`
  div.innerHTML = `
        <div class="alert alert-success" role="alert">
          Aguarde, por favor. Cargando productos...
        </div>
      `
  contenedorProductos.appendChild(div);
  const carga = document.querySelector(`#cargando`)
  setTimeout(()=>{
      carga.remove();
  },2000)
}

function showProduct(array){
  setTimeout(()=>{
      mostrarProductos(array)
  }, 2000)
}

// EVENTOS----------------------------------------------------------------
// Este evento es para determinar qué etiqueta se presiona para así mostrar los productos.
for (const boton of btn) {
    boton.addEventListener("click", () => {
      switch (boton.id) {
        case "botonMates":
          contenedorProductos.innerHTML="";
          quitarIcono();
          showProduct(stockMates)
          break;
        case "botonBolsos":
          contenedorProductos.innerHTML="";
          quitarIcono();
          showProduct(stockBolsos)
          break;
        case "botonEstuches":
          contenedorProductos.innerHTML="";
          quitarIcono();
          showProduct(stockEstuches)
          break;
        case "botonLatas":
          contenedorProductos.innerHTML="";
          quitarIcono();
          showProduct(stockLatas)
          break;  
        default:
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          break;
      }
    });
  }


// Este evento es para poder realizar filtros a cada uno de los stocks de productos.
 /*for(const filtro of filtrame){
     filtro.addEventListener(`change`, ()=>{
         switch (filtro.id) {
            case "filtrarEstuches":
                (filtradoEstuches.value=="all")?
                mostrarProductos(stockEstuches):mostrarProductos(stockEstuches.filter(el=>el.clase==filtradoEstuches.value)) 
            break;
            case "filtrarMates":
                (filtradoMates.value=="all")?
                mostrarProductos(stockMates):mostrarProductos(stockMates.filter(el=>el.clase==filtradoMates.value))
            break;
            case "filtrarLatas":
                (filtradoLatas.value=="all")?
                mostrarProductos(stockLatas):mostrarProductos(stockLatas.filter(el=>el.clase==filtradoLatas.value))
            break;
            case "filtrarBolsos":
                (filtradoBolsos.value=="all")?
                mostrarProductos(stockBolsos):mostrarProductos(stockBolsos.filter(el=>el.clase==filtradoBolsos.value))
            break;
            default:
                    Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                    })
            break;
         }
     })
 }*/


// FUNCIONES----------------------------------------------------------------
// Para bolsos
function mostrarProductos(array) {
  contenedorProductos.innerHTML = "";
  array.forEach((el) => {
    const { img, id, tipo, precio } = el;
    const div = document.createElement("div");
    div.className = `col-md-3`
    div.innerHTML += `
                <div class="card m-1" style="width: 12rem;">
                    <img src="${img}" class="card-img-top" alt="imagen">
                    <div class="card-body">
                    <h5 class="card-title">${tipo}</h5>
                    <p class="card-text">Viejas al Hilo--$${precio}</p>
                    <a href="#" class="btn btnGris" id="buyBolso${id}">Agregar al carrito de compras</a>
                    </div>
                </div>
        `;
    contenedorProductos.appendChild(div);

    let btnAgregarAlCarrito = document.querySelector(`#buyBolso${el.id}`);
  

    btnAgregarAlCarrito.addEventListener(`click`, () => {
      console.log(el.id);
      Swal.fire({
        icon: "success",
        title: "Genial",
        text: "Tu compra fue agregada al carrito!",
        footer: '<a href="">Seguir</a>',
      })
      agregarAlCarrito(el.id);
    });
  });
}
// Una vez terminada la parte de los productos, es necesario realizar una función que me relacione cada uno de ellos con el carrito

// function agregarAlCarrito 
function agregarAlCarrito(cod) {
  let productoRepetido = enElCarrito.find((el) => el.id == cod);
  if (productoRepetido) {
    console.log("El producto está repetido en tu carrito");
    productoRepetido.cantidad = productoRepetido.cantidad + 1;
    document.querySelector(
      `#cantidad${productoRepetido.id}`
    ).innerHTML = `<p id="cantidad${productoRepetido.id}">Cantidad: ${productoRepetido.cantidad}</p>`;
    actualizarCarritoDeCompras();
  } else {
    let agregarProducto = verificarArray(cod);
    enElCarrito = [...enElCarrito, agregarProducto];
    actualizarCarritoDeCompras();
    mostrarElCarrito(agregarProducto);
    localStorage.setItem(`carritoDeCompras`, JSON.stringify(enElCarrito));
  }
}

function verificarArray(id) {
  let agregarElProducto;

  if (stockBolsos.find((el) => el.id == id)) {
    agregarElProducto = stockBolsos.find((el) => el.id == id);
  } else if (stockEstuches.find((el) => el.id == id)) {
    agregarElProducto = stockEstuches.find((el) => el.id == id);
  } else if (stockLatas.find((el) => el.id == id)) {
    agregarElProducto = stockLatas.find((el) => el.id == id);
  } else {
    agregarElProducto = stockMates.find((el) => el.id == id);
  }
  return agregarElProducto;
}

function mostrarElCarrito(product) {
  const { tipo, cantidad, id, precio } = product;
  let div = document.createElement("div");
  div.className = `d-flex justify-content-around`;
  div.innerHTML = `
            <p>${tipo}</p>
            <p>Precio: $${precio}</p>
            <p id="cantidad${id}">Cantidad: ${cantidad}</p>
            <button id="eliminar${id}">Eliminar</button>
    `;
  carritoModal.appendChild(div);
  const btnEliminar = document.querySelector(`#eliminar${id}`);
  btnEliminar.addEventListener(`click`, () => {
    Swal.fire({
      title: "¿Está seguro?",
      text: "Usted va a eliminar un producto del carrito!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, sácalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Hecho!", "Tu producto ha sido eliminado.", "success");
      }
    });
    btnEliminar.parentElement.remove();
    enElCarrito = enElCarrito.filter((el) => el.id != product.id);
    actualizarCarritoDeCompras();
    localStorage.setItem(`carritoDeCompras`, JSON.stringify(enElCarrito));
  });
}

// Función para poder actualizar el carrito cuando sea necesario
function actualizarCarritoDeCompras() {
  totalPrice.innerText = enElCarrito.reduce(
    (acc, el) => acc + (el.cantidad * el.precio),
    0
  );
}
// Función para recuperar info guardada en el storage
function recuperarData() {
  enElCarrito = JSON.parse(localStorage.getItem("carritoDeCompras")) || [];

  enElCarrito.forEach((el) => {
    mostrarElCarrito(el);
    enElCarrito.push(el);
    actualizarCarritoDeCompras();
  });
}
recuperarData();

/*function totalCarrito (){
  precioFinalCompra = enElCarrito.reduce((acc, el) => acc + (el.cantidad * el.precio),0)
}*/

// Evento para finalizar compra
btnFinalizar.addEventListener(`click`, ()=>{
  if(enElCarrito == 0){
    Swal.fire({
      icon: 'error',
      title: 'Opps...',
      text: 'Tu carrito está vacio!',
      footer: '<a href="">Volver</a>'
    })
  }else{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: "¿Está seguro?",
      text: `Precio final: $${precioFinalCompra = enElCarrito.reduce((acc, el) => acc + (el.cantidad * el.precio),0)}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, comprar',
      cancelButtonText: 'No, continuar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Acción realizada!',
          'Gracias por su compra.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Ouch',
          'Sigue buscando nuevos productos en nuestra página',
          'error'
        )
      }
    })
  }
})
























