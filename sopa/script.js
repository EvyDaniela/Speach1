document.addEventListener("DOMContentLoaded", () => {
    const palabras = ["ABORT", "ACCESS", "AUTOMATED", "APPLIANCE", "APPLICATION", "ALGORITHM", "BACKUP", "BANDWIDTH", "BOOTUP", "BINARY", "BIT", "BYTE", "BUG", "COMPATIBLE", "COMPILE", "CODE", "CREATE", "CRASH"];
    const gridSize = 15;
    const tablero = [];
    let palabraSeleccionada = "";
    let seleccion = [];
    let puntaje = 0;
    let tiempoRestante = 320;
    let intervalo;

    // Inicializar el tablero vacío
    function inicializarTablero() {
        for (let i = 0; i < gridSize; i++) {
            tablero[i] = [];
            for (let j = 0; j < gridSize; j++) {
                tablero[i][j] = "";
            }
        }
    }

    // Colocar las palabras en el tablero
    function colocarPalabras() {
        inicializarTablero();
        palabras.forEach(palabra => {
            let colocado = false;
            while (!colocado) {
                const direccion = Math.floor(Math.random() * 3); // 0: Horizontal, 1: Vertical, 2: Diagonal
                const fila = Math.floor(Math.random() * gridSize);
                const columna = Math.floor(Math.random() * gridSize);
                colocado = intentarColocarPalabra(fila, columna, palabra, direccion);
            }
        });

        // Llenar el tablero restante con letras aleatorias
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (tablero[i][j] === "") {
                    tablero[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                }
            }
        }
    }

    // Intentar colocar una palabra en el tablero
    function intentarColocarPalabra(fila, columna, palabra, direccion) {
        if (direccion === 0 && columna + palabra.length <= gridSize) { // Horizontal
            for (let i = 0; i < palabra.length; i++) {
                if (tablero[fila][columna + i] !== "" && tablero[fila][columna + i] !== palabra[i]) {
                    return false;
                }
            }
            for (let i = 0; i < palabra.length; i++) {
                tablero[fila][columna + i] = palabra[i];
            }
            return true;
        } else if (direccion === 1 && fila + palabra.length <= gridSize) { // Vertical
            for (let i = 0; i < palabra.length; i++) {
                if (tablero[fila + i][columna] !== "" && tablero[fila + i][columna] !== palabra[i]) {
                    return false;
                }
            }
            for (let i = 0; i < palabra.length; i++) {
                tablero[fila + i][columna] = palabra[i];
            }
            return true;
        } else if (direccion === 2 && fila + palabra.length <= gridSize && columna + palabra.length <= gridSize) { // Diagonal
            for (let i = 0; i < palabra.length; i++) {
                if (tablero[fila + i][columna + i] !== "" && tablero[fila + i][columna + i] !== palabra[i]) {
                    return false;
                }
            }
            for (let i = 0; i < palabra.length; i++) {
                tablero[fila + i][columna + i] = palabra[i];
            }
            return true;
        }
        return false;
    }

    // Mostrar la sopa de letras en el DOM
    function mostrarTablero() {
        const contenedorSopa = document.getElementById("sopa");
        contenedorSopa.innerHTML = ""; // Limpiar tablero previo

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const div = document.createElement("div");
                div.textContent = tablero[i][j];
                div.dataset.fila = i;
                div.dataset.columna = j;
                contenedorSopa.appendChild(div);
            }
        }

        // Mostrar las palabras en la lista
        const listaPalabras = document.getElementById("palabras-lista");
        listaPalabras.innerHTML = ""; // Limpiar lista previa
        palabras.forEach(palabra => {
            const li = document.createElement("li");
            li.textContent = palabra;
            listaPalabras.appendChild(li);
        });
    }

    // Agregar eventos de selección de palabras
    document.getElementById("sopa").addEventListener("mousedown", (event) => {
        if (event.target.tagName === "DIV") {
            palabraSeleccionada = "";
            seleccion = [];
            seleccionarLetra(event.target);
        }
    });

    document.getElementById("sopa").addEventListener("mouseover", (event) => {
        if (event.target.tagName === "DIV" && palabraSeleccionada.length > 0) {
            seleccionarLetra(event.target);
        }
    });

    document.getElementById("sopa").addEventListener("mouseup", () => {
        validarSeleccion();
    });

    function seleccionarLetra(div) {
        const fila = div.dataset.fila;
        const columna = div.dataset.columna;
        palabraSeleccionada += tablero[fila][columna];
        seleccion.push(div);
        div.classList.add("selected");
    }
    function validarSeleccion() {
        if (palabras.includes(palabraSeleccionada)) {
            seleccion.forEach(div => div.classList.add("found"));
            const palabraLi = Array.from(document.querySelectorAll("#palabras-lista li"))
                .find(li => li.textContent === palabraSeleccionada);
            if (palabraLi) {
                palabraLi.classList.add("found-word");
            }
            puntaje += 10;
            document.getElementById("puntaje").textContent = puntaje; // Mostrar solo el número
            palabraSeleccionada = "";
            seleccion = [];
    
            // Verificar si todas las palabras han sido encontradas
            if (document.querySelectorAll("#palabras-lista li.found-word").length === palabras.length) {
                clearInterval(intervalo);
                finalizarJuego(true); // El jugador ha ganado
            }
        } else {
            seleccion.forEach(div => div.classList.remove("selected"));
            palabraSeleccionada = "";
            seleccion = [];
        }
    }

    function iniciarTemporizador() {
        tiempoRestante = 320;
        intervalo = setInterval(() => {
            if (tiempoRestante <= 0) {
                clearInterval(intervalo);
                finalizarJuego(false);
            } else {
                tiempoRestante--;
                document.getElementById("tiempo").textContent = `${Math.floor(tiempoRestante / 60)}:${(tiempoRestante % 60).toString().padStart(2, '0')}`;
            }
        }, 1000);
    }

    function finalizarJuego(gano) {
        document.getElementById("info").style.display = "none";
        document.getElementById("sopa").style.pointerEvents = "none"; // Deshabilitar la selección de letras
        document.getElementById("mensaje-final").style.display = "block";
        document.getElementById("mensaje-puntaje").textContent = `Your score is ${puntaje}`;

        if (gano) {
            document.getElementById("mensaje-titulo").textContent = "Congratulations!";
            document.getElementById("icono-trophy").style.display = "block";
            document.getElementById("icono-game").style.display = "none";
        } else {
            document.getElementById("mensaje-titulo").textContent = "Time is up! ";
            document.getElementById("icono-trophy").style.display = "none";
            document.getElementById("icono-game").style.display = "block";
        }
    }

    function reiniciarJuego() {
        document.getElementById("info").style.display = "block";
        document.getElementById("mensaje-final").style.display = "none";
        document.getElementById("icono-trophy").style.display = "none";
        document.getElementById("icono-game").style.display = "none";
        document.getElementById("puntaje").textContent = "0";
        document.getElementById("sopa").style.pointerEvents = "auto"; // Habilitar selección de letras
        colocarPalabras();
        mostrarTablero();
        iniciarTemporizador();
    }

    // Evento para el botón de comenzar
    document.getElementById("comenzar").addEventListener("click", () => {
        reiniciarJuego();
        document.getElementById("comenzar").style.display = "none"; // Ocultar botón comenzar
    });

    // Evento para el botón de seguir jugando
    document.getElementById("seguir-jugando").addEventListener("click", () => {
        reiniciarJuego();
    });

    // Evento para el botón de cerrar mensaje
    document.getElementById("cerrar-mensaje").addEventListener("click", () => {
        document.getElementById("info").style.display = "block";
        document.getElementById("mensaje-final").style.display = "none";
        document.getElementById("comenzar").style.display = "block"; // Volver a mostrar botón comenzar
    });
});
