const peli = {
  titulo: "Jurassic Park",
  sinopsis:
    "Un multimillonario construye un parque temático con dinosaurios clonados, pero todo sale mal cuando los dinosaurios escapan y aterrorizan a los visitantes.",
  añoEstreno: 1993,
  director: "Steven Spielberg",
  duracionMinutos: 127,
  calificacionIMDb: 8.1,
};

const propiedadSeleccionada = process.argv[2];
const datoAMostrar = peli[propiedadSeleccionada];
console.log(datoAMostrar);
