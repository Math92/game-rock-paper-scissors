function iniciarJuego() {
      alert("¡Te doy la bienvenida al juego! Jugaremos al mejor de tres partidas.");

      let nombre;
      let nombreValido = false;
      const nombreSoloLetras = /^[a-zA-Z]+$/;

      nombre = prompt("Ingresa tu nombre con 4 letras como mínimo y sin números");

      do {
            console.log(nombre);
            if (nombreSoloLetras.test(nombre)) {
                  console.log("El nombre tiene solo letras.");
                  if (nombre.length > 3) {
                        console.log("El nombre es válido.");
                        nombreValido = true;
                  } else {
                        console.log("El nombre tiene 3 caracteres o menos.");
                        nombre = prompt("El nombre ingresado debe contener 4 o más letras.");
                  }
            } else {
                  console.log("El nombre tiene números u otros caracteres especiales.")
                  if (nombre.length > 3) {
                        nombre = prompt("El nombre ingresado debe contener solo letras.");
                  } else {
                        console.log("El nombre tiene 3 caracteres o menos y algunos no son letras.");
                        nombre = prompt("El nombre ingresado debe contener 4 o más letras.");
                  }
            }
      } while (!nombreValido);

      nombre = nombre.toUpperCase();

      alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");

      console.log("----------------------------");
      console.log("El jugador es:");
      console.log(nombre);
      console.log("----------------------------");

      return {
            nombre: nombre,
            puntajeJugador: 0,
            puntajeComputadora: 0
      };
}

const jugador = iniciarJuego();
