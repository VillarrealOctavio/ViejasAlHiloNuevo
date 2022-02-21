// arrays
let enElCarrito = [];


// CONTENEDORES
const matesContainer = document.querySelector(".contenedorMates")
const estuchesContainer = document.querySelector(".contenedorEstuches")
const latasContainer = document.querySelector(".contenedorLatas")
const bolsosContainer = document.querySelector(".contenedorBolsos")
const carritoModal = document.querySelector(".modalCarrito")
const totalPrice = document.querySelector("#precioTotal")





// CONTENEDORES PARA EVENTOS
const btnMates = document.querySelector(".botonMates")
const btnEstuches = document.querySelector(".botonEstuches")
const btnLatas = document.querySelector(".botonLatas")
const btnBolsos = document.querySelector(".botonBolsos")
const filtradoBolsos = document.querySelector("#filtrarBolsos")
const filtradoEstuches = document.querySelector("#filtrarEstuches")
const filtradoLatas = document.querySelector("#filtrarLatas")
const filtradoMates = document.querySelector("#filtrarMates")





// EVENTOS
// Para bolsos
btnBolsos.addEventListener(`click`, ()=>{
    matesContainer.innerHTML=""
    estuchesContainer.innerHTML=""
    latasContainer.innerHTML=""
    mostrarBolsos(stockBolsos)
})
filtradoBolsos.addEventListener(`change`, ()=>{
    if(filtradoBolsos.value=="all"){
        mostrarBolsos(stockBolsos)
    }else{
        mostrarBolsos(stockBolsos.filter(el=>el.clase==filtradoBolsos.value))
    }
})
// Para estuches
btnEstuches.addEventListener(`click`,()=>{
    matesContainer.innerHTML=""
    bolsosContainer.innerHTML=""
    latasContainer.innerHTML=""
    mostrarEstuches(stockEstuches)
})
filtradoEstuches.addEventListener(`change`, ()=>{
    if(filtradoEstuches.value=="all"){
        mostrarEstuches(stockEstuches)
    }else{
        mostrarEstuches(stockEstuches.filter(el=>el.clase==filtradoEstuches.value))
    }
})
// Para latas
btnLatas.addEventListener("click", ()=>{
    matesContainer.innerHTML=""
    bolsosContainer.innerHTML=""
    estuchesContainer.innerHTML=""
    mostrarLatas(stockLatas)
})
filtradoLatas.addEventListener(`change`, ()=>{
    if(filtradoLatas.value=="all"){
        mostrarLatas(stockLatas)
    }else{
        mostrarLatas(stockLatas.filter(el=>el.clase==filtradoLatas.value))
    }
})
// Para mates
btnMates.addEventListener(`click`, ()=>{
    latasContainer.innerHTML=""
    bolsosContainer.innerHTML=""
    estuchesContainer.innerHTML=""
    mostrarMates(stockMates)
})
filtradoMates.addEventListener(`change`, ()=>{
    if(filtradoMates.value=="all"){
        mostrarMates(stockMates);
    }else{
        mostrarMates(stockMates.filter(el=>el.clase==filtradoMates.value))
    }
})







