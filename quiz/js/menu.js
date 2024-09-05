
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador");

nombre.innerHTML = localStorage.getItem("nombre");
nombreJugador.innerHTML = localStorage.getItem("nombre");

let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

let categoriasJugadas;
const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
if(categoriasJugadasLS){
    categoriasJugadas = categoriasJugadasLS;
}else{
    categoriasJugadas = [];
}
console.log(categoriasJugadas);

function agregarEventListenerOpciones(){
    const categorias = document.querySelectorAll(".categoria");
    categorias.forEach(categoria=>{
        categoria.addEventListener("click", (e)=>{
            console.log(e.currentTarget.id);
            localStorage.setItem("categoria-actual", e.currentTarget.id);
            categoriasJugadas.push(e.currentTarget.id);
            localStorage.setItem("categorias-jugadas", JSON.stringify(categoriasJugadas));
            console.log(categoriasJugadas);
            location.href = "juego.html";
        });
    });

    categorias.forEach(categoria =>{
        if(categoriasJugadas.includes(categoria.id)){
            categoria.classList.add("desabilitada");
            categoria.classList.add("no-events");
        }
    })
}
agregarEventListenerOpciones();