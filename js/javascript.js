// arrays
let enElCarrito = [];

// CONTENEDORES
const conenedorProductos = document.getElementById("contenedorProductos");
const carritoModal = document.querySelector(".modalCarrito");
const totalPrice = document.querySelector("#precioTotal");

// CONTENEDORES PARA EVENTOS
const btn = document.getElementsByClassName("fontMegrim");
const filtradoBolsos = document.querySelector("#filtrarBolsos");
const filtradoEstuches = document.querySelector("#filtrarEstuches");
const filtradoLatas = document.querySelector("#filtrarLatas");
const filtradoMates = document.querySelector("#filtrarMates");

for (const boton of btn) {
  boton.addEventListener("click", () => {
    switch (boton.id) {
      case "Mates":
        mostrarProductos(stockMates);
        break;
      case "Bolsos":
        mostrarProductos(stockBolsos);
        break;
      case "Estuches":
        mostrarProductos(stockEstuches);
        break;
      case "Latas":
        mostrarProductos(stockLatas);
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

// EVENTOS
// Para bolsos
filtradoBolsos.addEventListener(`change`, () => {
  filtradoBolsos.value == "all"
    ? mostrarProductos(stockBolsos)
    : mostrarProductos(
        stockBolsos.filter((el) => el.clase == filtradoBolsos.value)
      );
});
// // Para estuches
filtradoEstuches.addEventListener(`change`, () => {
  filtradoEstuches.value == "all"
    ? mostrarProductos(stockEstuches)
    : mostrarProductos(
        stockEstuches.filter((el) => el.clase == filtradoEstuches.value)
      );
});
// // Para latas
filtradoLatas.addEventListener(`change`, () => {
  filtradoLatas.value == "all"
    ? mostrarProductos(stockLatas)
    : mostrarProductos(
        stockLatas.filter((el) => el.clase == filtradoLatas.value)
      );
});
// // Para mates
filtradoMates.addEventListener(`change`, () => {
  filtradoMates.value == "all"
    ? mostrarProductos(stockMates)
    : mostrarProductos(
        stockMates.filter((el) => el.clase == filtradoMates.value)
      );
});

// FUNCIONES
// Para bolsos
function mostrarProductos(array) {
  console.log(array);
  conenedorProductos.innerHTML = "";
  array.forEach((el) => {
    const { img, id, tipo } = el;
    const div = document.createElement("div");
    div.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${img}" class="card-img-top" alt="imagen">
                    <div class="card-body">
                    <h5 class="card-title">${tipo}</h5>
                    <p class="card-text">Viejas al Hilo</p>
                    <a href="#" class="btn btn-primary" id="buyBolso${id}">Agregar al carrito de compras</a>
                    </div>
                </div>
        `;
    conenedorProductos.appendChild(div);

    let btnAgregarAlCarrito = document.querySelector(`#buyBolso${el.id}`);
    console.log(btnAgregarAlCarrito);

    btnAgregarAlCarrito.addEventListener(`click`, () => {
      console.log(el.id);
      Swal.fire({
        icon: "success",
        title: "Genial",
        text: "Tu compra fue agregada al carrito!",
        footer: '<a href="">Seguir</a>',
      });
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
    productoRepetido.cantidad = productoRepetido.cantidad += 1;
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

function mostrarElCarrito(agregarProducto) {
  const { tipo, cantidad, id, precio } = agregarProducto;
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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    btnEliminar.parentElement.remove();
    enElCarrito = enElCarrito.filter((el) => el.id != agregarProducto.id);
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