// FUNCIONES
// Para bolsos
function mostrarBolsos (array) {
    bolsosContainer.innerHTML=""
    array.forEach(el => {
        const div = document.createElement("div")
        div.innerHTML+=`
                <div class="card" style="width: 18rem;">
                    <img src="${el.img}" class="card-img-top" alt="imagen">
                    <div class="card-body">
                    <h5 class="card-title">${el.tipo}</h5>
                    <p class="card-text">Viejas al Hilo</p>
                    <a href="#" class="btn btn-primary" id="buyBolso${el.id}">Agregar al carrito de compras</a>
                    </div>
                </div>
        `
        bolsosContainer.appendChild(div)

        let btnAgregarAlCarrito = document.querySelector(`#buyBolso${el.id}`)
        console.log(btnAgregarAlCarrito)

        btnAgregarAlCarrito.addEventListener(`click`, ()=>{
            console.log(el.id)
        agregarAlCarritoBolsos(el.id)
        })
    });
}
// Para estuches y bolsas
function mostrarEstuches (array) {
    estuchesContainer.innerHTML=""
    array.forEach(el => {
        const div = document.createElement("div")
        div.innerHTML+=`
                <div class="card" style="width: 18rem;">
                    <img src="${el.img}" class="card-img-top" alt="imagen">
                    <div class="card-body">
                    <h5 class="card-title">${el.tipo}</h5>
                    <p class="card-text">Viejas al Hilo</p>
                    <a href="#" class="btn btn-primary" id="buyEstuche${el.id}">Agregar al carrito de compras</a>
                    </div>
                </div>
        `
        estuchesContainer.appendChild(div)
        let btnAgregarAlCarrito = document.querySelector(`#buyEstuche${el.id}`)
        console.log(btnAgregarAlCarrito)

        btnAgregarAlCarrito.addEventListener(`click`, ()=>{
            console.log(el.id)
            agregarAlCarritoEstuches(el.id)
        })
    });
}
// Para latas 
function mostrarLatas (array) {
    latasContainer.innerHTML=""
    array.forEach(el => {
        const div = document.createElement("div")
        div.innerHTML+=`
                <div class="card" style="width: 18rem;">
                    <img src="${el.img}" class="card-img-top" alt="imagen">
                    <div class="card-body">
                    <h5 class="card-title">${el.tipo}</h5>
                    <p class="card-text">Viejas al Hilo</p>
                    <a href="#" class="btn btn-primary" id="buyLata${el.id}">Agregar al carrito de compras</a>
                    </div>
                </div>
        `
        latasContainer.appendChild(div)
        let btnAgregarAlCarrito = document.querySelector(`#buyLata${el.id}`)
        console.log(btnAgregarAlCarrito)
        btnAgregarAlCarrito.addEventListener(`click`, ()=>{
            console.log(el.id)
            agregarAlCarritoLatas(el.id);
        })
    });
}
// Para mates
function mostrarMates (array) {
    matesContainer.innerHTML=""
    array.forEach(el => {
        const div = document.createElement("div")
        div.innerHTML+=`
                <div class="card" style="width: 18rem;">
                    <img src="${el.img}" class="card-img-top" alt="imagen">
                    <div class="card-body">
                    <h5 class="card-title">${el.tipo}</h5>
                    <p class="card-text">Viejas al Hilo</p>
                    <a href="#" class="btn btn-primary" id="buyMate${el.id}">Agregar al carrito de compras</a>
                    </div>
                </div>
        `
        matesContainer.appendChild(div)
        let btnAgregarAlCarrito = document.querySelector(`#buyMate${el.id}`);
        console.log(btnAgregarAlCarrito)
        btnAgregarAlCarrito.addEventListener(`click`, ()=>{
            console.log(el.id);
            agregarAlCarritoMates(el.id);
        })
    });
}
// Una vez terminada la parte de los productos, es necesario realizar una función que me relacione cada uno de ellos con el carrito

// function agregarAlCarrito para Bolsos
function agregarAlCarritoBolsos (id){
    let productoRepetido = enElCarrito.find(el=>el.id==id);
    if(productoRepetido){
        console.log("El producto está repetido en tu carrito")
        productoRepetido.cantidad = productoRepetido.cantidad +=1
        document.querySelector(`#cantidad${productoRepetido.id}`).innerHTML= `<p id="cantidad${productoRepetido.id}">Cantidad: ${productoRepetido.cantidad}</p>`
        actualizarCarritoDeCompras()
    }else{
    let agregarElProducto = stockBolsos.find(el=>el.id==id)
    console.log(agregarElProducto)
    enElCarrito.push(agregarElProducto)
    actualizarCarritoDeCompras();

    let div = document.createElement("div")
    div.className=`d-flex justify-content-around`
    div.innerHTML=`
            <p>${agregarElProducto.tipo}</p>
            <p>Precio: $${agregarElProducto.precio}</p>
            <p id="cantidad${agregarElProducto.id}">Cantidad: ${agregarElProducto.cantidad}</p>
            <button id="eliminar${agregarElProducto.id}">Eliminar</button>
    `
    carritoModal.appendChild(div)
    const btnEliminar = document.querySelector(`#eliminar${agregarElProducto.id}`)
    btnEliminar.addEventListener(`click`, ()=>{
        console.log(agregarElProducto.id)
        btnEliminar.parentElement.remove();
        enElCarrito = enElCarrito.filter(el=>el.id != agregarElProducto.id)
    actualizarCarritoDeCompras();
    localStorage.setItem(`carritoDeCompras`, JSON.stringify(enElCarrito));
})    
    }
    localStorage.setItem(`carritoDeCompras`, JSON.stringify(enElCarrito));
}




// function agregarAlCarrito para bolsas y estuches
function agregarAlCarritoEstuches (id){
    let productoRepetido = enElCarrito.find(el=>el.id==id);
    if(productoRepetido){
        console.log("El producto está repetido en tu carrito")
        productoRepetido.cantidad = productoRepetido.cantidad += 1
        document.querySelector(`#cantidad${productoRepetido.id}`).innerHTML= `<p id="cantidad${productoRepetido.id}">Cantidad: ${productoRepetido.cantidad}</p>`
        actualizarCarritoDeCompras()
    }else{
    let agregarElProducto = stockEstuches.find(el=>el.id==id)
    console.log(agregarElProducto)
    enElCarrito.push(agregarElProducto)
    actualizarCarritoDeCompras();

    let div = document.createElement("div")
    div.className=`d-flex justify-content-around`
    div.innerHTML=`
            <p>${agregarElProducto.tipo}</p>
            <p>Precio: $${agregarElProducto.precio}</p>
            <p id="cantidad${agregarElProducto.id}">Cantidad: ${agregarElProducto.cantidad}</p>
            <button id="eliminar${agregarElProducto.id}">Eliminar</button>
    `
    carritoModal.appendChild(div)
    const btnEliminar = document.querySelector(`#eliminar${agregarElProducto.id}`)
    btnEliminar.addEventListener(`click`, ()=>{
        console.log(agregarElProducto.id)
        btnEliminar.parentElement.remove();
        enElCarrito = enElCarrito.filter(el=>el.id != agregarElProducto.id)
    actualizarCarritoDeCompras();
    localStorage.setItem(`carritoDeCompras`, JSON.stringify(enElCarrito));
})    
    }
    localStorage.setItem(`carritoDeCompras`, JSON.stringify(enElCarrito));
} 



