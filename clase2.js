function pedirJugada() {
    let eleccion;
    let eleccionValida = false;

    do {
        eleccion = prompt("Ingrese para jugar: 1(piedra), 2(papel) o 3(tijera)");

        if (eleccion === null) {
            alert("¡Hasta luego!");
            throw new Error("El usuario ha cancelado el juego.");
        }

        eleccion = parseInt(eleccion);
        if (!isNaN(eleccion) && eleccion >= 1 && eleccion <= 3) {
            eleccionValida = true;
        } else {
            alert("Por favor, ingrese una opción válida.");
        }
    } while (!eleccionValida);

    console.log("----------------------------");
    console.log("La eleccion del jugador es:");
    console.log(eleccion);
    console.log("----------------------------");

    return eleccion;
}

function jugadaRandom() {
    return Math.floor(Math.random() * 3) + 1;
}

function compararJugadas() {
    const eleccionJugador = pedirJugada();
    const eleccionComputadora = jugadaRandom();

    let resultadoRonda = "";

    if (eleccionJugador === eleccionComputadora) {
        resultadoRonda = "Esto fue un empate.";
    } else if (
        (eleccionJugador === 1 && eleccionComputadora === 3) ||
        (eleccionJugador === 2 && eleccionComputadora === 1) ||
        (eleccionJugador === 3 && eleccionComputadora === 2)
    ) {
        resultadoRonda = "¡Genial, ganaste!";
    } else {
        resultadoRonda = "Una lástima, perdiste.";
    }

    console.log(resultadoRonda);

    return resultadoRonda;
}

function jugar() {
    let puntajeJugador = 0;
    let puntajeComputadora = 0;
    let rondasJugadas = 0;
    let partidasGanadasJugador = 0;
    let partidasGanadasComputadora = 0;
    let partidasEmpatadas = 0;

    while (rondasJugadas < 3) {
        const resultadoRonda = compararJugadas();

        if (resultadoRonda === "¡Genial, ganaste!") {
            puntajeJugador++;
        } else if (resultadoRonda === "Una lástima, perdiste.") {
            puntajeComputadora++;
        } else {
            partidasEmpatadas++;
        }

        rondasJugadas++;

        console.log(`----------------------------`);
        console.log(`Ronda ${rondasJugadas} - Puntajes:`);
        console.log(`Jugador: ${puntajeJugador} puntos`);
        console.log(`Computadora: ${puntajeComputadora} puntos`);
        console.log(`----------------------------`);
    }

    if (puntajeJugador > puntajeComputadora) {
        partidasGanadasJugador++;
        console.log("¡Felicidades, ganaste la partida!");
    } else if (puntajeJugador < puntajeComputadora) {
        partidasGanadasComputadora++;
        console.log("¡La computadora ha ganado la partida!");
    } else {
        console.log("La partida ha terminado en empate.");
    }

    console.log(`----------------------------`);
    console.log(`Resultados de la partida:`);
    console.log(`Partidas ganadas por el jugador: ${partidasGanadasJugador}`);
    console.log(`Partidas ganadas por la computadora: ${partidasGanadasComputadora}`);
    console.log(`Partidas empatadas: ${partidasEmpatadas}`);
    console.log(`----------------------------`);
}

jugar();