// function agregarAlCarrito para latas
function agregarAlCarritoLatas (id){
    let productoRepetido = enElCarrito.find(el=>el.id==id);
    if(productoRepetido){
        console.log("El producto está repetido en tu carrito")
        productoRepetido.cantidad = productoRepetido.cantidad += 1
        document.querySelector(`#cantidad${productoRepetido.id}`).innerHTML= `<p id="cantidad${productoRepetido.id}">Cantidad: ${productoRepetido.cantidad}</p>`
        actualizarCarritoDeCompras()
    }else{
    let agregarElProducto = stockLatas.find(el=>el.id==id)
    console.log(agregarElProducto)
    enElCarrito.push(agregarElProducto)
    actualizarCarritoDeCompras();

    let div = document.createElement("div")
    div.className=`d-flex justify-content-around`
    div.innerHTML=`
            <p>${agregarElProducto.tipo}</p>
            <p>Precio: $${agregarElProducto.precio}</p>
            <p id="cantidad${agregarElProducto.id}">Cantidad: ${agregarElProducto.cantidad}</p>
            <button id="eliminar${agregarElProducto.id}">Eliminar</button>
    `
    carritoModal.appendChild(div)
    const btnEliminar = document.querySelector(`#eliminar${agregarElProducto.id}`)
    btnEliminar.addEventListener(`click`, ()=>{
        console.log(agregarElProducto.id)
        btnEliminar.parentElement.remove();
        enElCarrito = enElCarrito.filter(el=>el.id != agregarElProducto.id)
    actualizarCarritoDeCompras();
    localStorage.setItem(`carritoDeCompras`, JSON.stringify(enElCarrito));
})    
    }
    localStorage.setItem(`carritoDeCompras`, JSON.stringify(enElCarrito));
}

// function agregarAlCarrito para mates
function agregarAlCarritoMates (id){
    let productoRepetido = enElCarrito.find(el=>el.id==id);
    if(productoRepetido){
        console.log("El producto está repetido en tu carrito")
        productoRepetido.cantidad = productoRepetido.cantidad += 1
        document.querySelector(`#cantidad${productoRepetido.id}`).innerHTML= `<p id="cantidad${productoRepetido.id}">Cantidad: ${productoRepetido.cantidad}</p>`
        actualizarCarritoDeCompras()
    }else{
    let agregarElProducto = stockMates.find(el=>el.id==id)
    console.log(agregarElProducto)
    enElCarrito.push(agregarElProducto)
    actualizarCarritoDeCompras();

    let div = document.createElement("div")
    div.className=`d-flex justify-content-around`
    div.innerHTML=`
            <p>${agregarElProducto.tipo}</p>
            <p>Precio: $${agregarElProducto.precio}</p>
            <p id="cantidad${agregarElProducto.id}">Cantidad: ${agregarElProducto.cantidad}</p>
            <button id="eliminar${agregarElProducto.id}">Eliminar</button>
    `
    carritoModal.appendChild(div)
    const btnEliminar = document.querySelector(`#eliminar${agregarElProducto.id}`)
    btnEliminar.addEventListener(`click`, ()=>{
        console.log(agregarElProducto.id)
        btnEliminar.parentElement.remove();
        enElCarrito = enElCarrito.filter(el=>el.id != agregarElProducto.id)
    actualizarCarritoDeCompras();
    localStorage.setItem(`carritoDeCompras`, JSON.stringify(enElCarrito));
})    
    }
    localStorage.setItem(`carritoDeCompras`, JSON.stringify(enElCarrito));
}







// Función para poder actualizar el carrito cuando sea necesario
function actualizarCarritoDeCompras (){
    totalPrice.innerText=enElCarrito.reduce((acc,el)=>acc+(el.cantidad*el.precio), 0)
}


// Función para recuperar info guardada en el storage
function recuperarData (){
    // let recuperarLs = JSON.parse(localStorage.getItem(`carritoDeCompras`))
    enElCarrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || []
}
    /* if(recuperarLs){
        recuperarLs.forEach(el=>{
            enElCarrito(el.id)
        })
    }
}*/
recuperarData()